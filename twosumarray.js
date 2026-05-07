function finds(){
    let target=5;
    let arr=[1,2,5,6,7,3];
    let find=[];
    let visited=Array(arr.length).fill(false);
    for(let i=0;i<arr.length;i++)
    {    if(visited[i]===true)
    continue;
        let value=target-arr[i];
        for(let j=1;j<arr.length;j++)
        {
            if(value===arr[j])
            {
                find.push(arr[j]);
                visited[j]=true;
            }
        }
        console.log(find);
    }
}
finds();
