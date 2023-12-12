
// split strings

const str = "Hello Dev Newbs! 😃";

// separator is not provided
let splitted1 = str.split();
console.log(splitted1);
// ["Hello Dev Newbs! 😃"]

// separator is empty string
let splitted2 = str.split("");
console.log(splitted2);
// ["H", "e", "l", "l", "o", " ", "D", "e", "v", " ", "N", "e", "w", // "b", "s", "!", " ", "\ud83d", "\ude03"]

// separator is empty space
let splitted3 = str.split(" ");
console.log(splitted3);
// ["Hello", "Dev", "Newbs!", "😃"]

// separator is RegExp specifying (optional) empty space + capital letter
let splitted4 = str.split(/[\s]*[A-Z]/);
console.log(splitted4);
// ["", "ello", "ev", "ewbs! 😃"]

// separator is empty string & limit is 5 first letters
let splitted5 = str.split("", 5);
console.log(splitted5);
// ["H", "e", "l", "l", "o"]

const months = 'January,February ,March,April, May, June , July,August,  ...';
const re1 = /\s*,\s*/;
// ** expression “\s*” to remove one or more potential empty spaces
const re2 = /\s*(,)\s*/;
const splittedWithoutComma = months.split(re1)
console.log(splittedWithoutComma);
// ["January", "February", "March", "April", "May", "June", "July", // "August", "..."]
const splittedWithComma = months.split(re2)
console.log(splittedWithComma);
// ["January", ",", "February", ",", "March", ",", "April", ",", 
// "May", ",", "June", ",", "July", ",", "August", ",", "..."]


const numbers = 'One Two Three 4 Five 6 Seven Eight 9 Ten';
// ** expression “\s*” to remove one or more potential empty spaces
const re = /\s*(\d+)\s*/;
const splittedWithoutSpaces = numbers.split(re);
console.log(splittedWithoutSpaces);
// ["One  Two Three", "4", "Five", "6", "Seven Eight", "9", "Ten"]




