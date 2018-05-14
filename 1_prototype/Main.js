let Person = require('./Person');

let person1 = new Person(1, 'John from nowhere');
let person2 = new Person(2, 'David from nowhere');

console.log(person1.toString());
person1.save();

console.log(
    '"replicatedForEachInstance" is not the same for all the instances: ' +
    (person1.replicatedForEachInstance === person2.replicatedForEachInstance)
);

console.log(
    'But "save" is the same for all the instances: ' +
    (person1.save === person2.save)
);