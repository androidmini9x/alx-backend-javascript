export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const str = [];
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      str.push(value.substring(startString.length));
    }
  }
  return str.join('-');
}
