function solution(arr, query) {
    
    query.forEach((item, index) => {
        if(index % 2 == 0){
            arr.splice(item+1);
        }else{
            arr.splice(0,item)
        }
    })
    return arr;
}