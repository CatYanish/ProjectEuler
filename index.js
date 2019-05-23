
// // #1

// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // Find the sum of all the multiples of 3 or 5 below 1000.

// function findAllMultiplesBelowGivenNumber (factor1, factor2, givenNumber) {
//   let sum = 0;

//   for (let i = 0; i < givenNumber; i++ ) {
//     if ((i % factor1 === 0) || (i % factor2 === 0 )) {
//       sum = sum += i;
//     }
//   }

// return sum
// }

// const problemOneSum = findAllMultiplesBelowGivenNumber(3, 5, 1000);
// console.log(problemOneSum);





// // #2
// let numbers = [1, 2 ];
// var a = numbers[numbers.length - 2];
// var b = numbers[numbers.length - 1];

// while ( (a + b) < 4000000 ) {
//   numbers.push(a + b);
//   a = numbers[numbers.length - 2];
//   b = numbers[numbers.length - 1];
// }


// if ( (a + b) > 4000000) {
//   var evens = numbers.filter(number => number % 2 === 0 )
//   const reducer = (acc, currentValue) => acc + currentValue;
//   const evensSum = evens.reduce(reducer);
//   console.log(evensSum);

// }




// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// ideas: generate a list of prime numbers. See which ones are factors of given number. return the biggest one.
// ideas: find all factors of given number. If number is prime and bigger than starting number, return it.

//
// function isPrime(num) {
//   if (num < 0 || num === 1 || ((typeof num !== "number") && Math.floor(num) !== num)) {
//     return false;
//   } else if (num === 2) {
//     return true;
//   } else if ( num % 2 !== 0 ) {
//     let isPrime = true;
//     for (let index = 1; index < 10; index++) {
//       if (num % index === 0 && (index !== 1 && index !== num)) {
//         isPrime = false;
//       }
//     }
//     return isPrime;
//   } else {
//     return false;
//   }
// }
//
// // const isNumPrime = isPrime(9973);
// // console.log(isNumPrime);
// // const isNotPrime = isPrime(888888)
// // console.log(isNotPrime);
//
//
// // function getLargestPrimeFactorOfGivenNumber (givenNumber) {
// //   let i = givenNumber;
// //   let largestPrime;
// //   do {
// //     i = i - 1;
// //     if ((givenNumber % i === 0) && (i % 2 !== 0) ) {
// //       console.log('divides evenly and is odd number: i:', i)
// //       // const isPrimeFactor = isPrime(i)
// //       // if (isPrimeFactor === true) {
// //       //   largestPrime = i;
// //       // }
// //     }
// //   } while (i > (givenNumber / 2) && largestPrime === undefined);
// //   return largestPrime;
// // }
//
//
// const createArrayOfOddFactors = (givenNumber) => {
//   let oddFactors = []
//     for (var i = (givenNumber-1); i > 2; i--) {
//       console.log(i);
//       if (givenNumber % i === 0) {
//         oddFactors.push(i)
//       }
//   }
//   return oddFactors;
// }
//
// console.log(createArrayOfOddFactors(600851475143));

// const primeNum = getLargestPrimeFactorOfGivenNumber(600851475143);
//
// console.log({primeNum})



var originalTarget = 600851475143;
var target = originalTarget;
var i = 2;
while(i<target) {
	while(target%i === 0) {
		(function(newtarget) {
			console.log(target + " can be divided by " + i + " which gives us " + newtarget);
			target = newtarget;
		})(target / i)
	}
	i++;
}
console.log("it seems like " + target + " is the biggest prime factor for " + originalTarget);
