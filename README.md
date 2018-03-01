# Strip-Whitespace - a javascript string minifier

[![node](https://img.shields.io/node/v/strip-whitespace.svg)](https://www.npmjs.com/package/strip-whitespace)
[![Travis](https://img.shields.io/travis/markis/strip-whitespace.svg)](https://travis-ci.org/markis/strip-whitespace)
[![AppVeyor](https://img.shields.io/appveyor/ci/markis/strip-whitespace.svg)](https://ci.appveyor.com/project/markis/strip-whitespace)
[![Known Vulnerabilities](https://snyk.io/test/github/markis/strip-whitespace/badge.svg)](https://snyk.io/test/github/markis/strip-whitespace)
[![David](https://img.shields.io/david/markis/strip-whitespace.svg)](https://david-dm.org/markis/strip-whitespace)
[![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace.svg)](https://greenkeeper.io/)
[![Coveralls](https://img.shields.io/coveralls/markis/strip-whitespace.svg)](https://coveralls.io/github/markis/strip-whitespace)
[![Codacy grade](https://img.shields.io/codacy/grade/bf76c91f230243129f7c1304b1681a45.svg)](https://www.codacy.com/app/markis/strip-whitespace)

Strip-Whitespace will remove extraneous spaces from strings. It's perfect for working with rendering templates (ex. mustache, handlebars) or es6 javascript templates. It works with anything where you might create very long strings.

##### Before strip-whitespace:
``` javascript
function() {
  if (condition) {
    const longString = '  String   with    some    extra   spaces  ';
  }
}
```

##### After strip-whitespace:
``` javascript
function() {
  if (condition) {
    const longString = ' String with some extra spaces ';
  }
}
```

##### Command-line usage
``` shell
$ strip-whitespace --input <input-file> --output <output-file>
```

##### Javascript usage
``` javascript
var StripWhitespace = require('strip-whitespace');

// options are optional and can be omitted
var stripWhitespace = new StripWhitespace(options);
var result = stripWhitespace.strip(code);

// do things with the code
code = result.code;
```

##### Options

All options are optional

``` javascript
{
  shouldStripWhitespace: function(fatString) {
    // following code will answer the question: should this string be stripped of whitespace?
    if (fatString.startsWith('DO NOT MODIFY THIS STRING')) {
      return false;
    }

    return true;
  }
}
```
