function convertToRoman(num) {

  const romanTable = {

    M: 1000,

    CM: 900,

    D: 500,

    CD: 400,

    C: 100,

    XC: 90,

    L: 50,

    XL: 40,

    X: 10,

    IX: 9,

    V: 5,

    IV: 4,

    I: 1

  };



  let romanWord = "";

for (let key in romanTable) {

  let value = romanTable[key];

  //console.log(key, value);



  while (num >= value) {

    romanWord += key;

    num -= value;

    //console.log("num is decreased: ", num);

  }

}



return romanWord;

}



console.log (convertToRoman(3));
