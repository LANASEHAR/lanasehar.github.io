// Smooth scrolling for navigation links
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-based reveal animations using Intersection Observer
const observerOptions = {
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: '0px 0px -50px 0px' // Adjust for earlier trigger
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add a class to trigger CSS animations
    }
  });
}, observerOptions);

// Observe elements with 'reveal-on-scroll' class
document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  observer.observe(el);
});

// Add click effect to contact cards (subtle feedback)
document.querySelectorAll('.contact-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  });
});

// Optional: Parallax effect on hero background (subtle)
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-cv');
  const scrollY = window.scrollY;
  if (hero) {
    hero.style.backgroundPositionY = `${scrollY * 0.5}px`; // Slow parallax
  }
});

// Toggle thème
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
// Charger thème
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

// Slider priorité
document.getElementById('priority-slider').addEventListener('input', (e) => {
  document.getElementById('priority-value').textContent = e.target.value;
  // Simulation IA : Highlight si >7
  if (e.target.value > 7) {
    document.querySelector('.screens-grid').classList.add('highlight');
    document.getElementById('feedback-modal').showModal();
  } else {
    document.querySelector('.screens-grid').classList.remove('highlight');
  }
});

// Fermer modale
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('feedback-modal').close();
});

// Animation scroll (parallax-like)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.hero-cv').style.transform = `translateY(${scrolled * 0.5}px)`;
});
// Reveal elements on scroll
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-effect');
    observer.observe(section);
});
