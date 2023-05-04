function solution(s) {
    const answer = []
    const arrData = s.replace("{{","").replace("}}","").split("},{").map((data) => data.split(",").map((str)=>+str)).sort((a,b) => a.length - b.length)
    
    arrData.forEach((arr) => {
        arr.forEach((num) => {
            if(!answer.includes(num)){
                answer.push(num)
            }
        })
    })
    return answer
}