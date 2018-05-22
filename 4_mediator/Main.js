"use strict";

let Services = require('./Services');
let Mediator = require('./Mediator');

let Person = require('./Person');
let MediatedPerson = require('./MediatedPerson');

Mediator.subscribe(
    Mediator.ChannelEnum.COMPLETE,
    Services.AuditingService,
    Services.AuditingService.audity);

Mediator.subscribe(
    Mediator.ChannelEnum.COMPLETE,
    Services.LoggingService,
    Services.LoggingService.log);

Mediator.subscribe(
    Mediator.ChannelEnum.COMPLETE,
    Services.NotificationService,
    Services.NotificationService.notify);

let person1 = new Person(1, 'Person 1');
person1.save();


let mediatedPersonUnableDisabled = new MediatedPerson(2, 'MediatedPersonUnableDisabled');
mediatedPersonUnableDisabled.save();

let mediatedPersonUnabledEnabled = new MediatedPerson(3, 'MediatedPersonUnabledEnabled');
mediatedPersonUnabledEnabled.enabled = true;
mediatedPersonUnabledEnabled.save();

let person2 = new Person(4, 'Person 4');
person2.save();

