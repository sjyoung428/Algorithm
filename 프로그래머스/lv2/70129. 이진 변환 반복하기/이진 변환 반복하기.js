

function solution(s) {
    const answer = [0,0];
    
    while(true){
        answer[0] += 1;
        const length = s.length;
        let delete0 = s.split("0").join("");
        answer[1] += length - delete0.length;
        
        s = delete0.length.toString(2);
        
        if(s === "1") break;
    }
    return answer;
}

