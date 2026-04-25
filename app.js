const cards = [
  { id: 1, name: 'Charizard Base Set', set: '1999 · Holo · PSA 9', cat: 'psa', price: 2549, img: 'https://images.pokemontcg.io/base1/4_hires.png', tag: { text: 'PSA 9', cls: 'psa' } },
  { id: 2, name: 'Moonbreon', set: 'Evolving Skies · Alt Art', cat: 'modern', price: 969, img: 'https://images.pokemontcg.io/swsh7/215_hires.png', tag: { text: 'HOT', cls: 'hot' } },
  { id: 3, name: 'Pikachu V Full Art', set: 'Vivid Voltage', cat: 'modern', price: 79, img: 'https://images.pokemontcg.io/swsh45/18_hires.png' },
  { id: 4, name: 'Lugia Neo Genesis', set: '2000 · PSA 7', cat: 'psa', price: 655, img: 'https://images.pokemontcg.io/neo1/9_hires.png', tag: { text: 'PSA 7', cls: 'psa' } },
  { id: 5, name: 'Iono SIR PSA 10', set: 'Paldea Evolved', cat: 'psa', price: 459, img: 'https://images.pokemontcg.io/sv2/269_hires.png', tag: { text: 'PSA 10', cls: 'psa' } },
  { id: 6, name: 'Rayquaza VMAX', set: 'Evolving Skies · Alt', cat: 'modern', price: 421, img: 'https://images.pokemontcg.io/swsh7/218_hires.png', tag: { text: 'HOT', cls: 'hot' } },
  { id: 7, name: 'Giratina VSTAR', set: 'Lost Origin · Alt Art', cat: 'modern', price: 345, img: 'https://images.pokemontcg.io/swsh11/186_hires.png' },
  { id: 8, name: 'Charizard ex SIR', set: 'Obsidian Flames', cat: 'modern', price: 94, img: 'https://images.pokemontcg.io/sv3/223_hires.png', tag: { text: 'NEW', cls: 'new' } },
  { id: 9, name: 'Blastoise Base Set', set: '1999 · Holo', cat: 'vintage', price: 299, img: 'https://images.pokemontcg.io/base1/2_hires.png' },
  { id: 10, name: 'Venusaur Base Set', set: '1999 · Holo', cat: 'vintage', price: 229, img: 'https://images.pokemontcg.io/base1/15_hires.png' },
  { id: 11, name: 'Gengar Fossil', set: '1999 · PSA 8', cat: 'vintage', price: 189, img: 'https://images.pokemontcg.io/base3/5_hires.png', tag: { text: 'PSA 8', cls: 'psa' } },
  { id: 12, name: 'Mew ex 151', set: 'SV 151 · Ultra Rare', cat: 'modern', price: 69, img: 'https://images.pokemontcg.io/sv3pt5/193_hires.png', tag: { text: 'NEW', cls: 'new' } },
];

const cardsEl = document.getElementById('cards');
const segEl = document.getElementById('seg');
const productsEl = document.getElementById('products');

let currentTcg = 'all';

const fmt = (n) => '€' + new Intl.NumberFormat('sk-SK', { maximumFractionDigits: 0 }).format(n);

function renderCardTile(c) {
  return `
    <article class="card-tile">
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

function renderHot() {
  const list = currentTcg === 'all' ? cards.slice(0, 8) : cards.filter((c) => c.cat === currentTcg).slice(0, 8);
  cardsEl.innerHTML = list.map(renderCardTile).join('');
}

function renderProducts() {
  productsEl.innerHTML = cards.slice(4, 12).map(renderCardTile).join('');
}

segEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.seg-btn');
  if (!btn) return;
  document.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  currentTcg = btn.dataset.tcg;
  renderHot();
});

document.body.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-tile-buy');
  if (!btn) return;
  const card = cards.find((c) => c.id === Number(btn.dataset.id));
  showToast(`Pridané do košíka — ${card.name}`, 'buy');
});

document.getElementById('newsletter').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(`Hot drops idú na ${input.value}`, 'sell');
  input.value = '';
});

function showToast(msg, type = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.innerHTML = `✓ ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

document.getElementById('year').textContent = new Date().getFullYear();

renderHot();
renderProducts();
