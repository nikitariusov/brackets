module.exports = function check(str, bracketsConfig) {
  console.log(str);
  let arr = bracketsConfig.map(elem => {
    return elem.join('')
  })
  console.log(arr);


  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      console.log('Строка до: ', str)
      str = str.replaceAll(arr[i], '')
      console.log('Строка после: ', str);
      i = -1
    }
  }

  if (str.length === 0) {
    return true
  } else {
    return false
  }
}
