function solution(my_string, n) {
    const spliceLength = my_string.length - n;
    const stringArray = my_string.split("").splice(spliceLength);
    
    return stringArray.join("");
}