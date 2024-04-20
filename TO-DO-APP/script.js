function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputValue").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (!inputValue) {
    alert("Please enter something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  for (i = 0; i < close.length; i++) {
    close[i].onClick = () => {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// var myNodeList = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodeList.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodeList[i].appendChild(span);
// }
