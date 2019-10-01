/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const _hashMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let _number = 0;
    if (s) {
        const _str = s.split("");
        for (let index = 0; index < _str.length; index++) {
            const element = _str[index];
            if (index < _str.length && (_hashMap[element]) < _hashMap[_str[index + 1]]) {
                _number -= _hashMap[element];
            } else {
                _number += _hashMap[element];
            }
        }
    }
    return _number;
};
romanToInt("III")