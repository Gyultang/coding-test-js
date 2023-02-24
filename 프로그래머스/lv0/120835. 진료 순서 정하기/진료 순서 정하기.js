function solution(emergency) {
    let high= [...emergency].sort((a,b)=>b-a)
    return emergency.map(e=>high.indexOf(e)+1);
}