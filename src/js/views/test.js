const trimSpace = () => {
  let word = 'asd          d'


  let trimmed = word.split(' ').filter(word => word != '');
  console.log(trimmed);
}

trimSpace();