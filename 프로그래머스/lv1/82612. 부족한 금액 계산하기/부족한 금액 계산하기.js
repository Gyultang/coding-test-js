function solution(price, money, count) {
      let sumPrice=0;
    for(let i = 1;i<=count;i++){
        sumPrice+=(i*price)
    }
    if(money>=sumPrice){
        return 0
    }else{
        return sumPrice-money
    }
}