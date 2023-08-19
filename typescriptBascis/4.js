// Class Programming
var Student = /** @class */ (function () {
    function Student(sid, sName) {
        this.sid = sid;
        this.sName = sName;
    }
    Student.prototype.show = function () {
        console.log("Name: ".concat(this.sName, " ID: ").concat(this.sid));
    };
    return Student;
}());
// Creating Student object without spcifiying type
var std = new Student(1, 'Akshay');
std.show();
// Creating Student object with spcifiying type of class
var std1 = new Student(2, 'Aniketh');
std1.show();
