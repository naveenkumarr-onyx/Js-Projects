let range_inputs = document.querySelectorAll(
  ".main-container input.range_input"
);

range_inputs.forEach((input) => input.addEventListener("input", handleChange));

function handleChange() {
  let value = this.value;
  let unit = this.dataset.sizing || "";
  let property = this.dataset.property;

  document.documentElement.style.setProperty(`--${property}`, value + unit);
  console.log(property);
  console.log(unit);
  console.log(value);
}
