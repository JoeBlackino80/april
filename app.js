const products = [
  {
    id: 1,
    name: 'Charizard — Base Set',
    cat: 'vintage',
    catLabel: 'Single · PSA 9',
    meta: '1999 · Base Set · Holo',
    price: 2499.00,
    img: 'https://images.pokemontcg.io/base1/4_hires.png',
    badge: { text: 'PSA 9', cls: 'psa' },
  },
  {
    id: 2,
    name: 'Charizard VMAX — Rainbow',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Darkness Ablaze · Secret Rare',
    price: 389.00,
    old: 449.00,
    img: 'https://images.pokemontcg.io/swsh3/74_hires.png',
    badge: { text: 'Hot', cls: 'hot' },
  },
  {
    id: 3,
    name: 'Pikachu V — Full Art',
    cat: 'modern',
    catLabel: 'Single',
    meta: 'Vivid Voltage · Ultra Rare',
    price: 79.90,
    img: 'https://images.pokemontcg.io/swsh45/18_hires.png',
  },
  {
    id: 4,
    name: 'Moonbreon — Evolving Skies',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Umbreon VMAX · Top chase',
    price: 959.00,
    img: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    badge: { text: 'Hot', cls: 'hot' },
  },
  {
    id: 5,
    name: 'Blastoise — Base Set',
    cat: 'vintage',
    catLabel: 'Single · Holo',
    meta: '1999 · Base Set · Unlimited',
    price: 299.00,
    img: 'https://images.pokemontcg.io/base1/2_hires.png',
  },
  {
    id: 6,
    name: 'Venusaur — Base Set',
    cat: 'vintage',
    catLabel: 'Single · Holo',
    meta: '1999 · Base Set · Unlimited',
    price: 229.00,
    img: 'https://images.pokemontcg.io/base1/15_hires.png',
  },
  {
    id: 7,
    name: 'Mew ex — 151',
    cat: 'modern',
    catLabel: 'Single · Ultra Rare',
    meta: 'Scarlet & Violet 151',
    price: 69.00,
    img: 'https://images.pokemontcg.io/sv3pt5/193_hires.png',
    badge: { text: 'New', cls: 'new' },
  },
  {
    id: 8,
    name: 'Giratina VSTAR — Alt',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Lost Origin',
    price: 349.00,
    img: 'https://images.pokemontcg.io/swsh11/186_hires.png',
    badge: { text: 'Rare', cls: 'rare' },
  },
  {
    id: 9,
    name: 'Gengar — Fossil',
    cat: 'vintage',
    catLabel: 'Single · Holo',
    meta: '1999 · Fossil · PSA 8',
    price: 189.00,
    img: 'https://images.pokemontcg.io/base3/5_hires.png',
    badge: { text: 'PSA 8', cls: 'psa' },
  },
  {
    id: 10,
    name: 'Charizard ex — Obsidian Flames',
    cat: 'modern',
    catLabel: 'Single',
    meta: 'Obsidian Flames · Full Art',
    price: 89.90,
    img: 'https://images.pokemontcg.io/sv3/223_hires.png',
  },
  {
    id: 11,
    name: '151 ETB — Sealed',
    cat: 'sealed',
    catLabel: 'Elite Trainer Box',
    meta: '9 boostery · promo karta',
    price: 74.90,
    img: 'https://images.pokemontcg.io/sv3pt5/205_hires.png',
  },
  {
    id: 12,
    name: 'Paldea Evolved — Booster Box',
    cat: 'sealed',
    catLabel: 'Booster Box',
    meta: '36 balíčkov · sealed',
    price: 149.00,
    old: 169.00,
    img: 'https://images.pokemontcg.io/sv2/198_hires.png',
    badge: { text: 'Hot', cls: 'hot' },
  },
  {
    id: 13,
    name: 'Lugia — Neo Genesis',
    cat: 'vintage',
    catLabel: 'Single · PSA 7',
    meta: '2000 · Neo Genesis',
    price: 649.00,
    img: 'https://images.pokemontcg.io/neo1/9_hires.png',
    badge: { text: 'PSA 7', cls: 'psa' },
  },
  {
    id: 14,
    name: 'Mewtwo V — Alt Art',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Pokémon GO',
    price: 139.00,
    img: 'https://images.pokemontcg.io/pgo/78_hires.png',
    badge: { text: 'Rare', cls: 'rare' },
  },
  {
    id: 15,
    name: 'Iono — Paldea Evolved',
    cat: 'graded',
    catLabel: 'Trainer · PSA 10',
    meta: 'Paldea Evolved · Special Art',
    price: 449.00,
    img: 'https://images.pokemontcg.io/sv2/269_hires.png',
    badge: { text: 'PSA 10', cls: 'psa' },
  },
  {
    id: 16,
    name: 'Rayquaza VMAX — Alt',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Evolving Skies',
    price: 419.00,
    img: 'https://images.pokemontcg.io/swsh7/218_hires.png',
    badge: { text: 'Hot', cls: 'hot' },
  },
];

const productsEl = document.getElementById('products');
const filtersEl = document.getElementById('filters');
const cartBadge = document.getElementById('cartBadge');
let cart = 0;
let currentFilter = 'all';

const formatPrice = (n) =>
  new Intl.NumberFormat('sk-SK', { style: 'currency', currency: 'EUR' }).format(n);

function render() {
  const list = currentFilter === 'all'
    ? products
    : products.filter((p) => p.cat === currentFilter);

  productsEl.innerHTML = list
    .map(
      (p) => `
    <article class="product" data-cat="${p.cat}">
      ${p.badge ? `<span class="badge ${p.badge.cls}">${p.badge.text}</span>` : ''}
      <div class="product-media">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <span class="product-cat">${p.catLabel}</span>
        <span class="product-name">${p.name}</span>
        <div class="product-meta">${p.meta}</div>
        <div class="product-foot">
          <div class="price">
            ${p.old ? `<span class="old">${formatPrice(p.old)}</span>` : ''}
            ${formatPrice(p.price)}
          </div>
          <button class="add-btn" data-id="${p.id}">Pridať</button>
        </div>
      </div>
    </article>
  `,
    )
    .join('');
}

filtersEl.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
  chip.classList.add('active');
  currentFilter = chip.dataset.filter;
  render();
});

productsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const product = products.find((p) => p.id === id);
  cart++;
  cartBadge.textContent = cart;
  cartBadge.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.4)' }, { transform: 'scale(1)' }],
    { duration: 300 },
  );
  showToast(`Pridané do košíka — ${product.name}`);
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
  toast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

document.getElementById('newsletter').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(`Prihlásené — ${input.value}`);
  input.value = '';
});

document.getElementById('year').textContent = new Date().getFullYear();

render();
