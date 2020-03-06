let body = document.querySelector("body");

let createform = document.createElement("form");
body.appendChild(createform);

let container = document.createElement("div");
createform.appendChild(container);

//creating input field
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "enter items");
container.appendChild(input);

//creating submit button
let submitElement = document.createElement("input");
submitElement.setAttribute("type", "submit");
container.appendChild(submitElement);

//creating ul element
let ul = document.createElement("ul");
container.appendChild(ul);

function createListElement() {
  let newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  //append list element in newDiv
  newDiv.appendChild(newLi);
  //clean input field
  input.value = "";
}

createform.onsubmit = e => {
  if (input.value.length > 0 && input.value.replace(/\s/g, ""))
    createListElement();
  e.preventDefault();
};
