const arr = [1, 2, 2, 3, 4, 4, 4, 5];
const visited = new Array(arr.length).fill(false);
for(let i=0 ; i<arr.length; i++)
{
    if(visited[i]===true)
        continue;
    let count =0;
    for(let j=0; j<arr.length; j++)
    { 
        if(arr[i]===arr[j])
        {
            count++;
            visited[j]= true;
        }
    }
     console.log("frequency of "+ arr[i] +"=" +count);
}
