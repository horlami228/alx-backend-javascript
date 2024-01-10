function updateUniqieItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // iterate over the key-value pairs
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}

module.exports = updateUniqieItems;
