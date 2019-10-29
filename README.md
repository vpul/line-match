# line-match

Returns lines matching a pattern in a string. Supports inverse operation as well, to exclude lines with matches.

##Install
`$ npm install line-match`

##Usage

```
require('line-match');

\`Brave New World
Fear and Loathing in Las Vegas
World War Z
The Count of Monte Cristo\`.lineMatch(/World$/);  //lines ending with 'World'
//=> ['Brave New World']


\`Brave New World
Fear and Loathing in Las Vegas
World War Z
The Count of Monte Cristo\`.lineMatch(/World$/, {inverse: true});  //exclude lines ending with 'World'
//=> ['Fear and Loathing in Las Vegas', 'World War Z', 'The Count of Monte Cristo']


\`black bean
green apple
dark night\`.lineMatch('apple');
//=> ['green apple']


\`<body>
  <p>Fear and Loathing in <a href="https://example.com">Las Vegas</a></p>
  <a href="https://imdb.com">World War Z</a>
</body>\`.lineMatch('https://imdb.com');
//=> ['<a href="https://imdb.com">World War Z</a>']
```
