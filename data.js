// ============================================================
//  TrendyCartFinds – Shared Data Store
// ============================================================

const PRODUCTS = [
  // ── YOUR REAL PRODUCTS ──────────────────────────────────
  {
    id: 1, category: "skincare",
    name: "DOT & KEY Vitamin C + E Super Bright Sunscreen SPF 50",
    desc: "In-Vivo tested Vitamin C + E sunscreen with SPF 50. Brightens skin, protects from UV rays, and leaves a natural glow — no white cast.",
    price: 387, originalPrice: 549,
    img: "Images/Sunscreen.jpg.jpg",
    emoji: "☀️", rating: 4.7, reviews: 3210,
    tags: ["Editor's Choice", "Trending"],
    badge: "gold", badgeLabel: "Editor's Choice",
    amazonUrl: "https://www.amazon.in/s?k=dot+and+key+vitamin+c+sunscreen+spf+50",
    concern: ["tanning", "pigmentation", "oily"],
    style: null, isTrending: true, isFeatured: true
  },
  {
    id: 2, category: "skincare",
    name: "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++",
    desc: "Ultra-lightweight aqua gel sunscreen with 1% Hyaluronic Acid. Hydrates while protecting — perfect for Indian summer skin.",
    price: 412, originalPrice: 599,
    img: "Images/Sunscreen.jpg (2).jpg",
    emoji: "☀️", rating: 4.8, reviews: 2890,
    tags: ["Amazon Find", "Budget Pick"],
    badge: "pink", badgeLabel: "Trending",
    amazonUrl: "https://www.amazon.in/s?k=derma+co+hyaluronic+sunscreen+spf+50",
    concern: ["tanning", "dry", "oily"],
    style: null, isTrending: true, isFeatured: true
  },
  {
    id: 3, category: "skincare",
    name: "WishCare Sunscreen Body Lotion SPF 50 PA+++ In-Vivo Tested",
    desc: "SPF 50 PA+++ body sunscreen that protects and moisturises at the same time. Ideal for daily body sun protection.",
    price: 399, originalPrice: 599,
    img: "Images/Sunscreen.jpg (3).jpg",
    emoji: "🌟", rating: 4.5, reviews: 1450,
    tags: ["Budget Pick"],
    badge: "peach", badgeLabel: "Budget Pick",
    amazonUrl: "https://www.amazon.in/s?k=wishcare+sunscreen+body+lotion+spf+50",
    concern: ["tanning"],
    style: null, isTrending: false, isFeatured: false
  },
  {
    id: 4, category: "bodycare",
    name: "L'Oreal Paris Permanent Hair Colour",
    desc: "Long-lasting permanent hair colour with rich pigments and conditioning care. Covers up to 100% greys beautifully.",
    price: 389, originalPrice: 550,
    img: "Images/haircare.jpg.jpg",
    emoji: "🎨", rating: 4.4, reviews: 8740,
    tags: ["Amazon Find"],
    badge: "peach", badgeLabel: "Bestseller",
    amazonUrl: "https://www.amazon.in/s?k=loreal+paris+permanent+hair+colour",
    concern: [],
    style: null, isTrending: true, isFeatured: false
  },
  {
    id: 5, category: "haircare",
    name: "L'Oreal Paris Glycolic Gloss Shine Boosting Shampoo",
    desc: "Glycolic acid shampoo that removes dullness and boosts hair shine instantly. Leaves hair glossy and smooth.",
    price: 604, originalPrice: 799,
    img: "Images/haircare.jpg (2).jpg",
    emoji: "✨", rating: 4.6, reviews: 1980,
    tags: ["Editor's Choice"],
    badge: "gold", badgeLabel: "Editor's Choice",
    amazonUrl: "https://www.amazon.in/s?k=loreal+glycolic+gloss+shampoo",
    concern: [],
    style: null, isTrending: true, isFeatured: true
  },
  {
    id: 6, category: "skincare",
    name: "Garnier Bright Complete Vitamin C Facewash",
    desc: "Brightening and cleansing face wash with Vitamin C that removes dullness and gives radiant, glowing skin from first wash.",
    price: 172, originalPrice: 249,
    img: "Images/Skincare.jpg.jpg",
    emoji: "🍋", rating: 4.3, reviews: 15600,
    tags: ["Budget Pick"],
    badge: "green", badgeLabel: "Under ₹200",
    amazonUrl: "https://www.amazon.in/s?k=garnier+bright+complete+facewash",
    concern: ["pigmentation", "tanning"],
    style: null, isTrending: false, isFeatured: true
  },

];

const BLOG_POSTS = [
  {
    id: 1,
    slug: "best-sunscreens-under-500",
    title: "Best Sunscreens Under ₹500 for Indian Skin (2025 Tested List)",
    excerpt: "We tested 12 sunscreens across different skin types and budgets. Here are the only 5 you actually need — no white cast, no greasiness.",
    category: "Skincare", tag: "skincare",
    emoji: "☀️", readTime: "8 min",
    date: "Mar 18, 2025",
    views: "24.5K", featured: true
  },
  {
    id: 2,
    slug: "affordable-coord-sets-amazon",
    title: "Top 8 Affordable Co-ord Sets on Amazon Under ₹600",
    excerpt: "The co-ord set trend is everywhere right now. We found 8 gorgeous, budget-friendly options that look way more expensive than they are.",
    category: "Fashion", tag: "fashion",
    emoji: "👗", readTime: "6 min",
    date: "Mar 12, 2025",
    views: "18.2K", featured: true
  },
  {
    id: 3,
    slug: "budget-skincare-oily-skin",
    title: "Complete Budget Skincare Routine for Oily Skin Under ₹1000",
    excerpt: "Build a full skincare routine — cleanser, toner, serum, moisturiser, and SPF — without breaking the bank. Total spend: ₹949.",
    category: "Skincare", tag: "skincare",
    emoji: "🌿", readTime: "10 min",
    date: "Mar 6, 2025",
    views: "31.7K", featured: false
  },
  {
    id: 4,
    slug: "fashion-finds-under-499",
    title: "Fashion Finds Under ₹499 on Amazon India — Summer Edition",
    excerpt: "Summer is here and your wardrobe needs a refresh. These 10 Amazon finds are so good, you won't believe the price.",
    category: "Fashion", tag: "fashion",
    emoji: "🌊", readTime: "7 min",
    date: "Feb 28, 2025",
    views: "15.9K", featured: false
  },
  {
    id: 5,
    slug: "niacinamide-guide-beginners",
    title: "Niacinamide for Beginners: Everything You Need to Know",
    excerpt: "Is niacinamide the right ingredient for you? We break down who should use it, how to layer it, and the best budget options available.",
    category: "Skincare", tag: "skincare",
    emoji: "🧴", readTime: "12 min",
    date: "Feb 20, 2025",
    views: "42.3K", featured: true
  },
  {
    id: 6,
    slug: "dark-spot-removal-products",
    title: "6 Budget Products That Actually Fade Dark Spots in 4 Weeks",
    excerpt: "Pigmentation and dark spots are the #1 skincare concern for Indian women. Here are 6 products under ₹500 that genuinely deliver results.",
    category: "Skincare", tag: "skincare",
    emoji: "✨", readTime: "9 min",
    date: "Feb 14, 2025",
    views: "28.1K", featured: false
  }
];

// Expose globally
window.PRODUCTS = PRODUCTS;
window.BLOG_POSTS = BLOG_POSTS;
