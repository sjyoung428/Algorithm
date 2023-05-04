function solution(cacheSize, cities) {
 const citiesArr = cities.map((city) => city.toLowerCase());
 const cache = [];
 let time = 0;
 
 citiesArr.forEach((city) => {
     if(cache.includes(city)) {
         cache.splice(cache.indexOf(city), 1);
         time += 1;
     } else {
         time += 5;
     }
     cache.push(city);
     if(cache.length > cacheSize) {
         cache.shift();
     }
 })
    return time;
}
