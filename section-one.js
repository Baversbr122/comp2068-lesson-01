// generates a random integer a min and max value (inclusively)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1); 

/*
We can type
what ever 
we want
in here
*/

/**
 * Returns a random integer between a minimum
 * and maximum number, including the minimum
 * and maximum number
 * 
 * @param {number} min The starting number in the range
 * @param {number} max The ending number in the range 
 * @return {number} The randomly determined integer
 */

 function rando(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1); 
 }

 // Variables 
 // scope decorators: var, let, const
 var name = "Austin";

 if(true){
     var last = "Baverstock";
 }
 function varScoping(){
     var youCantSeeMe = "boorakacha";
 }
 if(true){
     let youGotNothing = "yeppers";
 }
 let youCantSSeeMe;
 if(true){
     youCanSeeMe = "How do you do";
 }
 const age = 41;
 const person = {};

 // Data Types
 // Primitives 
const str = "Im a string"; // string
const num = 5; // Number 
const bool = true; // Boolean
const nil = null; // Null 
const undy = undefined; // Undefine


// Objects


