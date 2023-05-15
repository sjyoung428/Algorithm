function solution(N, stages) {
    const stage = Array.from({length: N+1}, () => 0)
    
    let totalReach = stages.length
    
    stages.forEach((reach) => {
            stage[reach-1] += 1
    })
    
    const stageRate = stage.map((fail,index) => {
        if(index !== 0) {
            totalReach -= stage[index-1]
        }
        return {stageNum:index+1, rate: fail/totalReach}
    })
    stageRate.pop()
    
    stageRate.sort((a,b) => b.rate - a.rate)
    
    
    const result = stageRate.map((data) => data.stageNum)
    return result
}