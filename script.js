var element;

var target;

target=document.getElementById("content");

element="<h2>This Heading is inserted by JS</h2>"

target.insertAdjacentHTML("beforeend",element);

var newEl=document.createElement("li");

var newTe=document.createTextNode("WOW Great Heading");

newEl.appendChild(newTe);

var t=document.getElementById("list");
var old=t.children[1];

t.replaceChild(newEl,old);

var tt=document.getElementById("list").children[2];

var copy=tt.cloneNode(true);

console.log(copy);