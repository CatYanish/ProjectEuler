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
  evens.reduce(reducer);
}
