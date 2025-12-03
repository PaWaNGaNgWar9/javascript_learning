// stack.js
let Myname ="Virat Gangwar";
let anotherName = Myname;
console.log(anotherName);
anotherName ="Pawan gangwar";
console.log(Myname);
console.log(anotherName);
// heap.js
let person1={
    name:"Virat Gangwar",
    age:24
}
let person2 = person1;
person2.age=25;
console.log(person1.age);
console.log(person2.age);