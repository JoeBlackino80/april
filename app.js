const products = [
  { id: 1, name: 'Scarlet & Violet — Paldea Evolved Booster Box', cat: 'booster', catLabel: 'Booster Box', price: 159.90, old: 179.90, emoji: '📦', bg: 'linear-gradient(135deg,#ff6a3d,#e3350d)', badge: { text: 'Sale', cls: 'sale' }, rating: 4.9, reviews: 128 },
  { id: 2, name: 'Charizard ex — Obsidian Flames ETB', cat: 'etb', catLabel: 'Elite Trainer Box', price: 54.90, emoji: '🔥', bg: 'linear-gradient(135deg,#ffb700,#ff6a3d)', badge: { text: 'Hot', cls: 'hot' }, rating: 5.0, reviews: 92 },
  { id: 3, name: 'Pikachu VMAX — Rainbow Rare', cat: 'single', catLabel: 'Single karta', price: 89.00, emoji: '⚡', bg: 'linear-gradient(135deg,#fff3a0,#ffcb05)', badge: { text: 'New', cls: 'new' }, rating: 4.8, reviews: 41 },
  { id: 4, name: 'Pokémon Plyšák Snorlax 40 cm', cat: 'merch', catLabel: 'Merch', price: 34.90, emoji: '🧸', bg: 'linear-gradient(135deg,#e3f4ff,#9fcdff)', rating: 4.7, reviews: 63 },
  { id: 5, name: 'Lorcana — Rise of the Floodborn Box', cat: 'booster', catLabel: 'Booster Box', price: 139.00, emoji: '🏰', bg: 'linear-gradient(135deg,#dcb5ff,#8b5cf6)', badge: { text: 'New', cls: 'new' }, rating: 4.6, reviews: 27 },
  { id: 6, name: 'Mewtwo GX — Full Art', cat: 'single', catLabel: 'Single karta', price: 129.00, old: 149.00, emoji: '🔮', bg: 'linear-gradient(135deg,#c6c8ff,#3b4cca)', badge: { text: 'Sale', cls: 'sale' }, rating: 4.9, reviews: 54 },
  { id: 7, name: '151 ETB — Kanto Classic', cat: 'etb', catLabel: 'Elite Trainer Box', price: 69.90, emoji: '🎴', bg: 'linear-gradient(135deg,#ffcecf,#e3350d)', badge: { text: 'Hot', cls: 'hot' }, rating: 4.9, reviews: 201 },
  { id: 8, name: 'Ultra Pro Sleeves 100 ks — Pikachu', cat: 'merch', catLabel: 'Merch', price: 6.90, emoji: '🛡️', bg: 'linear-gradient(135deg,#fff5cf,#ffcb05)', rating: 4.8, reviews: 112 },
  { id: 9, name: 'Obsidian Flames Booster Pack', cat: 'booster', catLabel: 'Booster Pack', price: 4.90, emoji: '🎁', bg: 'linear-gradient(135deg,#f0e5ff,#7a5cff)', rating: 4.7, reviews: 86 },
  { id: 10, name: 'Eevee Evolutions — Binder Set', cat: 'merch', catLabel: 'Album set', price: 44.90, emoji: '📘', bg: 'linear-gradient(135deg,#ffe0a0,#ff8e53)', badge: { text: 'New', cls: 'new' }, rating: 4.6, reviews: 19 },
  { id: 11, name: 'Gengar VMAX — Alt Art', cat: 'single', catLabel: 'Single karta', price: 199.00, emoji: '👻', bg: 'linear-gradient(135deg,#b7a3ff,#4b2ea0)', badge: { text: 'Hot', cls: 'hot' }, rating: 5.0, reviews: 37 },
  { id: 12, name: 'Hidden Fates Premium Collection', cat: 'etb', catLabel: 'Collection Box', price: 99.00, emoji: '💎', bg: 'linear-gradient(135deg,#b6f0ff,#3b4cca)', rating: 4.8, reviews: 68 },
];

const productsEl = document.getElementById('products');
const filtersEl = document.getElementById('filters');
const cartBadge = document.getElementById('cartBadge');
let cart = 0;
let currentFilter = 'all';

function formatPrice(n) {
  return new Intl.NumberFormat('sk-SK', { style: 'currency', currency: 'EUR' }).format(n);
}

function render() {
  const list = currentFilter === 'all'
    ? products
    : products.filter(p => p.cat === currentFilter);

  productsEl.innerHTML = list.map(p => `
    <article class="product" data-cat="${p.cat}">
      ${p.badge ? `<span class="badge ${p.badge.cls}">${p.badge.text}</span>` : ''}
      <div class="product-media" style="background:${p.bg}">${p.emoji}</div>
      <div class="product-body">
        <span class="product-cat">${p.catLabel}</span>
        <span class="product-name">${p.name}</span>
        <div class="product-rating">
          ${'★'.repeat(Math.round(p.rating))}<span>(${p.reviews})</span>
        </div>
        <div class="product-foot">
          <div class="price">
            ${p.old ? `<span class="old">${formatPrice(p.old)}</span>` : ''}
            ${formatPrice(p.price)}
          </div>
          <button class="add-btn" data-id="${p.id}">Pridať</button>
        </div>
      </div>
    </article>
  `).join('');
}

filtersEl.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  currentFilter = chip.dataset.filter;
  render();
});

productsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const product = products.find(p => p.id === id);
  cart++;
  cartBadge.textContent = cart;
  cartBadge.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.4)' }, { transform: 'scale(1)' }],
    { duration: 300 }
  );
  showToast(`Pridané do košíka: ${product.name}`);
});

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `✓ ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.getElementById('newsletter').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(`Prihlásené: ${input.value}`);
  input.value = '';
});

document.getElementById('year').textContent = new Date().getFullYear();

const burger = document.getElementById('burger');
burger?.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  const open = links.style.display === 'flex';
  links.style.display = open ? 'none' : 'flex';
  links.style.position = 'absolute';
  links.style.top = '60px';
  links.style.right = '4%';
  links.style.background = '#fff';
  links.style.flexDirection = 'column';
  links.style.padding = '14px 18px';
  links.style.borderRadius = '12px';
  links.style.boxShadow = '0 10px 30px rgba(0,0,0,.1)';
});

render();
