function calculatecardprice(...num){
    return num.reduce((acc,cur)=>acc+cur,0);
}
console.log(calculatecardprice(100,200,300,400));
const user={
    name : "Virat",
    price:1500
}
function handleobject(anyobject){
    return `the User name ${anyobject.name} has to pay price of ${anyobject.price}`;
}
console.log(handleobject(user));