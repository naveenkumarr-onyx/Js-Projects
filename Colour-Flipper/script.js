const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// document.querySelector("button #changeBg").addEventListener("click", () => {
//   let hexColor = "#";
//   for (var i = 0; i < 6; i++) {
//     const randomNumber = Math.floor(Math.random() * colors.length);
//     hexColor += colors[randomNumber];
//   }
//   document.querySelector("p").textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

document.querySelector("button").addEventListener("click", () => {
  let hexColor = "#";
  for (var i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colors.length);
    hexColor += colors[randomNumber];
  }
  document.querySelector("p").textContent = `Background-color: ${hexColor}`;
  document.getElementById("copy").addEventListener("click", () => {
    navigator.clipboard
      .writeText(hexColor)
      .then(() => {
        console.log("Color code copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy color code: ", err);
      });
  });
  document.body.style.backgroundColor = hexColor;
});
