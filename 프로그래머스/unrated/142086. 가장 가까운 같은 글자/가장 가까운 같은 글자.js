function solution(s) {
    let res = [];
    let chk=[];
    for(let i=0;i<s.length;i++){
        if(!chk.includes(s[i])){
            res.push(-1);
            chk.push(s[i]);
        }
        else if(chk.includes(s[i])){
            res.push(i-chk.lastIndexOf(s[i]));
            chk.push(s[i]);
        }
    }
    return res;
}