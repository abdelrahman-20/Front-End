var list = document.querySelector("ul");

var count = 0;
var child = list.firstElementChild;

while (child) {
  child = child.nextElementSibling;
  count++;
}

console.log(count);
