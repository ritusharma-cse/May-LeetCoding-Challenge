////References -https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3317/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let Jewels = new Set(J);
    let count =0;
    for(let i=0;i<S.length;i++){
        if(Jewels.has(S.charAt(i))){
            count++;
}
}
    return count;
};