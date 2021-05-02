// function to obtain the square root of an array of numbers
const bases = [12,22,32,2,1,6,0];
console.log(bases);
let sqrtOfNumbers = bases.map( element =>{
    return Math.sqrt(element);
});
console.log(sqrtOfNumbers);

// funcion to return numbers less than 100 (filter function)
const numbers = [100, 7, 8, 45, 14, 12, 87, 300, 524, 2000];
console.log(numbers);
// Imperative function ----------------------------
function lessThanHundred(numbers) {
  let lessThanH = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 100) {
      lessThanH.push(numbers[i]);
    }
  }
  return lessThanH;
}
let lessThan_100 = lessThanHundred(numbers);
console.log("Imperative function...");
console.log(lessThan_100);
//-------------------------------------------------

//Using filter function
let lessThan100 = numbers.filter((element) => element < 100);
console.log("Using filter function...");
console.log(lessThan100);
//-------------------------------------------------

// Reduce function

const numbers2 = [2, 5, 80, 6, 7];
console.log(numbers2);
let offset = 0; // This is the initial value of the acumulator, couldg be any number
let totalAdd = numbers2.reduce((acumulator, element) => {
  return acumulator + element;
}, offset);
console.log(totalAdd);
