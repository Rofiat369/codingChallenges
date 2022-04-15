// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

//numbers between 1-100
for (i = 1; i < 101; i++) {
  //check if the number is divisible by both 3 & 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  }
  //check if number is divisible by 5
  else if (i % 5 === 0) {
    console.log("buzz");
  }
  //check if number is divisible by 3
  else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let num = prompt("Enter a number greater than 100?");

while (num <= 100 && num) {
  if (num < 50) {
    num = prompt("Enter a number greater than 100?");
  } else if (num === null || num === "") {
    num = prompt("Enter a number greater than 100?");
  } else if (num > 50 && num < 100) {
    break;
  }
}

// Write a program that asks the user for a number, then shows the multiplication table for this number.
// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let userInput = prompt("enter a num");
for (let i = 1; i < 13; ++i) {
    if(userInput > 1 && userInput < 10){
        document.write(
            userInput + " " + "*" + " " + i + " " + "=" + " " + userInput * i + "<br>"
          );
    } else {
        document.write("<h4> please enter a number between 2 - 9 </h4>")
    }
 
}
