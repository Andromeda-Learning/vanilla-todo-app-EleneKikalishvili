var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button = document.getElementById("enter");

function createListElement() {
  var newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  var newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  //append list element in newDiv
  newDiv.appendChild(newLi);
}

button.addEventListener("click", () => {
  if (input.value.length > 0) createListElement();
});
