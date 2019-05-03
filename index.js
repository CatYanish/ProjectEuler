
// #1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function findAllMultiplesBelowGivenNumber (factor1, factor2, givenNumber) {
  let sum = 0;

  for (let i = 0; i < givenNumber; i++ ) {  
    if ((i % factor1 === 0) || (i % factor2 === 0 )) {
      sum = sum += i;
    }
  }

return sum
} 

const problemOneSum = findAllMultiplesBelowGivenNumber(3, 5, 1000);
console.log(problemOneSum);





// #2
let numbers = [1, 2 ];
var a = numbers[numbers.length - 2]; 
var b = numbers[numbers.length - 1];

while ( (a + b) < 4000000 ) {
  numbers.push(a + b);
  a = numbers[numbers.length - 2]; 
  b = numbers[numbers.length - 1];
}


if ( (a + b) > 4000000) {
  var evens = numbers.filter(number => number % 2 === 0 )
  const reducer = (acc, currentValue) => acc + currentValue;
  const evensSum = evens.reduce(reducer);
  console.log(evensSum);
  
}
