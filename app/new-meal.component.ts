import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'new-meal',
  template: `
    <h2>New Meal</h2>
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

export class NewmealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(meal: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(meal, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
