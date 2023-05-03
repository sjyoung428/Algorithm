function solution(n) {
    var answer = 0;
    
    const arr = Array.from(Array(n + 1),() => true)
    arr[0] = false;
    arr[1] = false;
    
    for(let i = 2; i*i < n+1; i++){
        if(arr[i] === false ) continue;
        
        for(let j = i+i; j < n+1; j+=i){
            arr[j] = false
        }
    }
    
    arr.forEach((isSosu) => {
        if(isSosu) {
            answer += 1
        }
    })

    return answer;
}