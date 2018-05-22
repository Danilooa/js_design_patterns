"use strict";

let personRepository = function () {

    let persistedPeople = [];

    let save = function (person) {
        if (persistedPeople[person.id]) {
            console.log("Updating person " + JSON.stringify(person));
            persistedPeople[person.id] = person;
            return;
        }
        console.log("Inserting person " + JSON.stringify(person));
        persistedPeople[person.id] = person;
    }

    let get = function (personId) {
        return persistedPeople[person.id];
    }

    let listAll = function () {
        return persistedPeople.slice(0);
    }

    let deleteAll = function () {
        persistedPeople = [];
        persistedPeople.length = 0;
    }

    return {
        save: save,
        get: get,
        listAll: listAll,
        deleteAll: deleteAll
    }
}

module.exports = personRepository();