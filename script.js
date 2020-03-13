const ul = document.querySelector("ul");
const input = document.querySelector("input");
const form = document.querySelector("form");

function createListElement() {
  const newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  newDiv.appendChild(newLi);
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

form.onsubmit = e => {
  if (input.value.length > 0 && input.value.trim() !== "") createListElement();
  e.preventDefault();
};
