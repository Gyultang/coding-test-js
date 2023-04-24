function solution(n)
{
    let arr=String(n).split("")
    let num=0;
    for(let i=0;i<arr.length;i++){
        num+=Number(arr[i])
    }
   return num
}