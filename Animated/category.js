// category.js – category page logic

let currentCategory = 'skincare';

function initCategory(cat) {
  currentCategory = cat;
  // Handle URL params (concern, filter, style)
  const concern = getParam('concern');
  const filter = getParam('filter');
  if (concern) {
    const cb = document.querySelector(`input[value="${concern}"]`);
    if (cb) { cb.checked = true; }
  }
  renderCategory();
  renderCategoryBlogs();
}

function applyFilters() {
  renderCategory();
}

function clearFilters() {
  document.querySelectorAll('.sidebar-check input[type="checkbox"]').forEach(cb => cb.checked = false);
  const priceAll = document.querySelector('input[name="price"][value="all"]');
  const ratingAll = document.querySelector('input[name="rating"][value="all"]');
  if (priceAll) priceAll.checked = true;
  if (ratingAll) ratingAll.checked = true;
  renderCategory();
}

function renderCategory() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  // Get selected concerns
  const checkedConcerns = [...document.querySelectorAll('.sidebar-check input[type="checkbox"]:checked')]
    .map(cb => cb.value);
  const priceLimit = document.querySelector('input[name="price"]:checked')?.value || 'all';
  const ratingMin = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || '0');
  const sortEl = document.querySelector('.cat-sort select');
  const sortBy = sortEl?.value || 'trending';

  let products = PRODUCTS.filter(p => p.category === currentCategory);

  if (checkedConcerns.length > 0) {
    products = products.filter(p => checkedConcerns.some(c => p.concern?.includes(c)));
  }
  if (priceLimit !== 'all') {
    products = products.filter(p => p.price <= parseInt(priceLimit));
  }
  if (ratingMin > 0) {
    products = products.filter(p => p.rating >= ratingMin);
  }

  // Sort
  if (sortBy === 'price-asc') products.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') products.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') products.sort((a, b) => b.rating - a.rating);

  // Active filter chips
  const activeBar = document.getElementById('activeFilters');
  if (activeBar) {
    activeBar.innerHTML = checkedConcerns.map(c =>
      `<span class="filter-chip active" style="cursor:default">${c} ✕</span>`
    ).join('');
  }

  // Count label
  if (countEl) countEl.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;

  // Render
  if (products.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    grid.innerHTML = products.map(p => buildProductCard(p)).join('');
  }
}

function renderCategoryBlogs() {
  const grid = document.getElementById('skincareBlogs') || document.getElementById('fashionBlogs') || document.getElementById('categoryBlogs');
  if (!grid) return;
  const related = BLOG_POSTS.filter(b => b.tag === currentCategory).slice(0, 3);
  grid.innerHTML = related.map(b => buildBlogCard(b)).join('');
  if (related.length === 0) {
    grid.innerHTML = BLOG_POSTS.slice(0, 3).map(b => buildBlogCard(b)).join('');
  }
}
