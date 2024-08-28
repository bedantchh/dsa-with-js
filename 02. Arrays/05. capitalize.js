const capitalize = (str) => {
    let cap = [];
    let newWord = str.toLowerCase().split(" ")
    console.log(newWord)
    for(let i=0;i<newWord.length;i++){
        cap.push(newWord[i].toUpperCase())
    }
    console.log(cap)

}

capitalize("hi i am bedant!")