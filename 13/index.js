/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var hashMap = {
        Set: function (key, value) { this[key] = value },
        Get: function (key) { return this[key] },
        Contains: function (key) { return this.Get(key) == null ? false : true },
        Remove: function (key) { delete this[key] }
    };
    hashMap.Set("I", 1);
    hashMap.Set("V", 5);
    hashMap.Set("X", 10);
    hashMap.Set("L", 50);
    hashMap.Set("C", 100);
    hashMap.Set("D", 500);
    hashMap.Set("M", 1000);
    let _number = 0;
    if (s) {
        const _str = s.split("");
        for (let index = 0; index < _str.length; index++) {
            const element = _str[index];
            if (index < _str.length && (hashMap.Get(element)) < hashMap.Get(_str[index + 1])) {
                _number -= hashMap.Get(element);
            } else {
                _number += hashMap.Get(element);
            }
        }
    }
    return _number;
};
romanToInt("IV")