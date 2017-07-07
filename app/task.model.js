"use strict";
var Task = (function () {
    function Task(meal, description, calories) {
        this.meal = meal;
        this.description = description;
        this.calories = calories;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map