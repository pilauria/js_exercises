class Letter {
  constructor(number) {
    this.number = number;
  }
  getNumber() {
    return this.number;
  }
}

let a = new Letter(1);
let b = new Letter(2);
let z = new Letter(26);

console.log(a.getNumber(), b.getNumber(), z.getNumber());
