/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];
    let count = 1;
    let j = i + 1;

    while (j < str.length && str[j] === letter) {
      count += 1;
      j += 1;
    }

    i += count - 1;
    result += (count === 1) ? `${letter}` : `${count}${letter}`;
  }
  return result;
}

module.exports = encodeLine;
