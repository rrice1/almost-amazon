const printToDom = (stringToPrint, divId) => {
    const printHere = document.getElementById(divId);
    printHere.innerHTML = stringToPrint;
  };
  
const discount = (price) => {
newPrice = price*.75
return newPrice;
}


  export {printToDom}