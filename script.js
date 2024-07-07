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
        contact_number: contact,
        message: message,
      })
      .then(
        function (response) {
          alert("Form submitted successfully!");
          event.target.reset();
        },
        function (error) {
          alert("Failed to send the form. Please try again later.");
        }
      );
  });

// Page visit count tracking
if (typeof Storage !== "undefined") {
  // Initialize the visit count
  if (!sessionStorage.visitCount) {
    sessionStorage.visitCount = 0;
  }

  // Increment the visit count
  sessionStorage.visitCount = Number(sessionStorage.visitCount) + 1;

  // Display the visit count
  document.getElementById("visit-count").innerText =
    "Page visits: " + sessionStorage.visitCount;
} else {
  document.getElementById("visit-count").innerText =
    "Sorry, your browser does not support web storage...";
}
