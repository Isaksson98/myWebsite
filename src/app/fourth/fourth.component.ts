import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { BooksService } from "../books.service";

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
})
export class FourthComponent {

  myModel = {
    _title: '',
    _author: '',
    _subject: '',
    _rating: '',
    _dateRead: new Date(),
    _dateAdded: new Date()
  };

  constructor(private booksService: BooksService) {}

 

  ngOnInit(): void {}

  onSubmit() {
    alert((typeof (this.myModel._dateAdded)))
    this.booksService.addBook(this.myModel)
      .then(
        res => {}
      )
  }

}
