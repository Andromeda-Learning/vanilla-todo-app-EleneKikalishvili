const ul = document.querySelector("ul");
const input = document.querySelector("input");
const form = document.querySelector("form");

function createListElement() {
  const newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  newDiv.classList.add("form-inline", "mt-auto", "p-2");
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  newDiv.appendChild(newLi);
  input.value = "";

  //create rename button
  const renBtn = document.createElement("button");
  renBtn.classList.add("btn", "btn-outline-primary");
  renBtn.appendChild(document.createTextNode("rename"));
  newDiv.appendChild(renBtn);
  renBtn.addEventListener(
    "click",
    () => (newLi.innerHTML = window.prompt("make changes: "))
  );

  //create corresponding delete button
  const delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-primary");
  delBtn.appendChild(document.createTextNode("delete"));
  newDiv.appendChild(delBtn);
  delBtn.addEventListener("click", () => ul.removeChild(newDiv));
}

form.onsubmit = e => {
  if (input.value.length > 0 && input.value.trim() !== "") createListElement();
  e.preventDefault();
};
