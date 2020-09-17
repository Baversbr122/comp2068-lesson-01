// Debugging and Troubleshooting
try{
    console.log("Hey I Still Output");
let age = 41;
 //debugger;
age = 35;
if(age > 25){
    throw new Error('Todd you are so old.');
}
} catch(error){
    console.log(error.message);
    console.log("Tod u idiot");
} finally {
    console.log("Todd you're still and idiot");
}

// example of array iteration
['a', 'b', 'c'].forEach(function (item) {
    console.log(item); // 1st: a, 2nd: b, 3rd: c
  });