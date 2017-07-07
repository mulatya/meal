import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter meal:</label>
      <input #newMeal>
    </div>
    <div>
      <label>Enter description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter calories:</label>
      <input #newCalories>
      <button (click)="
        addClicked(newMeal.value, newDescription.value, newCalories.value);
        newMeal.value='';
        newDescription.value='';
        newId.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(meal: string, description: string, calories: number) {
    var newTaskToAdd: Task = new Task(meal, description, calories);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
