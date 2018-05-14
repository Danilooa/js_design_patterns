// To see the explanation look at ./PersonRepository

let Person = require('./Person');
let PersonRepository = require('./PersonRepository');

let person1 = new Person(1, 'John from nowhere');
let person2 = new Person(2, 'Daisy from nowhere');

person1.save();
person2.save();

/**
 * 
 * This is not going to work since "_somePrivateMethod" was not returned
 * as a part of the PersonRepository. 
 * 
 */
PersonRepository._somePrivateMethod();

