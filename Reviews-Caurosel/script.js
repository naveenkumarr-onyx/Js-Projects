const reviews = [
  {
    id: 1,
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    author: "SUSAN DOE",
    role: "Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus maxime impedit fugit laborum dolores dolorem tota",
  },
  {
    id: 2,
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    author: "EMMA DOE",
    role: "Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus maxime impedit fugit laborum dolores dolorem tota",
  },
  {
    id: 3,
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    author: "PETER DOE",
    role: "Product Manager",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus maxime impedit fugit laborum dolores dolorem tota",
  },
  {
    id: 4,
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    author: "LINC DOE",
    role: "Data Analyst",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus maxime impedit fugit laborum dolores dolorem tota",
  },
  {
    id: 5,
    img: "https://www.course-api.com/images/people/person-5.jpeg",
    author: "EMILY CLERK",
    role: "Digital Marketing",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus maxime impedit fugit laborum dolores dolorem tota",
  },
];

function showCard(index) {
  const cardElements = document.querySelectorAll("main");
  cardElements.forEach((index) => {
    if (index === 0) {
      cardElements.style.display = "flex";
    } else {
      cardElements.style.display = "none";
    }
  });
}

let currentIndex = 0;
function showNextCard() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showCard(currentIndex);
}

reviews.forEach((value, index) => {
  var a = document.createElement("main");
  var b = document.querySelector(".container");
  a.innerHTML = "";
  a.innerHTML = `
  <h2>Reviews</h2>
        <article>
          <div class="img-container">
            <img
              src=${value.img}
              alt=""
            />
          </div>
          <div class="info-div">
            <h3 id="author">${value.author}</h3>
            <h3 id="job">${value.role}</h3>
            <p id="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus maxime impedit fugit laborum dolores dolorem tota
            </p>
          </div>
          <div class="btn-div">
            <button class="prev-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          <div class="quote-icon">
            <button>
              <i class="fas fa-chevron-square-down"></i>
            </button>
          </div>
        </article>
  `;
  b.appendChild(a);
  if (index === 0) {
    a.style.display = "flex";
  } else {
    a.style.display = "none";
  }
  a.querySelector(".next-btn").addEventListener("click", showNextCard);
});