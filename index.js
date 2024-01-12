const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
let rest = 0;
const summ = 0;
let oddNumbers;
let numbers = [n1,n2,n3,n4];
let larger;

for(i=0; i < numbers.length; i++){
summ += numbers[i];
oddNumbers = numbers[i] % 2;
larger = 25 - numbers[i];

if(oddNumbers != 0){
    console.log(`${oddNumbers} is an odd number`);
}
if(larger > 25){
    console.log(`${larger} is larges than 25`);
}
let allDifferent = true;

    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            allDifferent = false;
        }
        Console.log(`The number ${allDifferent} is unic`);
    }


console.log(`The summ of all numbers is ${summ}`)

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
if (isSum50===50){
    console.log(`The result of the summ of all numbers is ${isSum50}`);
}
else {
    rest = 50 - isSum50;
    console.log(`"The summ of all numbers is ${rest}"`);
}

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0 || n4 % 2 != 0){
    console.log("Some or at last one number is odd");  
    let newon;
    for( i = 1; i < 5; i++) {
        
        newon = "n" + i;
        if (newon/2 != 0){
         
            console.log(`The odd number is ${newon} `)
        }
    }
}
else {
    console.log("All the numbers are even")
}
summ = n1+ n2 + n3 + n4;
console.log(`The summ of all numbers is ${summ}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

if (n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25){
console.log("Trere is a number biger than 25")
}
else{
    console.log("All the numbers are less than 25")
}
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained. summa = n1 + n2 + n3 + n4;




const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  console.log(summ)