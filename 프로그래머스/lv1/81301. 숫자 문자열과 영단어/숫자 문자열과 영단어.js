function solution(s) {
    const replaceList = [/zero/g,/one/g,/two/g,/three/g,/four/g,/five/g,/six/g,/seven/g,/eight/g,/nine/g]
    for(let i =0; i< replaceList.length; i++){
        s = s.replace(replaceList[i], i)
    }
    return Number(s);
}