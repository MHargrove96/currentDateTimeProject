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
let numInput = 1 

function updateNum(num){
  numInput = num.value
  console.log(num.value)
}

function convertNum(convertedNum) {
  convertedNum = numInput.toString()

  document.getElementById("resultingStr").innerHTML = convertedNum + ' ' + 'I am now a string, you can check in the console'
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

  document.getElementById("resultingNum").innerHTML = convertedStr + ' ' + 'I am now a number, you can check in the console'
  console.log(convertedStr)
}
// ..................................................................................................................
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// ..................................................................................................................
const checkType = (dataCheck) => {
  console.log(typeof dataCheck)
}
checkType('string')
checkType(undefined)
checkType(25)
checkType(true)
checkType(null)
// ..................................................................................................................
// Write a JavaScript program that adds 2 numbers together.
// ..................................................................................................................
let num1 = 0 
let num2 = 0

const firstNum = (userNum1) => {
  num1 = userNum1.value
  console.log(userNum1.value)
}

const secondNum = (userNum2) => {
  num2 = userNum2.value
  console.log(userNum2.value)
}

function add(sum) {
  sum = parseInt(num1) + parseInt(num2); 

  document.getElementById('resultingSum').innerHTML = sum 
}

// ..................................................................................................................
// Write a JavaScript program that runs only when 2 things are true.
// ..................................................................................................................

let age = ""

const ageLimit = (ageCheck) => {
  age = ageCheck.value
  console.log(ageCheck.value)
}

function siteEnter() {
    document.getElementById('message').style.display = "none"; 
  if(age > 20) {
    document.getElementById('message').style.display = "inline-block";
    document.getElementById('message').innerHTML = 'Welcome In! Have A Drink On Us, With Your First Order Of $20 Or More!'
  } else if( age < 21 && age > 1 ){
  document.getElementById('message').style.display = "inline-block";
  document.getElementById('message').innerHTML = 'Im sorry little one, You must wait a while longer'
}
}

function siteDeny() {
  document.getElementById('message').style.display = "inline-block";
  document.getElementById('message').innerHTML = 'Ok, see you next time!'
}
  
// ..................................................................................................................
// Write a JavaScript program that runs when 1 of 2 things are true.
// ..................................................................................................................
let year1 = ''
let year2 = ''

const yearOneCheck = (yr1) => {
  year1 = yr1.value
  console.log(yr1.value)
}

const yearTwoCheck = (yr2) => {
  year2 = yr2.value
  console.log(yr2.value)
}

const onlyOne = () => {
  if(year1 < 1996 || year2 < 1996) {
    document.getElementById('decision').innerHTML = 'You may enter as you are dirty old'
  } else {
      document.getElementById('decision').innerHTML = 'childern may not enter, scram before you get it!'
    }
}

// ..................................................................................................................
// Write a JavaScript program that runs when both things are not true.  
// ..................................................................................................................

let guessOne = ''
let guessTwo = ''

const guessOneCheck = (g1) => {
  guessOne = g1.value
  console.log(g1.value)
}

const guessTwoCheck = (g2) => {
  guessTwo = g2.value
  console.log(g2.value)
}

const bothWrong = () =>{
  let randomNum = Math.floor((Math.random() *11) + 1);
  console.log(randomNum)

  if(guessOneCheck != randomNum && guessTwoCheck != randomNum){
    document.getElementById('guessAnswer').innerHTML = 'HaHa you lose better luck next time!!'
  } else if(guessOneCheck == randomNum || guessTwoCheck == randomNum){
    document.getElementById('guessAnswer').innerHTML = 'What! No you cheated, or omg are you a psychic!!!'
  }
}

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