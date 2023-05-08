function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    const result = []
    let length = 1000000;
    
    while(right < sequence.length) {
        if(sum < k) {
            sum += sequence[++right];            
        } else if(sum > k) {
            sum -= sequence[left++];
        } else {
            if(length > right-left){
                length = right-left;
                result[0] = left;
                result[1] = right;
            }
            sum += sequence[++right];
        }
    }
    return result;
}