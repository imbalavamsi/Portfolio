// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const contact = event.target.contact.value;
    const message = event.target.message.value;

    emailjs
      .send("service_loo7p3c", "template_j3q2s15", {
        from_name: name,
        from_email: email,
        contact: contact,
        message: message,
      })
      .then(
        (response) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
        }
      );
  });
