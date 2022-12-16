export const spaceTrimmer = (data) => {
  // accepts a string
  const trimSpace = (str) => {
    // splits the sentence, filters out the double/tripple spacing if any.
    if (typeof str !== 'string') {
      return str;
    }

    let trimmed = str.split(' ').filter((word) => word != '');
    return trimmed.join(' ');
  };

  // creates a copy
  let newData = Object.assign({}, data);

  // destructures the object to perform a MAP operation on the key & value. Returns the same key but the value spacing is corrected.
  let result = Object.entries(newData).map(([key, value]) => [key, trimSpace(value)]);
  return Object.fromEntries(result);
};