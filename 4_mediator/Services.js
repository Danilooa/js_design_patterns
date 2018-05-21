let NotificationService = function () {
    this.notify = function () {
        console.log("Notifying ... ");
    };
};

let LoggingService = function () {
    this.log = function () {
        console.log("Logging ... ");
    };
};

let AuditingService = function () {
    this.audity = function () {
        console.log("auditing ... ");
    };
};

module.exports = {
    NotificationService: NotificationService,
    LoggingService: LoggingService,
    AuditingService: AuditingService
}