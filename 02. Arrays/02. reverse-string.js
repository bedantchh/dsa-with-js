// easy method
let str = "apple";
let str_arr = str.split("").reverse().join();
console.log(str_arr);

// with loop
let str_arr2 = str.split("");
let reversedStr = [];
for (let i = str_arr2.length - 1; i >= 0; i--) {
  reversedStr.push(str_arr2[i]);
}
console.log(reversedStr.join());
