/*
Three Number Sum:

Difficulty Rank: Medium

Question:
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

  If no three numbers sum up to the target sum, the function should return an empty array.

Sample input:

Array = [12,3,1,2,-6,5,-8,6]
targetSum = 0
output: [[-8,2,6], [-8,3,5], [-6,1,5]]

1: Sort the array.  (In order to use Left and Right pointers)

 [12,3,1,2,-6,5,-8,6]

 1st iteration:

 [-8,-6,1,2,3,5,6,12] 
 cN -> -8
 Left -> -6
 Right -> 12

 cS = cN + L + R
 cS = -8 + -6 + 12
 cS = -2



 If cS had been equal to 0, we would’ve added the 3 numbers as a triplet to our final array.
 Here, cS is < 0 so we want to move our L pointer to the right once in order to check a bigger number.
 If cS > 0 we move our R pointer to the left once.

 [-8,-6,1,2,3,5,6,12] 
 cN -> -8
 Left -> 1
 Right -> 12

 cS = cN + L + R
 cS = -8 + 1 + 12
 cS = 5

 cS > 0, so now we want to move R pointer to the left.

 [-8,-6,1,2,3,5,6,12] 
 cN -> -8
 Left -> 1
 Right -> 6

 cS = cN + L + R
 cS = -8 + 1 + 6
 cS = -1

 cS < 0, we move L pointer to the right.

 [-8,-6,1,2,3,5,6,12] 
 cN -> -8
 Left -> 2
 Right -> 6

 cS = cN + L + R
 cS = -8 + 2 + 6
 cS = 0

 cS == 0, now we add these to our final triplets array,   triplets = [[-8,2,6]]
 since cS == 0, we move BOTH pointers at the same time. L to right and R to left

 [-8,-6,1,2,3,5,6,12] 
 cN -> -8
 Left -> 3
 Right -> 5

 cS = cN + L + R
 cS = -8 + 3 + 5
 cS = 0

 cS == 0   append triplets [[-8,2,6 ], [-8,3,5]], Now move both pointers again.

 cN -> -8
 Left -> 5
 Right -> 3

 Notice how R is past L and L is past R. So we are done with this round of iteration. We are never going to go through -8 again. Now the cN is -6.
 Reset left pointer to 1, and reset right pointer to 2 and go through entire logic again. Keep going till you finish the input array

 [-8,-6,1,2,3,5,6,12] 
 cN -> -6
 Left -> 1
 Right -> 12



*/

const threeNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum == targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (currentSum < targetSum) {
        left += 1;
      } else if (currentSum > targetSum) {
        right -= 1;
      }
    }
  }
  return triplets;
};
