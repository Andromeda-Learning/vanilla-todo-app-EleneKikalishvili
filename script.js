let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let button = document.getElementById("enter");

function createListElement() {
  let newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  //append list element in newDiv
  newDiv.appendChild(newLi);
  //clean input field
  input.value = "";

  //create rename button
  let renBtn = document.createElement("button");
  renBtn.appendChild(document.createTextNode("rename"));
  newDiv.appendChild(renBtn);
  renBtn.addEventListener(
    "click",
    () => (newLi.innerHTML = window.prompt("make changes: "))
  );
}

//add List after click
button.addEventListener("click", () => {
  if (input.value.length > 0 && input.value.replace(/\s/g, ""))
    createListElement();
});

//add list after keypress
input.addEventListener("keypress", event => {
  if (
    input.value.length > 0 &&
    event.keyCode === 13 &&
    input.value.replace(/\s/g, "")
  )
    createListElement();
});
