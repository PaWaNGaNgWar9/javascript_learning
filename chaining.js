const num = [1,2,3,4,5,6,7,8,9];
const multi= num.map((a)=>a+1)
.map((b)=>b+1)
.filter((c)=> c>5)
console.log(multi);
// reduce
const mynum=[1,2,3,4,56,7]
let sum= mynum.reduce((acc,cur)=>{
return acc+cur;
},0);
console.log(sum);