var addFunction = function (n1, n2, n3) {
    var sum = n1 + n2 + n3;
    return sum;
};
//var str1: string = addFunction(10, 20, 30); //Gives compile time error as return type of a function is number and is being assigned to a string
var sum = addFunction(10, 20, 30); // This works
var result = addFunction(10, 20, 30); // This also works
//data types 
var isDone = false;
//number types 
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//string 
var color = "blue";
color = 'red';
//sting concaniation 
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sentence2 = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
//Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//if you dont know the types of array eleemnts
var list3 = [1, 2, 3];
var list4 = [1, true, "free"];
//Tuple array 
/*
    Tuple types allow you to express an array where the type of a fixed number of elements is known
*/
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // 
//to work with those types inside tuple array you need to acces them by its pocket 
//to get first pocket string lenght 
var stringLength = x[0].length;
//to convert number to string you can 
var convertNumberToString = x[1].toString();
// to push to the tuple array 
x[2] = "greg";
x[4] = 5;
//x[5] = true; error has to be either string\Number 
console.log('this is outcome of x array ' + x);
//Enum is a type of object literal that by default start from 0 index;
/*
        Enum allows you to specify type just like you would specify object literals
*/
var Color0;
(function (Color0) {
    Color0[Color0["Red"] = 0] = "Red";
    Color0[Color0["Green"] = 1] = "Green";
    Color0[Color0["Blue"] = 2] = "Blue";
})(Color0 || (Color0 = {}));
console.log('Enum that starts from 0 index " ' + Color0[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log('Enum that start from index 1' + Color[1]);
//you can also speciy Enum as object literals not an array type 
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["five"] = 5] = "five";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
//to access value you need to specify pokect as value = pocket
console.log('FileAccess.G');
console.log(FileAccess[5]); //logs five
//to access pocket number 
console.log('pocket number');
console.log(FileAccess.five); //logs 5; 
//if pocket number is not specify if follows array pockets numbsr 
console.log('first not defined pocket number so gets defualt numbers');
console.log(FileAccess[0]); //logs None;
//to get its value
console.log(FileAccess.None); //logs 0 
// any type  - so it could be changed once program is running;
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var someValue = "this is a string";
var strLength = someValue.length;
var someValue2 = [2, 5, 6]; // "this is a string";
var strLength2 = someValue2.length;
console.log(strLength2);
