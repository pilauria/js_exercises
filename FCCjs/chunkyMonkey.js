function chunkArrayInGroups(arr, size) {
  newArr = arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
