function solution(n, arr1, arr2) {
    var answer = [];
    
    const newArr1 = arr1.map((data) => {
        return data.toString(2).padStart(n,"0").split("");
    })
    
    const newArr2 = arr2.map((data) => {
        return data.toString(2).padStart(n,"0").split("")
    })
    
    for(let i = 0; i < n; i++) {
        let decode = ""

        for(let j = 0; j < n; j++) {
            if(newArr1[i][j] === "1"|| newArr2[i][j] === "1") {
                decode += "#";
            }else{
                decode += " "
            }
        }
        
        answer.push(decode)
    }
    
    
    return answer;
}