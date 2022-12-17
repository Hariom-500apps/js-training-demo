// Only change code below this line
function urlSlug(title) {
 return title.toLowerCase().trim().split(/\s+/).join("-");
}

// Only change code above this line
let a = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
function getOutput() {
  document.getElementById("output").innerText= a ;
}