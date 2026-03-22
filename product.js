// product.js – Product detail page logic

const PRODUCT_DETAILS = {
  1: {
    pros: ["Visibly reduces pores in 2 weeks", "Controls excess sebum beautifully", "Lightweight, no greasy feel", "Great for layering under SPF", "Affordable — value for money"],
    cons: ["May tingle initially on sensitive skin", "Results take 4-6 weeks to show fully"],
    benefits: [
      { icon: "🫧", title: "Pore Minimising", desc: "Zinc visibly reduces appearance of pores" },
      { icon: "💧", title: "Oil Control", desc: "Regulates sebum for a matte finish" },
      { icon: "✨", title: "Brightening", desc: "Evens skin tone and fades dark spots" }
    ],
    whoShouldBuy: ["People with oily or combination skin", "Those struggling with open pores", "Anyone with mild acne & breakouts", "Beginners to actives skincare"],
    whoShouldSkip: ["Those with very dry, dehydrated skin", "Extremely sensitive skin without patch test"],
    tips: [
      "Apply 2-3 drops after cleansing on damp skin",
      "Use AM and PM for best results",
      "Follow with a lightweight moisturiser",
      "Always apply SPF in the morning on top"
    ],
    verdict: "The Minimalist Niacinamide 10% Serum is genuinely one of the best skincare investments under ₹500. It delivers real results for oily, acne-prone Indian skin — reduced pores, controlled oil, and brighter complexion. Highly recommended as the first active serum for skincare beginners.",
    score: 9.2
  },
  2: {
    pros: ["Zero white cast — works on all Indian skin tones", "Lightweight and non-greasy", "PA++++ — high UVA protection", "Sits beautifully under makeup", "Affordable for daily use"],
    cons: ["Slight initial scent (fades quickly)", "May feel heavy in very humid climates"],
    benefits: [
      { icon: "☀️", title: "SPF 50 PA++++", desc: "Broad spectrum UVA/UVB protection" },
      { icon: "💧", title: "No White Cast", desc: "Invisible finish on all Indian skin tones" },
      { icon: "🌿", title: "Lightweight", desc: "Comfortable for daily all-day wear" }
    ],
    whoShouldBuy: ["Anyone who needs daily sun protection", "Oily skin types looking for matte SPF", "Makeup users who want SPF under foundation", "Budget-conscious skincare fans"],
    whoShouldSkip: ["Those who prefer physical/mineral sunscreens", "People with fragrance sensitivity"],
    tips: [
      "Apply as the last step of your morning routine",
      "Use 2 fingers length for face and neck",
      "Reapply every 2 hours if outdoors",
      "Pair with Niacinamide serum for best results"
    ],
    verdict: "If you buy only one skincare product this year, make it this sunscreen. No white cast, lightweight formula, and genuine SPF 50 PA++++ protection at just ₹349. It has changed the sun protection habits of thousands of Indian women — and for good reason.",
    score: 9.6
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const id = parseInt(getParam('id') || '1');
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const details = PRODUCT_DETAILS[product.id] || PRODUCT_DETAILS[1];
  renderProduct(product, details);
  renderRelated(product);
});

function renderProduct(p, d) {
  const discount = p.originalPrice
    ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
    : 0;

  document.title = `${p.name} – Honest Review – TrendyCartFinds`;
  document.getElementById('pageDesc').content = p.desc;

  const catLink = p.category === 'fashion' ? 'category-fashion.html' : 'category-skincare.html';

  const html = `
  <div class="product-detail">
    <div class="container">
      <div class="breadcrumb product-breadcrumb">
        <a href="index.html">Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="${catLink}">${p.category.charAt(0).toUpperCase()+p.category.slice(1)}</a>
        <span class="breadcrumb-sep">›</span>
        <span>${p.name}</span>
      </div>

      <div class="product-layout">
        <!-- Gallery -->
        <div class="product-gallery">
          <div class="product-gallery__main" style="padding:0;overflow:hidden;background:var(--gradient-hero)">
            ${p.img
              ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;display:block;padding:16px;box-sizing:border-box" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><div style="width:100%;height:100%;display:none;align-items:center;justify-content:center;font-size:6rem">${p.emoji}</div>`
              : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:6rem">${p.emoji}</div>`
            }
            <div class="product-gallery__badge-tray">
              ${p.badgeLabel ? `<span class="badge badge-${p.badge}">${p.badgeLabel}</span>` : ''}
              ${discount > 0 ? `<span class="badge badge-green">${discount}% OFF</span>` : ''}
            </div>
          </div>
          <div class="product-gallery__thumbs">
            <div class="product-gallery__thumb active" style="overflow:hidden;padding:0;background:var(--gradient-hero)">
              ${p.img
                ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'"/>`
                : p.emoji
              }
            </div>
            <div class="product-gallery__thumb">🌿</div>
            <div class="product-gallery__thumb">📦</div>
            <div class="product-gallery__thumb">✨</div>
          </div>
        </div>

        <!-- Info -->
        <div class="product-info">
          <div class="product-info__category">${p.category} · Honest Review</div>
          <h1 class="product-info__title">${p.name}</h1>

          <div class="product-info__rating-row">
            <span class="stars" style="font-size:1.2rem">${'★'.repeat(Math.round(p.rating))}</span>
            <span style="font-weight:700">${p.rating}/5</span>
            <span style="color:var(--clr-gray-light);font-size:0.875rem">(${p.reviews.toLocaleString()} reviews)</span>
            <span class="badge badge-green">Verified Amazon</span>
          </div>

          <div class="product-info__price-row">
            <span class="product-info__price">₹${p.price}</span>
            ${p.originalPrice ? `<span class="product-info__original">₹${p.originalPrice}</span>` : ''}
            ${discount > 0 ? `<span class="product-info__discount">Save ${discount}%</span>` : ''}
          </div>

          <p class="product-info__desc">${p.desc}</p>

          <div class="product-info__cta">
            <a href="${p.amazonUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
              🛒 Check Price on Amazon
            </a>
            <button class="btn btn-secondary" onclick="toggleWishlist(this,${p.id})">🤍 Save</button>
          </div>

          <div class="product-info__trust">
            <div class="product-info__trust-item">✅ Honest Review</div>
            <div class="product-info__trust-item">🔗 Amazon Verified</div>
            <div class="product-info__trust-item">💰 Budget Friendly</div>
            <div class="product-info__trust-item">🇮🇳 India Tested</div>
          </div>

          <div class="product-info__tags">
            ${(p.tags || []).map(tag => `<span class="badge badge-cream">${tag}</span>`).join('')}
            ${(p.concern || []).map(c => `<span class="badge badge-pink">${c}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Key Benefits -->
      <div class="review-section">
        <h2>✨ Key Benefits</h2>
        <div class="benefits-grid">
          ${(d.benefits || []).map(b => `
            <div class="benefit-card">
              <div class="benefit-card__icon">${b.icon}</div>
              <div class="benefit-card__title">${b.title}</div>
              <div class="benefit-card__desc">${b.desc}</div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Pros & Cons -->
      <div class="review-section">
        <h2>👍 Pros & Cons</h2>
        <div class="pros-cons">
          <div class="pros-box">
            <h4>✅ What We Loved</h4>
            <ul>${(d.pros || []).map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="cons-box">
            <h4>⚠️ Things to Note</h4>
            <ul>${(d.cons || []).map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
        </div>
      </div>

      <!-- Who Should Buy -->
      <div class="review-section">
        <h2>🎯 Who Should Buy This?</h2>
        <div class="who-grid">
          <div class="who-card who-card--buy">
            <h4>✅ Buy This If You…</h4>
            <ul>${(d.whoShouldBuy || []).map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="who-card who-card--skip">
            <h4>⚠️ Skip This If You…</h4>
            <ul>${(d.whoShouldSkip || []).map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
        </div>
      </div>

      <!-- Usage Tips -->
      <div class="review-section">
        <h2>💡 How to Use</h2>
        <div class="tips-list">
          ${(d.tips || []).map((tip, i) => `
            <div class="tip-item">
              <div class="tip-item__num">${i + 1}</div>
              <div class="tip-item__text">${tip}</div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Final Verdict -->
      <div class="review-section">
        <h2>🏆 Final Verdict</h2>
        <div class="verdict-box">
          <div class="verdict-score">
            <div>
              <div class="verdict-score__num">${d.score}</div>
              <div class="verdict-score__label">TrendyCart Score / 10</div>
            </div>
            <div>
              <div class="verdict-score__stars">★★★★★</div>
              <div style="font-size:0.8rem;color:var(--clr-gray)">Editor's Rating</div>
            </div>
            <span class="badge badge-gold" style="margin-left:auto">Editor's Choice</span>
          </div>
          <p class="verdict-text">${d.verdict}</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a href="${p.amazonUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
              🛒 Check Price on Amazon →
            </a>
            <a href="blog.html" class="btn btn-secondary">Read More Reviews</a>
          </div>
        </div>
      </div>

      <!-- Affiliate Disclaimer -->
      <div style="background:var(--clr-cream);border-radius:var(--radius-md);padding:16px 20px;font-size:0.8rem;color:var(--clr-gray);margin-bottom:48px">
        <strong>Disclosure:</strong> This post contains affiliate links. If you purchase through our links, we earn a small commission at no extra cost to you. We only recommend products we genuinely believe in. Prices may vary on Amazon.
      </div>

      <!-- Related Products -->
      <div class="review-section">
        <h2>💛 You Might Also Like</h2>
        <div class="grid-4" id="relatedGrid"></div>
      </div>
    </div>
  </div>

  <!-- Sticky CTA -->
  <div class="sticky-cta" id="stickyCta">
    <div class="sticky-cta__info">
      <div class="sticky-cta__name">${p.name}</div>
      <div class="sticky-cta__price">₹${p.price} ${p.originalPrice ? `<s style="color:var(--clr-gray-light);font-size:0.85rem">₹${p.originalPrice}</s>` : ''}</div>
    </div>
    <a href="${p.amazonUrl}" target="_blank" rel="noopener" class="btn btn-primary">🛒 Check on Amazon</a>
  </div>`;

  document.getElementById('productContent').innerHTML = html;

  // Sticky CTA on scroll
  window.addEventListener('scroll', () => {
    const cta = document.getElementById('stickyCta');
    if (cta) {
      cta.classList.toggle('visible', window.scrollY > 500);
    }
  });
}

function renderRelated(current) {
  const grid = document.getElementById('relatedGrid');
  if (!grid) return;
  const related = PRODUCTS
    .filter(p => p.id !== current.id && p.category === current.category)
    .slice(0, 4);
  grid.innerHTML = related.map(p => buildProductCard(p)).join('');
}
