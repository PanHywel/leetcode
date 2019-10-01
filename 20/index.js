/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const _hashMap = { "(": ")", "[": "]", "{": "}" };
    const _str = s && s.split("");
    let flag = false;
    if (s) {
        for (let index = 0; index < _str.length; index++) {
            const element = _str[index];
            if (_hashMap.hasOwnProperty(element)) {
                if (_str[index + 1] && _hashMap[element] === _str[index + 1]) {
                    flag = true;
                } else {
                    flag = false;
                }
            }

        }
    } else {
        flag = true;
    }

    return flag
};
isValid("([]")