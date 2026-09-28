const repo = "https://github.com/havocboxmedia/PEAKVR-Havoc";

const setLinks = (selector, suffix = "") => {
  document.querySelectorAll(selector).forEach((el) => {
    el.href = repo + suffix;
  });
};

if (!repo.includes("https://github.com/havocboxmedia/PEAKVR-Havoc")) {
  setLinks("[data-github]");
  setLinks("[data-download]", "/releases/latest");
  setLinks("[data-issues]", "/issues");
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.1 });

document.querySelectorAll(".feature-card, .gallery-shot, .install-panel, .support-card")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

