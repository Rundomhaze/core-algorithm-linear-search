//Реализуй функции линейного поиска. Проверь результат тестами.

function linearSearch(item, arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if(item === arr[i]) {
  //     return i
  //   }
  // }   //// или
  let res;
  arr.map((el, i) => {
    if (el === item) {
      res = i;
    }
  })
  return res;
};

function globalLinearSearch(item, arr) {
  let res = [];
  arr.map((el, i) => {
    if(el === item) {
      res.push(i);
    }
  })
  return res;
}

module.exports = {
  linearSearch,
  globalLinearSearch
}
