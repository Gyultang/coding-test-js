function solution(t, p) {
    // 결과를 저장할 변수
    let answer = 0;
    //문자열 p의 길이
    const pLength = p.length;
    // 문자열 t를 한 글자씩 순회하면서 처리
    t.split('').forEach((startString,idx)=>{
        //길이가 p와같은 부분 문자열 추출
        const sliceT = t.slice(idx,idx+pLength)
        
        // 추출한 부분 문자열의 길이가 p와 같을 경우
        if(sliceT.length === pLength){
            // 추출한 부분 문자열을 숫자로 변환한 값이 p보다 작거나 같으면 
            // 결과변수 answer를 1증가
            answer += (Number(sliceT) <= Number(p))
        }
    })
    return answer;
}