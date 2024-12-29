//Assignment code

var firstNumber = Number(prompt("Enter first Number"))
var secondNumber = Number(prompt("Enter second Number"))
console.log(firstNumber);
console.log(secondNumber);


///basic two values  functions

const modlusButton =()=>{
var resp = firstNumber%secondNumber
console.log(resp)
}

const additionButton = () => {
    console.log(firstNumber + secondNumber)
}

const minusButton = () => {
    console.log(firstNumber - secondNumber)
}

const multiplyButton = () => {
    console.log(firstNumber * secondNumber)
}

const divisionButton = () => {
    console.log(firstNumber / secondNumber)
}


//maximum button
const maxButton = () => {
    if (firstNumber > secondNumber) {
        console.log(firstNumber + " " + "is maximum")
    }
    else {
        console.log(secondNumber + " " + "is maximum")
    }
}

//miniimum button
const minButton = () => {
    if (firstNumber < secondNumber) {
        console.log(firstNumber + " " + "is minimum")
    }
    else {
        console.log(secondNumber + " " + "is minimum")
    }
}

//pow button
const powButton = () => {
    console.log(Math.pow(firstNumber, secondNumber))
}

//abs(x) button
const abxButton = () => {
    console.log(Math.abs(firstNumber))
}

//acos(x) button
const acosButton = () => {
    if (firstNumber === -1 || firstNumber === 0 || firstNumber === 1) {
        console.log(Math.acos(firstNumber))
    }
    else {
        console.warn("syntax error")
        console.log("please enter value between -1 to 1")
    }
}

//acosh(x) button
const acoshButton = () => {
    console.log(Math.acosh(firstNumber))
}

//asin(x)  button
const asinButton = () => {
    if (firstNumber === -1 || firstNumber === 0 || firstNumber === 1) {
        console.log(Math.sin(firstNumber))
    }
    else {
        console.warn("syntax error")
        console.log("please enter value between -1 to 1")
    }
}

//asinh(x) button
const asinhButton = () => {
    console.log(Math.asinh(firstNumber))
}

//exp button
const ExpButton = () => {
    console.log(Math.exp(firstNumber))
}

//log button
const logButton = () => {
    console.log(Math.log(firstNumber))
}

//square root button
const sqrtButton = () => {
    console.log(Math.sqrt(firstNumber))
}

//cube root button
const cubertButton = () => {
    console.log(Math.cbrt(firstNumber))
}

// sin button
const sinButton = () => {
    console.log(Math.sin(firstNumber))
}

// tan button
const tanButton = () => {
    console.log(Math.tan(firstNumber))
}

// cos button
const cosButton = () => {
    console.log(Math.cos(firstNumber))
}

//trunc button
const truncButton =()=>{
    console.log(Math.trunc(firstNumber))
}

// random number button
const randButton =()=>{
console.log(Math.random())
}

// round button
const roundButton =()=>{
console.log(Math.round(firstNumber))    
}

// pi button
const piButton =()=>{
console.log(Math.PI)
}


// Eruler button
const eButton =()=>{
console.log(Math.E)
}


