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

LegacyWorkingJustFine.prototype.log = function (this_) {
    if (!this_) {
        this_ = this;
    }
    console.log("Logging: " + JSON.stringify(this_));
}

LegacyWorkingJustFine.prototype.save = function (this_) {
    if (!this_) {
        this_ = this;
    }
    console.log('Saving legacy:');
    this.log(this_);
}

module.exports = {
    LegacyWorkingJustFineInitialData: LegacyWorkingJustFineInitialData,
    LegacyWorkingJustFine: LegacyWorkingJustFine
}
