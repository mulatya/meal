import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="highCalories">Show high Calories</option>
      <option value="lowCalories" >Show low calories</option>
    </select>
    <div class="meal-list " *ngFor="let currentmeal of childmealList | completeness:selectedCompleteness">
 <div >
      <h3><strong>Food :{{ currentmeal.meal }}</strong></h3>
      </div>
      <div >
      <h5><strong>Details :</strong> {{ currentmeal.description }}</h5>
 </div>
 <div >
      <p><strong>Calories :</strong> {{ currentmeal.calories }}</p>
      <button (click)="editButtonHasBeenClicked(currentmeal)">Edit</button>
      </div>

    </div>

  `
})

export class mealListComponent {
  @Input() childmealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "all";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
