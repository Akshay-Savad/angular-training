// Class Programming
class Student {
    sid: number;
    sName: string
    constructor(sid: number, sName: string){
        this.sid = sid;
        this.sName = sName;
    }

    show(){
        console.log(`Name: ${this.sName} ID: ${this.sid}`);
    }
}

// Creating Student object without spcifiying type
let std = new Student(1, 'Akshay');
std.show();

// Creating Student object with spcifiying type of class
let std1:Student = new Student(2, 'Aniketh');
std1.show();