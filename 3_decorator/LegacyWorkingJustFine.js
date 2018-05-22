"use strict";

/** 
 * Data used to construct 
 * LegacyWorkingJustFine objects
 */
function LegacyWorkingJustFineInitialData() {
    this.legacyId = -1;
    this.legacyName = '';
    this.enable = false;
};

function LegacyWorkingJustFine(legacyWorkingJustFineInitialData) {
    this.legacyId = legacyWorkingJustFineInitialData.legacyId;
    this.legacyName = legacyWorkingJustFineInitialData.legacyName;
    this.enable = legacyWorkingJustFineInitialData.enable;
}

LegacyWorkingJustFine.prototype.log = function () {
    console.log("Logging: " + JSON.stringify(this));
}

LegacyWorkingJustFine.prototype.save = function () {
    console.log('Saving legacy:');
    LegacyWorkingJustFine.prototype.log.call(this);
}

module.exports = {
    LegacyWorkingJustFineInitialData: LegacyWorkingJustFineInitialData,
    LegacyWorkingJustFine: LegacyWorkingJustFine
}
