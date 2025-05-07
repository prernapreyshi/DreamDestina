document.addEventListener('DOMContentLoaded', function() {
    // Highlight active nav link
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  
    // Handle contact form
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        document.getElementById('formResponse').textContent = 
          `✅ Thank you, ${email}! We received your message.`;
        form.reset();
      });
    }
  });
  
  // Toggle hamburger menu
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  }
  