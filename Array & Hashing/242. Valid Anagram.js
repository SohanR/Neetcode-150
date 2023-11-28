/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length == t.length){
        let sortedS = s.split('').sort().join('');
        let sortedT = t.split('').sort().join('');

     return sortedS.includes(sortedT)
    }

    return false;
};