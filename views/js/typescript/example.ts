var addFunction = function (n1: number, n2: number, n3: number) {
var sum = n1 + n2 + n3;
return sum;
};
//var str1: string = addFunction(10, 20, 30); //Gives compile time error as return type of a function is number and is being assigned to a string

var sum: number = addFunction(10, 20, 30); // This works
var result = addFunction(10, 20, 30); // This also works



//data types 
let isDone: boolean = false; 

//number types 

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


//string 
let color: string = "blue";
color = 'red';
//or 

//string concaniation 

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;


let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

//Array
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//if you dont know the types of array eleemnts
let list3: Array<any> = [1, 2, 3];

let list4: any[] = [1, true, "free"];


//Tuple array 

	/*
		Tuple types allow you to express an array where the type of a fixed number of elements is known
	*/

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // 

//to work with those types inside tuple array you need to acces them by its pocket 

//to get first pocket string lenght 
let stringLength = x[0].length;
//to convert number to string you can 
let convertNumberToString = x[1].toString();
// to push to the tuple array 
x[2] = "greg";
x[4] = 5;
//x[5] = true; error has to be either string\Number 


console.log('this is outcome of x array ' + x);



//Enum is a type of object literal that by default start from 0 index;

		/*
				Enum allows you to specify type just like you would specify object literals 
		*/

enum Color0 {Red, Green, Blue}
console.log('Enum that starts from 0 index " '+Color0[0]);

enum Color {Red = 1, Green, Blue}
console.log('Enum that start from index 1'+Color[1]);


//you can also speciy Enum as object literals not an array type 

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    five = 5,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
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
console.log(FileAccess.None);//logs 0 

// any type  - so it could be changed once program is running;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean



let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;


let someValue2: any = [2,5,6];// "this is a string";

let strLength2: number = (someValue2 as string).length;

console.log(strLength2);








