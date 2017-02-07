/**
 * AmyWOD #4
 * Created by OM on 2/7/17.
 */

function position (list, target) {
  let result = 0;

  for(let i = 0; i < list.length; i++) {

    if (target <= list[i]) {
        result = i;
        return result;
    }
  }
  return list.length;
}

console.log(position([1, 3, 5, 6], 5));
console.log(position([1, 3, 5, 6], 2));
console.log(position([1, 3, 5, 6], 7));
console.log(position([1, 3, 5, 6], 0));
