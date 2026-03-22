# TrendyCartFinds — Setup & Documentation

> A complete affiliate website for budget skincare, beauty, and fashion. Built with HTML, CSS, and vanilla JavaScript. No build tools required.

## 🚀 How to Open the Site

Simply open **`index.html`** in any modern browser. No server, no install, no dependencies.

```
Desktop/Animated/
└── index.html  ← Open this file
```

Or right-click `index.html` → Open with → Chrome / Edge / Firefox.

---

## 📁 File Structure

```
Animated/
├── index.html              ← Homepage
├── category-skincare.html  ← Skincare category
├── category-haircare.html  ← Haircare category
├── category-bodycare.html  ← Bodycare category
├── category-fashion.html   ← Fashion category
├── product.html            ← Product review page (dynamic via ?id=)
├── blog.html               ← Blog listing page
├── blog-post.html          ← Individual blog post (dynamic via ?slug=)
├── search.html             ← Global search page
├── about.html              ← About TrendyCartFinds
├── contact.html            ← Contact form
├── disclaimer.html         ← Affiliate disclaimer
├── privacy.html            ← Privacy policy
│
├── styles.css              ← Global design system (tokens, components)
├── home.css                ← Homepage-specific styles
├── category.css            ← Category page styles
├── product.css             ← Product review page styles
├── blog.css                ← Blog listing styles
├── blog-post.css           ← Blog post layout styles
├── contact.css             ← Contact page styles
│
├── data.js                 ← All product & blog data (central store)
├── app.js                  ← Shared logic (navbar, cards, wishlist, toast)
├── home.js                 ← Homepage rendering logic
├── category.js             ← Category filtering & rendering logic
└── product.js              ← Product detail page logic
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--clr-cream` | `#FDF8F4` | Page backgrounds |
| `--clr-beige` | `#F5EDE3` | Card backgrounds |
| `--clr-blush` | `#F2C4C4` | Accents, badges |
| `--clr-coral` | `#E8775A` | Primary buttons, CTAs |
| `--clr-peach` | `#F4A97A` | Secondary accents |
| `--clr-gold`  | `#C9A84C` | Editor's choice, premium labels |
| `--clr-dark`  | `#1A1A1A` | Text, dark backgrounds |

### Typography
- **Display / Headings** — Playfair Display (serif, elegant)
- **Body** — Inter (clean, readable)
- **UI Elements** — DM Sans (modern, rounded)

---

## 📄 Pages & Features

| Page | URL | Features |
|------|-----|----------|
| Homepage | `index.html` | Hero, categories, trending, under ₹500, blog, testimonials, newsletter |
| Skincare | `category-skincare.html` | Filters by concern + price + rating, sort, product grid |
| Haircare | `category-haircare.html` | Filters, product grid |
| Bodycare | `category-bodycare.html` | Filters, product grid |
| Fashion | `category-fashion.html` | Style filters, product grid |
| Product | `product.html?id=1` | Gallery, pros/cons, verdict, sticky CTA, related |
| Blog | `blog.html` | Search, filter by category, featured post |
| Blog Post | `blog-post.html?slug=...` | Full article, sidebar, related products, share |
| Search | `search.html?q=...` | Real-time search across products + blogs |
| About | `about.html` | Mission, values, affiliate disclosure, stats |
| Contact | `contact.html` | Working form (saved to localStorage), FAQ accordion |
| Disclaimer | `disclaimer.html` | Amazon Associates disclosure |
| Privacy | `privacy.html` | Privacy policy |

---

## 🛒 Adding Your Affiliate Links

Open `data.js` and update the `amazonUrl` field for each product:

```js
{
  id: 1,
  name: "Minimalist Niacinamide Serum",
  amazonUrl: "https://www.amazon.in/your-actual-affiliate-link",
  // ...
}
```

Replace `https://www.amazon.in/s?k=...` with your actual Amazon Associates affiliate links.

---

## ➕ Adding New Products

In `data.js`, add a new object to the `PRODUCTS` array:

```js
{
  id: 16,                          // unique ID
  category: "skincare",            // skincare | haircare | bodycare | fashion
  name: "Product Name",
  desc: "Short description",
  price: 399,
  originalPrice: 699,
  emoji: "🧴",                     // displayed as product image placeholder
  rating: 4.7,
  reviews: 1200,
  tags: ["Editor's Choice"],
  badge: "gold",                   // gold | pink | peach | cream | green | dark
  badgeLabel: "Editor's Choice",
  amazonUrl: "https://amazon.in/your-link",
  concern: ["acne", "oily"],       // for skincare filters
  style: ["casual", "daily"],      // for fashion filters
  isTrending: true,
  isFeatured: false
}
```

---

## ➕ Adding New Blog Posts

In `data.js`, add to `BLOG_POSTS` array:

```js
{
  id: 7,
  slug: "my-new-blog-post",       // used in URL
  title: "My New Post Title",
  excerpt: "Short preview text",
  category: "Skincare",
  tag: "skincare",                 // skincare | fashion
  emoji: "🌿",
  readTime: "6 min",
  date: "Mar 22, 2025",
  views: "0",
  featured: false
}
```

Then in `blog-post.html`, add the content to `BLOG_CONTENT`:
```js
"my-new-blog-post": {
  intro: "Opening paragraph...",
  sections: [
    { title: "Section Title", content: "Section text..." }
  ],
  relatedProducts: [1, 2, 3]
}
```

---

## 🔧 Adding Full Product Reviews

In `product.js`, add to `PRODUCT_DETAILS` object:

```js
16: {
  pros: ["Pro 1", "Pro 2"],
  cons: ["Con 1"],
  benefits: [
    { icon: "🌿", title: "Benefit", desc: "Description" }
  ],
  whoShouldBuy: ["Oily skin types"],
  whoShouldSkip: ["Dry skin types"],
  tips: ["Tip 1", "Tip 2"],
  verdict: "Your honest final verdict text...",
  score: 8.8
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| Desktop (>1024px) | Full multi-column layouts |
| Tablet (768–1024px) | 2-column grids, stacked hero |
| Mobile (<768px) | Single column, hamburger nav |
| Small Mobile (<480px) | Optimised touch targets |

---

## 🔍 SEO Notes

- All pages have `<title>`, `<meta name="description">`, and OpenGraph tags
- Semantic HTML structure (`h1`, `h2`, `article`, `section`, `nav`, `footer`)
- Clean URLs with meaningful slugs
- Internal linking between product pages, blog posts, and category pages

---

## 💾 Local Data Storage

The site uses `localStorage` for:
- **Wishlist** — `tcf_wishlist` (array of product IDs)
- **Contact submissions** — `tcf_contact` (array of form data)

No backend required for basic functionality.

---

## 🚀 Optional Upgrades (Future)

- [ ] Connect to Supabase for real database (newsletter, contact forms)
- [ ] Add admin panel for managing products + posts
- [ ] Integrate real product images from Amazon API
- [ ] Add Google Analytics tracking
- [ ] Implement a service worker for offline use
- [ ] Add Pinterest/Instagram social sharing buttons
- [ ] Build an email system using EmailJS or SendGrid

---

## 🏷️ Brand Guidelines

- **Brand Name:** TrendyCartFinds
- **Tagline:** "Glow Up on a Budget. No Compromise."
- **Tone:** Honest, helpful, like advice from a trusted best friend
- **Primary CTA:** "Check Price on Amazon" / "Shop Now"
- **Trust Signals:** "Honest Review", "Budget Pick", "Editor's Choice", "Amazon Find"

---

*Built with ❤️ for budget-conscious Indian girls everywhere.*
