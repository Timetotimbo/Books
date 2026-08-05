const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});


document.getElementById('year').textContent = new Date().getFullYear();

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(item => observer.observe(item));


const brevoForm = document.getElementById('sib-form');

if (brevoForm) {
  brevoForm.addEventListener('submit', () => {
    const button = brevoForm.querySelector('.optin-button');
    const success = document.getElementById('success-message');
    const error = document.getElementById('error-message');
    const email = brevoForm.querySelector('#EMAIL');

    if (!email || !email.checkValidity()) {
      return;
    }

    if (error) error.style.display = 'none';

    if (button) {
      button.disabled = true;
      button.textContent = 'Sending...';
    }

    window.setTimeout(() => {
      if (success) success.style.display = 'block';
      if (button) {
        button.textContent = '✓ You’re In!';
        button.disabled = false;
      }
      brevoForm.reset();
    }, 900);
  });
}
