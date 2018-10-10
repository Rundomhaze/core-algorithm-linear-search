function linearSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) 
      return i
  }
}

function globalSearch(array, number) {
  let arrayAnswer=[]
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) 
      answer.push(i)
  }
  return arrayAnswer
}
