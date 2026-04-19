const root = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector(".site-header");
const cursor = document.querySelector("[data-cursor]");
const contactForm = document.querySelector("[data-contact-form]");

body.classList.add("is-loading");

const storedTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
root.dataset.theme = storedTheme || preferredTheme;

window.addEventListener("load", () => {
  body.classList.remove("is-loading");
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} theme`);
});

menuToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  element.style.transitionDelay = `${Math.min(index * (isMobile ? 32 : 45), isMobile ? 150 : 220)}ms`;
  observer.observe(element);
});

document.querySelectorAll("a, button, .project-card, .entry, .chip-list li, .label-list li").forEach((element) => {
  element.addEventListener("pointerdown", () => element.classList.add("tap-active"));
  element.addEventListener("pointerup", () => element.classList.remove("tap-active"));
  element.addEventListener("pointercancel", () => element.classList.remove("tap-active"));
  element.addEventListener("pointerleave", () => element.classList.remove("tap-active"));
});

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let targetX = cursorX;
  let targetY = cursorY;

  window.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  });

  const renderCursor = () => {
    cursorX += (targetX - cursorX) * 0.18;
    cursorY += (targetY - cursorY) * 0.18;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };

  renderCursor();

  document.querySelectorAll("a, button, .project-card, .entry, input, textarea").forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("active"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = contactForm.querySelector("[data-form-message]");
  const button = contactForm.querySelector("button[type='submit']");
  const requiredFields = Array.from(contactForm.querySelectorAll("[required]"));
  let firstInvalid = null;

  requiredFields.forEach((field) => {
    const status = contactForm.querySelector(`[data-status-for="${field.name}"]`);
    const invalid = !field.value.trim() || (field.type === "email" && !field.validity.valid);
    field.classList.toggle("error", invalid);
    if (status) {
      status.textContent = invalid ? "Please complete this field." : "";
    }
    if (invalid && !firstInvalid) {
      firstInvalid = field;
    }
  });

  if (firstInvalid) {
    message.textContent = "Oops! Please check the highlighted fields and try again.";
    message.className = "form-message error";
    firstInvalid.focus();
    return;
  }

  button.disabled = true;
  button.textContent = "Sending...";
  message.textContent = "Submitting your message...";
  message.className = "form-message";

  window.setTimeout(() => {
    button.disabled = false;
    button.textContent = "Send message";
    message.textContent = "Thank you! Your submission has been received.";
    message.className = "form-message success";
    contactForm.reset();
  }, 700);
});
