function NumberPrime(num) 
{
 if(num<=1)
    return false;
 for(let i=2; i<=Math.sqrt(num); i++)
 {
    if(num%i==0)
        return false;
 }
 return true;
}
function TestPrimeInRange(n)
{
    arr =[1,2,3,4,5,6,7,8,9,10]
    for(let i=0;i<arr.length;i++)
    {
        if(NumberPrime(arr[i]))
        {
            console.log(arr[i]+" is a prime number");
        }
        else{
            console.log(arr[i]+" is not a prime number");
        }
    }
}
TestPrimeInRange(10);