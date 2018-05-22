let services = function () {

    let NotificationService = function (person) {
        this.notify = function (person) {
            console.log("Notifying ... " + JSON.stringify(person));
        };
    };

    let LoggingService = function (person) {
        this.log = function (person) {
            console.log("Logging ... " + JSON.stringify(person));
        };
    };

    let AuditingService = function (person) {
        this.audity = function (person) {
            console.log("auditing ... " + JSON.stringify(person));
        };
    };

    return {
        NotificationService: new NotificationService(),
        LoggingService: new LoggingService(),
        AuditingService: new AuditingService()
    }
}

module.exports = services();