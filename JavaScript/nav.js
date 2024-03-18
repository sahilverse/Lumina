// Mobile navigation menu
const navbar = document.querySelector(".nav-list");
const bar = document.querySelector("#bar");
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
};

if (close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
};
