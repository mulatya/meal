import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="isDone">Show high Calories</option>
      <option value="notDone" selected="selected">Show low calories</option>
    </select>
    <div class="task-list " *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
      <h3>{{ currentTask.meal }}</h3>
      <h3>{{ currentTask.description }}</h3>

      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
