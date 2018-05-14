"use strict";

/**
 * Decorator pattern comes in hand when you want to
 * add some extra behaviour to an inherited function.
 * For example: the function DecoratedLegacy.prototype.save
 * will add an extra behaviour to LegacyWorkingJustFine.prototype.save.
 */
let LegacyWorkingJustFineFile = require('./LegacyWorkingJustFine');
let LegacyWorkingJustFineInitialData = LegacyWorkingJustFineFile.LegacyWorkingJustFineInitialData;
let LegacyWorkingJustFine = LegacyWorkingJustFineFile.LegacyWorkingJustFine;

/**
 * The data used to iniate a DecoratedLegacy
 * will be decorated. It means that
 * all the properties of LegacyWorkingJustFineInitialData will be
 * used while an extra property will be available.
 */
function DecoratedInitialData() {
    let decoratedInitialData = new LegacyWorkingJustFineInitialData();
    decoratedInitialData.oneMoreProperty = '';
    return decoratedInitialData;
};

function DecoratedLegacy(decoratedInitialData) {
    /**
     * Calling LegacyWorkingJustFine constructor to
     * set the state of the inherited properties
     */
    LegacyWorkingJustFine.call(this, decoratedInitialData);
    this.oneMoreProperty = decoratedInitialData.oneMoreProperty;
}
DecoratedLegacy.prototype = Object.create(LegacyWorkingJustFine.prototype);

/**
 * Here is the method which is actually being decorated.
 * When it runs, you will see that LegacyWorkingJustFine.prototype.save
 * will also run
 */
DecoratedLegacy.prototype.save = function () {
    console.log("---- DecoratedLegacy.prototype.save (beginning) ----");
    LegacyWorkingJustFine.prototype.save(this);
    console.log('Saving decorated: ');
    console.log("---- DecoratedLegacy.prototype.save (end) ----");
}

module.exports = {
    DecoratedInitialData: DecoratedInitialData,
    DecoratedLegacy: DecoratedLegacy
}
