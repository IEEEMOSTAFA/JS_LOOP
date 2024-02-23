for (let i = 55; i <= 85; i++) {
    // Check if the current number is odd
    if (i % 5 === 0) {
      continue; // Skip to the next iteration if odd
    }
  
    // If even, print the number
    console.log(i);
  }