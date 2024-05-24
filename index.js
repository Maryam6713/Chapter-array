//-------------Nested Condition------------//
let num = 10;

if (num > 0) {
    console.log("Number is positive");
    if (num % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else if (num === 0) {
    console.log("Number is zero");
} else {
    console.log("Number is negative");
}

//---------------Array---------------//

var listArray = [
    ["Mango", "Orange ", "Banana"],
    ["Potato", "Ladyfinger", "Cocumber"],
    ["Chicken", "Beaf", "Fish"]
];

// Accessing elements in a nested array
console.log(listArray[0][0]); // Output: 1
console.log(listArray[1][2]); // Output: 6
console.log(listArray[2][1]); // Output: 8

