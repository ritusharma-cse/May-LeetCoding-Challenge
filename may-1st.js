//References -https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3316/

//For this problem Better implementation is to use a binary search which will reduce the time complexity to O(log n).
//This is the standard binary search solution, but what's crucial is that in JS you need to use Math.floor on mid. 
//That caught me out for a little bit. Otherwise you get a float mid which will cause wrong answers.

//Time Complexity: O(log N)
//Space Complexity: O(1)

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n
        while (left < right) {
            let mid = Math.floor(left + ((right - left) / 2))
            if (isBadVersion(mid)) {
                right = mid; //search in left side of mid
            } else {
                left = mid + 1; //search in right side of mid
            }
        }
        
        return left;
    }
};