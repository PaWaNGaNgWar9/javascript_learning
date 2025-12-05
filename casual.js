const arr = [1, 2, 3];

arr.map(num => num * 2);
arr.filter(num => num > 1);
 arr.reduce((acc, cur) => acc + cur, 0);
console.log(arr);
 
const obj = {
    name : "Virat",
    course: "Js",
    courseInstuctor :"Hitesh" 
}

const { courseInstuctor , name} = obj;
console.log(courseInstuctor);