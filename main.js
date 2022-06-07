"use strict";
exports.__esModule = true;
// write export or import statement here becuase this file is transplied in to javascript file and this message verible is declared as a global variable to it though a error so we are use  import and export statement so typescript is make a module and message scope is inside this module so not thought error
// typescript is under the hood convert into javascript 
// cli command tsc main.ts 
//this commmand is used to convert typescript into javascript file
// tsc --watch main.ts
// this command is used to convert typescript into javascript file and it will watch for any change in the file and it will convert it automatically
var message = "Hello World";
console.log(message);
// three types of data
// 1. string
// 2. number
// 3. boolean
// how to declare a variable type in typescript 
// first is let / const after use: data type(string,number,boolean)=value
//example
var isBeginner = true;
// now i am tyring to reassign any other data type value so though error
console.log(isBeginner);
var total = 10;
var name = "schine run is ".concat(total);
console.log(name);
var n = null;
var u = undefined;
// how to declare arr on ts
//1st way
var list1 = [1, 2, 3];
//2nd way
var list2 = [1, 2, 3];
// also declare a tuple means mix number and string
var perone1 = ["shine", 10];
// in the tuple you are declaring one string and one number in this case and maintaing the order of type
// one more type in ts is enum 
//enum is used to declare a set of named constants of a particular type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// any type is used to declare a variable with any type of data
var randomValue = 10;
randomValue = true;
randomValue = "shine";
console.log(randomValue);
// function in tpescript 
function add(num1, num2) {
    return num1 + num2;
}
// both parameter are a number so we are not giving any error 
add(10, 20);
function Persone(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: "shine",
    lastname: "50"
};
Persone(p);
// class in typescript
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var em1 = new Employee("shine");
em1.greet();
