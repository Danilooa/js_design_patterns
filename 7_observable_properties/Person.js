/**
 * The property enable of this class works like
 * the properties of languages such as Java ans C#.
 * To accomplish this property was replaced by a function.
 */
let person = function () {

    let that = this;

    this.id = -1;
    this.name = '';
    this.enableField = false;
    this.enableChangingCallbacks = [];
    this.enableChangedCallbacks = [];

    /**
     * If a value is passed, it will try to set a new value to enableField.
     * If not, the value of enableField will be returned.
     * Callbacks can be subscribed to run before and after the value change.
     * If any of the before callbacks return false, 
     * the value will not be effectively changed. 
     * 
     * @param {boolean} enable_ - indicates if a person is enable or unable
     */
    this.enable = function (enable_) {
        if (arguments.length == 0) {
            return that.enableField;
        }
        if (enable_ === that.enableField) {
            return;
        }
        if (!that.callEnableChangingCallbacks(enable_)) { return that.enableField; }
        that.enableField = enable_;
        that.callEnableChangedCallbacks(enable_);
    }

    this.callEnableChangingCallbacks = function (enable_) {
        for (let i = 0; i < that.enableChangingCallbacks.length; i++) {
            if (!that.enableChangingCallbacks[i].apply(that, [enable_])) {
                return false;
            }
        }
        return true;
    }

    this.callEnableChangedCallbacks = function (enable_) {
        for (let i = 0; i < that.enableChangedCallbacks.length; i++) {
            that.enableChangedCallbacks[i].apply(that, [enable_]);
        }
    }

    this.onEnableChanging = function (callback) {
        that.enableChangingCallbacks.push(callback);
    }

    this.onEnableChanged = function (callback) {
        that.enableChangedCallbacks.push(callback);
    }

}

module.exports = person;