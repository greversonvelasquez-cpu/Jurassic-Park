// Menu de navegação responsivo
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

if (menuButton && menu) {
  menuButton.hidden = false;
  menu.classList.add('menu-collapsed');

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('menu-collapsed', expanded);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.classList.add('menu-collapsed');
      menuButton.focus();
    }
  });
}

// Botão de impressão
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());

// Validação de formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('mensagem').value.trim();

    if (name.length < 3) {
      alert('Por favor, insira um nome válido.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    if (message.length < 10) {
      alert('Por favor, insira uma mensagem mais detalhada.');
      return;
    }

    alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
    contactForm.reset();
  });
}

// Animação de Scroll (cards e elementos)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .hero-side-card, .intro, .fact-strip').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.8s ease-out';
  observer.observe(el);
});
// ===== DROPDOWN "EXPLORE O PARQUE" =====
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.getElementById('dropdown-toggle');

if (dropdown && dropdownToggle) {
  // Abrir/fechar ao clicar
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('active');
    dropdownToggle.setAttribute('aria-expanded', isOpen);
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Fechar ao apertar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('active');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
}