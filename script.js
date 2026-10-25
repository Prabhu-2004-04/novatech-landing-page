const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const reviews = [
  { quote: "“The kind of sound that makes an ordinary commute feel like your own private concert.”", name: "Riya K.", role: "Music lover · Sample concept review", initials: "RK" },
  { quote: "“Comfortable, considered, and made for the moments when music is all you need.”", name: "Arjun M.", role: "Designer · Sample concept review", initials: "AM" },
  { quote: "“A clean product concept with a big focus on the listening experience.”", name: "Nisha P.", role: "Audio fan · Sample concept review", initials: "NP" }
];
let reviewIndex = 0;

function showReview() {
  const review = reviews[reviewIndex];
  document.querySelector("#reviews blockquote").textContent = review.quote;
  document.querySelector(".review-author strong").textContent = review.name;
  document.querySelector(".review-author small").textContent = review.role;
  document.querySelector(".review-avatar").textContent = review.initials;
  document.querySelector("#reviewCount").textContent =
    `${String(reviewIndex + 1).padStart(2, "0")} / ${String(reviews.length).padStart(2, "0")}`;
}

document.querySelector("#prevReview").addEventListener("click", () => {
  reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
  showReview();
});

document.querySelector("#nextReview").addEventListener("click", () => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  showReview();
});

document.querySelector("#buyButton").addEventListener("click", () => {
  document.querySelector("#buyMessage").textContent =
    "Thanks for your interest! This is a demo product page, so no order has been placed.";
});
