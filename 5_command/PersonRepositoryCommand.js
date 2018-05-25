"use strict";

let PersonRepository = require('./PersonRepository');

/**
 * An decorator that wrappers the class Person repository.
 * It is able to record all the calls to its functions
 * recalling them with the same paremeters passed originally.
 * 
 */
let personRepositoryCommand = function () {

    let CommandEnum = {
        SAVE: 'save',
        GET: 'get',
        LIST_ALL: 'listAll'
    }

    Object.freeze(CommandEnum);

    let commands = [];

    /**
     * If commandEnum doesn't exist, throws an Exception.
     * 
     * Register t
     * 
     * @param {CommandEnum} commandEnum - Command to be executed and registered
     */
    let execute = function (commandEnum) {

        let args = Array.prototype.slice.call(arguments, 1);

        if (!PersonRepository[commandEnum]) {
            throw 'Command "' + commandEnum + '" not found';
        }
        commands.push({
            command: PersonRepository[commandEnum],
            args: args
        });
        return PersonRepository[commandEnum].apply(commandEnum, args);
    }

    /**
     * Recall all the functions which have already been 
     * called passing the exact same parameters which have been
     * passed to original calls.
     */
    let redoAll = function () {
        for (let indexCommand = 0; indexCommand < commands.length; indexCommand++) {
            let command = commands[indexCommand];
            command.command.apply(command.command, command.args);
        }
    }

    return {
        execute: execute,
        CommandEnum: CommandEnum,
        redoAll: redoAll
    }

}

module.exports = personRepositoryCommand();