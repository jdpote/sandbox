const mapObjectToArray = (o, cb) => {
  const results = [];

  for (const [k, v] of Object.entries(o)) {
    results.push(cb(k, v, o));
  }

  return results;
};

module.exports = mapObjectToArray;
