/// Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked_tab = e.target.closest(".operations__tab");

  tabs.forEach((el) => el.classList.remove("operations__tab--active"));

  if (!clicked_tab) return;

  clicked_tab.classList.add("operations__tab--active");

  tabsContent.forEach((el) =>
    el.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked_tab.dataset.tab}`)
    .classList.add("operations__content--active");
});

//loading as we scroll

const sections = document.querySelectorAll(".part");
const callbackSection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observerSection.unobserve(entry.target);
  });
};

const optionSection = {
  root: null,
  threshold: 0.25,
};

const observerSection = new IntersectionObserver(
  callbackSection,
  optionSection
);

sections.forEach(function (section) {
  observerSection.observe(section);
  section.classList.add("section--hidden");
});

// =>>>> navabar auto scroll

const navbar = document.querySelector(".main-nav-list");

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const footer = document.querySelector(".footer__nav");
footer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("footer__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const sectionHow = document.querySelector(".section-how");
const learnMorebtn = document.querySelector(".learn-more");

learnMorebtn.addEventListener("click", function (e) {
  e.preventDefault();
  sectionHow.scrollIntoView({ behavior: "smooth" });
});

const toFooter = document.querySelector(".footer");
const startbtn = document.querySelector(".start");

startbtn.addEventListener("click", function (e) {
  e.preventDefault();
  toFooter.scrollIntoView({ behavior: "smooth" });
});

const form = document.getElementById("cta-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;

  fetch("/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
