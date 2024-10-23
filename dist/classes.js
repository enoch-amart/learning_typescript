"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    test() {
        console.log("Taking test, wellll");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student(1, "Abigail", "Yemoley"),
    new Teacher("Enoch", "Amarteifio"),
    new Principal("Nok", "Amart"),
]);
//# sourceMappingURL=classes.js.map