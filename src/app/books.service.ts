import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore: AngularFirestore) { }

  addBook(data) {
    return this.firestore.collection('Books').add({
      Title: data.title,
      Author: data.author.toLowerCase(),
      Rating: parseInt(data.rating),
    });
  }

  getReadBooks() {
    return this.firestore.collection("Books").snapshotChanges();
  }
}
