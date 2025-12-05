const mysym= Symbol("key1");
const jsuser = {
    name:"Virat",
    [mysym]:"Value1",
    age:25,
    location:"India"
};
console.log(jsuser["name"]);
console.log(jsuser.name);
console.log(jsuser[mysym]);