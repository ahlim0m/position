/**
 * Answer to AmyWOD#4
 * Created by OM on 2/7/17.
 */

function position(sortedArray, target) {
  let searching = true;
  let i = 0;
  let ret;
  while (searching) {
    if (sortedArray[i] < target) {
      i += 1;
    } else {
      ret = i;
      searching = false;
    }
  }
  return ret;
}

console.log(position([1, 3, 5, 6], 5));
console.log(position([1, 3, 5, 6], 2));
console.log(position([1, 3, 5, 6], 7));
console.log(position([1, 3, 5, 6], 0));
