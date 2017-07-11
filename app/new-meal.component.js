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
var NewmealComponent = (function () {
    function NewmealComponent() {
        this.newMealSender = new core_1.EventEmitter();
    }
    NewmealComponent.prototype.addClicked = function (meal, description, calories) {
        var newMealToAdd = new meal_model_1.Meal(meal, description, calories);
        this.newMealSender.emit(newMealToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewmealComponent.prototype, "newMealSender", void 0);
    NewmealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: "\n    <h2>New Meal</h2>\n    <div>\n      <label>Enter meal:</label>\n      <p>\n      <input #newMeal>\n    </div>\n    <div>\n      <label>Enter description:</label>\n      <p>\n      <input #newDescription>\n    </div>\n    <div>\n      <label>Enter calories:</label>\n      <p>\n      <input #newCalories>\n      <button (click)=\"\n        addClicked(newMeal.value, newDescription.value, newCalories.value);\n        newMeal.value='';\n        newDescription.value='';\n        newId.value='';\n      \">Add</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewmealComponent);
    return NewmealComponent;
}());
exports.NewmealComponent = NewmealComponent;
//# sourceMappingURL=new-meal.component.js.map