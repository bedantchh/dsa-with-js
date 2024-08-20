class Myarray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    // console.log(this.data[this.length]);
    this.length++;
    return this.length;
  }

  get(index) {
    this.length = index;
    console.log(this.data[this.length]);
  }
}

const myNewArray = new Myarray();
// console.log(MyNewArray);

myNewArray.push("Apple");
myNewArray.push("Mango");
myNewArray.push("Banana");

// console.log(myNewArray);

myNewArray.get(0);
