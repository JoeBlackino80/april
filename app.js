// ---------- Market data ----------
const marketCards = [
  { rank: 1, name: 'Charizard — Base Set', set: '1999 · PSA 9', tcg: 'pokemon', tcgLabel: 'Pokémon', price: 2549, change: 4.2, img: 'https://images.pokemontcg.io/base1/4_hires.png', spark: [40, 42, 41, 45, 48, 47, 50, 52, 54] },
  { rank: 2, name: 'Moonbreon — Umbreon VMAX', set: 'Evolving Skies · Alt Art', tcg: 'pokemon', tcgLabel: 'Pokémon', price: 969, change: 1.8, img: 'https://images.pokemontcg.io/swsh7/215_hires.png', spark: [60, 62, 61, 63, 65, 64, 66, 67, 68] },
  { rank: 3, name: 'Lugia — Neo Genesis', set: '2000 · PSA 7', tcg: 'pokemon', tcgLabel: 'Pokémon', price: 655, change: 6.1, img: 'https://images.pokemontcg.io/neo1/9_hires.png', spark: [40, 38, 42, 41, 45, 50, 53, 58, 64] },
  { rank: 4, name: 'Iono — SIR PSA 10', set: 'Paldea Evolved', tcg: 'pokemon', tcgLabel: 'Pokémon', price: 459, change: 2.4, img: 'https://images.pokemontcg.io/sv2/269_hires.png', spark: [40, 42, 44, 45, 46, 47, 48, 49, 50] },
  { rank: 5, name: 'Rayquaza VMAX', set: 'Evolving Skies · Alt', tcg: 'pokemon', tcgLabel: 'Pokémon', price: 421, change: 3.0, img: 'https://images.pokemontcg.io/swsh7/218_hires.png', spark: [38, 40, 41, 43, 44, 45, 47, 48, 50] },
  { rank: 6, name: 'Giratina VSTAR', set: 'Lost Origin · Alt', tcg: 'pokemon', tcgLabel: 'Pokémon', price: 345, change: -1.2, img: 'https://images.pokemontcg.io/swsh11/186_hires.png', spark: [50, 49, 48, 47, 46, 45, 44, 43, 42] },
  { rank: 7, name: 'Black Lotus', set: 'Alpha · MP', tcg: 'mtg', tcgLabel: 'Magic', price: 12500, change: 8.4, img: 'https://images.pokemontcg.io/base1/15_hires.png', spark: [60, 62, 64, 67, 70, 73, 76, 80, 84] },
  { rank: 8, name: 'Elsa — Spirit of Winter', set: 'Lorcana · Hyperrare', tcg: 'lorcana', tcgLabel: 'Lorcana', price: 289, change: 5.5, img: 'https://images.pokemontcg.io/sv3pt5/199_hires.png', spark: [42, 44, 45, 47, 48, 50, 52, 54, 56] },
  { rank: 9, name: 'Monkey D. Luffy', set: 'Romance Dawn · SR', tcg: 'onepiece', tcgLabel: 'One Piece', price: 199, change: -0.8, img: 'https://images.pokemontcg.io/swsh4/188_hires.png', spark: [50, 51, 50, 49, 48, 47, 47, 46, 46] },
  { rank: 10, name: 'Charizard ex SIR', set: 'Obsidian Flames', tcg: 'pokemon', tcgLabel: 'Pokémon', price: 94, change: 5.5, img: 'https://images.pokemontcg.io/sv3/223_hires.png', spark: [70, 72, 74, 76, 78, 80, 82, 84, 86] },
];

const marketEl = document.getElementById('market');
const segEl = document.getElementById('seg');
let currentTcg = 'all';

const fmtPrice = (n) =>
  '€' + new Intl.NumberFormat('sk-SK', { maximumFractionDigits: 0 }).format(n);

const fmtChange = (n) => (n > 0 ? '+' : '') + n.toFixed(1) + '%';

function sparkPath(values) {
  const w = 80, h = 30, pad = 2;
  const min = Math.min(...values), max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * (w - pad * 2) + pad;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return `M${points.join(' L')}`;
}

function renderMarket() {
  const list = currentTcg === 'all' ? marketCards : marketCards.filter((c) => c.tcg === currentTcg);
  marketEl.innerHTML =
    `<div class="market-row head">
      <span>#</span>
      <span>Karta</span>
      <span>TCG</span>
      <span>Cena</span>
      <span>Trend</span>
      <span></span>
    </div>` +
    list
      .map(
        (c, i) => `
    <div class="market-row">
      <span class="mr-rank">${String(i + 1).padStart(2, '0')}</span>
      <div class="mr-card">
        <img src="${c.img}" alt="${c.name}" loading="lazy" />
        <div>
          <div class="mr-card-name">${c.name}</div>
          <div class="mr-card-set">${c.set}</div>
        </div>
      </div>
      <span class="mr-tcg ${c.tcg}">${c.tcgLabel}</span>
      <span class="mr-price">${fmtPrice(c.price)}</span>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="mr-change ${c.change >= 0 ? 'up' : 'down'}">${fmtChange(c.change)}</span>
        <svg class="mr-spark" viewBox="0 0 80 30">
          <path d="${sparkPath(c.spark)}" fill="none" stroke="${c.change >= 0 ? '#059669' : '#dc2626'}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="mr-actions">
        <button class="mr-btn sell" data-name="${c.name}" data-act="sell">Predať</button>
        <button class="mr-btn buy" data-name="${c.name}" data-act="buy">Kúpiť</button>
      </div>
    </div>
  `,
      )
      .join('');
}

segEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.seg-btn');
  if (!btn) return;
  document.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  currentTcg = btn.dataset.tcg;
  renderMarket();
});

marketEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.mr-btn');
  if (!btn) return;
  const act = btn.dataset.act;
  const name = btn.dataset.name;
  showToast(act === 'sell' ? `Začínam ponuku — ${name}` : `Pridané do košíka — ${name}`, act);
});

// ---------- Buy catalog ----------
const products = [
  { id: 1, name: 'Charizard ex', set: 'Obsidian Flames · SIR', cat: 'Single', price: 94, img: 'https://images.pokemontcg.io/sv3/223_hires.png', tag: { text: 'New', cls: 'new' } },
  { id: 2, name: 'Pikachu V', set: 'Vivid Voltage · Full Art', cat: 'Single', price: 79, img: 'https://images.pokemontcg.io/swsh45/18_hires.png' },
  { id: 3, name: 'Moonbreon — Umbreon VMAX', set: 'Evolving Skies · Alt Art', cat: 'Single', price: 969, img: 'https://images.pokemontcg.io/swsh7/215_hires.png', tag: { text: 'Rare', cls: 'rare' } },
  { id: 4, name: 'Mew ex', set: 'SV 151 · Ultra Rare', cat: 'Single', price: 69, img: 'https://images.pokemontcg.io/sv3pt5/193_hires.png', tag: { text: 'New', cls: 'new' } },
  { id: 5, name: 'Charizard — Base Set', set: '1999 · PSA 9', cat: 'PSA Graded', price: 2549, img: 'https://images.pokemontcg.io/base1/4_hires.png', tag: { text: 'PSA 9', cls: 'psa' } },
  { id: 6, name: 'Iono', set: 'Paldea Evolved · SIR', cat: 'PSA Graded', price: 459, img: 'https://images.pokemontcg.io/sv2/269_hires.png', tag: { text: 'PSA 10', cls: 'psa' } },
  { id: 7, name: 'Giratina VSTAR', set: 'Lost Origin · Alt Art', cat: 'Single', price: 345, img: 'https://images.pokemontcg.io/swsh11/186_hires.png', tag: { text: 'Rare', cls: 'rare' } },
  { id: 8, name: 'Lugia', set: 'Neo Genesis · PSA 7', cat: 'PSA Graded', price: 655, img: 'https://images.pokemontcg.io/neo1/9_hires.png', tag: { text: 'PSA 7', cls: 'psa' } },
];

const productsEl = document.getElementById('products');
productsEl.innerHTML = products
  .map(
    (p) => `
  <article class="product">
    ${p.tag ? `<span class="tag ${p.tag.cls}">${p.tag.text}</span>` : ''}
    <div class="product-media"><img src="${p.img}" alt="${p.name}" loading="lazy"/></div>
    <div class="product-body">
      <span class="product-cat">${p.cat}</span>
      <span class="product-name">${p.name}</span>
      <span class="product-set">${p.set}</span>
      <div class="product-foot">
        <span class="product-price">${fmtPrice(p.price)}</span>
        <button class="product-buy" data-id="${p.id}">
          Kúpiť
          <svg viewBox="0 0 24 24" width="12" height="12"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" d="M5 12h13M14 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  </article>
`,
  )
  .join('');

productsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.product-buy');
  if (!btn) return;
  const product = products.find((p) => p.id === Number(btn.dataset.id));
  showToast(`Pridané do košíka — ${product.name}`, 'buy');
});

// ---------- Quote widget ----------
const qCard = document.getElementById('qCard');
const qCondition = document.getElementById('qCondition');
const qQty = document.getElementById('qQty');
const qAmount = document.getElementById('qAmount');
const qMkt = document.getElementById('qMkt');
const qSubmit = document.getElementById('qSubmit');

function calcQuote() {
  const base = parseFloat(qCard.value);
  const cond = parseFloat(qCondition.value);
  const qty = Math.max(1, parseInt(qQty.value, 10) || 1);
  const market = base * cond * qty;
  const offer = market * 0.85;
  qAmount.textContent = fmtPrice(offer);
  qMkt.textContent = fmtPrice(market);
}

[qCard, qCondition, qQty].forEach((el) => el.addEventListener('input', calcQuote));
calcQuote();

qSubmit.addEventListener('click', () => {
  showToast(`Ponuka prijatá — pošleme ti štítok mailom`, 'sell');
});

// ---------- Newsletter ----------
document.getElementById('newsletter').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(`Prihlásené — ${input.value}`, 'buy');
  input.value = '';
});

// ---------- Toast ----------
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

renderMarket();
