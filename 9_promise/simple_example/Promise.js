let Promise = function () {

    let Status = {
        IN_PROGRESS: 'progress',
        DONE: 'done',
        FAILED: 'failed',
    };

    let data,
        done = [],
        fail = [],
        status = Status.IN_PROGRESS;

    /**
     * Add a function to be executed when the promise succeeds. 
     * If the promise is not in progress anymore, 
     * it will not add the function but will run it immediately 
     * passing the data from when the promise succeded.
     * If when this function is called the promise has already failed, nothing
     * will ever be executed
     */
    this.done = function (fn) {
        done.push(fn);

        if (status === Status.DONE) {
            fn(data);
        }

        return this;
    };

    /**
     * Add a function to be executed when the promise fails. 
     * If the promise is not in progress anymore, 
     * it will not add the function but will run it immediately 
     * passing the data from when the promise failed.
     * If when this function is called when the promise has already succeeded, nothing
     * will ever be executed.
     */
    this.failed = function (fn) {
        fail.push(fn);

        if (status === Status.FAILED) {
            fn(data);
        }

        return this;
    };

    /**
     * Tells the promise that its execution was a success.
     * It is done by changing the promise's status from 'IN_PROGRESS'
     * to 'DONE' and calling all the done functions with the informed result.
     * A promise cannot not run more than once, then if this function is called a second time
     * it will throw an exception.
     * 
     * @param {any} result - data passed when the promise succeeds 
     */
    this.resolve = function (result) {
        if (status !== Status.IN_PROGRESS) {
            throw 'Promise has already completed with a status of ' + status + ' and cannot resolve';
        }

        status = Status.DONE;
        data = result;

        for (var i = 0, il = done.length; i < il; i++) {
            done[i](data);
        }

        return this;
    };

    /**
     * Tells the promise that its execution failed.
     * It is done by changing the promise's status from 'IN_PROGRESS'
     * to 'FAILED' and calling all the fail functions with the informed result.
     * A promise cannot not run more than once, then if this function is called a second time
     * it will throw an exception.
     * 
     * @param {any} reason - data containing the reason the fail
     */
    this.fail = function (reason) {
        if (status !== Status.IN_PROGRESS) {
            throw 'Promise has already completed with a status of ' + status + ' and cannot resolve';
        }

        status = Status.FAILED;
        data = reason;

        for (var i = 0, il = done.length; i < il; i++) {
            fail[i](data);
        }

        return this;
    };
};

module.exports = Promise;