import { Component, OnInit } from '@angular/core';

import { BooksService } from "../books.service";


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

    items: Array<any>;

    constructor(private booksService: BooksService ) { }

    monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    ngOnInit() {
      this.booksService.getReadBooks().subscribe(res => {
        this.items = res;
      })
    }

  }
