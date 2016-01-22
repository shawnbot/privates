# privates
JavaScript doesn't provide any language-level means to make object properties
private. This Node module:

1. Allows you to associate _pseudo-private_ arbitrary key/value pairs with any
   object without polluting its properties.
1. Minimizes memory overhead by using [WeakMap]s, which allow keys to be garbage
   collected once they're no longer referenced.

```js
var privates = require('privates');

var obj = {x: 1};
privates.set(obj, 'y', 2);

assert.equal(obj.y, undefined);
assert.equal(privates.get(obj, 'y'), 2);
```

## Usage
Install it with [npm](https://npmjs.org):


```sh
npm install privates
```

Then require it like so:

```js
var privates = require('privates');
```

The module exports the following methods:

### <a name="set"></a> `set(owner, key, value)`
Creates a private key/value pair associated with the `owner` object.

**Note:** The `key` will always be coerced to a string, because the internal
map for each `owner` object is simply an `Object` literal.

```js
privates.set(obj, 1, 'foo');
privates.get(obj, '1'); // === 'foo'
```

### <a name="get"></a> `get(owner, key)`
Returns the value of named `key` associated with the `owner` object by calling
[set(owner, key)](#set).

### <a name="delete"></a> `delete(owner, key)`
Deletes the value of named `key` associated with the `owner` object.

### <a name="deleteAll"></a> `deleteAll(owner)`
Removes all of the values associated with the `owner` object.


[WeakMap]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
