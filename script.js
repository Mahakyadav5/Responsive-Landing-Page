// Change navbar color on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#1f2833";
  } else {
    navbar.style.backgroundColor = "#0b0c10";
  }
});
