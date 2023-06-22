/* 
1732. Find the Highest Altitude
Difficulty Rank: Easy

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. 
The biker starts his trip on point 0 with altitude equal 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 
Return the highest altitude of a point.

Example 1:
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2:
Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.


Conceptial Overview:
using example: gain = [-5,1,5,0,-7] =>
{NOTE: gain[i] is the net gain in alt between i and i + 1}

the Biker's initial position starts at 0 so in our altitude array we initially have [0]
in the first element of gain[0] the value is -5, so that means we add 0 + -5, (gain[i] + gain[i + 1]) we push the result to our altitude array
so far in our altitude array we have [0,-5]
We move on to gain[1] and add gain[i + 1] => -5 + 1 = -4. We push -4 to our altitude array
[0,-5,-4] Keep iterating till the length of gain array and return the highest value of altitude.
In this case the highest value is 1 [0,-5,-4,1,1,-6] 

*/

const largestAltitude = (gain) => {
  let highestAltitude = 0;
  altitude = [];
  altitude.push(0);
  for (let i = 0; i < gain.length; i++) {
    highestAltitude += gain[i];
    altitude.push(highestAltitude);
  }
  return Math.max(...altitude);
};
