// scripts.js

// Contact form submission handling (simulate)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation already handled by required attribute
      const formStatus = document.getElementById("formStatus");
      formStatus.style.color = "green";
      formStatus.textContent = "Thank you for contacting us. We will get back to you soon!";

      form.reset();
    });
  }
});
