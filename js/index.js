// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
  
        if (targetSection) {
          const offset = targetSection.getBoundingClientRect().top;
          window.scrollBy({
            top: offset,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }
  
    toggleSwitch.addEventListener('change', switchTheme);
  
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
  
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  });
  
  // Contact form submission
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // You can add form validation here before submission if needed
  
      // Simulate form submission (replace this with your actual form submission code)
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  });

  // Happy Coding - Made with ❤️ by Akshat Verma [MERN STACK DEVELOPER]