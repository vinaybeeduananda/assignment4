// ---------------assignment level 1------------
// 1.	Declare an empty array;
let arr = [];

// 2.	Declare an array with more than 5 number of elements
let arr1 = [1,2,3,4,5];

// 3.	Find the length of your array
// console.log(arr1.length)

// 4.	Get the first item, the middle item and the last item of the array
// console.log(arr1[0],arr1[2],arr1[4]);


// 5.	Declare an array called mixed Data Types, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = [1,true,3,'vinay',4,5];
// console.log(mixedDataTypes.length);

// 6.	Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']

// 7.	Print the array using console.log()
// console.log(itCompanies);

// 8.	Print the number of companies in the array
// console.log(itCompanies.length)

// 9.	Print the first company, middle and last company
//  firstcompany = itCompanies[0];
//  middlecompany = itCompanies[3];
//  lastcompany = itCompanies[6];
// // console.log(firstcompany,middlecompany,lastcompany);
// -----------------or----------
// console.log(itCompanies[0],itCompanies[3],itCompanies[6]);

// 10.	Print out each company
// for(let i =0 ; i<itCompanies.length;i++)
    // console.log(i+'.'+itCompanies[i]);

// 11.	Change each company name to uppercase one by one and print them out
const uppercaseCompanies = itCompanies.map((company) => company.toUpperCase());

// console.log(uppercaseCompanies);

// 12.	Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
// sentence = itCompanies.toString();
// console.log(sentence + ' are big IT companies')

// 13.	Check if a certain company exists in the itCompanies array. If it exists return the company else return a company is not found
let enteredItCompanyName = "Accenture"
let found = false;
for(let i=0; i<itCompanies.length;i++){
    if(itCompanies[i] === enteredItCompanyName ){
        found = true;
        break;
    }
    else
    found=false;

}

if(found)
console.log("found: " + enteredItCompanyName)
else
console.log(enteredItCompanyName+" not found: "  )


// 14.	Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];

for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let count = 0;
  for (let j = 0; j < company.length; j++) {
    if (company[j] === 'o') {
      count++;
    }
  }
  if (count >= 1) {
    filteredCompanies.push(company);
  }
}
console.log(filteredCompanies);
// console.log(itCompanies);


// 15.	Sort the array using sort() method
// sortCompanies = itCompanies.sort();
// console.log(sortCompanies);

// 16.	Reverse the array using reverse() method
// reverseCompanies = itCompanies.reverse();
// console.log(reverseCompanies);

// 17.	Slice out the first 3 companies from the array
// sliceFirstCompanies = itCompanies.slice(0,3);
// console.log(sliceFirstCompanies);

// // 18.	Slice out the last 3 companies from the array
// sliceLastCompanies = itCompanies.slice(4,7);
// console.log(sliceLastCompanies);

// 19.	Slice out the middle IT company or companies from the array
// console.log(itCompanies.slice(3,4));

// 20.	Remove the first IT company from the array
// removeFirstCompany=itCompanies.shift();
// removeFirstCompany=itCompanies.splice(0,1);
//  console.log(removeFirstCompany);
// console.log(itCompanies);

// 21.	Remove the middle IT company or companies from the array
//  itCompanies.splice(3,1);
// console.log(removeMiddleCompany);
// console.log(itCompanies);


// 22.	Remove the last IT company from the array
// console.log(itCompanies.splice(6,7));
// itCompanies.splice(6,7);
// console.log(itCompanies);


// 23.	Remove all IT companies
// itCompanies.splice(0)
// ----------------0r----------------
// itCompanies.splice(0,7)
// console.log(itCompanies)


// -----------------assignment level 2-----------


// 1.	Create a separate states.js file and store the states array in to this file, create a separate file fullstack_techs.js and store the fullstackTechs array in to this file. Access both file in main.js file
const states = require('./states');

const fullStackTechs = require('./fullStackTechs');



// 2.	First remove all the punctuations and change the string to array and count the number of words in the array
	let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  text = text.replace(/[^\w\s]/g, ''); // Removes all punctuations from the string
  const words = text.split(' '); // Converts the string into an array of words using space as the separator
  const wordCount = words.length; // Counts the number of words in the array
  
  console.log(wordCount);
console.log(words)

// 6.	In the following shopping cart add, remove, edit items
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// o	add 'Meat' in the beginning of your shopping cart if it has not been already added
// if (shoppingCart.indexOf('Meat')===-1)
// shoppingCart.unshift('Meat');
// console.log(shoppingCart)

// o	add Sugar at the end of you shopping cart if it has not been already added
// if (shoppingCart.indexOf('Sugar')===-1)
// shoppingCart.push('Sugar');
console.log(shoppingCart);

// o	remove 'Honey' if you are allergic to honey
// const allergicToHoney = true;

// if (allergicToHoney ) {
//   shoppingCart.splice(3,1);
// }

// console.log(shoppingCart); 


// o	modify Tea to 'Green Tea'
// shoppingCart[2]='GreenTea';
// console.log(shoppingCart);

// console.log(shoppingCart);

// 7.	In states array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the states list.

if (states.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    states.push('Ethiopia');
  }
  
  console.log(states); 

// 8.	In the fullstackTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (fullStackTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
  } else {
    states.push('Sass');
  }
  



// 9.	Concatenate the following two variables and store it in a fullStack variable.
	const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
	const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);



//-------------------- Assignment: Level 3-----------------------------


// 1.	The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// o	Sort the array and find the min and max age
ages.sort();
console.log(ages);
// for min age-----------
min = ages[0]
for(i=0;i<ages.length;i++){
    if(ages[i]<min)min=ages[i];}
    console.log(min)
    // for max age---------------
max = ages[0]
for(i=0;i<ages.length;i++){
    if(ages[i]>max)max=ages[i];}
    console.log(max)

// o	Find the median age(one middle item or two middle items divided by two)
// const length = ages.length;
// const middle = Math.floor(length/2);
// if (length % 2 ===0){
//     const median = (ages[middle-1] + ages[middle])/2;
//     console.log(median);
// }else{
//     const median = ages[middle];
//     console.log(median);
// }


// o	Find the average age(all items divided by number of items)
function calculateAverage(ages){
    let total = 0;
    let count = 0;
    ages.forEach(function(item,index){
      total += item;
      count++;
    });
    return total/count;
}
average = calculateAverage(ages);
console.log(average);

// o	Find the range of the ages(max minus min)
range = max - min;
console.log(range)

// o	Compare the value of (min - average) and (max - average),
let minav = min - average;
console.log(minav);
let maxav = max - average;
console.log(maxav);
const result = minav > maxav ? 'minav is greater than maxav' : 'maxav is greater than minav';
console.log(result);

//  use abs() method 
// 1.Slice the first ten states from the states array 
const firstTenStates = states.slice(0, Math.abs(-10));

console.log(firstTenStates);


// 2.	Find the middle state(s) in the state 
if (states.length % 2 === 0) {
    const middleIndex1 = states.length / 2;
    const middleIndex2 = states.length / 2 - 1;
    console.log(states[middleIndex1], states[middleIndex2]);
  } else {
    const middleIndex = Math.floor(states.length / 2);
    console.log(states[middleIndex]);
  }
// 3.	Divide the states array into two equal arrays if it is even. If states array is not even, one more state for the first half.
let middleIndex;
if (states.length % 2 === 0) {
  middleIndex = states.length / 2;
} else {
  middleIndex = Math.floor(states.length / 2) + 1;
}

const firstHalf = states.slice(0, middleIndex);
const secondHalf = states.slice(middleIndex);

console.log(firstHalf);
console.log(secondHalf);

