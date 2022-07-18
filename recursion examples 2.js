//recursion examples 2

// // YOUR CODE BELOW
// function countVowels(str) {
//     let count = 0; 
//     if (str.length === 0) {
//       return 0;
//     }   
//     if ('aeiouAEIOU'.includes(str[0])) {
//       count += 1; 
//     } 
    
//     return count += countVowels(str.slice(1));
//   }
  
//   console.log(countVowels('Four score and seven years'))

  // function countVowels(string) {
  
  //   if (string.length === 0) {
  //      return 0;
  //    }
     
  //   var vowels = ["a","e","i","o","u"];
  //    var letterToCheck = string[0].toLowerCase();
  //    var value = 0;
     
  //   if (vowels.indexOf(letterToCheck) !== -1) {
  //      value++;
  //    }
     
  //   return value + countVowels(string.slice(1));
     
  //  }
  //  console.log(countVowels('Four score and seven years'))

//    function sumNums(number){

//     if(number==0){
//         return 0
//     } 
  
//     return sumNums(number+1)
// }


// console.log(sumNums(50))

// function backwardString(string){

//     if(string.length===0) return ""

//     return backwardString(string.slice(1)) + string[0]

// }

// console.log(backwardString('happy'))

// function countToTen(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number + 1;

//     // base case
//     if (newNumber <= 10) {
//         countToTen(newNumber);
//     }
// }

// countToTen(1);
