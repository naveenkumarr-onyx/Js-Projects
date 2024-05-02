function myFunction() {
  var input, filter, ul, li, a, textValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  if (!filter) {
    alert("Enter a value");
  }
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
