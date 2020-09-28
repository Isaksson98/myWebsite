import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BooksService } from "../books.service";

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  BooksForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
  });

  itm = {
    title: 'pottr',
    author: 'rowling',
    rating: 4
  }

  ngOnInit(): void {}

  onSubmit() {
    alert(this.BooksForm.value)
    this.booksService.addBook(this.BooksForm.value)
      .then(
        res => {}
      )
  }

}
