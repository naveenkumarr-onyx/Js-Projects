let range_input = document.querySelectorAll(".main-container input");
range_input.forEach((input) => input.addEventListener("change", handleChange));
function handleChange() {}
// range_input.addEventListener("change", handleChange);
// function handleChange() {
//   const suffix = this.dataset.sizing || "";
//   document.documentElement.style.setProperty(
//     `--${this.name}`,
//     this.value + suffix
//   );
//   console.log(suffix);
// }
// function handleChange() {
//   // var a = document.getElementsByTagName("img");
//   var b = 10;
//   var a = document.getElementsById("img-ctn");
// }
