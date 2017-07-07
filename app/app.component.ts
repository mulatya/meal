import { Component } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
   <h1>My First Angular 2 App</h1>
   <div *ngFor="let currentTask of tasks">
     <h3>{{ currentTask.meal }}</h3>
     <h3>{{ currentTask.description }}</h3>
     <h3>{{ currentTask.calories }}</h3>
     <button (click)="showDetails(currentTask)">Edit</button>
   </div>
   <div *ngIf="selectedTask">
     <h1>Edit Task</h1>
     <div>
       <label>Enter meal:</label>
       <input [(ngModel)]="selectedTask.meal">
     </div>
     <div>
       <label>Enter Task Description:</label>
       <input [(ngModel)]="selectedTask.description">
     </div>
     <div>
       <label>Enter calories:</label>
       <input [(ngModel)]="selectedTask.calories">
       <button (click)="finishedEditing()">Done</button>
     </div>
   </div>
 </div>
 `
})

export class AppComponent {
 public tasks: Task[] = [
     new Task("-Do List app.","fyufvvuivui", 0),
     new Task("vbwbvw ew","Learn Kung Fu.", 1),
     new Task("ewbvbvionvweiovwe","Learn Kung Fu.", 2),
     new Task("iwevvw wvvwi","Learn Kung Fu.", 3)
 ];
 selectedTask: Task = this.tasks[0];
 showDetails(clickedTask: Task) {
   this.selectedTask = clickedTask;
 }
 finishedEditing() {
   this.selectedTask = null;
 }
}
