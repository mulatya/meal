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
var mealListComponent = (function () {
    function mealListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.selectedCompleteness = "all";
    }
    mealListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedCompleteness = optionFromMenu;
        console.log(this.selectedCompleteness);
    };
    mealListComponent.prototype.editButtonHasBeenClicked = function (mealToEdit) {
        this.clickSender.emit(mealToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], mealListComponent.prototype, "childmealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], mealListComponent.prototype, "clickSender", void 0);
    mealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n    <select (change)=\"onChange($event.target.value)\">\n      <option value=\"all\" selected=\"selected\">Show All</option>\n      <option value=\"highCalories\">Show high Calories</option>\n      <option value=\"lowCalories\" >Show low calories</option>\n    </select>\n    <div class = \"row\">\n    <div class = \"col-md-12\">\n    <div class=\"meal-list col-md-3\" *ngFor=\"let currentmeal of childmealList | completeness:selectedCompleteness\">\n      <h3><strong>Food :{{ currentmeal.meal }}</strong></h3>\n      <h5><strong>Details :</strong> {{ currentmeal.description }}</h5>\n      <p><strong>Calories :</strong> {{ currentmeal.calories }}</p>\n      <button (click)=\"editButtonHasBeenClicked(currentmeal)\">Edit</button>\n    </div>\n    </div>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], mealListComponent);
    return mealListComponent;
}());
exports.mealListComponent = mealListComponent;
//# sourceMappingURL=meal-list.component.js.map