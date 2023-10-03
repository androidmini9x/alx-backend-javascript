export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !(set instanceof Set)) {
    return '';
  }

  const str = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      str.push(value.substring(startString.length));
    }
  }
  return str.join('-');
}
