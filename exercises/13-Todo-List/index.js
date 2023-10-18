// Your code here
var list = document.getElementById("list");
let input = document.getElementById('addToDo');

// add item function
function addItem(e) {
   var item = document.createElement("li").innerHTML = '<span><i class="fa fa-trash"></i></span> '+input.value;
   var valor = el.value;
   item.appendChild(valor);
   list.appendChild(item);
   item.addEventListener("keypress", removeItem, false);
}

// remove item function
function removeItem(e) {
   var item = e.currentTarget;
   var itemRev = item.parentNode;
   itemRev.removeChild(item);
}

var el = document.getElementById("addToDo");

input.addEventListener("click", addItem, false);