"use strict";

let Services = require('./Services');
let Mediator = require('./Mediator');

let Person = require('./Person');
let MediatedPerson = require('./MediatedPerson');

/**
 * Subscribing Services.AuditingService to listen the
 * channel Mediator.ChannelEnum.COMPLETE
 */
Mediator.subscribe(
    Mediator.ChannelEnum.COMPLETE,
    Services.AuditingService,
    Services.AuditingService.audity);

/**
 * Subscribing Services.LoggingService to listen the
 * channel Mediator.ChannelEnum.COMPLETE
 */
Mediator.subscribe(
    Mediator.ChannelEnum.COMPLETE,
    Services.LoggingService,
    Services.LoggingService.log);

/**
 * Services.NotificationService to listen the
 * channel Mediator.ChannelEnum.COMPLETE
 */
Mediator.subscribe(
    Mediator.ChannelEnum.COMPLETE,
    Services.NotificationService,
    Services.NotificationService.notify);

let person1 = new Person(1, 'Person 1');
person1.save();


let mediatedPersonUnableDisabled = new MediatedPerson(2, 'MediatedPersonUnableDisabled');
mediatedPersonUnableDisabled.save();

let mediatedPersonUnableEnable = new MediatedPerson(3, 'MediatedPersonUnableEnable');
mediatedPersonUnableEnable.enable = true;

/**
 * Here an event will be propagated
 */
mediatedPersonUnableEnable.save();

let person2 = new Person(4, 'Person 4');
person2.save();

