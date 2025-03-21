/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here
  if (typeof(x)!=="number" || typeof(y)!=="number")
    return -1;
  
  //swap with array destructuring
  [x,y] = [y,x];
  
  //print swapped value
  console.log(`Swapped value: x = ${x}, y = ${y}`);
}
 

// Task 2: Add code here
//console.log(swap("Apple,10")); 
swap("Apple",10); //returns -1
swap(9,17);  
