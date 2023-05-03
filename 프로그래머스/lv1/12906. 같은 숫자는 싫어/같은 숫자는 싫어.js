function solution(arr)
{
    const answer = []
    
    let before = 0;
    let after = 1;
    
    while(before < after) {
        if(before === arr.length - 1){
            answer.push(arr[before])
            break;
        }
        
        if(arr[before] === arr[after]) {
            before = after;
            after++;
        } else {
            answer.push(arr[before]);
            before++;
            after++;
        }
    }
    
    return answer;
}