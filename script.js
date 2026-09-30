// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form validation

const contactForm = document.querySelector("#contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
        const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you! Your message has been submitted.");
        contactForm.reset();
    });
}