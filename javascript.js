// Navbar color change on scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#080215";
        navbar.style.transition = "0.5s";
    } else {
        navbar.style.backgroundColor = "rgb(11, 115, 176)";
    }
});

// Welcome popup message & EmailJS initialization
window.addEventListener("load", function () {
    // Initialize EmailJS with your Public Key
    emailjs.init("PL-AJlkGykuCfNBIE");

    setTimeout(function () {
        alert("Welcome to Vishnu's Travel Website ✈️");
    }, 1000);
});

// Read More button animation
let buttons = document.querySelectorAll(".readmore_slider");
buttons.forEach(function (btn) {
    btn.addEventListener("mouseover", function () {
        btn.style.transform = "scale(1.1)";
        btn.style.transition = "0.3s";
    });

    btn.addEventListener("mouseout", function () {
        btn.style.transform = "scale(1)";
    });
});

// EmailJS Contact Form Integration
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents page reload

            // Extract values directly matching your HTML form IDs
            const templateParams = {
                from_name: document.getElementById("name").value,
                email: document.getElementById("email").value, // Matches {{email}} in your dashboard template settings
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
            };

            // Send via EmailJS using fixed service ID string
            emailjs.send("vishnu_ingle89", "template_8k853ri", templateParams)
                .then(function () {
                    alert("Thank You! Your message has been sent successfully.");
                    form.reset(); // Clears form fields on success
                })
                .catch(function (error) {
                    alert("Failed to send message. Please try again.");
                    console.error("EmailJS Error details:", error);
                });
        });
    }
});