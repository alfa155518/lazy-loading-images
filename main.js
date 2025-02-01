let allCards = document.querySelectorAll(".cards .card .card-img img");

// Options
const options = {
  root: null,
  rootMargin: "0px 0px -300px 0px",
  threshold: 0.9,
};

// Create Intersection Observer
let cardsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;
      img.setAttribute("src", img.getAttribute("data-src"));
      observer.unobserve(entry.target);
    }
  });
});

// Start Observe Img
allCards.forEach((card) => {
  cardsObserver.observe(card);
});
