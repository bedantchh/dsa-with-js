function findPairs(arr) {
  //  O(n^2)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]},${arr[j]}`);
    }
  }
}

const pairs = [1, 2, 3, 4, 5];

console.log(findPairs(pairs));
