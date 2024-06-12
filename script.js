// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const contact = event.target.contact.value;
    const message = event.target.message.value;

    const mailtoLink = `mailto:mbalavamsi@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AContact: ${contact}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
});

// Page visit count
if (localStorage.getItem('visitCount')) {
    let visitCount = localStorage.getItem('visitCount');
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').innerText = `Page visits: ${visitCount}`;
} else {
    localStorage.setItem('visitCount', 1);
    document.getElementById('visit-count').innerText = 'Page visits: 1';
}
