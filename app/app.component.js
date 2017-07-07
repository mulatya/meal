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
var task_model_1 = require('./task.model');
var AppComponent = (function () {
    function AppComponent() {
        this.tasks = [
            new task_model_1.Task("-Do List app.", "fyufvvuivui", 0),
            new task_model_1.Task("vbwbvw ew", "Learn Kung Fu.", 1),
            new task_model_1.Task("ewbvbvionvweiovwe", "Learn Kung Fu.", 2),
            new task_model_1.Task("iwevvw wvvwi", "Learn Kung Fu.", 3)
        ];
        this.selectedTask = this.tasks[0];
    }
    AppComponent.prototype.showDetails = function (clickedTask) {
        this.selectedTask = clickedTask;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedTask = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n   <h1>My First Angular 2 App</h1>\n   <div *ngFor=\"let currentTask of tasks\">\n     <h3>{{ currentTask.meal }}</h3>\n     <h3>{{ currentTask.description }}</h3>\n     <h3>{{ currentTask.calories }}</h3>\n     <button (click)=\"showDetails(currentTask)\">Edit</button>\n   </div>\n   <div *ngIf=\"selectedTask\">\n     <h1>Edit Task</h1>\n     <div>\n       <label>Enter meal:</label>\n       <input [(ngModel)]=\"selectedTask.meal\">\n     </div>\n     <div>\n       <label>Enter Task Description:</label>\n       <input [(ngModel)]=\"selectedTask.description\">\n     </div>\n     <div>\n       <label>Enter calories:</label>\n       <input [(ngModel)]=\"selectedTask.calories\">\n       <button (click)=\"finishedEditing()\">Done</button>\n     </div>\n   </div>\n   <new-task></new-task>\n </div>\n "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map