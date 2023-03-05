function solution(my_string) {
    let num = my_string.replace(/[^0-9]/g," ");
    let numArr=num.split(" ")

    return  numArr.map((e)=>e*1).reduce((a,b)=>a+b);
}
// 처음풀이
// function solution(my_string) {
//     let res = 0;
//     let num = my_string.replace(/[^0-9]/g,"+");
//     let numArr=num.split("+")
//     for(e of numArr){
//         if(e !== ""){
//             res+=parseInt(e)
//         }
//     }
//     return  res;
// }