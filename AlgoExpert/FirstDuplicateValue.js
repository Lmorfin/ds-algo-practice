/* 
  First Duplicate Value:
  Difficulty Rank: Medium

  Question:
  Given an array of integers between 1 and n  is the length of the array, write a function
  that returns the first integer that appears more than once 
  (when the array is read from left to right)

  In other words, out of all the integers that might occur more than once in the input array, 
  your function should return the one whose first duplicate value has the minimum index.
  If no integer appears more than once, your function should return
  Note that you're allowed to mutate the input array 

  Example 1:
  Input: array = [2,1,5,2,3,3,4]
  Output: 2 // 2 is the first integer that appears more than once.
     // 3 also appears mroe than once, but the second 3 appears after the second 2.

  Example 2:
  Input: array = [2,1,5,3,3,2,4]
  Output: 3 // 3 is the first integer that appears more than once.
    // 2 also appears more than once, but the second 2 appears after the second 3.


    Create a set and iterate through the input array.
    A set doesn't allow any duplicate elements, so by
    pushing values into a set, it will automatically eliminate any duplicate value.

    We can iterate through the array, and if at one point a value in our set has any
    same value in our input array then we can return that value which would be our first
    duplicate.

    otherwise keep iterating and adding to our set.

    if no duplicates are found, simply return -1.

  */

const firstDuplicateValue = (array) => {
  let set = new Set();
  for (const num of array) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
  return -1;
};
