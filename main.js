// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**



// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// ..................................................................................................................
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
// ..................................................................................................................
// Write a JavaScript program to convert a number to a string.
//function declaration
// ..................................................................................................................
let numInput = 0 
console.log(numInput)
function updateNum(num){
  numInput = num.value
  console.log(num.value)
}

function convertNum(convertedNum) {
  convertedNum = numInput.toString()

  document.getElementById("resultingStr").innerHTML = convertedNum + ' ' + 'I am now a string'
  console.log(convertedNum)
}
// ..................................................................................................................
// Write a JavaScript program to convert a string to the number.
// ..................................................................................................................
// Arrow function
// const str2Num = (str) => {
//   return parseInt(str);
// }
// console.log(str2Num('28'))

let stringInput = ''
const updateString = (newString) => {
  stringInput = newString.value
  console.log(newString.value)
}

const convertStr = (convertedStr) => {
  convertedStr = parseInt(stringInput);

  document.getElementById("resultingNum").innerHTML = convertedStr + ' ' + 'I am now a number'
  console.log(convertedStr)
}
// ..................................................................................................................
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// ..................................................................................................................
// const checkType = (dataCheck) => {
//   console.log(typeof dataCheck)
// }
// checkType('string')
// checkType(undefined)
// checkType(25)
// checkType(true)
// checkType(null)
// ..................................................................................................................
// Write a JavaScript program that adds 2 numbers together.
// ..................................................................................................................
// let num1 = 1993 
// let num2 = 1996

// function add() {
//   return num1 + num2
// }
// console.log(add())
// ..................................................................................................................
// Write a JavaScript program that runs only when 2 things are true.
// ..................................................................................................................
// function siteEnter(age, consent) {
//   if(age > 20 && true) {
//     return 'Welcome In! Have A Drink On Us, With Your First Order Of $20 Or More!'
//   } 
// }
// console.log(siteEnter(21, true))
// ..................................................................................................................
// Write a JavaScript program that runs when 1 of 2 things are true.
// ..................................................................................................................
// const onlyOne = (yr1, yr2) =>{
//   if(!yr1 || yr2 < 1996){
//     return 'older'
//   } else {
//     return 'younger'
//   }
// }
// console.log(onlyOne(2000, 1992))
// ..................................................................................................................
// Write a JavaScript program that runs when both things are not true.  
// ..................................................................................................................
// const bothWrong = (op1, op2) =>{
//   if(!op1 && op2 === false){
//     return 'it works'
//   }
// }
// console.log(bothWrong(false, false))
// ..................................................................................................................
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24