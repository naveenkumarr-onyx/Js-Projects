const data = [
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
  {
    img: "https://www.w3schools.com/w3images/mountains.jpg",
    heading: "My Work",
    subHeading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla autem similique recusandae deleniti molestias debitis hicblanditiis doloremque rem!",
  },
];
data.forEach((ele) => {
  var container = document.querySelector(".sub-container");
  var cont = document.createElement("div");
  cont.classList.add("cont");
  cont.innerHTML = `
      <img src="${ele.img}" alt="img" />
      <h2>${ele.heading}</h2>
      <p>${ele.subHeading}</p>
    `;
  container.appendChild(cont);
});
