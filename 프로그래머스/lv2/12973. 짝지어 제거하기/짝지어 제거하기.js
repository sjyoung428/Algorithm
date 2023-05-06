function solution(s)
{
    const store = [];
    for(let i = 0; i < s.length; i++) {
      if(store.at(-1) === s[i]) {
          store.pop()
      } else {
          store.push(s[i])
      } 
    }
   
    
    return store.length === 0 ? 1 : 0
}
