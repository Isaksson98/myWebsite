import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';


//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MnistDigitsComponent } from './mnist-digits/mnist-digits.component';
import { BooksComponent } from './books/books.component';
import { ImdbSentiementComponent } from './imdb-sentiement/imdb-sentiement.component';
import { CanvasComponent } from './canvas/canvas.component';

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
    ThirdComponent,
    FourthComponent,
    NavbarComponent,
    MnistDigitsComponent,
    BooksComponent,
    ImdbSentiementComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
