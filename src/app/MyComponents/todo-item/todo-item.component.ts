
import { Component, Input, Output,EventEmitter } from '@angular/core';

import { todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo:todos 
  @Input() i:number
  @Output() todoDelete:EventEmitter<todos>=new EventEmitter();
  @Output() todoCheckbox:EventEmitter<todos>=new EventEmitter();
  onClick(todo:todos){
    this.todoDelete.emit(todo);
  }
  onCheckBoxClick(todo:todos){
this.todoCheckbox.emit(todo)
  }
}
