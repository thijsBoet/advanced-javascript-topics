"use strict";

// All reference types are objects including functions
// An Object is a collection of values 
object = {
  name: "value",
  userName: "John",
  address: "100 Main Street",
  city: "New York",
  state: "NY",
  test: function(val) {
    console.log(val)
  },
  // An function on an object is called a method
  fullAddress: function () {
            // A value on a object is called an property
    return `${object.userName} 
            ${object.address} 
            ${object.city} 
            ${object.state}`
  }
}

// Since functions are objects we can attach properties to functions
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

// JavaScript uses two main methods for defining a function: 
// Function declarations 
function name() {
  return 'name'
}

// Function expressions
const name2 = function () {
  return 'name'
}

// The main functional difference between these two methods is that function declarations are hoisted, meaning you can invoke the function even before it has been defined. Function expressions are not hoisted.

// Javascript uses first class functions which means it treats functions as values that you can assign a function into a variable, like we did.
var sum = function(num1, num2) {
  return num1 + num2;
};

// Functions are a reference to the original function/object
// As it is assigned a variable it is saved in memory and always referenced to that same point in memory
var a = sum;
var b = a;

// Next to the given params THIS & ARGUMENTS is always passed into a function
const test = function(val) {
  console.log(val)
  // console.log(arguments)  => array of other arguments passed through function ...args
  // console.log(this)       => the context in which it is invoked
}

// Four ways to invoke a function
// -------------------------------
// 1) as a function
test(50)

// 2) as a methods
object.test(50)

// 3) as a constructor (new)
// 4) indirectly using call() and apply()