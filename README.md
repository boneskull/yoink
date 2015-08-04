# yoink

> Take a value out of an object by key

## Usage

```js

var yoink = require('yoink');
var foo = {
  frick: 'frack',
  argle: 'bargle'
};

yoink(foo, 'frick'); // 'frack' 

foo; // {argle: 'bargle'}
```

## Install

```shell
$ npm install yoink
```

## Author

[Christopher Hiller](http://boneskull.com)

## License

MIT
