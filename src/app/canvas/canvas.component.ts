import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  

  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;
  @Input() public width = 200;
  @Input() public height = 200;

  private cx: CanvasRenderingContext2D;
  public prediction = '';
  private backCol = 'black';
  private strokeCol = 'white';
  private linWidth = 7;
  private canvasElement: HTMLCanvasElement;
  private model;

  async ngOnInit() {
    this.model = await tf.loadLayersModel('/assets/mnistDigitsModel/model.json');
  }

  public ngAfterViewInit() {
    // get the context
    this.canvasElement = this.canvas.nativeElement;
    this.cx = this.canvasElement.getContext('2d');

    this.canvasElement.width = this.width;
    this.canvasElement.height = this.height;

    this.cx.lineWidth = this.linWidth;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = this.strokeCol;
    this.cx.fillStyle = this.backCol;
    this.cx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);

    // we'll implement this method to start capturing mouse events
    this.captureEvents(this.canvasElement);
  }

  private captureEvents(canvasElement: HTMLCanvasElement) {

    fromEvent(canvasElement, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasElement, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event    
              takeUntil(fromEvent(canvasElement, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasElement, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasElement.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number, y: number },
    currentPos: { x: number, y: number }
  ) {
    // in case the context is not set
    if (!this.cx) { return; }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  /// Clears the canvas and the information on the screen.
  public clear(): void {
    this.cx.clearRect(0, 0, this.cx.canvas.width, this.cx.canvas.height);
    this.prediction = '';
    this.cx.fillStyle = this.backCol;
    this.cx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  public predict() {
    let image = this.getImage(this.canvasElement);
    let predictionsArray = this.model.predict(image) as any;
    predictionsArray.data().then(data => {
      for (let i = 0; i < 10; i++) {
        if (data[i] == 1) {
          this.prediction = i.toString();
        }
      }
    });

    
  }

  private getImage(canvasHtmlElement) {
    this.cx.drawImage(canvasHtmlElement, 0, 0, 28, 28);
    let imageData = this.cx.getImageData(0, 0, 28, 28);
    let img = tf.browser.fromPixels(imageData, 1);
    let imgtmp = img.reshape([1, 28, 28, 1]);
    imgtmp = tf.cast(imgtmp, 'float32');

    return imgtmp;
  }
}
