//charAt()
const kalimat = 'HALO SAYA TIYAS EKA RAMADHAN';
const gas = 8;
console.log(`The character at index ${gas} is ${kalimat.charAt(gas)}`);

//concat(string)
const arr1 = ['Tyas', 'Eka', 'Ramadhan'];
const arr2 = ['Eka', 'Ramadhan', 'Tyas'];
const arr3 = ['Ramadhan', 'Tyas', 'Eka'];
const arr4 = arr3.concat(arr1);
console.log(arr4);

//indexOf(string)
const S = 'Eka';
const P = kalimat.indexOf(5);
console.log('index pertama dalam kata "${S}" adalah ${P}');

//substring()
console.log(kalimat.substring(0, 6));
console.log(kalimat.substring(11));

//substr
console.log(kalimat.substr(1, 4));
console.log(kalimat.substr(11));

//touppercase()
console.log(kalimat.toUpperCase());

//tolowercase()
console.log(kalimat.toLowerCase());

//trim
const sakit = '   SAYA ORANG BANDUNG   ';
console.log(sakit);
console.log(sakit.trim());