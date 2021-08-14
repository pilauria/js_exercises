function titleCase(str) {
  let arrStr = str.toLowerCase().split(' ');
  console.log(arrStr);
  let result = arrStr.map(word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
