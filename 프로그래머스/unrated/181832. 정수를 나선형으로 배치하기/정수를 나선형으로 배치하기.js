function solution(n) {   
    const arr = Array.from(Array(n), () => Array(n).fill(0));
    
    let x = -1;
    let y = 0;
    let num = 1;
    let direction = 1;
    const length = n**2;

    for(let _ = 0; _ < length; _++){
        
        for(let i = 0; i < n; i++){
            x += direction;
            arr[y][x] += num++
        }
        n--;
        
        for(let i = 0; i < n; i++){
            y += direction;
            arr[y][x] = num++
        }
        direction *= -1;
    }
    
    return arr;
}