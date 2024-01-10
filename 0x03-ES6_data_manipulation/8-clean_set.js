function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const setFiltered = Array.from(set).filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length)).join('-');

  return setFiltered;
}

module.exports = cleanSet;
