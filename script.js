const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

/* CONTACT FORM TO WHATSAPP */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector("select").value;
    const message = this.querySelector("textarea").value;

    const whatsappMessage =
      `Hello RK Salon,

Name: ${name}
Phone: ${phone}
Service: ${service}

Message:
${message}`;

    window.open(
      `https://wa.me/916377253819?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    this.reset();
  });
}

/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}

/* OFFER POPUP */
const offerPopup = document.getElementById("offerPopup");
const closePopup = document.getElementById("closePopup");

if (offerPopup) {
  setTimeout(() => {
    offerPopup.classList.add("show");
  }, 5000);
}

if (closePopup) {
  closePopup.addEventListener("click", () => {
    offerPopup.classList.remove("show");
  });
}

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(item => {
    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* COUNTER ANIMATION */
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounter() {
  if (counterStarted) return;

  const trustSection = document.querySelector(".trust");
  if (!trustSection) return;

  const sectionTop = trustSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    counters.forEach(counter => {
      const target = Number(counter.dataset.target);
      let count = 0;
      const speed = Math.max(1, Math.floor(target / 100));

      const update = () => {
        count += speed;

        if (count < target) {
          counter.innerText = count;
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });

    counterStarted = true;
  }
}

window.addEventListener("scroll", startCounter);
startCounter();

/* BEFORE AFTER SLIDER */
const compareRange = document.getElementById("compareRange");
const afterWrap = document.getElementById("afterWrap");

if (compareRange && afterWrap) {
  compareRange.addEventListener("input", () => {
    afterWrap.style.width = compareRange.value + "%";
  });
}

/* PACKAGE CALCULATOR */
const packageItems = document.querySelectorAll(".packageItem");
const totalPrice = document.getElementById("totalPrice");

function updatePackageTotal() {
  let total = 0;

  packageItems.forEach(item => {
    if (item.checked) {
      total += Number(item.dataset.price);
    }
  });

  if (totalPrice) {
    totalPrice.innerText = total;
  }
}

packageItems.forEach(item => {
  item.addEventListener("change", updatePackageTotal);
});

/* TESTIMONIAL AUTO SLIDER */
const testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

function showTestimonial() {
  if (!testimonials.length) return;

  testimonials.forEach(item => item.classList.remove("active"));

  testimonialIndex++;

  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }

  testimonials[testimonialIndex].classList.add("active");
}

setInterval(showTestimonial, 3000);

/* BEAUTY ASSISTANT */
const assistantButtons = document.querySelectorAll(".assistant-box button");

assistantButtons.forEach(button => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;

    const msg = `Hello RK Salon, I want details about ${service}.`;

    window.open(
      `https://wa.me/916377253819?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  });
});