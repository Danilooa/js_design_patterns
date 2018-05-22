"use strict";

let PersonRepository = require('./PersonRepository');

let personRepositoryCommand = function () {

    let CommandEnum = {
        SAVE: 'save',
        GET: 'get',
        LIST_ALL: 'listAll'
    }

    Object.freeze(CommandEnum);

    let commands = [];

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