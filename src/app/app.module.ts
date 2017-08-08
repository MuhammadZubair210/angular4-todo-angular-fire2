import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



export const config = {
  apiKey: "AIzaSyBW40jHk8R-CyM8qISGbImK9MpIhaebmY8",
  authDomain: "loin-17b5d.firebaseapp.com",
  databaseURL: "https://loin-17b5d.firebaseio.com",
  projectId: "loin-17b5d",
  storageBucket: "loin-17b5d.appspot.com",
  messagingSenderId: "1079397105979"
};

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
