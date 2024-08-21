// Sum of Two Numbers
function sum(a, b) {
  if (typeof a== 'number' && typeof b == 'number'){
    return a + b}
  console.log("Los datos de entrada no son adecuados")
}

// Factorial of a Number
function factorial(n) {
  if (typeof n != 'string'){
    if (n == 0){
      return 1
    }
    return n*factorial(n-1)
  }
  console.log("Los datos de entrada no son adecuados")
}

// Find the Largest Number
function findLargest(arr) {
  for (let i = 0; i <arr.lenght;i++){
    if (typeof arr[i] != 'number'){
      console.log("Los datos de entrada no son adecuados")
      return
    }
  }
  let greatest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatest) {
      greatest = arr[i]
    }
  }
  return greatest
}

// Count Vowels in a String
function countVowels(str) {
  let vowels = ['a','e','i','o','u'];
  let total_vowels = 0;
  if (typeof str == 'string'){
    for (let letter of str.toLowerCase()){
      if (vowels.includes(letter)){
        total_vowels++;
      }
    }
    return total_vowels
  }
  console.log("Los datos de entrada no son adecuados")
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n == 'number'){
    for (let i = 2; i < n; i++){
      if (n%i == 0){
        return false
      }
    }
    return true
  }
  console.log("Los datos de entrada no son adecuados")
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
