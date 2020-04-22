// this is...
// - Established at runtime, WHEN a function is invoked.
// - Determined by HOW a function is invoked, NOT where it is defined.
// - A reference to the object.

// this is not...
// - The function. Though it is established when the function is invoked, it is not the function.

// Examining this with a normal function invocation
// ------------------------------------------------
var name = "global";

const func1 = function () {
  var name = "func1";
  console.log("Logged from func1 ---");
  // this is global context
  console.log(this);
  // therefore name === "global"
  console.log(this.name);
  // same result as context remains the same
  func2();

  return function () {
    var name = "func3";
    console.log("Logged from func3 ---");
    // Does not matter where function is declared
    console.log(this);
    // Only how it is invoked
    console.log(this.name);
  };
};

var func2 = function () {
  var name = "func2";
  console.log("Logged from func2 ---");
  // this is global context
  console.log(this);
  // therefore name === "global"
  console.log(this.name);
};

func1()();

// Using strict mode with normal function invocation results in an error
"use strict";

var strictName = "global";

var strictFunc1 = function () {
  var strictName = "strictFunc1";
  console.log(this);
  console.log(this.strictName);
};

// Examining this with method function invocation
// ----------------------------------------------

