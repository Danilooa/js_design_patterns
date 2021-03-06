"use strict";

let PersonRepositoryCommand = require('./PersonRepositoryCommand');
let PersonRepository = require('./PersonRepository');
let Person = require('./Person');

let person1 = new Person(1, 'Person 1');
let person2 = new Person(2, 'Person 2');
let person3 = new Person(3, 'Person 3');

/**
 * Executing and registering 'SAVE' commands
 */
PersonRepositoryCommand.execute(PersonRepositoryCommand.CommandEnum.SAVE, person1);
PersonRepositoryCommand.execute(PersonRepositoryCommand.CommandEnum.SAVE, person2);
PersonRepositoryCommand.execute(PersonRepositoryCommand.CommandEnum.SAVE, person3);

console.log('All persisted people before deletion:');

/**
 * Checking if the person has been really saved
 */
console.log(PersonRepositoryCommand.execute(PersonRepositoryCommand.CommandEnum.LIST_ALL));

PersonRepository.deleteAll();
console.log('All persisted people after deletion:');
console.log(PersonRepositoryCommand.execute(PersonRepositoryCommand.CommandEnum.LIST_ALL));

/**
 * Recalling all the commands to recovery the people lost when the function
 * deleteAll was called
 */
PersonRepositoryCommand.redoAll();

console.log('All persisted people after redoAll:');
console.log(PersonRepositoryCommand.execute(PersonRepositoryCommand.CommandEnum.LIST_ALL));



