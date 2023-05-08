function solution(t, p) {
    let left = 0;
    let right = p.length;
    let string = ""
    let count = 0;
    
    const arr = t.split("");
    
    while(right < t.length+1) {
        string = t.slice(left,right)
        if(Number(string) <= Number(p)) {
            count++;
        }
        right++;
        left++;
    }
    
    return count
}