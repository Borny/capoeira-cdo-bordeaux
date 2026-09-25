const list = document.getElementById('antennes-list');

// Expand / collapse a card's schedule
list.addEventListener('click', (event) => {
  const toggle = event.target.closest('.card__toggle');
  if (!toggle) return;

  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  const details = document.getElementById(toggle.getAttribute('aria-controls'));
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.querySelector('.card__toggle-label').textContent = expanded ? 'Cours et infos' : 'Masquer';
  details.hidden = expanded;
  toggle.closest('.card').classList.toggle('is-open', !expanded);
});

// Carousel arrows scroll by one card width
const arrows = document.querySelectorAll('.carousel__arrow');

const updateArrows = () => {
  const maxScroll = list.scrollWidth - list.clientWidth - 1;
  arrows[0].disabled = list.scrollLeft <= 0;
  arrows[1].disabled = list.scrollLeft >= maxScroll;
};

arrows.forEach((arrow) =>
  arrow.addEventListener('click', () => {
    const card = list.querySelector('.card');
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    list.scrollBy({ left: Number(arrow.dataset.dir) * (card.offsetWidth + gap), behavior: 'smooth' });
  }),
);
list.addEventListener('scroll', updateArrows, { passive: true });
window.addEventListener('resize', updateArrows);
updateArrows();

// Expose the sticky header height so anchor links land below it
const header = document.querySelector('.site-header');
new ResizeObserver(() => {
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
}).observe(header);

document.getElementById('year').textContent = new Date().getFullYear();
