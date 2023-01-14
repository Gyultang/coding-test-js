function solution(order) {
    let res=order.toString().split("")
    return res.filter((x)=>Number(x)!==0?Number(x)%3==0:false).length;
}