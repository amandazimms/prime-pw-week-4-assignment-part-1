console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name;
}
// Remember to call the function to test
console.log('helloName(Juanjo) returns:', helloName('Juanjo'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('addNumbers(99,1) returns:', addNumbers(99,1));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log('multiplyThree(2,3,4) returns:', multiplyThree(2,3,4));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else if ( number < 0 ){
    return false;
  } else if ( number === 0 ) {
    return "zero is neither positive nor negative"
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive(-9) returns:', isPositive(-9));
console.log('isPositive(8) returns:', isPositive(8));
console.log('isPositive(-222) returns:', isPositive(-222));
console.log('isPositive(18) returns:', isPositive(18));
console.log('isPositive(0) returns:', isPositive(0));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length -1];
}
let testArray = [0,1,2,3];
console.log('getLast(testArray), where testArray = [0,1,2,3], returns:', getLast(testArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){

  let foundMatch = false; //declare and set a bool to false
  for (const item of array) { //loop through items in array
      if (value === item) { //if any of the items are equal to value
        foundMatch = true; //set that bool to true
      } //(else it will remain false anyway)
  }

  if (foundMatch === true) { //check if the bool was ever flipped to true
      return true;
  } else {
      return false;
  }
}
console.log('find(2, testArray), where testArray = [0,1,2,3], returns:', find(2, testArray));
console.log('find(7, testArray), where testArray = [0,1,2,3], returns:', find(7, testArray));


// ----------------------
// Stretch Goals
// ----------------------
// 8a. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

  if (string.charAt(0) === letter){
    return true;
  } else {
    return false;
  }

}
console.log( 'isFirstLetter - (a-apple) - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - (z-apple) - should say false', isFirstLetter('z', 'apple') );


// 8b. I was not sure if the above solution 8a counts as cheating - in the
//    similar example with arrays above you ask us not to use indexOf which 
//    feels similar to charAt. So here is another way to solve without charAt:
function isFirstLetterAnalog(letter, string) {


  //turn the string into an array
  string = string.split('');
  //compare the first index in string array (first leter) to 'letter'
  if (string[0] === letter) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - (b-banana) - should say true', isFirstLetter('b', 'banana') );
console.log( 'isFirstLetter - (w-banana) - should say false', isFirstLetter('w', 'banana') );


// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {

  let sum = 0
  
  for (const num of array) {
    sum += num;
  }

  return sum;
}
console.log('sumAll(testArray), where testArray = [0,1,2,3], returns:', sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function sumAllPositives( array ) {

  let sum = 0
  
  for (const num of array) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}
let arrayWithNegs = [-2, -1, 0, 1, 2, 3]
console.log('sumAllPositives(arrayWithNegs), where arrayWithNegs = [-2, -1, 0, 1, 2, 3], returns:', sumAllPositives(arrayWithNegs));
console.log('verifying that arrayWithNegs is intact. arrayWithNegs:', arrayWithNegs);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//from Edabit: https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
//Matchstick Houses
//This challenge will help you interpret mathematical relationships both algebraically and geometrically.
//Create a function that takes a number (step) as an argument and returns the number of matchsticks in 
//that step. See step 1, 2 and 3 in the image [on their website].

//notes: Step 0 returns 0 matchsticks.
//The input (step) will always be a non-negative integer.
//Think of the input (step) as the total number of houses that have been connected together.
function matchHouses(step){

  if (step < 0 || Number.isInteger(step) === false) { //test if the input (step) is negative or not an integer;
    console.log("please enter a positive integer"); //if so, print that we want only positive integers.
  }
  else {
    //if step is 0, return 0 (special case)
    if (step === 0) {
      return 0;
    } else {
      //all but the first house have 5 sticks (in one way to visualise this); first has 6.
      let sticksPerHouse = 5;
      return (sticksPerHouse * step) + 1;
    }
  }
}
console.log('matchHouses(0):', matchHouses(0));
console.log('matchHouses(1):', matchHouses(1));
console.log('matchHouses(2):', matchHouses(2));
console.log('matchHouses(3):', matchHouses(3));
console.log('matchHouses(50):', matchHouses(50));

