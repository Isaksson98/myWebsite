import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { MnistDigitsComponent } from './mnist-digits/mnist-digits.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'navbar-component', component: NavbarComponent },
  { path: 'third-component', component: ThirdComponent },
  { path: 'fourth-component', component: FourthComponent },
  { path: 'mnist-digits-component', component: MnistDigitsComponent },
  { path: 'books-component', component: BooksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
