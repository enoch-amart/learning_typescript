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
let student = new Student(1, "Enoch", "Amart");
console.log(student.fullName);
student.walk();
student.test();
//# sourceMappingURL=classes.js.map