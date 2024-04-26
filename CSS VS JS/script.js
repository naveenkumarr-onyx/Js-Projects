let range_input = document.querySelector("input");
// range_input.addEventListener("drag", () => {
//   console.log("Draging");
// });
range_input.addEventListener("change", handleChange);
function handleChange() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log(suffix);
}
