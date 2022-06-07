
export{}

// write export or import statement here becuase this file is transplied in to javascript file and this message verible is declared as a global variable to it though a error so we are use  import and export statement so typescript is make a module and message scope is inside this module so not thought error

// typescript is under the hood convert into javascript 

// cli command tsc main.ts 
//this commmand is used to convert typescript into javascript file
// tsc --watch main.ts
// this command is used to convert typescript into javascript file and it will watch for any change in the file and it will convert it automatically

let message= "Hello World";
console.log(message);

// three types of data
// 1. string
// 2. number
// 3. boolean

// how to declare a variable type in typescript 
// first is let / const after use: data type(string,number,boolean)=value

//example

let isBeginner: boolean =true;

// now i am tyring to reassign any other data type value so though error

console.log(isBeginner)

let total:number=10;

let name:string=`schine run is ${total}` 

console.log(name)

let n:null=null;

let u:undefined=undefined;

// how to declare arr on ts

//1st way
let list1:number[]=[1,2,3];

//2nd way
let list2:Array<number>=[1,2,3];


// also declare a tuple means mix number and string

let perone1:[string,number]=["shine",10];

// in the tuple you are declaring one string and one number in this case and maintaing the order of type

// one more type in ts is enum 
//enum is used to declare a set of named constants of a particular type

enum Color{Red=5,Green,Blue}

let c:Color=Color.Green;

console.log(c)

// any type is used to declare a variable with any type of data

let randomValue:any=10;

randomValue=true
randomValue="shine"

console.log(randomValue)


// function in tpescript 

function add(num1:number,num2:number){
    return num1+num2;
}
// both parameter are a number so we are not giving any error 

add(10,20)

// but I try to asign any other data type to the parameter so it will throw error

// add(10,"dhrv")

// second example with object as parameter
/*
function Persone(person:{firstname:string,lastname:string}){
    console.log(person.firstname+" "+person.lastname)
}


let p={
    firstname:"shine",
    lastname:"50"
}

Persone(p)
*/

// how to above function code write in clean way so use inerface

interface persone{
    firstname:string,
    lastname:string
}

function Persone(person:persone){
    console.log(person.firstname+" "+person.lastname)
}

let p={
    firstname:"shine",
    lastname:"50"
}

Persone(p)


// class in typescript

class Employee
{
    employeeName:string;

    constructor(name:string){
        this.employeeName=name;
    }

    greet(){
        console.log("Good Morning "+this.employeeName)
    }

}

let em1=new Employee("shine");
em1.greet();