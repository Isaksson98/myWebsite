import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private db: AngularFirestore) { }

  addBook(data) {

    let year = data._dateRead.getFullYear();
    let month = data._dateRead.getMonth();
    let day = data._dateRead.getDate();

    let _dateRead = {
      year: year,
      month: month,
      day: day
    }
    return this.db.collection('Books').add({
      Title: data._title,
      Author: data._author.toLowerCase(),
      Rating: parseInt(data._rating),
      Subject: data._subject,
      DateAdded: data._dateAdded,
      DateRead: _dateRead,
    });
  }

  getReadBooks() {
    return this.db.collection('Books', ref => ref.orderBy('DateAdded', 'desc')).snapshotChanges()
  }
}
