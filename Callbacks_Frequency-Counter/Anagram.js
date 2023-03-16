
function validAnagram(ana1, ana2){
        let freq1 = {};
        let freq2 = {};
             ana1 = ana1.toString().toLowerCase().replace(/[^a-z]/g, "");
             ana2 = ana2.toString().toLowerCase().replace(/[^a-z]/g, "");
        //counter
        for (let char of ana1) {
                //for of used for strings, for in used for objects
                //char placeholder for character
            freq1[char] = (freq1[char] || 0) + 1;
        }
        for (let char of ana2) {
            //for of used for strings, for in used for objects
            //char placeholder for character
            freq2[char] = (freq2[char] || 0) + 1;    
        }
        //key
        for(let key in freq1) {
            if(!(key in freq2) || freq2[key]
                !== freq1[key])
                 { return false}
        }
     
   return true;
}


console.log(validAnagram('', ''))// true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true