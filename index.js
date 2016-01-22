var WeakMap = require('weakmap');
var privates = new WeakMap();

/**
 * @name getAll
 * Get the value map for the source object or value.
 *
 * @param {*} source
 * @return {WeakMap}
 */
function getMap(source) {
  if (privates.has(source)) {
    return privates.get(source);
  }
  var map = {};
  privates.set(source, map);
  return map;
}

/**
 * @name set
 * Set the value of a specific key for a given source object.
 *
 * @param {*} source
 * @param {*} key
 * @param {*} value
 */
function set(source, key, value) {
  getMap(source)[key] = value;
}

/**
 * @name get
 * Get a specific key value for a given source object.
 *
 * @param {*} source
 * @param {*} key
 */
function get(source, key) {
  return getMap(source)[key];
}

/**
 * @name delete
 * Remove the value of a specific key for a given source object.
 *
 * @param {*} source
 * @param {*} key
 */
function remove(source, key) {
  delete getMap(source)[key];
}

/**
 * @name deleteAll
 * Remove the entire map for a given source object.
 *
 * @param {*} source
 */
function removeAll(source) {
  privates.delete(source);
}

module.exports = {
  get: get,
  set: set,
  'delete': remove,
  getAll: getMap,
  deleteAll: removeAll
};
