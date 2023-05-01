function solution(babbling) {
    var answer = 0;
    const reg = /^(aya|ye|woo|ma)+$/
    
    babbling.forEach((item) => {
        if(reg.test(item)) {
            answer += 1;
        }
    })
    
    return answer;
}

