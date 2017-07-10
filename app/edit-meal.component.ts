import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedmeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Meal:</label>
        <input [(ngModel)]="childSelectedmeal.meal">
      </div>
      <div>
        <label>Enter  Description:</label>
        <input [(ngModel)]="childSelectedmeal.description">
      </div>
      <div>
        <label>Enter calories:</label>
        <input [(ngModel)]="childSelectedmeal.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditmealComponent {
  @Input() childSelectedmeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
