import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  todos;
  text;
  // constructor(private _todoService: TodoService) { }

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/todos');
  }
  ngOnInit() {
    // this.todos = this._todoService.getTodos();
  }
  addTodo() {
    var newTodo = {
      text: this.text
    };
    this.items.push(newTodo);
  }
  // deleteTodo(todoText){
  //   for(var i=0;i<this.todos.length;i++){
  //     if(this.todos[i].text == todoText){
  //       this.todos.splice(i, 1);
  //     }
  //   }
  // }
  deleteValue(key) {
      this.items.remove(key).then(_ => console.log('deleted!'));
    }
  // var key = items.key;
  // deleteTodo(todo) {
  //   this.items = this.db.list('/todos', { preserveSnapshot: true });
  //   this.items.remove();
  // }
}