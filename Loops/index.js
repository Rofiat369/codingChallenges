// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

//numbers between 1-100
for(i=1; i < 101; i++){
    //check if the number is divisible by both 3 & 5
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    } 
    //check if number is divisible by 5
    else if(i % 5 === 0){
        console.log("buzz")
    }
    //check if number is divisible by 3
    else if(i % 3 === 0){
        console.log("fizz")
    }
    else{
        console.log(i)
    }
}