//https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// var nextGreatestLetter = function(letters, target) {
    
// };
function nextGreatestLetter(letters,target){
    let start = 0;
    let end = letters.length - 1;
    while(start <= end){
        let mid = parseInt(start + (end - start)/2);
        if(letters[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return letters[start % letters.length]; 
}

const letters = ['a','b','d','g','k'];

console.log(nextGreatestLetter(letters,'k')); //18
console.log(nextGreatestLetter(letters,'d')); //NOT FOUND
console.log(nextGreatestLetter(letters,'a'));
console.log(nextGreatestLetter(letters,'z'));
console.log(nextGreatestLetter(letters,'x'));