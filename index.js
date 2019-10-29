String.prototype.lineMatch = function (pattern, inverse) {
  const inputString = this;
  const array = inputString.split(/\r?\n/);
  return array.filter((line) => {
    return inverse ? !line.match(pattern) : line.match(pattern);
  });
};

module.exports = String;