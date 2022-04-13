// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name = "John";
admin = name;
alert(admin);

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

const planetName = "earth";
let currentVisitorName = "name";

// Write a function that returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result.

function checkAge(age){
 return (age > 18) ? true : 'Did parents allow you?'
}