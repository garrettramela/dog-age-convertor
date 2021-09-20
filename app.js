// The user's current age.
let myAge = 26;

// Creating the base early years.
let earlyYears = 2;

// Creating the adjusted early years.
earlyYears *= 10.5;

// Creating the base later years.
let laterYears = myAge - earlyYears;

// Creating the adjusted later years.
laterYears *= 4;

// Calculating the user's dog age using the adjusted early & later years.
myAgeInDogYears = earlyYears + laterYears;

// The user's first name.
myName = 'Garrett'.toLowerCase();

// Showing the result of the above analysis.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
