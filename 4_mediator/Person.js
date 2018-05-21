"use strict";

function Person(id, name) {

    this.id = id;
    this.name = name;

    this.save = function () {
        console.log("Saving person ...");
    }

    this.toString = function () {
        return 'Person:' + JSON.stringify(this);
    }

}

module.exports = Person;