const expect = require('expect');
const fs = require('fs');
const lineMatch = require('../index');

describe('Matching a pattern', () => {
  it('should return lines containing "green"', () => {
    const output = `black bean\ngreen apple\ndark night`.lineMatch('apple');
    expect(output).toStrictEqual(['green apple']);
  });

  it('should return lines containing "<a href="', () => {
    const input = fs.readFileSync(__dirname + '/test.html', 'utf8');
    const output = input.lineMatch('<a href=');
    expect(output).toStrictEqual([
      '  <a href="https://example.com">Example</a>',
      '  <p>some text goes <a href="https://here.com">here</a></p>'
    ]);
  });

  it('should return lines ending with "one"', () => {
    const output = `one two three\nthree two one\nthree one two`.lineMatch(/one$/);
    expect(output).toStrictEqual(['three two one']);
  });

  it('should return lines containing either "Brave" or "Monte"', () => {
    const output = `Brave New World\nFear and Loathing in Las Vegas\nThe Count of Monte Cristo`
      .lineMatch(/(Brave|Monte)/);
    expect(output).toStrictEqual(['Brave New World', 'The Count of Monte Cristo']);
  });
});

describe('Excluding a pattern', () => {
  it('should return lines excluding "green"', () => {
    const output = `black bean\ngreen apple\ndark night`.lineMatch('apple', { inverse: true });
    expect(output).toStrictEqual(['black bean', 'dark night']);
  });

  it('should return lines excluding "<a href="', () => {
    const input = fs.readFileSync(__dirname + '/test.html', 'utf8');
    const output = input.lineMatch('<a href=', { inverse: true });
    expect(output).toEqual(
      expect.not.arrayContaining([
        '  <a href="https://example.com">Example</a>',
        '  <p>some text goes <a href="https://here.com">here</a></p>'
      ]),
    );
  });

  it('should return lines excluding the ones ending with "one"', () => {
    const output = `one two three\nthree two one\nthree one two`.lineMatch(/one$/, { inverse: true });
    expect(output).toEqual(
      expect.not.arrayContaining(['three two one']),
    );
  });

  it('should return lines excluding either "Brave" or "Monte"', () => {
    const output = `Brave New World\nFear and Loathing in Las Vegas\nThe Count of Monte Cristo`
      .lineMatch(/(Brave|Monte)/, { inverse: true });
    expect(output).toEqual(
      expect.not.arrayContaining([
        'Brave New World',
        'The Count of Monte Cristo'
      ]),
    );
  });
});
