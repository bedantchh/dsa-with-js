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
    return this.data[index];
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myNewArray = new Myarray();
// console.log(MyNewArray);

myNewArray.push("Apple");
myNewArray.push("Mango");
myNewArray.push("Banana");

// console.log(myNewArray);

myNewArray.get(0);

myNewArray.pop();
console.log(myNewArray);
