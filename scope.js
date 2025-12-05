// function one(){
//     let c=10;
//     function two(){
//         let b =29;
//         console.log(c);
//     }
//     //console.log(b);
//     two();
//}
one();
console.log(one(5));
function one(a){
    return a+1;
}
 //two(5); hoisting
 const two = function(b){
    return b+2;
 }