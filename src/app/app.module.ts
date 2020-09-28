import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';


//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Put this in environments??
const firebaseConfig = {
  apiKey: "AIzaSyDE9QwXVBewJuGxxjm6_sKFC0N8-fAbdKQ",
  authDomain: "myangularwebsite-5e2c5.firebaseapp.com",
  databaseURL: "https://myangularwebsite-5e2c5.firebaseio.com",
  projectId: "myangularwebsite-5e2c5",
  storageBucket: "myangularwebsite-5e2c5.appspot.com",
  messagingSenderId: "840890998658",
  appId: "1:840890998658:web:e09c6826df2ada34e9399b",
  measurementId: "G-V2CYP4CQCF"
};

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
