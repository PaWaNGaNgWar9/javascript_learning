function add(num1 , num2)
{
    return num1+num2;
}
const result = add(5,10);
console.log("result is =",result);
function loginuser(username)
{
    if(!username)
        {console.log("please enter username") ;
            return;
        }
 return `${username} Successfully logged in`
}
console.log(loginuser("Virat Gangwar"));