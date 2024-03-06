const headerLogo = document.querySelector(".header .title");
const introBtn = document.querySelector(".header ul .t-intro");
const portfolioBtn = document.querySelector(".header ul .t-portfolio");
const skill_stackBtn = document.querySelector(".header ul .t-skill_stack");
const timelineBtn = document.querySelector(".header ul .t-timeline");
const contactBtn = document.querySelector(".header ul .t-contact");
const hambergerBtn = document.querySelector(".header .hamberger");
const ul = document.querySelector(".header ul");
const li = document.querySelectorAll(".header ul li");

window.addEventListener("scroll", () => {
  console.log(window);
});

headerLogo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

introBtn.addEventListener("click", () => {
  window.scrollTo({ top: 73, behavior: "smooth" });
});

timelineBtn.addEventListener("click", () => {
  window.scrollTo({ top: 652, behavior: "smooth" });
});

skill_stackBtn.addEventListener("click", () => {
  window.scrollTo({ top: 1168, behavior: "smooth" });
});

portfolioBtn.addEventListener("click", () => {
  window.scrollTo({ top: 2065, behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  window.scrollTo({ top: 4764, behavior: "smooth" });
});

hambergerBtn.addEventListener("click", (e) => {
  if (ul.classList.contains("show_cate_list")) {
    ul.classList.remove("show_cate_list");
    return;
  }
  ul.classList.add("show_cate_list");
});

li.forEach((list) => {
  list.addEventListener("click", () => {
    ul.classList.remove("show_cate_list");
  });
});
