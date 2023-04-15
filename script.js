const combinations = (elements) =>{
  if (elements.length === 0) return [ []];
  const firstEl = elements[0];
  const rest = elements.slice(1); //like c++ substr to end of array
  
  const combsWithoutFirst = combinations(rest);
  const combsWithFirst = [];

  combsWithoutFirst.forEach(comb =>) {
    [...comb, firstEl];
  });
  })
}

combinations(['a', 'b', 'c']);

