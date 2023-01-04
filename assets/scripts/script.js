const scrollBtn = document.querySelector(".scroll__top");

const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("active");
  } else {
    scrollBtn.classList.remove("active");
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
