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

function checkConsecutive(N, arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Check if the elements are consecutive
  for (let i = 1; i < N; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return 0; // Not consecutive
    }
  }

  return 1; // Consecutive
}

// Test cases

console.log(checkConsecutive(6, [3, 7, 2, 5, 4, 6])); // Output: 1
console.log(checkConsecutive(6, [1, 9, 2, 4, 0, 3])); // Output: 0
