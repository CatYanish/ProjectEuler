
// #1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// function findSumOfAllMultiplesBelowGivenNumber (factor1, factor2, givenNumber) {
//   let sum = 0;
//
//   for (let i = 0; i < givenNumber; i++ ) {
//     if ((i % factor1 === 0) || (i % factor2 === 0 )) {
//       sum = sum += i;
//     }
//   }
//
// return sum
// }
//
// const problemOneSum = findSumOfAllMultiplesBelowGivenNumber(3, 5, 1000);
// console.log(problemOneSum);





// // #2
// let numbers = [1, 2 ];
// var a = numbers[numbers.length - 2];
// var b = numbers[numbers.length - 1];
//
// while ( (a + b) < 4000000 ) {
//   numbers.push(a + b);
//   a = numbers[numbers.length - 2];
//   b = numbers[numbers.length - 1];
// }
//
//
// if ( (a + b) > 4000000) {
//   var evens = numbers.filter(number => number % 2 === 0 )
//   const reducer = (acc, currentValue) => acc + currentValue;
//   const evensSum = evens.reduce(reducer);
//   console.log(evensSum);
//
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

// const givenNumber = 51475143;
// let largestPrime;
// let i = 2;
//   do {
//     i += 1;
//     console.log(i);
//     if (givenNumber % i === 0) {
//         largestPrime = i;
//     }
//   } while (i < (givenNumber -1) );
// console.log(largestPrime);
//



// var originalTarget = 600851475143;
// var target = originalTarget;
// var i = 2;
// while(i<target) {
// 	while(target%i === 0) {
// 		(function(newtarget) {
// 			console.log(target + " can be divided by " + i + " which gives us " + newtarget);
// 			target = newtarget;
// 		})(target / i)
// 	}
// 	i++;
// }
// console.log("it seems like " + target + " is the biggest prime factor for " + originalTarget);
//


// integer to roman numerals


// const intToRomanNum = function (int) {
// 		let arabicNumber = int;
// 		let romanNum = "";
// 		while (arabicNumber > 0) {
// 			if (arabicNumber >= 1000) {
// 				while (arabicNumber >= 1000) {
// 					arabicNumber -= 1000;
// 					romanNum = romanNum + "M";
// 				}
// 			} else if ( arabicNumber >= 400) {
// 				if (arabicNumber >= 500) {
// 					arabicNumber -= 500;
// 					romanNum = romanNum + "D";
// 				} else if (arabicNumber >= 400) {
// 					arabicNumber -= 400;
// 					romanNum = romanNum + "CD";
// 				}
// 			} else if ( arabicNumber >= 100) {
// 				while (arabicNumber >= 100) {
// 					arabicNumber -= 100;
// 					romanNum = romanNum + "C";
// 				}
// 			} else if ( arabicNumber >= 50 ) {
// 				while (arabicNumber >= 50) {
// 					arabicNumber -= 50;
// 					romanNum = romanNum + "L";
// 				}
// 			} else if ( arabicNumber >= 10) {
// 				while (arabicNumber >= 10) {
// 					arabicNumber -= 10;
// 					romanNum = romanNum + "X";
// 				}
// 			}
// 			else if ( arabicNumber >= 1) {
// 				while (arabicNumber >= 1) {
// 					arabicNumber -= 1;
// 					romanNum = romanNum + "I";
// 				}
// 			}
// 		}
//
// 	console.log({romanNum});
// }

//
// intToRomanNum(1520);
// intToRomanNum(1400);

//
// const arabicNumbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const romanNumerals = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
// const smartRomanNumeralConversion = (int) => {
// 	let num = int;
// 	let intAsRomanNumeral = "";
// 	let i = 0;
// 	while (num > 0) {
// 			if ( num >= arabicNumbers[i] ) {
// 				num -= arabicNumbers[i];
// 				intAsRomanNumeral = intAsRomanNumeral + romanNumerals[i];
// 			} else {
// 					i += 1;
// 			}
// 	}
// 	console.log({intAsRomanNumeral});
// }
//
//
// smartRomanNumeralConversion(1520);
//
// smartRomanNumeralConversion(40);


// const reverseAString = (string) => {
// 	console.log(string.split('').reverse().join(''));
// }
//
//
// reverseAString('cat is awesome');
// reverseAString('Helter Skelter');
// reverseAString('reversing strings in my free time');


// const reverseStringTheLongWay = (string) => {
// 	const arrayOfChar = string.split('');
// 	let reversed = "";
// 	for (let i = 0; i < arrayOfChar.length; i++) {
// 		reversed = arrayOfChar[i] + reversed;
// 	}
// 	return reversed;
// }

//
// console.log(reverseStringTheLongWay('cat'));


// let longString = "abcabcddbaaaaa";
//
// const countUpCharacters = function (str) {
// 	const array = str.split('');
// 	const countedChars = array.reduce(function(acc, item) {
// 		if(acc[item] === undefined) {
// 			acc[item] = 1;
// 		} else {
// 			acc[item] += 1;
// 		}
// 		return acc;
// 	}, {})
// 	return countedChars;
// }
//
//
// console.log(countUpCharacters(longString));


// const string = 'bat';
//
// const reverseStringWithoutBuiltInMethods = function (str) {
// 	let array = str.split('');
// 	let reversed = "";
// 	for (var i = 0; i < array.length; i++) {
// 		reversed = array[i] + reversed;
// 	}
// 	return reversed;
// }
//
// console.log(reverseStringWithoutBuiltInMethods(string));


// console.log(reverseStringTheLongWay('cat'));



// const countUpDuplicates = (string) => {
// 	const arrayOfChar = string.split('');
// 	const countedDupes = arrayOfChar.reduce(function(acc, item) {
// 	 if(acc[item] !== undefined) {
// 		acc[item]++;
// 	 } else {
// 		acc[item] = 1;
// 	 }
// 	 return acc;
// 	}, {} );
// 	return countedDupes;
// }
//
// console.log(countUpDuplicates('abcdabc'));



//
// const findUnique = (string) => {
// 	const array = string.split('');
// 	const uniques = array.reduce((arr, item) => {
// 	 if ((array.indexOf(item) === array.lastIndexOf(item))) {
// 		arr.push(item)
// 	 }
// 	 return arr;
// 	},
// 	 []);
// 	return uniques;
// }
//
// console.log(findUnique('abcdabc'));
// console.log(findUnique('dddcbbba'));


// const anotherFindUnique = function(str) {
// 	const arr = str.split('');
// 	let uniques = [];
//
// 	const countedChars = arr.reduce(function(acc, item) {
// 			if (acc[item] === undefined) {
// 				acc[item] = 1;
// 			} else {
// 				acc[item] += 1;
// 			}
// 			return acc;
// 	}, {} )
//
//
//
//
// 	for (var property in countedChars) {
// 	  if (countedChars[property] === 1) {
// 				uniques.push(property)
// 		};
// 	}
// 	console.log(uniques);
// 	return uniques;
// }
//
//
//
//
// anotherFindUnique('aaccbe')


// 4. Fizz Buzz
//Given a number as an input, print out every integer from 1 to that number.
//However, when the integer is divisible by 2, print out “Fizz”;
// when it’s divisible by 3, print out “Buzz”;
//when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// const FizzBuzz = function (num) {
// 	for (var i = 0; i <= num; i++) {
// 		if (([i] % 2 === 0) && ([i] % 3 === 0)) {
// 			console.log('FizzBuzz');
// 		} else if ([i] % 2 === 0) {
// 			console.log('Fizz');
// 		} else if ([i] % 3 === 0) {
// 			console.log('Buzz');
// 		} else {
// 			console.log([i]);
// 		}
// 	}
// }
//
// console.log(FizzBuzz(24));



// Given a string of words or phrases, count the number of vowels.


// const countTheVowels = (str) => {
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	const phrase = str.split('');
//
// 	const numOfVowels = phrase.reduce(function (acc, item) { return vowels.includes(item) ? acc += 1 : acc += 0}, 0  )
//
// 	return numOfVowels;
// }
//
// console.log(countTheVowels('fuck my life'))


// const countUpCharacters = (arr) => {
// 	const countedObj = arr.reduce((acc, item) => {
// 		acc[item] ? acc[item] += 1 : acc[item] = 1;
// 		return acc;
// 	}, {})
// 	// console.log(countedObj);
// 	return countedObj
// }
//
//
//
// const anagramChecker = (str1, str2) => {
// 	const arr1 = str1.split('');
// 	const arr2 = str2.split('');
//
// 	const counted1 = countUpCharacters(arr1);
// 	const counted2 = countUpCharacters(arr2);
//
// 	let isAnagram = true;
//
// 	for (char in counted1) {
// 		if (counted1[char] !== counted2[char]) {
// 			isAnagram = false;
// 		}
// 	}
// 	console.log(isAnagram);
// 	return isAnagram;
// }
//
//
// anagramChecker('Hello World', 'World Hello');
// anagramChecker('not even', 'close');



// const arrayChunking = (arr, size) => {
// 	const list = [];
// 	let chunk = [];
// 	let i = 0;
//
// 		while (list.length < (arr.length / size)) {
// 			chunk.push(arr[i]);
// 			i++
//
// 			if (chunk.length === size) {
// 				list.push(chunk);
// 				chunk = [];
// 			}
// 		}
// console.log(list);
// return list;
// }
//
//
// console.log(arrayChunking([1, 2, 3, 4 ], 2));



// const reverseWords = (phrase) => {
//   const arrayOfWords = phrase.split('');
//   let reversedPhrase = '';
//   for (var i = arrayOfWords.length - 1; i >= 0; i--) {
//     const reversedWord = arrayOfWords[i].split('').reverse();
//       reversedPhrase = reversedPhrase +  ' ' + reversedWord;
//   }
//   console.log(reversedPhrase);
//   return reversedPhrase;
// }
//
// reverseWords("I got this!")


// const capitalizeThePhrase = (phrase) => {
//   return phrase
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.substring(1))
//     .join(' ');
// }
//
// console.log(capitalizeThePhrase("i am not fucked"));


// const capitalize = phrase => {
//     const words = [];
//
//     for (let word of phrase.split(" "))
//         words.push(word[0].toUpperCase() + word.slice(1));
//
//     return words.join(" ");
// };
//
// console.log(capitalize('oh my god'));


// const alphabetPush = (phrase, int) => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const alphArray = alphabet.split('');
//   const wordArray = phrase.split('');
//   let shiftedArray = [];
//   for (var i = 0; i < wordArray.length; i++) {
//     if (wordArray[i] === ' ') {
//       shiftedArray.push(wordArray[i])
//     } else {
//       let position = alphArray.indexOf(wordArray[i]);
//       let shift = position += int;
//       while (shift > 26) {
//         shift = shift -= 26
//       }
//       shiftedArray.push(alphArray[shift - 1]);
//     }
//   }
//   console.log(shiftedArray.join(''));
//   return shiftedArray;
// }
//
// console.log(alphabetPush('i love juice', 100));


//Implement a function that add 1 to the array that represent
//each number in the array is each digit of number. e.g. [1,2,3,4] + 1 = [1,2,3,5]



// design a system to get the number of days between two dates.

// new Date("dateString") is browser-dependent and discouraged, so we'll write
// a simple parse function for U.S. date format (which does no error checking)
// function parseDate(str) {
//     var mdy = str.split('/');
//     return new Date(mdy[2], mdy[0]-1, mdy[1]);
// }
//
// function datediff(first, second) {
//     // Take the difference between the dates and divide by milliseconds per day.
//     // Round to nearest whole number to deal with DST.
//     return Math.round((second-first)/(1000*60*60*24));
// }
//
// alert(datediff(parseDate(first.value), parseDate(second.value)));



const parseDate = (date) => {
  const dateArr = date.split('-');
  const parsedDate = new Date(dateArr[0], dateArr[1]-1, dateArr[2])
  console.log(parsedDate);
  return parsedDate;
}

 const dateDistance = (date1, date2) => {
   const first = parseDate(date1);
   const second = parseDate(date2);

   console.log(Math.round(first - second) / (1000 * 60 * 60 * 24)); 
 }


console.log(dateDistance('2019-6-20', '2020-01-20'));


// Interview was just one question: writing code to generate fibonacci series.
