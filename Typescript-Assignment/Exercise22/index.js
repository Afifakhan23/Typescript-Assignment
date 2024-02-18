// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Function to create a fruit object
function createFruit(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste,
    };
}
// Create an array of fruits
var fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
    createFruit("Grapes", "Purple/Green", "Sweet"),
    createFruit("Strawberry", "Red", "Sweet"),
];
// Access an invalid index
var invalidIndex = 10; // There are only 5 elements in the array, so this will cause an error
console.log("Fruit at index ".concat(invalidIndex, ":"), fruits[invalidIndex]);
// Print the fruits
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, ", Color: ").concat(fruit.color, ", Taste: ").concat(fruit.taste));
});
