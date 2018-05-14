"use strict";

/**
 * The prototype model is used mainly for creating objects in performance-intensive situations.
 * The reason for that is the fact the functions defined in the prototype of a class
 * will be not replicated for each instance as the prototype object is shared among all 
 * the instances of that class. It is not for functions that are declared inside the body of class
 * since they will be replicated any time a new instance is created.
 */

function Person(id, name) {
    this.id = id;
    this.name = name;

    /**
     * Each time a new instance of person is created a new different
     * instance of "replicatedForEachInstance" will be also created.
     * Thus, this code is only copying a structure.
     */
    this.replicatedForEachInstance = function () {
        console.log('Doing something ...');
    }
}

/**
 * On the other hand, "toString" and "save" will the same
 * functions for all the instances of Person. It happens because
 * Person.prototype is the same of object for all the instances of Person
 */
Person.prototype.toString = function () {
    return 'Person:' + JSON.stringify(this);
}
Person.prototype.save = function () {
    console.log("Saving " + this.toString());
}

module.exports = Person;