// concat and string templeates
const first = "Austin";
const last = "Baverstock";
const con = "My name is " + first + " " + last; // concatenation

const strTmp = `My name is ${first} ${last}`; // template string 

console.log(`I AM ${first.toUpperCase()}`);

const time = 7;

if (time < 7){
    console.log("Cruising along");
} else {
    console.log("Still working");

}

// evealuates the situation if time is less than 7 display the first message otherwise the second message
const message = (time < 7) ? "Crusing along" : "Still working"; // ternerary statement 
console.log(message);

// implicit returns
let age;
if (age)
console.log(age);
else
console.log(35);

console.log(age || 35); 

console.log((age && first) || 35);