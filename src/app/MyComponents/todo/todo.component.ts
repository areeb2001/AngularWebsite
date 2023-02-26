import { Component } from '@angular/core';
import { todos } from 'src/app/todos';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  localItem :string | null
  todos :todos[];
  constructor(){
    this.localItem=localStorage.getItem("todos");
    if(this.localItem===null){

      this.todos=[]
     }
    else{
       this.todos=JSON.parse(this.localItem)
    }

  }
  deleteTodo(todo:todos){
    const index= this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo:todos){
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  toggleTodo(todo:todos){
    const index= this.todos.indexOf(todo)
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
