/*
Repeating Numbers
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

1111111111
11, 222
10101010, 343434343434, 9292
*/

const repeatNumbers = function(data) {
  let listedRepeatNums = [];
  data.forEach(set => {
    let x = 1;
    let repeatNums = "";
    
    while (x <= set[1]) {
      repeatNums += set[0].toString();
      console.log(repeatNums)
      x++;
    }

    listedRepeatNums.push(repeatNums);
  })
  return listedRepeatNums.join(", ");

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));