/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let length = 0;
    let result = ""
    for (let i = 0; i < strs.length; i++) { // 查找数组中最短的字符
        length = strs[i].length
        if (length === 0) {
            length = strs[i].length;
        } else {
            if (strs[i].length < length) {
                length = strs[i].length;
            }
        }
    }
    for (let j = 0; j < length; j++) {
        let s = strs[0][j]
        if (strs.every(val => val[j] == s)) {
            result += s
        } else {
            break
        }
    }
    return result
};
longestCommonPrefix(["flower", "flow", "flight"])