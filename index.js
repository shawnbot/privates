var WeakMap = require('weakmap');
var privates = new WeakMap();

/**
 * Get the value map for the source object or value.
 *
 * @param {*} source
 * @return {WeakMap}
 */
function getMap(source) {
  if (privates.has(source)) {
    return privates.get(source);
  }
  var map = new WeakMap();
  privates.set(source, map);
  return map;
}

/**
 * Get a specific key value for a given source object.
 *
 * @param {*} source
 * @param {*} key
 */
function get(source, key) {
  return getMap(source).get(key);
}

/**
 * Set the value of a specific key for a given source object.
 *
 * @param {*} source
 * @param {*} key
 * @param {*} value
 */
function set(source, key, value) {
  return getMap(source).set(key, value);
}

/**
 * Remove the value of a specific key for a given source object.
 *
 * @param {*} source
 * @param {*} key
 */
function remove(source, key) {
  return getMap(source).delete(key);
}

/**
 * Remove the entire map for a given source object.
 *
 * @param {*} source
 */
function removeAll(source) {
  return privates.delete(source);
}

module.exports = {
  get: get,
  set: set,
  'delete': remove,
  getAll: getMap,
  deleteAll: removeAll
};
