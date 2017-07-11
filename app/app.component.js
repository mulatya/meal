"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.meals = [
            new meal_model_1.Meal("Hamburger", "It didnt finish it", 203),
            new meal_model_1.Meal("Fries", "They were nice", 647),
            new meal_model_1.Meal("Chicken", "It was delicious", 254),
            new meal_model_1.Meal("Mantou", "Taste like chinese", 55)
        ];
        this.selectedmeal = this.meals[0];
    }
    AppComponent.prototype.showDetails = function (clickedmeal) {
        this.selectedmeal = clickedmeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedmeal = null;
    };
    AppComponent.prototype.addmeal = function (newmealFromChild) {
        this.meals.push(newmealFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n  <div class = \"header\">\n   <h1>Meal Tracker</h1>\n   </div>\n\n\n   <meal-list\n      [childmealList]=\"meals\"\n      (clickSender)=\"showDetails($event)\"\n     ></meal-list>\n     <hr/>\n   <div class = \"row\">\n\n   <div class=\"col-md-12\">\n   <div *ngIf=\"selectedmeal\">\n   <div class=\"col-md-6\">\n\n     <h2>Edit meal</h2>\n   <div>\n       <label>Enter meal:</label>\n       <p>\n       <input [(ngModel)]=\"selectedmeal.meal\">\n   </div>\n   <div>\n       <label>Enter meal Description:</label>\n       <p>\n       <input [(ngModel)]=\"selectedmeal.description\">\n   </div>\n   <div>\n       <label>Enter calories:</label>\n       <p>\n       <input [(ngModel)]=\"selectedmeal.calories\">\n       <button (click)=\"finishedEditing()\">Done</button>\n   </div>\n   </div>\n   <div class = \"col-md-6\">\n   <new-meal\n       (newMealSender)=\"addmeal($event)\"\n   ></new-meal>\n   </div>\n   </div>\n   </div>\n\n\n "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map