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
var CompletenessPipe = (function () {
    function CompletenessPipe() {
    }
    CompletenessPipe.prototype.transform = function (input, desiredCompleteness, word1, word2, word3, word4, word5, word6) {
        console.log(word1);
        console.log(word2);
        console.log(word3);
        console.log(word4);
        console.log(word5);
        console.log(word6);
        var output = [];
        if (desiredCompleteness === "lowCalories") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories < 500) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredCompleteness === "highCalories") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories > 500) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    CompletenessPipe = __decorate([
        core_1.Pipe({
            name: "completeness",
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], CompletenessPipe);
    return CompletenessPipe;
}());
exports.CompletenessPipe = CompletenessPipe;
//# sourceMappingURL=completeness.pipe.js.map