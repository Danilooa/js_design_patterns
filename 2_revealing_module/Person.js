"use strict";

let PersonRepository = require('./PersonRepository');

function Person(id, name) {

    this.id = id;
    this.name = name;

    // Here the module is used
    this.save = function () {
        PersonRepository.save(this);
    }

    this.toString = function () {
        return 'Person:' + JSON.stringify(this);
    }

}

module.exports = Person;