const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const target = link.getAttribute("href").replace("#", "");

    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) sec.classList.add("active");
    });
  });
});