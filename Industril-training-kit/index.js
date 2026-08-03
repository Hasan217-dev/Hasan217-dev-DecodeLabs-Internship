// =========================================================
// Mobile nav toggle
// =========================================================
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after a link is tapped
primaryNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// Genre filter (state: current genre)
// =========================================================
const genreInputs = document.querySelectorAll('input[name="genre"]');
const bookCards = document.querySelectorAll('.book-card');
const emptyState = document.getElementById('emptyState');

function applyFilter(genre) {
  let visibleCount = 0;
  bookCards.forEach(card => {
    const matches = genre === 'all' || card.dataset.genre === genre;
    card.hidden = !matches;
    if (matches) visibleCount++;
  });
  emptyState.hidden = visibleCount !== 0;
}

genreInputs.forEach(input => {
  input.addEventListener('change', (e) => applyFilter(e.target.value));
});

// =========================================================
// Reserve button (state: available <-> reserved)
// =========================================================
document.querySelectorAll('.btn-reserve').forEach(btn => {
  btn.addEventListener('click', () => {
    const reserved = btn.dataset.state === 'reserved';
    btn.dataset.state = reserved ? 'available' : 'reserved';
    btn.textContent = reserved ? 'Reserve' : 'Reserved \u2713';
  });
});