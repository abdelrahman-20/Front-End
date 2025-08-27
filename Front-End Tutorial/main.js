const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");

const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const field3 = document.getElementById("field3");

// sync input values live into fields
first.addEventListener(
  "input",
  () => (field1.textContent = first.value)
);
last.addEventListener(
  "input",
  () => (field2.textContent = last.value)
);
email.addEventListener(
  "input",
  () => (field3.textContent = email.value)
);
