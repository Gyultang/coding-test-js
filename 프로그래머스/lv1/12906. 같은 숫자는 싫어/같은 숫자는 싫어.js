function solution(arr)
{
   let res=[];
    arr.forEach((e,index,array)=>{
        if(index===0){
            res.push(e)
        }else if(arr[index-1] !==e){
            res.push(e)
        }
        
    })
    return res;
}