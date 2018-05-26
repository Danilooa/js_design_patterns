"use strict";

let Calculator = require('./Calculator');

let calculator = new Calculator(3);

console.log(" (3 + 4 + 1) / 2 = " + 
    /**
     * The methods are called in sequence
     */
    calculator
        .add(4)
        .add(1)
        .divide(2)
        .getValue()
);
