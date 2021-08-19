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
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 8b. I was not sure if the above solution 8a counts as cheating - in the
//    similar example with arrays above you ask us not to use indexOf which 
//    feels similar to charAt. So here is another way to solve without charAt:
function isFirstLetterAnalog(letter, string) {

  
  if (string.charAt(0) === letter){
    return true;
  } else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
