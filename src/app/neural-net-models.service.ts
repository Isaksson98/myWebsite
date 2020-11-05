import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database,

@Injectable({
  providedIn: 'root'
})
export class NeuralNetModelsService {

  constructor(private db: AngularFireDatabase) { }


  GetIMDBSentiementModel() {
    return this.db.object('test2');
  }
}
