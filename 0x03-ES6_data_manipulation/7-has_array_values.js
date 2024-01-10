/**
 * check if the arrray elements are all included
 * in the set
 * @param {Set} set
 * @param {Array} array
 * @returns {Boolean}
 */
function hasValuesFromArray(set, array) {
  let isThere = true;
  for (const num of array) {
    if (!set.has(num)) {
      isThere = false;
    }
  }

  return isThere;
}

module.exports = hasValuesFromArray;
