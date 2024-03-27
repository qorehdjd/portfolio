const headerLogo = document.querySelector(".header .title");
const introBtn = document.querySelector(".header ul .t-intro");
const portfolioBtn = document.querySelector(".header ul .t-portfolio");
const skill_stackBtn = document.querySelector(".header ul .t-skill_stack");
const timelineBtn = document.querySelector(".header ul .t-timeline");
const contactBtn = document.querySelector(".header ul .t-contact");
const hambergerBtn = document.querySelector(".header .hamberger");
const ul = document.querySelector(".header ul");
const li = document.querySelectorAll(".header ul li");
const info = document.querySelector(".info");
const timeline = document.querySelector(".timeline");
const skill_stack = document.querySelector(".skill_stack");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");
const responsiveDesign = window.matchMedia("(max-width:960px)");

function scrollToTag(tagBtn, tag) {
  tagBtn.addEventListener("click", () => {
    let headerWidth = 68;
    if (responsiveDesign.matches) {
      headerWidth = 328;
    }
    const scroll =
      tag.getBoundingClientRect().top - headerWidth + window.scrollY;
    window.scrollTo({ top: scroll, behavior: "smooth" });
  });
}

headerLogo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollToTag(introBtn, info);
scrollToTag(timelineBtn, timeline);
scrollToTag(skill_stackBtn, skill_stack);
scrollToTag(portfolioBtn, portfolio);
scrollToTag(contactBtn, contact);

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
