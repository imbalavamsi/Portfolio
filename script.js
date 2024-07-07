document.addEventListener("DOMContentLoaded", function () {
  const visitCountKey = "pageVisitCount";
  let visitCount = localStorage.getItem(visitCountKey);

  if (visitCount === null) {
    visitCount = 0;
  } else {
    visitCount = parseInt(visitCount, 10);
  }

  visitCount += 1;
  localStorage.setItem(visitCountKey, visitCount);

  document.getElementById(
    "visit-count"
  ).innerText = `Page visits: ${visitCount}`;
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const contact = event.target.contact.value;
    const message = event.target.message.value;

    emailjs
      .send("service_wu9folc", "template_j3q2s15", {
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
