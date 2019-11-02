# line-match

![npm (scoped)](https://img.shields.io/npm/v/@vipulc/line-match)
![npm](https://img.shields.io/npm/dt/@vipulc/line-match)
[![GitHub issues](https://img.shields.io/github/issues/vpul/line-match)](https://github.com/vpul/line-match/issues)
[![GitHub forks](https://img.shields.io/github/forks/vpul/line-match)](https://github.com/vpul/line-match/network)
[![GitHub stars](https://img.shields.io/github/stars/vpul/line-match)](https://github.com/vpul/line-match/stargazers)
[![GitHub license](https://img.shields.io/github/license/vpul/line-match)](https://github.com/vpul/line-match/blob/master/LICENSE)

Returns lines matching a pattern in a string. Supports inverse operation as well, to exclude lines with matches.

## Install

`$ npm install @vipulc/line-match`

## Usage

```js
require("line-match");

// lines ending with 'World'
`Brave New World
Fear and Loathing in Las Vegas
World War Z`.lineMatch(/World$/);
//=> ['Brave New World']

// exclude lines ending with 'World'
`Brave New World
Fear and Loathing in Las Vegas
World War Z`.lineMatch(/World$/, { inverse: true });
//=> ['Fear and Loathing in Las Vegas', 'World War Z']
```

## License

[MIT License](https://github.com/vpul/line-match/blob/master/LICENSE)
