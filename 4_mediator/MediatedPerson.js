"use strict";

let Mediator = require('./Mediator');
let Person = require('./Person');

function MediatedPerson(id, name) {
    Person.call(this, id, name);
}

MediatedPerson.prototype = Object.create(Person.prototype);

MediatedPerson.prototype.save = function () {
    Person.prototype.save.call(this);
    if (this.enabled === true) {
        Mediator.publish(Mediator.ChannelEnum.COMPLETE, this);
    }
}

module.exports = MediatedPerson;