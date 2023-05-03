function solution(nums) {
    const pickNum = nums.length / 2
    const arr = Array.from(new Set(nums))
    
    return arr.length > pickNum ? pickNum : arr.length
}