const capitalize = (str) => {
    let newWord = str.toLowerCase().split(" ").map( word => word[0].toUpperCase() + word.slice(1)). join(" ")
    return newWord
}

console.log(capitalize("hello there"))