function solution(s) {
    var answer = '';
    const arr = s.split(" ");
    arr.sort((a,b) => a-b);
    
    return `${arr[0]} ${arr.at(-1)}`;
}