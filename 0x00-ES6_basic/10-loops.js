export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const elm of array) {
    newArr.push(appendString + elm);
  }

  return newArr;
}
