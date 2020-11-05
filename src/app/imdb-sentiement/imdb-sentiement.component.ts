import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';

import { NeuralNetModelsService } from "../neural-net-models.service";


@Component({
  selector: 'app-imdb-sentiement',
  templateUrl: './imdb-sentiement.component.html',
  styleUrls: ['./imdb-sentiement.component.css']
})
export class ImdbSentiementComponent implements OnInit {

  constructor(private ModelsService: NeuralNetModelsService ) { }

  text: string = "Great film ";
  model;

  async ngOnInit() {
    this.model = await tf.loadLayersModel('/assets/sentiementModel/sentiementModel.json');
  }


  predict(text) {
    let x = tf.tensor([[1], [2]]);
    let y_hat;  // initialize variables we will be using

    // make model prediction
    y_hat = this.model.predict(x);
    alert(y_hat)
  }
}
