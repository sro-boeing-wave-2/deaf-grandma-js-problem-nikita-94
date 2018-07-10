/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  if (s === s.toUpperCase()) {
    return true;
  }
  return false;
};

module.exports = isUppercase;
