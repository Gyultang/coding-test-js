function solution(age) {
    let ageArr=age.toString().split("").map(e=>Number(e))
    let res=[];
    let abcArr=["a","b","c","d","e","f","g","h","i","j"]  
    for(let i = 0;i<ageArr.length;i++){
        let num=ageArr[i]
       res.push(abcArr[num])
    }
    return res.join('')
}