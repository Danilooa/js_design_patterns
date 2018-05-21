"use strict";

let Person = require('./Person');
let AuditingService = require('./Services').AuditingService;
let LoggingService = require('./Services').LoggingService;
let NotificationService = require('./Services').NotificationService;

let person = new Person();
person.save();

let auditingService =  new AuditingService();
auditingService.audity();


