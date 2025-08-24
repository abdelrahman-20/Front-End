// JS Lab-3 Assignment //
// ------------------- //

function filterAndSortNumbers(mixedArray) {
  mixedArray = mixedArray.filter((item) =>
    Number.isFinite(item)
  );
  mixedArray.sort();
  return mixedArray;
}

// Ai Generated Examples

console.log(
  filterAndSortNumbers([3, "hello", 1, 7, null, 2])
);
console.log(
  filterAndSortNumbers([10, "5", 5, undefined, 0, -2])
);

console.log(
  filterAndSortNumbers(["a", {}, [], 4.5, 2.2, NaN])
);
console.log(
  filterAndSortNumbers([Infinity, -Infinity, 8, 3, 1])
);
