'use strict';

/**
 * Retrieve a value from an object, and remove it from the object.
 * @param {Object} [obj] Object to yoink value from
 * @param {string} [key] Key
 * @returns {(*|undefined)} Value or undefined if not found
 */
module.exports = function yoink(obj, key) {
  var value;
  if (typeof obj === 'undefined') {
    return;
  }
  value = obj[key];
  delete obj[key];
  return value;
};
