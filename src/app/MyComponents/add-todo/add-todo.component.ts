import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todos } from 'src/app/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string
  desc:string
  registerForm!: FormGroup
  submitted= false
  @Output() todoAdd:EventEmitter<todos>=new EventEmitter();
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      titles:['',Validators.required],
      descrip:['',Validators.required]
    })
  }
  onSubmit(){
    this.submitted=true
    if(this.registerForm.invalid){
      return
    }
    else{
      const todo={
        sno:0,
        title:this.title,
        desc:this.desc,
        active:true
      }
      this.todoAdd.emit(todo)
      this.title="";
      this.desc="";
    }
      
  }
}
