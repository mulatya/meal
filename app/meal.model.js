"use strict";
var Meal = (function () {
    function Meal(meal, description, calories) {
        this.meal = meal;
        this.description = description;
        this.calories = calories;
        this.done = false;
    }
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map