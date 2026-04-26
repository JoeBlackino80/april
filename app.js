const cards = [
  { id: 1, name: 'Charizard Base Set', set: '1999 · Holo · PSA 9', cat: 'psa', price: 2549, img: 'https://images.pokemontcg.io/base1/4_hires.png', tag: { text: 'PSA 9', cls: 'psa' } },
  { id: 2, name: 'Moonbreon — Umbreon VMAX', set: 'Evolving Skies · Alt Art', cat: 'modern', price: 969, img: 'https://images.pokemontcg.io/swsh7/215_hires.png', tag: { text: 'Hot', cls: 'hot' } },
  { id: 3, name: 'Pikachu V Full Art', set: 'Vivid Voltage', cat: 'modern', price: 79, img: 'https://images.pokemontcg.io/swsh45/18_hires.png' },
  { id: 4, name: 'Lugia Neo Genesis', set: '2000 · PSA 7', cat: 'psa', price: 655, img: 'https://images.pokemontcg.io/neo1/9_hires.png', tag: { text: 'PSA 7', cls: 'psa' } },
  { id: 5, name: 'Iono SIR', set: 'Paldea Evolved · PSA 10', cat: 'psa', price: 459, img: 'https://images.pokemontcg.io/sv2/269_hires.png', tag: { text: 'PSA 10', cls: 'psa' } },
  { id: 6, name: 'Rayquaza VMAX', set: 'Evolving Skies · Alt', cat: 'modern', price: 421, img: 'https://images.pokemontcg.io/swsh7/218_hires.png', tag: { text: 'Hot', cls: 'hot' } },
  { id: 7, name: 'Giratina VSTAR', set: 'Lost Origin · Alt Art', cat: 'modern', price: 345, img: 'https://images.pokemontcg.io/swsh11/186_hires.png' },
  { id: 8, name: 'Charizard ex SIR', set: 'Obsidian Flames', cat: 'modern', price: 94, img: 'https://images.pokemontcg.io/sv3/223_hires.png', tag: { text: 'New', cls: 'new' } },
  { id: 9, name: 'Blastoise Base Set', set: '1999 · Holo', cat: 'vintage', price: 299, img: 'https://images.pokemontcg.io/base1/2_hires.png' },
  { id: 10, name: 'Venusaur Base Set', set: '1999 · Holo', cat: 'vintage', price: 229, img: 'https://images.pokemontcg.io/base1/15_hires.png' },
  { id: 11, name: 'Gengar Fossil', set: '1999 · PSA 8', cat: 'vintage', price: 189, img: 'https://images.pokemontcg.io/base3/5_hires.png', tag: { text: 'PSA 8', cls: 'psa' } },
  { id: 12, name: 'Mew ex', set: 'SV 151 · Ultra Rare', cat: 'modern', price: 69, img: 'https://images.pokemontcg.io/sv3pt5/193_hires.png', tag: { text: 'New', cls: 'new' } },
];

const fmt = (n) => '€' + new Intl.NumberFormat('sk-SK', { maximumFractionDigits: 0 }).format(n);

function tile(c) {
  return `<article class="card-tile">
    <div class="card-tile-media">
      ${c.tag ? `<span class="card-tile-tag ${c.tag.cls}">${c.tag.text}</span>` : ''}
      <img src="${c.img}" alt="${c.name}" loading="lazy" />
    </div>
    <div class="card-tile-body">
      <span class="card-tile-cat">${c.cat === 'psa' ? 'PSA Graded' : c.cat === 'vintage' ? 'Vintage' : 'Modern'}</span>
      <span class="card-tile-name">${c.name}</span>
      <span class="card-tile-set">${c.set}</span>
      <div class="card-tile-foot">
        <span class="card-tile-price">${fmt(c.price)}</span>
        <button class="card-tile-buy" data-id="${c.id}">Kúpiť</button>
      </div>
    </div>
  </article>`;
}

let filter = 'all';
const cardsEl = document.getElementById('cards');
const productsEl = document.getElementById('products');
const segEl = document.getElementById('seg');

function renderHot() {
  const list = filter === 'all' ? cards.slice(0, 8) : cards.filter(c => c.cat === filter).slice(0, 8);
  cardsEl.innerHTML = list.map(tile).join('');
}

function renderProducts() {
  productsEl.innerHTML = cards.slice(4, 12).map(tile).join('');
}

segEl.addEventListener('click', e => {
  const btn = e.target.closest('.seg-btn');
  if (!btn) return;
  segEl.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filter = btn.dataset.tcg;
  renderHot();
});

document.body.addEventListener('click', e => {
  const btn = e.target.closest('.card-tile-buy');
  if (!btn) return;
  const card = cards.find(c => c.id === Number(btn.dataset.id));
  toast('Pridané do košíka — ' + card.name);
});

document.getElementById('newsletter').addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  toast('Prihlásené — ' + input.value);
  input.value = '';
});

function toast(msg) {
  let el = document.querySelector('.toast');
  if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2400);
}

/* Hamburger menu */
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

/* Quote calculator */
var quoteCardSelect = document.getElementById('quote-card-select');
var quoteCondition = document.getElementById('quote-condition');
var quoteQty = document.getElementById('quote-qty');
var quotePrice = document.getElementById('quote-price');
var quoteMarket = document.getElementById('quote-market');
var quoteAccept = document.getElementById('quote-accept');

function updateQuote() {
  var sel = quoteCardSelect.options[quoteCardSelect.selectedIndex];
  var base = Number(sel.getAttribute('data-base'));
  var cond = parseFloat(quoteCondition.value);
  var qty = Math.max(1, Math.min(99, parseInt(quoteQty.value) || 1));
  var offer = Math.round(base * 0.85 * cond * qty);
  var market = Math.round(base * cond * qty);
  quotePrice.textContent = fmt(offer);
  quoteMarket.textContent = fmt(market);
}

if (quoteCardSelect && quoteCondition && quoteQty) {
  quoteCardSelect.addEventListener('change', updateQuote);
  quoteCondition.addEventListener('change', updateQuote);
  quoteQty.addEventListener('input', updateQuote);
  updateQuote();
}

if (quoteAccept) {
  quoteAccept.addEventListener('click', function() {
    toast('Ponuka akceptovana -- kontaktujeme vas do 60 sekund.');
  });
}

/* Section reveal on scroll */
var revealSections = document.querySelectorAll('.section-reveal');
if (revealSections.length > 0 && 'IntersectionObserver' in window) {
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealSections.forEach(function(s) {
    s.style.animationPlayState = 'paused';
    revealObs.observe(s);
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
renderHot();
renderProducts();
