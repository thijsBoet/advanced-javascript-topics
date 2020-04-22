"use strict";

// All reference types are objects including functions
// An Object is a collection of values 
object = {
  name: "value",
  userName: "John",
  address: "100 Main Street",
  city: "New York",
  state: "NY",
  
  // An function on an object is called a method
  fullAddress: function () {
            // A value on a object is called an property
    return `${object.userName} 
            ${object.address} 
            ${object.city} 
            ${object.state}`
  }
}

// There are two methods of defining an object
// -------------------------------------------
// 1) Object Literal => Preferred method
let obj = {
  firstName: 'Matthijs',
  lastName: 'Boet'
};

// 2) Object Constructor
let obj2 = new Object();
obj2.firstName = 'Steven';
obj2.lastName = 'Tyler';

// check for possible property/method on object
"lastName" in obj;