let ul = document.querySelector("ul");
let input = document.querySelector("input");
let form = document.querySelector("form");

function createListElement() {
  let newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  newDiv.appendChild(newLi);
  input.value = "";
}

form.onsubmit = e => {
  if (input.value.length > 0 && input.value.replace(/\s/g, ""))
    createListElement();
  e.preventDefault();
};
