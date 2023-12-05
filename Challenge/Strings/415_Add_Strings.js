function addStrings(num1, num2) {
    let result = "";
    let carry = 0;

    // Make the lengths of num1 and num2 equal by padding with zeros
    while (num1.length < num2.length) {
        num1 = "0" + num1;
    }
    while (num2.length < num1.length) {
        num2 = "0" + num2;
    }

    // Iterate through the digits from right to left
    for (let i = num1.length - 1; i >= 0; i--) {
        const digit1 = parseInt(num1[i]);
        const digit2 = parseInt(num2[i]);

        // Calculate the sum of digits and the carry
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    // Add the final carry if any
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

// Example usage:
console.log(addStrings("18", "193")); // Output: "134"
console.log(addStrings("456", "77")); // Output: "533"
console.log(addStrings("0", "0"));   // Output: "0"
