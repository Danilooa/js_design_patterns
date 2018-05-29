"use strict";

/**
 * This class is designed to chain methods.
 * After a method of this class executes, it returns the calculator
 * instance itself, in this way the methods can be
 * called in sequence.
 * 
 * @param {number} initialValue
 */
let calculator = function (initialValue) {

    let that = this;
    this.value = initialValue;

    this.add = function (value) {
        that.value = that.value + value;
        return that;
    };

    this.subtract = function (value) {
        that.value = that.value - value;
        return that;
    };

    this.divide = function (value) {
        that.value = that.value / value;
        return that;
    };

    this.multiply = function (value) {
        that.value = that.value * value;
        return that;        
    }

    this.getValue = function() {
        return that.value;
    }
}

module.exports = calculator;