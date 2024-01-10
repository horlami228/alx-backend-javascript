# ES6 data manipulation

```js
function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  if (typeof startString !== 'string') {
    return '';
  }

  if (startString === undefined) {
    return '';
  }

  const setFiltered = Array.from(set).filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length)).join('-');

  return setFiltered;
}

module.exports = cleanSet;

```
