// ============================================================
//  home.js – Homepage-specific logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderTrending();
  renderUnder500();
  renderBlog();
});

function renderTrending() {
  const grid = document.getElementById('trendingGrid');
  if (!grid) return;
  const trending = PRODUCTS.filter(p => p.isTrending).slice(0, 8);
  grid.innerHTML = trending.map(p => buildProductCard(p)).join('');
}

function renderUnder500() {
  const list = document.getElementById('under500List');
  if (!list) return;
  const items = PRODUCTS.filter(p => p.price <= 500 && p.id !== 1).slice(0, 5);
  list.innerHTML = items.map(p => buildProductCard(p, true)).join('');
}

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.slice(0, 3).map(b => buildBlogCard(b)).join('');
}
