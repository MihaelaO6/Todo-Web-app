//make each element draggable with asign draggable= true
let sections = document.querySelectorAll(".section");
let draggableItem = document.querySelectorAll("LI");
let draggableSection = null;
draggableItem.forEach((item) => {
  item.addEventListener("dragstart", dragStart); //pocetok na dragot
  item.addEventListener("dragend", dragEnd); //koga zavrsuva so vlecenje e drag end
});

function dragStart() {
  draggableSection = this; //pokazuva kon elementot sto treba da se drag
}
function dragEnd() {
  draggableSection = null; //od koga ke se dropne elementot da se stavi da ne pokazuva kon nikoj element
}
function dragOver(e) {
  //dragover e drag targetot potocno nasite sekcii kade sto moze da se dropne itemot
  e.preventDefault();
}
function dragEnter() {
  //se enter/vleguva vo drop targetot
  this.style.border = "1 px solid rgb(45, 46, 45);";
}
function dragLeave() {
  //se izleguva od drop targetot
  this.style.border = "none";
}
function dragDrop() {
  //se ostava vo drop targetot
  this.style.border = "none";
  this.appendChild(draggableSection);
}
sections.forEach((section) => {
  section.addEventListener("dragover", dragOver);
  section.addEventListener("dragenter", dragEnter);
  section.addEventListener("dragleave", dragLeave);
  section.addEventListener("drop", dragDrop);
});

var mymodal = document.getElementById("myModal");
var mybut = document.getElementById("myBtn");
var span = document.getElementsByClassName("closeModal")[0]; //zemanje na close buttonot

//otvaranje na modal
mybut.onclick = function () {
  mymodal.style.display = "block";
  console.log("prikaz na modal");
};
//zatvranje na modalot so klik na x
span.onclick = function () {
  mymodal.style.display = "none";
  console.log("so klik na x");
};
//zatvaranje na modalot so klik bilo kade na ekranot
window.onclick = function (event) {
  if (event.target == mymodal) {
    mymodal.style.display = "none";
    console.log("klik nadvor od modalot");
  }
};

// Kreiranje na close button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Za brisenje na element od listata
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Dodavanje na checked na elementot
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Kreiranje na nov task so klik na Submit button
function addNewElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputTask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  console.log("add new task");

  if (inputValue === "") {
    alert("Can't add empty task!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("inputTask").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.setAttribute("draggable", "true");
  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  li.addEventListener("dragstart", dragStart);
  li.addEventListener("dragend", dragEnd);
  document.getElementById("inputTask").value = "";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  mymodal.style.display = "none";
}

