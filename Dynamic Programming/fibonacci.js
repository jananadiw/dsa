// 0,1,1,2,3,5,8,...(num-1) + (num-2)

// O (2^n)
// function fibonacci(num) {
//     if(num < 2 ) {
//         return num
//     } else {
//         return fibonacci(num - 1) + fibonacci(n - 2);
//     }
// }


// Dynamic programing , memoization
/**
 * @param {number} n
 * @return {number}
 */
function fib(n, previousSum = []) {

    // use memoization to check the previously summed value.
    if(previousSum[n] != null) {
        return previousSum[n];
    }
   
    let result;
    
    if (n === 0) {
        return 0
    }
    if (n <= 2 ) {
        result = 1;
    } else {
        result = fib(n - 1, previousSum) + fib(n - 2, previousSum);
    }
       previousSum[n] = result;
       return result
   }