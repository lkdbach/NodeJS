'use strict';

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
//
// Person.prototype.greet = function () {
//     console.log('Hello ' + this.firstName + ' ' + this.lastName);
// };
//
// let john = new Person('bach', 'le');
// john.greet();



let Greeter = require('./greetr');

let greeter1 = new Greeter();

greeter1.on('greet', function (data) {
     console.log('Someone greeted: ', data);
});

greeter1.greet('tony');
