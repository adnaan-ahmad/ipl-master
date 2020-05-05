function matchesPlayedPerYear(matches) {
  const result1 = {};
  for (let match of matches) {
    const season = match.season;
    if (result1[season]) {
      result1[season] += 1;
    } else {
      result1[season] = 1;
    }
  }
  //console.log(result1)
  return result1;
}

module.exports = matchesPlayedPerYear;


