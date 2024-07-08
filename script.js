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
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Prepare the data to be sent
    var formData = new FormData(this);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect to success page
          window.location.href = "success.html";
        } else {
          alert("Form submission failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });

    this.reset();
  });
