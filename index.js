// flatten an array regardless of depth
const arr = [
  1,
  2,
  3,
  [456, 2, 3, 6, 7, [5, 6, 7, 89]],
  123,
  [5, 678],
  ['hello', ['howdy', ['john']]]
]

const { isArray } = Array

function flatten (arr) {
  // safety check for if its an array
  if (!isArray(arr)) throw new Error('flatten() called with non-array')
  // we need a new array to be returned when the function is done
  const newArray = []
  // create a recursive function to tap into the nested arrays and pull those elements out
  function recurseThrough (nestedArr) {
    // iterate through each element of the current array however how many times it takes
    for (let element of nestedArr) {
      // we check if within the nested array we have another array
      if (isArray(element)) {
        // execute the recurseThrough function within the nested array
        recurseThrough(element)
      }
      // then if that element in the nested array is not an array push it to the newArray to be returned
      else {
        newArray.push(element)
      }
    }
  }
  recurseThrough(arr)
  return newArray
}
const lineBreak = '='.repeat(100)
console.log('before: \n', arr)
console.log(lineBreak)
console.log('after: \n', flatten(arr))
