"use strict";
// class
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
class Hospital {
    // use public contructor without member
    constructor(doctor, time, pos, lang) {
        this.doctor = doctor;
        this.time = time;
        this.pos = pos;
        this.lang = lang;
        this.doctor = doctor;
        this.time = time;
        this.pos = pos;
        this.lang = lang;
    }
}
const Rith = new Coder("Rith.KH", "Rock", 55, "Khm");
console.log(Rith);
