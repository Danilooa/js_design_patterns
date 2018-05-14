"use strict";
/**
 * 
 * A module is a piece of code that does some specific and correlated tasks.
 * For example, this module deals if the persistence operations regarding
 * the class Person. The revealing module pattern allows us to expose only the parts
 * of a module that must be exposed.
 * 
 */

//Here the modules status
let PersonRepository = function () {

    let _somePrivateMethod = function () {
        console.log('Here we are doing something that should not be public');
    }

    let save = function (person) {
        _somePrivateMethod();
        console.log("Saving: " + person.toString());
    }

    /*
    *
    * Here the magic happens, only the operations that should be public
    * will be returned as part of the module.
    * 
    */
    return {
        save: save
    };
}

// What is exported is actually an instance of the module since the "()" were used.
module.exports = PersonRepository();