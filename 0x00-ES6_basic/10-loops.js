export default function appendToEachArrayValue(array, appendString) {
  for (const elm of array) {
    const idx = array.indexOf(elm);
    array[idx] = appendString + elm;
  }

  return array;
}
