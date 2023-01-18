function solution(rsp) {
    let win={
        0:'5',
        2:'0',
        5:'2',
    }
    rsp=rsp.replace(/0|2|5/g,function(x){
        return win[x]})
    return rsp;
}