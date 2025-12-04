const name ="Virat"
const repocount=50;
console.log(name + repocount + "Gangwar");
console.log(`My Name is ${name} and my repo count is ${repocount} Gangwar`);
const gamename = new String("Virat11");
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt('4'));
console.log(gamename.indexOf('t'));
//const newstring = gamename.substring('1','5');
const anotherString = gamename.slice('1','5');
console.log(anotherString);
const newstring = "     Virat Gangwar    ";
console.log(newstring);
console.log(newstring.trim());
console.log(newstring.includes("Gangwar"));
console.log(newstring.charCodeAt(4));