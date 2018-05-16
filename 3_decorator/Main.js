let LegacyWorkingJustFineFile = require('./LegacyWorkingJustFine');
let LegacyWorkingJustFineInitialData = LegacyWorkingJustFineFile.LegacyWorkingJustFineInitialData;
let LegacyWorkingJustFine = LegacyWorkingJustFineFile.LegacyWorkingJustFine;

let DecoratedLegacyFile = require('./DecoratedLegacy');
let DecoratedLegacy = DecoratedLegacyFile.DecoratedLegacy;
let DecoratedInitialData = DecoratedLegacyFile.DecoratedInitialData;

let legacyInitialData = new LegacyWorkingJustFineInitialData();
let legacy = new LegacyWorkingJustFine(legacyInitialData);
legacy.save();

console.log("Logging legacy: ");
legacy.log();

let decoratedInitialData = new DecoratedInitialData();
let decorated = new DecoratedLegacy(decoratedInitialData);
decorated.save();

console.log("Logging decorated: ");
decorated.log();
