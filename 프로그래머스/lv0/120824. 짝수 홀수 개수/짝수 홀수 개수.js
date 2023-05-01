function solution(num_list) {    
    let even = 0;
    let odd = 0;
    
    num_list.forEach((item) => {
        if (item % 2 == 0) {
            even += 1;
        } else {
            odd += 1;
        }
    })
    
    const answer = [even,odd];
    
    return answer;
}