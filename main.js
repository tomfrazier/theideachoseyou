/* ─────────────────────────────────────────
   The Idea Chose You — theideachoseyou.com
   Scripts
   ───────────────────────────────────────── */

/* ─── SCROLL REVEAL ─── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

/* ─── NAV SCROLL ─── */
const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navEl.style.background = 'rgba(12,11,9,0.97)';
    navEl.style.backdropFilter = 'blur(8px)';
  } else {
    navEl.style.background = 'linear-gradient(to bottom, rgba(12,11,9,0.95) 0%, transparent 100%)';
    navEl.style.backdropFilter = 'none';
  }
});
