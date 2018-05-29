"use strict";
/**
 * Decorated person that will publish in the channel
 * Mediator.publish(Mediator.ChannelEnum.COMPLETE while
 * being saved and enable
 */
let Mediator = require('./Mediator');
let Person = require('./Person');

function MediatedPerson(id, name) {
    Person.call(this, id, name);
}

MediatedPerson.prototype = Object.create(Person.prototype);

/**
 * Decorating the function save to publish in the
 * channel Mediator.ChannelEnum.COMPLETE
 */
MediatedPerson.prototype.save = function () {
    Person.prototype.save.call(this);
    if (this.enable === true) {
        Mediator.publish(Mediator.ChannelEnum.COMPLETE, this);
    }
}

module.exports = MediatedPerson;