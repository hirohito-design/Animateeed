// ============================================================
//  TrendyCartFinds – Shared Application Logic
// ============================================================

/* ── Navbar ─────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar?.classList.add('scrolled');
    navbar?.classList.remove('transparent');
  } else {
    navbar?.classList.remove('scrolled');
    if (navbar?.classList.contains('transparent-on-top')) {
      navbar?.classList.add('transparent');
    }
  }
});
if (navbar?.classList.contains('transparent')) {
  navbar.classList.add('transparent-on-top');
}

function toggleMobileMenu() {
  hamburger?.classList.toggle('active');
  mobileMenu?.classList.toggle('open');
}
function toggleSearch() {
  const ns = document.getElementById('navSearch');
  ns?.classList.toggle('open');
  if (ns?.classList.contains('open')) {
    document.getElementById('navSearchInput')?.focus();
  }
}
function handleNavSearch(e) {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
  }
}

/* ── Scroll Animations (AOS-lite) ───────────────────────── */
const aosElements = document.querySelectorAll('[data-aos]');
const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.aosDelay || 0;
      setTimeout(() => el.classList.add('aos-animate'), parseInt(delay));
      aosObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
aosElements.forEach(el => aosObserver.observe(el));

/* ── Product Card Builder ───────────────────────────────── */
function buildProductCard(p, mini = false) {
  const discount = p.originalPrice
    ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
    : 0;
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));

  // Image HTML — use real img if available, else emoji placeholder
  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
       <div style="width:100%;height:100%;display:none;align-items:center;justify-content:center;font-size:4rem;background:var(--gradient-hero)">${p.emoji}</div>`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;background:var(--gradient-hero)">${p.emoji}</div>`;

  const miniImgHtml = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-md)" loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='${p.emoji}'"/>`
    : p.emoji;

  if (mini) {
    return `<a href="product.html?id=${p.id}" class="under500-mini">
      <div class="under500-mini__icon" style="background:var(--clr-beige);overflow:hidden;padding:0">${miniImgHtml}</div>
      <div class="under500-mini__info">
        <div class="under500-mini__name">${p.name}</div>
        <div class="under500-mini__price">₹${p.price} <span style="text-decoration:line-through;color:var(--clr-gray-light);font-weight:400">₹${p.originalPrice}</span></div>
      </div>
      <span class="under500-mini__amazon">Amazon →</span>
    </a>`;
  }

  return `<div class="product-card" data-category="${p.category}">
    <div class="product-card__image-wrap">
      ${imgHtml}
      <div class="product-card__badges">
        ${p.badgeLabel ? `<span class="badge badge-${p.badge}">${p.badgeLabel}</span>` : ''}
        ${discount > 0 ? `<span class="badge badge-green">${discount}% OFF</span>` : ''}
      </div>
      <button class="product-card__wishlist" onclick="toggleWishlist(this,${p.id})" title="Save">🤍</button>
      <div class="product-card__overlay">
        <a href="${p.amazonUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="flex:1">🛒 Amazon</a>
        <a href="product.html?id=${p.id}" class="btn btn-secondary btn-sm" style="flex:1">Review</a>
      </div>
    </div>
    <div class="product-card__body">
      <div class="product-card__category">${p.category}</div>
      <div class="product-card__title">${p.name}</div>
      <div class="product-card__desc">${p.desc}</div>
      <div class="product-card__rating">
        <span class="stars">${'★'.repeat(Math.round(p.rating))}</span>
        <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()})</span>
      </div>
      <div class="product-card__price">
        <span class="price-current">₹${p.price}</span>
        ${p.originalPrice ? `<span class="price-original">₹${p.originalPrice}</span>` : ''}
        ${discount > 0 ? `<span class="price-discount">${discount}% off</span>` : ''}
      </div>
      <div class="product-card__actions">
        <a href="${p.amazonUrl}" target="_blank" rel="noopener" class="btn btn-primary">🛒 Check on Amazon</a>
        <a href="product.html?id=${p.id}" class="btn btn-secondary">Read Review</a>
      </div>
    </div>
  </div>`;
}

/* ── Blog Card Builder ──────────────────────────────────── */
function buildBlogCard(b) {
  return `<a href="blog-post.html?slug=${b.slug}" class="blog-card" style="text-decoration:none">
    <div class="blog-card__image">
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;background:var(--gradient-hero)">${b.emoji}</div>
      <div class="blog-card__category-dot">
        <span class="badge badge-${b.tag === 'skincare' ? 'pink' : 'peach'}">${b.category}</span>
      </div>
    </div>
    <div class="blog-card__body">
      <div class="blog-card__meta">
        <span>📅 ${b.date}</span>
        <span>⏱ ${b.readTime} read</span>
        <span>👁 ${b.views}</span>
      </div>
      <div class="blog-card__title">${b.title}</div>
      <div class="blog-card__excerpt">${b.excerpt}</div>
      <div class="blog-card__footer">
        <span class="blog-card__read-more">Read Full Review <span>→</span></span>
        <span class="badge badge-cream">Honest Review</span>
      </div>
    </div>
  </a>`;
}

/* ── Wishlist ────────────────────────────────────────────── */
let wishlist = JSON.parse(localStorage.getItem('tcf_wishlist') || '[]');
function toggleWishlist(btn, id) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn.textContent = '❤️';
    btn.classList.add('active');
    showToast('Added to wishlist ❤️', 'success');
  } else {
    wishlist.splice(idx, 1);
    btn.textContent = '🤍';
    btn.classList.remove('active');
    showToast('Removed from wishlist');
  }
  localStorage.setItem('tcf_wishlist', JSON.stringify(wishlist));
}

/* ── Toast ──────────────────────────────────────────────── */
function showToast(message, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = message;
  t.className = `toast ${type}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* ── Newsletter ─────────────────────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('nlEmail')?.value;
  if (!email) return;
  const successEl = document.getElementById('nlSuccess');
  if (successEl) {
    successEl.style.display = 'flex';
    showToast('Subscribed successfully! 🎉', 'success');
  }
  e.target.querySelector('input').value = '';
}
function handleFooterNewsletter(e) {
  e.preventDefault();
  document.getElementById('footerNlSuccess').style.display = 'block';
  document.getElementById('footerEmail').value = '';
  showToast('Subscribed! Welcome aboard 🎉', 'success');
}

/* ── Filter Products ────────────────────────────────────── */
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn?.classList.add('active');

  const grid = document.getElementById('trendingGrid') || document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = cat === 'all'
    ? PRODUCTS.filter(p => p.isTrending)
    : PRODUCTS.filter(p => p.category === cat);

  grid.innerHTML = filtered.length
    ? filtered.map(p => buildProductCard(p)).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--clr-gray)">
        <div style="font-size:3rem;margin-bottom:12px">🔍</div>
        <p>No products found in this category yet.</p>
      </div>`;
}

/* ── Get URL Param ──────────────────────────────────────── */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ── Format Date ────────────────────────────────────────── */
function formatDate(str) {
  return new Date(str).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}
