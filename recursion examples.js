//recursion examples

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.reverse())

//========================================================================================================

// function factorial(number){
//     //base case -- the consisiton tha stops the function
//     if(number == 0){
//         return 1
//     }
//     return number * factorial(number-1)

// }

// console.log(factorial(5))

//same as console.log(1*2*3*4*5)

//========================================================================================================

//direct recursion

// function evenOrOdd(number){
    
//     //base case 1

//     if(number == 0){
//         return "This number is Even"
//     }

//     //base case 2

//     if(number == 1)
//         return "This number is Odd"

//     //recursive case

//     return evenOrOdd(number-2)

// }

// console.log(evenOrOdd(10))
// console.log(evenOrOdd(15203))
// console.log(evenOrOdd(100))
// console.log(evenOrOdd(1051))

//========================================================================================================

//indirect recursion

// function isEven(number){
    
//     //base case

//     if(number==0){
//         return true
//     }
//     //recursive case

//     return isOdd(number-1)

// }

// function isOdd(number){

//     //base case
    
//     if(number == 0){
//         return false
//     }
//     //recursive case

//     return isEven(number-1)
    
// }

// console.log(isOdd(8))
// console.log(isEven(8))                                                                                  

//========================================================================================================

// function multiplesOf5(number){

//     if(number==0){
//         return 0
//     } 
    
//     if(number % 5 == 0){
//         console.log(number)
//     }
//     return multiplesOf5(number-1)
// }


// console.log(multiplesOf5(50))

//========================================================================================================

// function everyNumberTo25(number){

//     //base case
//     console.log(number)
//     if(number == 25){
//         return 1
//     }

//     //recursive code
//     // console.log(number)
//     return everyNumberTo25(number+1)
// }

// everyNumberTo25(1)

// function everyNumberTo25(number){

//     if(number >= 25){
//         return [25]
//     }
//     result = everyNumberTo25(number + 1)

//     result.unshift(number)

//     return result
// }

// console.log(everyNumberTo25(1))
// console.log(everyNumberTo25(26))
// console.log(everyNumberTo25(6))

//========================================================================================================

// Write a function, backwardString, that receives a string as an argument. It should log every letter in the string, from the last character to the first. Use recursion.

// backwardString('happy');
// // y
// // p
// // p
// // a
// // h

// function backwardString(string){

//     //base case
//     /// stop reach the end of the string
//     if(string.length == 1){
//         console.log(string)
//         return
//         }

//         let currentLastLetter = string.charAt(string.length-1)
//         console.log(currentLastLetter)

//         let newString = string.slice(0,-1)

//     //recursive case
//     /// go through all the letters of the string
        
//     /// make sure that we go to the next letter (could be plus of minus) 

//     ///recall
//     backwardString(newString)
// }

// backwardString("multiverse")












