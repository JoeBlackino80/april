const products = [
  {
    id: 1,
    name: 'Charizard — Base Set',
    cat: 'vintage',
    catLabel: 'Single · PSA 9',
    meta: '1999 · Base Set · Holo',
    price: 2499.00,
    rating: 5.0,
    reviews: 42,
    img: 'https://images.pokemontcg.io/base1/4_hires.png',
    badge: { text: 'PSA 9', cls: 'psa' },
  },
  {
    id: 2,
    name: 'Charizard VMAX',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Darkness Ablaze · Rainbow',
    price: 389.00,
    old: 449.00,
    rating: 4.9,
    reviews: 86,
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
    rating: 4.8,
    reviews: 134,
    img: 'https://images.pokemontcg.io/swsh45/18_hires.png',
  },
  {
    id: 4,
    name: 'Moonbreon — Umbreon VMAX',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Evolving Skies · Top chase',
    price: 959.00,
    rating: 5.0,
    reviews: 58,
    img: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    badge: { text: 'Hot', cls: 'hot' },
  },
  {
    id: 5,
    name: 'Blastoise — Base Set',
    cat: 'vintage',
    catLabel: 'Single · Holo',
    meta: '1999 · Base Set',
    price: 299.00,
    rating: 4.9,
    reviews: 29,
    img: 'https://images.pokemontcg.io/base1/2_hires.png',
  },
  {
    id: 6,
    name: 'Venusaur — Base Set',
    cat: 'vintage',
    catLabel: 'Single · Holo',
    meta: '1999 · Base Set',
    price: 229.00,
    rating: 4.8,
    reviews: 21,
    img: 'https://images.pokemontcg.io/base1/15_hires.png',
  },
  {
    id: 7,
    name: 'Mew ex — 151',
    cat: 'modern',
    catLabel: 'Single · Ultra Rare',
    meta: 'Scarlet & Violet 151',
    price: 69.00,
    rating: 4.9,
    reviews: 97,
    img: 'https://images.pokemontcg.io/sv3pt5/193_hires.png',
    badge: { text: 'New', cls: 'new' },
  },
  {
    id: 8,
    name: 'Giratina VSTAR',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Lost Origin',
    price: 349.00,
    rating: 4.9,
    reviews: 44,
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
    rating: 4.8,
    reviews: 38,
    img: 'https://images.pokemontcg.io/base3/5_hires.png',
    badge: { text: 'PSA 8', cls: 'psa' },
  },
  {
    id: 10,
    name: 'Charizard ex',
    cat: 'modern',
    catLabel: 'Single',
    meta: 'Obsidian Flames · SIR',
    price: 89.90,
    rating: 4.8,
    reviews: 112,
    img: 'https://images.pokemontcg.io/sv3/223_hires.png',
  },
  {
    id: 11,
    name: '151 Elite Trainer Box',
    cat: 'sealed',
    catLabel: 'Elite Trainer Box',
    meta: '9 boosterov · promo karta',
    price: 74.90,
    rating: 4.9,
    reviews: 203,
    img: 'https://images.pokemontcg.io/sv3pt5/205_hires.png',
  },
  {
    id: 12,
    name: 'Paldea Evolved Booster Box',
    cat: 'sealed',
    catLabel: 'Booster Box',
    meta: '36 balíčkov · sealed',
    price: 149.00,
    old: 169.00,
    rating: 4.9,
    reviews: 87,
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
    rating: 4.9,
    reviews: 17,
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
    rating: 4.9,
    reviews: 52,
    img: 'https://images.pokemontcg.io/pgo/78_hires.png',
    badge: { text: 'Rare', cls: 'rare' },
  },
  {
    id: 15,
    name: 'Iono — Paldea Evolved',
    cat: 'graded',
    catLabel: 'Trainer · PSA 10',
    meta: 'Special Illustration Rare',
    price: 449.00,
    rating: 5.0,
    reviews: 23,
    img: 'https://images.pokemontcg.io/sv2/269_hires.png',
    badge: { text: 'PSA 10', cls: 'psa' },
  },
  {
    id: 16,
    name: 'Rayquaza VMAX',
    cat: 'modern',
    catLabel: 'Single · Alt Art',
    meta: 'Evolving Skies',
    price: 419.00,
    rating: 4.9,
    reviews: 69,
    img: 'https://images.pokemontcg.io/swsh7/218_hires.png',
    badge: { text: 'Hot', cls: 'hot' },
  },
];

const productsEl = document.getElementById('products');
const tabsEl = document.getElementById('tabs');
const cartBadge = document.getElementById('cartBadge');
const wishBadge = document.getElementById('wishBadge');

let cart = 0;
let wishlist = new Set();
let currentFilter = 'all';

const formatPrice = (n) =>
  new Intl.NumberFormat('sk-SK', { style: 'currency', currency: 'EUR' }).format(n);

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

function render() {
  const list =
    currentFilter === 'all' ? products : products.filter((p) => p.cat === currentFilter);

  productsEl.innerHTML = list
    .map(
      (p) => `
    <article class="product" data-cat="${p.cat}">
      ${p.badge ? `<span class="badge ${p.badge.cls}">${p.badge.text}</span>` : ''}
      <button class="wishlist ${wishlist.has(p.id) ? 'active' : ''}" data-wish="${p.id}" aria-label="Pridať do obľúbených">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="${wishlist.has(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 21s-8-4.8-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.2-8 11-8 11z"/></svg>
      </button>
      <div class="product-media">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <span class="product-cat">${p.catLabel}</span>
        <span class="product-name">${p.name}</span>
        <div class="product-meta">${p.meta}</div>
        <div class="product-rating">
          ${'★'.repeat(Math.round(p.rating))}<span class="count">(${p.reviews})</span>
        </div>
        <div class="product-foot">
          <div class="price">
            ${p.old ? `<span class="old">${formatPrice(p.old)}</span>` : ''}
            ${formatPrice(p.price)}
          </div>
          <button class="add-btn" data-id="${p.id}">
            <svg viewBox="0 0 24 24" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 5v14M5 12h14"/></svg>
            Pridať
          </button>
        </div>
      </div>
    </article>
  `,
    )
    .join('');
}

tabsEl.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
  tab.classList.add('active');
  currentFilter = tab.dataset.filter;
  render();
});

productsEl.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.add-btn');
  if (addBtn) {
    const id = Number(addBtn.dataset.id);
    const product = products.find((p) => p.id === id);
    cart++;
    cartBadge.textContent = cart;
    cartBadge.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.4)' }, { transform: 'scale(1)' }],
      { duration: 300 },
    );
    showToast(`Pridané do košíka — ${product.name}`);
    return;
  }

  const wishBtn = e.target.closest('.wishlist');
  if (wishBtn) {
    const id = Number(wishBtn.dataset.wish);
    const product = products.find((p) => p.id === id);
    if (wishlist.has(id)) {
      wishlist.delete(id);
      showToast(`Odobrané z obľúbených — ${product.name}`);
    } else {
      wishlist.add(id);
      showToast(`Pridané do obľúbených — ${product.name}`);
    }
    updateWishlistBadge();
    render();
    return;
  }
});

function updateWishlistBadge() {
  if (!wishBadge) return;
  if (wishlist.size > 0) {
    wishBadge.textContent = wishlist.size;
    wishBadge.hidden = false;
  } else {
    wishBadge.hidden = true;
  }
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-check">✓</span> <span>${msg}</span>`;
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
