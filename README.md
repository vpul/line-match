# line-match

Returns lines matching a pattern in a string. Supports inverse operation as well, to exclude lines with matches.

## Install

`$ npm install line-match`

## Usage

```js
require("line-match");

`Brave New World
Fear and Loathing in Las Vegas
World War Z
The Count of Monte Cristo`.lineMatch(/World$/); // lines ending with 'World'
//=> ['Brave New World']

`Brave New World
Fear and Loathing in Las Vegas
World War Z
The Count of Monte Cristo`.lineMatch(/World$/, { inverse: true }); // exclude lines ending with 'World'
//=> ['Fear and Loathing in Las Vegas', 'World War Z', 'The Count of Monte Cristo']
```
