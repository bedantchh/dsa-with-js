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

  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
}

const myNewArray = new Myarray();
// console.log(MyNewArray);

myNewArray.push("Apple");
myNewArray.push("Mango");
myNewArray.push("Banana");

// console.log(myNewArray);

// myNewArray.get(0);

// myNewArray.pop();
// console.log(myNewArray);

console.log(myNewArray);
console.log(myNewArray.shift());
console.log(myNewArray);
