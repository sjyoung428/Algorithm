function solution(q, r, code) {
    var answer = '';
    const arr = code.split("");
    
    arr.forEach((item, index) => {
        if(index%q === r) {
            answer += item
        }
    })
    
    return answer;
}