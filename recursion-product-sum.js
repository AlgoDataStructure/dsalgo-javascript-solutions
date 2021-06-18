const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

// O(n) time | O(d) space - where n is the total number of elements in the array,
// including sub-elements, and d is the greatest depth of "special" arrays in the array
function productSum(array) {
  return calculateProductSum(array, 1)
}

function calculateProductSum(array, multiplier) {
  let sum = 0
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += calculateProductSum(element, multiplier + 1)
    } else {
      sum += element
    }
  }
  return sum * multiplier
}

console.log(productSum(array))
