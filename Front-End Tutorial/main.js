// JS Lab-3 Assignment //
// ------------------- //

function arraySum(a) {
  return a.reduce((sum, val) => sum + val, 0);
}

function arraySumLoop(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

// Examples
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, -2, 8, 0];

console.log(arraySum(arr1));
console.log(arraySumLoop(arr1));

console.log(arraySum(arr2));
console.log(arraySumLoop(arr2));

console.log(arraySum(arr1) === arraySumLoop(arr1));
console.log(arraySum(arr2) === arraySumLoop(arr2));
