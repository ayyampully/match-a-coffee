/**
 * shuffles array contents. changes passed array.
 * @param array - array to suffle
 */
export function shuffle(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    let temp = array[i];
    let index = (Math.random() * len) | 0;
    array[i] = array[index];
    array[index] = temp;
  }
}
/**
 * get random pairs from a given array
 * @param array - array to get pairs from
 * @param customValue - a value used in case the count of array is odd.
 * @returns pairs - returns randomized pair from given array. if array not even, adds custom value
 */
export function getRandomPairs(array, customValue) {
  let { length } = array;
  if (length % 2) {
    if (customValue) {
      array.push(customValue);
      length++;
    } else {
      return [];
    }
  }
  const firstHalf = array.slice(0, length / 2);
  const secondHalf = array.slice(length / 2, length);
  shuffle(secondHalf);
  shuffle(firstHalf);
  const pairs = [];
  firstHalf.forEach((element, i) => {
    pairs.push({ person1: element, person2: secondHalf[i] });
  });
  return pairs;
}
