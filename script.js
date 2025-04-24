document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
  
    document.querySelectorAll('.hidden-element').forEach((el) => observer.observe(el));
  
    // Smooth scrolling for navigation
    function scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  
    // Add click event to all navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        scrollToSection(sectionId);
      });
    });
  
    // Add click event to contact button
    document.getElementById('contact-btn').addEventListener('click', function() {
      scrollToSection('contact');
    });
  
    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    if (currentTheme === 'dark') {
      themeIcon.textContent = '🌞';
    } else {
      themeIcon.textContent = '🌙';
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update icon
      themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';
    });
    
    // ... rest of existing code ...
  });