const root = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector("[data-header], .site-header");
const progress = document.querySelector("[data-progress]");
const cursor = document.querySelector("[data-cursor]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const certificateModal = document.querySelector("[data-certificate-modal]");
const modalTitle = document.querySelector("#certificate-title");
const modalMeta = document.querySelector("[data-modal-meta]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalPreview = document.querySelector("[data-modal-preview]");
let lastModalTrigger = null;

body.classList.add("is-loading");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const storedTheme = localStorage.getItem("theme");
root.dataset.theme = storedTheme || root.dataset.theme || "dark";

window.addEventListener("load", () => {
  body.classList.remove("is-loading");
  document.querySelectorAll(".reveal").forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
  });
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

document.querySelectorAll("a[href^='#'], .mobile-menu-link, .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const updateScrollUI = () => {
  header?.classList.toggle("scrolled", window.scrollY > 12);
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  }
};
updateScrollUI();
window.addEventListener("scroll", updateScrollUI, { passive: true });

if (cursor && matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }, { passive: true });

  document.querySelectorAll("a, button, input, textarea, summary").forEach((element) => {
    element.addEventListener("pointerenter", () => cursor.classList.add("is-active"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("is-active"));
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

if (window.gsap && !reduceMotion) {
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  gsap.from(".site-header", { y: -30, opacity: 0, duration: 0.8, ease: "power3.out" });
  gsap.from(".hero-text > *, .hero-copy > *", { y: 36, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out", delay: 0.15 });
  gsap.from(".hero-card", { y: 48, opacity: 0, rotate: -2, duration: 0.9, ease: "power3.out", delay: 0.35 });

  if (window.ScrollTrigger) {
    gsap.utils.toArray("[data-parallax]").forEach((element) => {
      const speed = Number(element.dataset.speed || 0.1);
      gsap.to(element, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: { trigger: element.parentElement || body, scrub: true }
      });
    });

    gsap.utils.toArray(".project-card, .skill-card, .record-card, .snapshot-item, .entry").forEach((card) => {
      gsap.to(card, {
        y: -10,
        ease: "none",
        scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true }
      });
    });
  }
}

document.querySelectorAll(".magnetic, .button, .social-icon, .arrow-button, .theme-toggle, .record-card, .project-card, .entry").forEach((element) => {
  if (reduceMotion || !matchMedia("(pointer: fine)").matches) return;
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
    element.style.transform = `translate(${x}px, ${y}px)`;
  });
  element.addEventListener("pointerleave", () => {
    element.style.transform = "";
  });
});

const certificateRecords = {
  bachelor: {
    title: "Bachelor's Degree in Civil Engineering",
    meta: "Madan Bhandari Memorial Academy Nepal · 2022 to 2026",
    description: "A recruiter-facing summary of Samrita's civil engineering study. The four-year study is presented carefully, while final official result details remain pending until publication.",
    rows: [
      ["Program", "Bachelor's Degree in Civil Engineering"],
      ["College", "Madan Bhandari Memorial Academy Nepal"],
      ["Status", "Four-year study completed"],
      ["Result", "Pending official publication"],
      ["Relevant areas", "Surveying, quantity estimation, concrete technology, construction materials, drawing review, site documentation"],
      ["Recruiter note", "Final transcript can be added after official publication"]
    ]
  },
  plusTwoGroup: {
    title: "Higher Secondary Education (+2), Science",
    meta: "Moonlight Secondary School · 2020 to 2021",
    description: "Grouped +2 Science verification, combining Grade 11, Grade 12, provisional, and conduct records so employers can review the academic foundation without repeated certificate cards.",
    rows: [
      ["Institution", "Moonlight Secondary School"],
      ["Location", "Kumaripati, Lalitpur"],
      ["Stream", "Science"],
      ["Grade 11 GPA", "3.72"],
      ["Grade 12 GPA", "3.64"],
      ["Verification set", "Grade 11 marksheet, Grade 12 transcript, provisional certificate, character certificate"],
      ["Privacy note", "Typed public copy avoids exposing registration and symbol numbers"]
    ],
    images: [
      { src: "assets/certificates/class-11-marksheet.jpeg", label: "Grade 11 Marksheet", alt: "Grade 11 Science marksheet from Moonlight Secondary School" },
      { src: "assets/certificates/class-12-marksheet.jpeg", label: "Grade 12 Transcript", alt: "Grade 12 NEB transcript from Moonlight Secondary School" },
      { src: "assets/certificates/provisional-certificate.jpeg", label: "Provisional Certificate", alt: "Higher secondary provisional certificate" },
      { src: "assets/certificates/plus-two-character-certificate.jpeg", label: "+2 Character Certificate", alt: "Moonlight Secondary School character certificate" }
    ]
  },
  seeGroup: {
    title: "Secondary Education Examination (SEE)",
    meta: "Adarsha Saula Yubak Secondary School · 2019",
    description: "Grouped SEE verification. This presents the secondary education record as one proof set, making it easier to scan while keeping sensitive identifiers out of the typed public copy.",
    rows: [
      ["Institution", "Adarsha Saula Yubak Secondary School"],
      ["Location", "Sainbu Bungamati, Lalitpur"],
      ["Board", "National Examinations Board"],
      ["Result", "GPA 3.55"],
      ["Verification set", "SEE certificate, grade sheet, character certificate"],
      ["Privacy note", "Serial, registration, and symbol numbers are not typed publicly"]
    ],
    images: [
      { src: "assets/certificates/slc-character.jpeg", label: "SEE Certificate", alt: "SEE completion certificate" },
      { src: "assets/certificates/slc-marksheet.jpeg", label: "SEE Grade Sheet", alt: "SEE grade sheet from National Examinations Board" },
      { src: "assets/certificates/slc-character-certificate.jpeg", label: "SEE Character Certificate", alt: "SEE character certificate from Adarsha Saula Yubak Secondary School" }
    ]
  }
};

const renderRows = (rows = []) => `
  <table class="modal-table">
    <tbody>${rows.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join("")}</tbody>
  </table>
`;

const renderImages = (images = []) => images.map((image) => `
  <figure class="modal-document-frame">
    <img class="modal-document" src="${image.src}" alt="${image.alt}" loading="lazy">
    <figcaption class="modal-caption">${image.label}</figcaption>
  </figure>
`).join("");

const openCertificateModal = (key, trigger) => {
  const record = certificateRecords[key];
  if (!record || !certificateModal) return;

  lastModalTrigger = trigger;
  modalTitle.textContent = record.title;
  modalMeta.textContent = record.meta;
  modalDescription.textContent = record.description;
  modalPreview.innerHTML = `${renderRows(record.rows)}${renderImages(record.images || [])}`;
  certificateModal.hidden = false;
  body.style.overflow = "hidden";
  certificateModal.querySelector("[data-modal-close]")?.focus();
};

const closeCertificateModal = () => {
  if (!certificateModal || certificateModal.hidden) return;
  certificateModal.hidden = true;
  body.style.overflow = "";
  lastModalTrigger?.focus();
};

document.querySelectorAll("[data-certificate]").forEach((button) => {
  button.addEventListener("click", () => openCertificateModal(button.dataset.certificate, button));
});
document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeCertificateModal);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCertificateModal();
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!formStatus) return;

  formStatus.textContent = "Sending your message...";
  formStatus.className = "form-status";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) throw new Error("Form request failed");

    contactForm.reset();
    formStatus.textContent = "Message sent. Thank you for reaching out.";
    formStatus.classList.add("success");
  } catch (error) {
    formStatus.textContent = "Message could not be sent right now. Please try again or email directly.";
    formStatus.classList.add("error");
  }
});