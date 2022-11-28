function rot13(str) {

//let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



//create an accumulator;

let solved = "";

//iterate through the alphabets 

for (let i = 0; i < str.length; i++) {

let character = str[i];

let asciiNum = character.charCodeAt();

if (asciiNum >= 65 && asciiNum <= 77) {

solved += String.fromCharCode(asciiNum + 13);

} else if (asciiNum >= 78 && asciiNum <= 90) {

  solved += String.fromCharCode(asciiNum - 13);

  

} else {

  solved += character;

  

}



}

  return solved;

}



console.log(rot13("SERR PBQR PNZC"));
