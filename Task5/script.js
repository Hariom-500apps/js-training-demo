// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {

  fixedValue+=1
  return fixedValue;

  // Only change code above this line
}
function getOutput() {
  document.getElementById("output").innerText= incrementer(fixedValue);
}