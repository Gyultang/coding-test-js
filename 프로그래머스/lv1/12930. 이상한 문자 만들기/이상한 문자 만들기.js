function solution(s) {
    let strArr = s.split(" ");
    let newArr=[];
    
    for(let i=0;i<strArr.length;i++){
        let newStr='';
        for(let j=0;j<strArr[i].length;j++){
            if(j===0 || j%2===0){
                newStr+=strArr[i][j].toUpperCase();
            }else{
                newStr+=strArr[i][j].toLowerCase();
            }
        }
        newArr.push(newStr)
    }
 return newArr.join(" ")
}
