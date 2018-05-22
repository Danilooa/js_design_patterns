"use strict";

let PersonRepository = require('./PersonRepository');
let Person = require('./Person');

let person1 = new Person(1, 'Person 1');
let person2 = new Person(2, 'Person 2');
let person3 = new Person(3, 'Person 3');

PersonRepository.save(person1);
PersonRepository.save(person2);
PersonRepository.save(person3);

console.log('All persisted people:');
console.log(PersonRepository.listAll());



