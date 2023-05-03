function solution(numbers) {
    var answer = [];
    
    let start = 0;
    
    while(start < numbers.length) {
        for(let i = start+1; i < numbers.length; i++){
            answer.push(numbers[start] + numbers[i])
        }
        start++;
        if(start === numbers.length -1) break;
    }
    
    
    
    return Array.from(new Set(answer.sort((a,b) => a-b)));
}