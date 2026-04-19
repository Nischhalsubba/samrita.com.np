const root = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector(".site-header");
const cursor = document.querySelector("[data-cursor]");
const contactForm = document.querySelector("[data-contact-form]");
const certificateModal = document.querySelector("[data-certificate-modal]");
const modalClose = document.querySelector("[data-modal-close]");
const modalTitle = document.querySelector("#certificate-title");
const modalMeta = document.querySelector("[data-modal-meta]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalPreview = document.querySelector("[data-modal-preview]");
let lastModalTrigger = null;

body.classList.add("is-loading");

const storedTheme = localStorage.getItem("theme");
root.dataset.theme = storedTheme || "dark";

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

document.querySelectorAll(".mobile-menu-link").forEach((link) => {
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

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (window.gsap && !reduceMotion) {
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.set(".hero-bg, .footer-bg", { rotation: 45, transformOrigin: "50% 50%" });

  if (window.ScrollTrigger) {
    gsap.to(".hero-bg", {
      rotation: 135,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".footer-bg", {
      rotation: 135,
      ease: "none",
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
      }
    });
  }

  gsap.from(".site-header", { y: -24, opacity: 0, duration: 0.7, ease: "power2.out" });
  gsap.from(".hero-text > *", { y: 24, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power2.out", delay: 0.1 });
}

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

const certificateRecords = {
  bachelor: {
    title: "Bachelor Completion Record",
    meta: "Civil Engineering · 2026",
    description: "A public summary of Samrita's four-year Civil Engineering completion record. Private registration numbers and personal identifiers are intentionally not shown.",
    image: "",
    rows: [
      ["Program", "Bachelor's Degree in Civil Engineering"],
      ["College", "Madan Bhandari Memorial Academy Nepal"],
      ["Status", "Completed"],
      ["Result", "Yet to be finalized"],
      ["Focus", "Surveying, estimation, construction materials, structural fundamentals"],
      ["Public note", "Detailed document available on request"]
    ]
  },
  autocad: {
    title: "AutoCAD Drafting Practice",
    meta: "Technical Record · 2026",
    description: "A practical drafting record for basic plan interpretation and civil drawing preparation.",
    image: "",
    rows: [
      ["Skill area", "2D drafting and plan reading"],
      ["Tools", "AutoCAD practice workflow"],
      ["Outputs", "Simple plans, drawing organization, annotation practice"],
      ["Public note", "Portfolio summary only"]
    ]
  },
  see: {
    title: "SEE Certificate",
    meta: "Secondary Education · 2019",
    description: "Secondary Education Examination completion summary from Adarsha Saula Yubak Secondary School.",
    image: "assets/certificates/slc-character.jpeg",
    rows: [
      ["Institution", "Adarsha Saula Yubak Secondary School"],
      ["Location", "Sainbu Bungamati, Lalitpur"],
      ["Result", "GPA 3.55"],
      ["Public note", "Serial and registration details hidden"]
    ]
  },
  seeMarksheet: {
    title: "SEE Marksheet",
    meta: "Secondary Education · 2019",
    description: "SEE grade-sheet summary from the National Examinations Board.",
    image: "assets/certificates/slc-marksheet.jpeg",
    rows: [
      ["Institution", "Adarsha Saula Yubak Secondary School"],
      ["Board", "National Examinations Board"],
      ["Result", "GPA 3.55"],
      ["Public note", "Private identifiers hidden in typed copy"]
    ]
  },
  seeCharacter: {
    title: "SEE Character Certificate",
    meta: "School Record · 2019",
    description: "Character certificate summary issued by Adarsha Saula Yubak Secondary School.",
    image: "assets/certificates/slc-character-certificate.jpeg",
    rows: [
      ["Institution", "Adarsha Saula Yubak Secondary School"],
      ["Level", "SEE"],
      ["Use", "Academic and conduct verification"],
      ["Public note", "Document preview included by request"]
    ]
  },
  grade11: {
    title: "Grade 11 Marksheet",
    meta: "Science Stream · 2020",
    description: "Grade 11 Science marksheet summary from Moonlight Secondary School.",
    image: "assets/certificates/class-11-marksheet.jpeg",
    rows: [
      ["Institution", "Moonlight Secondary School"],
      ["Location", "Kumaripati, Lalitpur"],
      ["Result", "GPA 3.72"],
      ["Public note", "Subject-level document available on request"]
    ]
  },
  grade12: {
    title: "Grade 12 Transcript",
    meta: "NEB Science Stream · 2021",
    description: "Grade 12 transcript summary from the National Examination Board.",
    image: "assets/certificates/class-12-marksheet.jpeg",
    rows: [
      ["Institution", "Moonlight Secondary School"],
      ["Board", "National Examination Board"],
      ["Result", "GPA 3.64"],
      ["Public note", "Registration and symbol details hidden"]
    ]
  },
  provisional: {
    title: "Provisional Certificate",
    meta: "Higher Secondary Completion · 2021",
    description: "Provisional certificate summary confirming completion of higher secondary Science requirements.",
    image: "assets/certificates/provisional-certificate.jpeg",
    rows: [
      ["Level", "+2 Science"],
      ["Status", "Completed"],
      ["Use", "Academic transition and verification"],
      ["Public note", "Private identifiers hidden"]
    ]
  },
  plusTwoCharacter: {
    title: "+2 Character Certificate",
    meta: "Higher Secondary School Record · 2021",
    description: "Character certificate summary from Moonlight Secondary School.",
    image: "assets/certificates/plus-two-character-certificate.jpeg",
    rows: [
      ["Institution", "Moonlight Secondary School"],
      ["Level", "+2 Science"],
      ["Use", "Academic and conduct verification"],
      ["Public note", "Document preview included by request"]
    ]
  }
};

const openCertificateModal = (key, trigger) => {
  const record = certificateRecords[key];
  if (!record || !certificateModal) {
    return;
  }

  modalTitle.textContent = record.title;
  modalMeta.textContent = record.meta;
  modalDescription.textContent = record.description;
  const imageMarkup = record.image
    ? `<img class="modal-document" src="${record.image}" alt="${record.title} document preview" loading="lazy">`
    : "";
  modalPreview.innerHTML = record.rows
    .map(([label, value]) => `<div class="modal-preview-row"><span>${label}</span><strong>${value}</strong></div>`)
    .join("") + imageMarkup;

  lastModalTrigger = trigger || document.activeElement;
  certificateModal.classList.add("is-open");
  certificateModal.setAttribute("aria-hidden", "false");
  body.classList.add("menu-open");
  modalClose?.focus();

  if (window.gsap) {
    gsap.fromTo(".modal-panel", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" });
  }
};

const closeCertificateModal = () => {
  if (!certificateModal) {
    return;
  }

  certificateModal.classList.remove("is-open");
  certificateModal.setAttribute("aria-hidden", "true");
  body.classList.remove("menu-open");
  lastModalTrigger?.focus?.();
};

document.querySelectorAll("[data-certificate]").forEach((trigger) => {
  trigger.addEventListener("click", () => openCertificateModal(trigger.dataset.certificate, trigger));
});

modalClose?.addEventListener("click", closeCertificateModal);
certificateModal?.addEventListener("click", (event) => {
  if (event.target === certificateModal) {
    closeCertificateModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCertificateModal();
  }
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
  const originalButtonText = button.textContent;
  button.textContent = "Please wait...";
  message.textContent = "Submitting your message...";
  message.className = "form-message";

  window.setTimeout(() => {
    button.disabled = false;
    button.textContent = originalButtonText;
    message.textContent = "Thank you! Your submission has been received.";
    message.className = "form-message success";
    contactForm.reset();
  }, 700);
});
