/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbners(a, b) {
    // Code Block
    return a + b;
}

// //To use the function we call it
// We set up a varaible to store the output of the function
let sum = addTwoNumbners(3, 5)
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbners2 = (a, b) => {
    // Code Block
    return a + b;
}
//To use the function we call it
let sum2 = addTwoNumbners2(3, 5)
console.log(sum2)

// Single Line Arrow Function With Parameters
//const addTwoNumbners3 = (a, b) => (a + b);      //also valid
const addTwoNumbners3 = (a, b) => a + b;
let sum3 = addTwoNumbners3(6, 4);
console.log(sum3);

// Implicit Returns
const saySomething = (message) => console.log(message);
saySomething("halo to ja, pedze do Ciebie, swiatlowodem");

const sayHello = () => console.log("Hello there");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)

console.log(returnMultipleLines())
