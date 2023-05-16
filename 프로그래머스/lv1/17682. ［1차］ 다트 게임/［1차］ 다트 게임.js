function solution(dartResult) {
   const result = []
   
   const dartArr = dartResult.replace(/10/g,"t").split("") // t = 10
   
   dartArr.forEach((data) => {       
       if(isNaN(data) === false) {
           result.push(Number(data))
       } else {
           if(data === "t") {
               result.push(10)
           }
           switch(data) {
               case "S":
                   break;
               case "D":
                   result[result.length - 1] = result.at(-1) ** 2
                   break;
               case "T":
                   result[result.length - 1] = result.at(-1) ** 3
                   break;
               case "*":
                   if(result.length === 1) {
                       result[0] = result[0] * 2
                   } else {
                       result[result.length - 1] = result.at(-1) * 2
                       result[result.length - 2] = result.at(-2) * 2
                   }
                   break;
               case "#":
                   result[result.length - 1] = result.at(-1) * (-1)
                   break;
           }
       }
   })
   return result.reduce((acc,cur) => acc+cur)
}