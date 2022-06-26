// Template Strings

const product = "Coffee";
const price = 2.5;
const brand = "Starbucks";

function textFunction() {
    return "Text from function";
}

console.log(product + " $" + price + " Dollars, Brand: " + brand, textFunction());

console.log(`${product} $${price} Dollars, Brand: ${brand}, ${textFunction()}`);