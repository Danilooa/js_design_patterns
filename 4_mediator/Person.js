"use strict";

function Person(id, name) {

    this.id = id;
    this.name = name;
    this.enabled = false;

}

Person.prototype.save = function () {
    console.log("Saving person ..." + JSON.stringify(this));
}

module.exports = Person;