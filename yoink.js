'use strict';

var get = require('lodash.get');

/**
 * Retrieve a value from an object, and remove it from the object.
 * @param {Object} [obj] Object to yoink value from
 * @param {string} [key] Key or keypath ("dot" notation)
 * @returns {(*|undefined)} Value or undefined if not found
 */
module.exports = function yoink(obj, key) {
  var value = get(obj, key);
  delete obj[key];
  return value;
};
