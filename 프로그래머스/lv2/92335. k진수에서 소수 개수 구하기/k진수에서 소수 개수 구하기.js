const isPrime = (number) => {
    if(number <= 1) return false
        
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false
    }
    return true
}

function solution(n, k) {
    let answer = 0
    const store = n.toString(k).split("0")
    
    store.forEach((data) => {
        if(isPrime(Number(data))) {
            answer++
        }
    })
    
    return answer
}
