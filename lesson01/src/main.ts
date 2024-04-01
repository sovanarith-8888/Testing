// class
class Coder{
  name: string;
  music: string; 
  age: number;
  lang: string;
  constructor(name: string, music: string, age: number, lang: string){
    this.name = name
    this.music = music
    this.age = age 
    this.lang = lang
  }
}

class Hospital{
  // use public contructor without member
  constructor(public doctor: string, public readonly time: number, private readonly pos: string,protected readonly lang: string){
    this.doctor = doctor;
    this.time = time;
    this.pos = pos;
    this.lang = lang
  }
}

const Rith = new Coder("Rith.KH","Rock",55,"Khm")
console.log(Rith)