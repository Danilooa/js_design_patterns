"use strict";

let Person = require('./Person');

let person = new Person();

person.id = -1;
person.name = '';

person.onEnableChanging(function (enable) {
    console.log(
        "------------------------" +
        "\nThis is running before the enable change." +
        "\nThe enable value is: " + enable +
        "\nIt will allow the enable to be changed." +
        "\n------------------------"
    );
    return true;
});

person.onEnableChanged(function (enable) {
    console.log(
        "------------------------" +
        "\nThe enable value is now " + enable +
        "\n------------------------"
    );
});

console.log("Using property to retrieve the value: " + person.enable());

person.enable(true);
