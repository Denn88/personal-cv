// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close the menu after a link is tapped
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Animate skill bars when they scroll into view
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.level + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

skillFills.forEach((bar) => skillObserver.observe(bar));

// Loading screen: hide it once everything has loaded
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
  setTimeout(() => loader.remove(), 600);
});

// Scroll reveal: fade elements in as they enter the screen
const revealItems = document.querySelectorAll(
  '.section-title, .about-text, .card, .timeline-item, .skill, ' +
  '.project-card, .cert-card, .contact-list li, .social-links'
);

revealItems.forEach((el) => {
  el.classList.add('reveal');
  const position = Array.from(el.parentElement.children).indexOf(el);
  el.style.animationDelay = Math.min(position, 4) * 0.1 + 's';
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((el) => revealObserver.observe(el));