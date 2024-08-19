const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

const searchForItems = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found: ${item}`);
    }
  }

  for (let index = 0; index < groceries.length; index++) {
    if (groceries[i] === item) {
      console.log(`Found: ${item}`);
    }
  }
};

// This takes O(2n)
// Drop the constants so it becomes O(n) From O(2n)
