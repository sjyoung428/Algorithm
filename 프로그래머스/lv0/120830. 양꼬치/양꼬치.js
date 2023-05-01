function solution(n, k) {
    
    const sheep = 12000;
    const drink = 2000;
    
    const service = parseInt(n / 10) * drink;
    
    return (n * sheep) + (k * drink) - service 
    
}