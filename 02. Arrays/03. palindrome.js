const pal = (str) => {
  const checkP = str.split("").reverse().join("");
  if (str === checkP) {
    console.log(true);
  } else console.log(false);
};

pal("abba");
pal("hii");
