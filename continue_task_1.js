// let i = 1;
// while(i <= 40){
//     if(i % 2 !== 0){
//         continue;
//     }
    
//     console.log(i);
//     i++;
    
// } 

// ---------------------------


for (let i = 1; i <= 40; i++) {
    // Check if the current number is odd
    if (i % 2 !== 0) {
      continue; // Skip to the next iteration if odd
    }
  
    // If even, print the number
    console.log(i);
  }
  
