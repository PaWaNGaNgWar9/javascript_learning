const arr=[1, 2, 3, 4, 5];
for(let num of arr){
    console.log(num*2);
}
// Map
const map = new Map();
map.set('In',"India");
map.set('USA', "United States");
map.set('Pak',"Pakistan"); 
console.log(map);
for(let [key , value] of map){
    console.log(key+":"+ value)
}
// not use in Object
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in obj){
    console.log(key +":"+obj[key]);
}
