"use strict";

let PersonRepository = require('./PersonRepository');

function Person(id, name) {

    this.id = id;
    this.name = name;

    this.save = function () {
        PersonRepository.save(this);
    }

    // Here the module is used
    this.toString = function () {
        return 'Person:' + JSON.stringify(this);
    }

}

module.exports = Person;