"use strict";
exports.__esModule = true;
exports.ArrayManipulations = void 0;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0 || myArray[i] % 10 == 0) {
                console.log(myArray[i]);
            }
        }
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        for (var i1 = 0; i1 < myArray.length; i1++) {
            if (isNaN(myArray[i1])) {
                console.log(myArray[i1]);
            }
        }
    };
    ArrayManipulations.prototype.arraySplit = function (myString) {
        for (var i2 = 0; i2 < myString.length; i2++) {
        }
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        myArray.sort();
        console.log(myArray);
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        for (var i4 = 0; i4 < myArray.length; i4++) {
            if (myArray[i4] % 3 == 0) {
                myArray[i4] = 5;
            }
            console.log(myArray[i4]);
        }
    };
    return ArrayManipulations;
}());
exports.ArrayManipulations = ArrayManipulations;
var myArray = [34, 45, 60, 23, 13, 25, 70, "467", "1224", "hii", "prograd", "hello"];
var array = new ArrayManipulations();
array.arrayFindMultiples(myArray);
array.arraySeparate(myArray);
array.arraySort(myArray);
array.arrayReplace(myArray);
