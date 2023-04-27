function solution(s){
    var answer = true;
    let str = s.toLowerCase().split("")
    let inP= []
    let inY=[]
    if(str.includes('p')){
        inP=str.filter(e=>e.includes('p'))
    }
    if(str.includes('y')){
        inY=str.filter(e=>e.includes('y'))
    }

    // return inP.length==inY.length?true:false;
  return inP.length==inY.length?true:false;
}