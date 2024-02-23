// let i = 1;
// while(i<=100){
//     if(i * i === i){
//         console.log("Encounter the first number is ",i);
//     }
//     i++;
// }

// for (let i = 1; i <= 100; i++) {
//     // Check if the square of i equals i
//     if (Math.sqrt(i*i) === i ) {
//         console.log("Encountered the first square number:", i);
//         break;
//     }
   
// }


for (let i = 1; i <= 100; i++) {
    // Check if the current number is a square
    if (i * i === i) {
      console.log("First square number:", i);
     break; // Exit the loop
    }
  }
  