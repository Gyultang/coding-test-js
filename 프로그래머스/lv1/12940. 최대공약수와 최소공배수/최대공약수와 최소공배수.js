function solution(n, m) {
    let gcd=0;
    let lcm=1;
    
    // 최대공약수구하기
    for(let i=1;i<=Math.min(n,m);i++){
        if((n%i===0) && (m%i===0)){
            gcd=i;
        }
    }
    // 최소공배수 구하기
    while(true){
        if((lcm%n === 0) && (lcm%m ===0)){
            break;
        }
        lcm++;
    }
    
    return [gcd,lcm];
}