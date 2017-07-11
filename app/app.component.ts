import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class = "header">
   <h1>Meal Tracker</h1>
   </div>


   <meal-list
      [childmealList]="meals"
      (clickSender)="showDetails($event)"
     ></meal-list>
     <hr/>
   <div class = "row">

   <div class="col-md-12">
   <div *ngIf="selectedmeal">
   <div class="col-md-6">

     <h2>Edit meal</h2>
   <div>
       <label>Enter meal:</label>
       <p>
       <input [(ngModel)]="selectedmeal.meal">
   </div>
   <div>
       <label>Enter meal Description:</label>
       <p>
       <input [(ngModel)]="selectedmeal.description">
   </div>
   <div>
       <label>Enter calories:</label>
       <p>
       <input [(ngModel)]="selectedmeal.calories">
       <button (click)="finishedEditing()">Done</button>
   </div>
   </div>
   <div class = "col-md-6">
   <new-meal
       (newMealSender)="addmeal($event)"
   ></new-meal>
   </div>
   </div>
   </div>


 `
})

export class AppComponent {
  public meals: Meal[] = [
    new Meal("Hamburger", "It didnt finish it", 203),
    new Meal("Fries", "They were nice", 647),
    new Meal("Chicken", "It was delicious", 254),
    new Meal("Mantou", "Taste like chinese", 55)
  ];
  selectedmeal: Meal = this.meals[0];
  showDetails(clickedmeal: Meal) {
    this.selectedmeal = clickedmeal;
  }
  finishedEditing() {
    this.selectedmeal = null;
  }
  addmeal(newmealFromChild: Meal) {
    this.meals.push(newmealFromChild);
  }
}
