//References -https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3316/

//For this problem Better implementation is to use a binary search which will reduce the time complexity to O(log n).

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
            if (isBadVersion(middle)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        
        return left;
    }
};