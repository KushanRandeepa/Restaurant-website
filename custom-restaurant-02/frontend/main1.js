/**
 * ==========================================================================
 * DATA (easy to customize)
 * Prices stay "Price on request" until official prices are supplied.
 * ==========================================================================
 */
const PHONE = '+940123456789';

const MENU_ITEMS = [
  { category: 'rice', categoryLabel: 'Rice & Fried Rice', name: 'Chicken Fried Rice', description: 'Wok-tossed fragrant rice with tender seasoned chicken, crisp vegetables, and aromatic herbs.', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80', signature: true },
  { category: 'rice', categoryLabel: 'Rice & Fried Rice', name: 'Seafood Fried Rice', description: 'Flavourful fried rice loaded with succulent prawns, cuttlefish, and coastal spices.', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', signature: false },
  { category: 'rice', categoryLabel: 'Rice & Fried Rice', name: 'Egg Fried Rice', description: 'Classic golden egg fried rice tossed with spring onions and light savoury seasoning.', image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800&q=80', signature: false },

  { category: 'mains', categoryLabel: 'Main Dishes', name: 'Grilled Chicken', description: 'Juicy herb-marinated chicken flame-grilled to perfection and served with house accompaniments.', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80', signature: true },
  { category: 'mains', categoryLabel: 'Main Dishes', name: 'Chicken Biryani', description: 'Slow-cooked aromatic spiced rice layered with tender chicken and traditional garnishes.', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', signature: true },
  { category: 'mains', categoryLabel: 'Main Dishes', name: 'Mixed Rice', description: 'Generous combination rice platter crafted with assorted meats, seafood, egg, and fresh vegetables.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', signature: false },

  { category: 'seafood', categoryLabel: 'Seafood Specialties', name: 'Grilled Fish', description: 'Fresh fish fillet seared over open heat with citrus, cracked pepper, and garden herbs.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', signature: false },
  { category: 'seafood', categoryLabel: 'Seafood Specialties', name: 'Garlic Prawn', description: 'Plump prawns sautéed in fragrant roasted garlic butter, herbs, and mild chilli.', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80', signature: true },
  { category: 'seafood', categoryLabel: 'Seafood Specialties', name: 'Seafood Special', description: 'Chef’s signature coastal medley showcasing seasonal seafood prepared with bold flavours.', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80', signature: true },

  { category: 'sides', categoryLabel: 'Snacks & Sides', name: 'French Fries', description: 'Golden, crisp potato fries lightly seasoned and served hot alongside dipping sauce.', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80', signature: false },
  { category: 'sides', categoryLabel: 'Snacks & Sides', name: 'Chicken Wings', description: 'Crispy, savoury glazed chicken wings tossed in a rich, aromatic house seasoning.', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80', signature: false },
  { category: 'sides', categoryLabel: 'Snacks & Sides', name: 'Mixed Salad', description: 'Crisp garden greens, ripe tomatoes, cucumber, and onions dressed with a light zesty vinaigrette.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', signature: false }
];

const GALLERY_ITEMS = [
  { category: 'rice', catLabel: 'Rice Dishes', title: 'Aromatic Chicken Biryani', id: '1563379091339-03b21ab4a4f8' },
  { category: 'chicken', catLabel: 'Chicken Dishes', title: 'Crispy Glazed Chicken Wings', id: '1527477396000-e27163b481c2' },
  { category: 'seafood', catLabel: 'Seafood', title: 'Garlic Prawns & Seafood', id: '1559737558-2f5a35f4523b' },
  { category: 'grilled', catLabel: 'Grilled Food', title: 'Flame-Grilled Chicken', id: '1598515214211-89d3c73ae83b' },
  { category: 'beverages', catLabel: 'Beverages', title: 'Chilled Citrus & Mint Coolers', id: '1513558161293-cdaf765ed2fd' },
  { category: 'interior', catLabel: 'Restaurant Interior', title: 'Warm Evening Dining Space', id: '1517248135467-4c7edcad34c4' }
];
const unsplash = (id, w, q = 80) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = !!window.gsap && !reduceMotion;

/**
 * ==========================================================================
 * MENU (render + category filter)
 * ==========================================================================
 */
const menuGrid = document.getElementById('menuGrid');
const menuTabs = document.getElementById('menuTabs');

function renderMenu(category = 'all') {
  const items = category === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === category);

  menuGrid.innerHTML = items.map(item => `
    <div class="col-md-6 col-lg-4 menu-col">
      <article class="food-card">
        <div class="food-card__media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="food-card__badges">
            <span class="tag-cat">${item.categoryLabel}</span>
            ${item.signature ? '<span class="tag-sig"><i class="fa-solid fa-star"></i> Signature</span>' : ''}
          </div>
        </div>
        <div class="food-card__body">
          <h3 class="food-card__title">${item.name}</h3>
          <p class="food-card__desc">${item.description}</p>
          <div class="food-card__footer">
            <span class="price-tag">Price on request</span>
            <a href="tel:${PHONE}" class="food-card__call" aria-label="Call to inquire about ${item.name}">
              <i class="fa-solid fa-phone"></i><span>Inquire</span>
            </a>
          </div>
        </div>
      </article>
    </div>`).join('');

  if (hasGsap) {
    gsap.fromTo('#menuGrid .menu-col', { opacity: 0, y: 24, scale: .96 },
      { opacity: 1, y: 0, scale: 1, duration: .5, stagger: .06, ease: 'power3.out', clearProps: 'transform' });
  }
}

function setActiveChip(container, btn) {
  container.querySelectorAll('.chip').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
}

menuTabs.addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  setActiveChip(menuTabs, btn);
  renderMenu(btn.dataset.category);
});
renderMenu('all');

/**
 * ==========================================================================
 * GALLERY (render + filter + Bootstrap-modal lightbox)
 * ==========================================================================
 */
const galleryGrid = document.getElementById('galleryGrid');
const galleryFilters = document.getElementById('galleryFilters');
let visibleGallery = [...GALLERY_ITEMS];
let lightboxIndex = 0;

function renderGallery(filter = 'all') {
  visibleGallery = filter === 'all' ? [...GALLERY_ITEMS] : GALLERY_ITEMS.filter(g => g.category === filter);

  galleryGrid.innerHTML = visibleGallery.map((g, i) => `
    <div class="col-sm-6 col-lg-4 gallery-col">
      <div class="gallery-item" data-index="${i}" tabindex="0" role="button" aria-label="Open ${g.title}">
        <img src="${unsplash(g.id, 750)}" alt="${g.title}" loading="lazy" />
        <span class="gallery-item__zoom"><i class="fa-solid fa-expand"></i></span>
        <div class="gallery-item__overlay">
          <span class="gallery-item__cat">${g.catLabel}</span>
          <h3 class="gallery-item__title">${g.title}</h3>
        </div>
      </div>
    </div>`).join('');

  if (hasGsap) {
    gsap.fromTo('#galleryGrid .gallery-col', { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: .45, stagger: .06, ease: 'power2.out' });
  }
}

galleryFilters.addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  setActiveChip(galleryFilters, btn);
  renderGallery(btn.dataset.filter);
});
renderGallery('all');

const lightboxEl = document.getElementById('lightbox');
const lightboxModal = new bootstrap.Modal(lightboxEl);
const lbImg = document.getElementById('lightboxImg');
const lbTitle = document.getElementById('lightboxTitle');
const lbCat = document.getElementById('lightboxCat');

function showLightbox(index) {
  if (!visibleGallery.length) return;
  lightboxIndex = (index + visibleGallery.length) % visibleGallery.length;
  const g = visibleGallery[lightboxIndex];
  lbImg.src = unsplash(g.id, 1400, 85);
  lbImg.alt = g.title;
  lbTitle.textContent = g.title;
  lbCat.textContent = g.catLabel;
  lightboxModal.show();
  if (hasGsap) gsap.fromTo(lbImg, { opacity: 0, scale: .97 }, { opacity: 1, scale: 1, duration: .35 });
}

function openFromEvent(e) {
  const item = e.target.closest('.gallery-item');
  if (item) showLightbox(Number(item.dataset.index));
}
galleryGrid.addEventListener('click', openFromEvent);
galleryGrid.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFromEvent(e); }
});
document.getElementById('lightboxPrev').addEventListener('click', () => showLightbox(lightboxIndex - 1));
document.getElementById('lightboxNext').addEventListener('click', () => showLightbox(lightboxIndex + 1));
document.addEventListener('keydown', e => {
  if (!lightboxEl.classList.contains('show')) return;
  if (e.key === 'ArrowLeft') showLightbox(lightboxIndex - 1);
  if (e.key === 'ArrowRight') showLightbox(lightboxIndex + 1);
});

/**
 * ==========================================================================
 * NAVIGATION: smooth anchor scrolling (works from the mobile drawer too)
 * + scroll-spy highlight + navbar background
 * ==========================================================================
 */
const nav = document.getElementById('mainNav');
const drawerEl = document.getElementById('navDrawer');
const spyLinks = [...document.querySelectorAll('#navDrawer .nav-link')];
const pageSections = [...document.querySelectorAll('main section[id]')];

const navOffset = () => nav.offsetHeight + 4;

function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = id === 'home' ? 0 : target.getBoundingClientRect().top + window.scrollY - navOffset();
  window.scrollTo({ top: Math.max(top, 0), behavior: reduceMotion ? 'auto' : 'smooth' });
}

document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href').slice(1);
  if (!id || !document.getElementById(id)) return;
  e.preventDefault();

  // The offcanvas locks page scroll while open, so close it first, then scroll.
  if (drawerEl.classList.contains('show')) {
    drawerEl.addEventListener('hidden.bs.offcanvas', () => scrollToId(id), { once: true });
    bootstrap.Offcanvas.getOrCreateInstance(drawerEl).hide();
  } else {
    scrollToId(id);
  }
  history.replaceState(null, '', '#' + id);
});

function updateNav() {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);

  const probe = window.scrollY + navOffset() + 80;
  let current = 'home';
  pageSections.forEach(sec => { if (probe >= sec.offsetTop) current = sec.id; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
  if (current === 'takeaway') current = 'dining';

  spyLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', updateNav, { passive: true });
window.addEventListener('resize', updateNav);
updateNav();

// Recalculate scroll animations once images have loaded and layout settles
window.addEventListener('load', () => {
  if (window.ScrollTrigger) ScrollTrigger.refresh();
  updateNav();
});

/**
 * ==========================================================================
 * CONTACT ENQUIRY FORM (opens the visitor's messaging app with a ready SMS)
 * ==========================================================================
 */
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', e => {
    e.preventDefault();
    const nameEl = document.getElementById('eqName');
    const msgEl = document.getElementById('eqMsg');
    const type = document.getElementById('eqType').value;
    const note = document.getElementById('eqNote');

    let valid = true;
    [nameEl, msgEl].forEach(el => {
      const bad = !el.value.trim();
      el.classList.toggle('is-invalid', bad);
      if (bad) valid = false;
    });
    if (!valid) {
      note.textContent = 'Please add your name and a message.';
      return;
    }

    const body = 'Hi, I’m ' + nameEl.value.trim() + '. (' + type + ') ' + msgEl.value.trim();
    note.textContent = 'Opening your messaging app. If nothing opens, please call ' + PHONE + '.';
    window.location.href = 'sms:' + PHONE + '?body=' + encodeURIComponent(body);
  });
  enquiryForm.addEventListener('input', e => e.target.classList.remove('is-invalid'));
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

/**
 * ==========================================================================
 * GSAP + SCROLLTRIGGER ANIMATIONS
 * ==========================================================================
 */
window.addEventListener('DOMContentLoaded', () => {
  if (!hasGsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // Hero intro timeline
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.hero-anim', { y: 30, opacity: 0, duration: .85, stagger: .12 });
  tl.from('.float-chip', { scale: .6, opacity: 0, duration: .6, stagger: .15, ease: 'back.out(2)' }, '-=.4');

  // Floating chips + gentle dish bob
  gsap.to('.float-chip--a', { y: -12, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.float-chip--b', { y: 12, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  if (!window.ScrollTrigger) return;

  // Hero background parallax
  gsap.to('#heroBg', {
    yPercent: 14, ease: 'none',
    scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true }
  });
  // Hero dish drifts + rotates slightly on scroll
  gsap.to('.hero-dish img', {
    rotate: 12, ease: 'none',
    scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true }
  });

  // Directional scroll reveals
  const reveal = (selector, from) => {
    gsap.utils.toArray(selector).forEach(el => {
      gsap.from(el, {
        ...from, opacity: 0, duration: .9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });
  };
  reveal('.reveal-up', { y: 40 });
  reveal('.reveal-left', { x: -60 });
  reveal('.reveal-right', { x: 60 });

  // Staggered small elements
  ScrollTrigger.batch('.pillar, .contact-card, .step, .collage__item', {
    start: 'top 90%', once: true,
    onEnter: batch => gsap.from(batch, { y: 28, opacity: 0, duration: .6, stagger: .1, ease: 'power2.out' })
  });

  // Section images: subtle parallax inside frame
  gsap.utils.toArray('.about-media img, .collage__item--wide img').forEach(img => {
    gsap.fromTo(img, { scale: 1.12 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });
});