let crValue = "";
document.querySelector("#display").value = crValue;
let f = false;

function add(value) {
  if (f) {
    crValue = "";
    f = false;
  }
  crValue += value;
  document.querySelector("#display").value = crValue;
}

function clrDisplay() {
  crValue = "";
  f = false;
  document.querySelector("#display").value = crValue;
}

function calcans() {
  try {
    crValue = eval(crValue);
    document.querySelector("#display").value = crValue;
    f = true;
  } catch (error) {
    alert("Invalid Expression");
  }
}

function Effect(button) {
  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 300);
}
