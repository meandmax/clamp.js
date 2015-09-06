# clamp.js (written in ES6)

[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/meandmax/clamp.js/master/LICENSE)
[![npm](http://img.shields.io/npm/v/clamp.js.svg?style=flat)](https://www.npmjs.com/package/clamp.js)
[![build](http://img.shields.io/travis/meandmax/clamp.js/master.svg?style=flat)](https://travis-ci.org/meandmax/clamp.js)
[![Coverage Status](https://coveralls.io/repos/bucaran/example-rise/badge.svg?branch=master&service=github)](https://coveralls.io/github/bucaran/example-rise?branch=master)
[![code climate](http://img.shields.io/codeclimate/github/meandmax/clamp.js.svg?style=flat)](https://codeclimate.com/github/meandmax/clamp.js)
[![devDependencies](http://img.shields.io/david/dev/meandmax/clamp.js.svg?style=flat)](https://david-dm.org/meandmax/clamp.js#info=devDependencies&view=table)

### Install:

```
npm install clamp.js
```

### Run tests

```
npm test
```

Returns a function that clamps input values to range [min <= x <= max]. Useful for data structures like arrays. Swapping min and max is allowed and will be corrected.

### with simple arrays:

 ```js
    import clamp from 'clamp.js';

    [1,2,3,4,5].map(clamp(0, 3)); // [1,2,3,3,3]
 ```

Can be used with frp libraries (e.g. [Bacon.js](https://github.com/baconjs/bacon.js), [RxJS](https://github.com/Reactive-Extensions/RxJS), [Kefir.js](https://github.com/pozadi/kefir)). Examples are written with Bacon.js

### in frp:

```js
    import clamp from 'clamp.js';
    import Bacon from 'baconjs';

    let stream = Bacon.sequentially(1000, [1, 2, 3, 4, 5])
        .map(clamp(0, 3));

    // every 1000ms stream emits a value which is mapped on clamp()
    stream.log();

    // result -> sequence of values over time: 1,2,3,3,3
```

### Further reading on functional reactive programming:
- [Introduction to frp](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [RxJS](http://reactive-extensions.github.io/RxJS/)
- [BaconJs](https://github.com/baconjs/bacon.js)
- [RxJs Github](https://github.com/Reactive-Extensions/RxJS)
- [Kefir](https://github.com/rpominov/kefir)

### Copyright

Copyright &copy; 2015 Maximilian Heinz, contributors. Released under the MIT License
