function total(...nums) {
   let total = 0;
   for (let n of nums) {
      total += n;
   }
   return total;
}


console.log(total(10, 20, 30))