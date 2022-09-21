const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-","");
  for(let digit of date){
      sum = sum + Number(digit);
  }
   return sum;
}


const checkIsNumberLucky = (sumOfDate , numberToCheck) => {
  console.log(sumOfDate,numberToCheck);
  if(sumOfDate % numberToCheck===0){
      return showMessage(`${numberToCheck} is  a lucky Number!! 🤩 🤩`);
  }
   showMessage(`${numberToCheck} is not that lucky 😕`);
}


const showMessage = (message) => {
  displayMessage.innerText = message;
  
};

const handleAllCalculations = () => {
console.log('fon')
   
}
checkButton.addEventListener("click", handleAllCalculations);