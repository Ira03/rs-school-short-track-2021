/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = obj1[arr1[i]] ? (obj1[arr1[i]] + 1) : 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    obj2[arr2[i]] = obj2[arr2[i]] ? (obj2[arr2[i]] + 1) : 1;
  }

  const keys = Object.keys(obj1);
  for (let i = 0; i < keys.length; i++) {
    const el = keys[i];
    if (obj2[el]) {
      sum += (obj1[el] <= obj2[el]) ? obj1[el] : obj2[el];
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
