
    /**
     * ==========================================================================
     * OFFICIAL MENU DATA (EXTRACTED VERBATIM FROM ATTACHED MENU IMAGES)
     * Currency: Sri Lankan Rupees (LKR)
     * ==========================================================================
     */
    const OFFICIAL_MENU = [
      {
        id: 'keerisamba',
        title: 'KEERISAMBA',
        subtitle: 'Fragrant Sri Lankan Keerisamba rice specialties',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300&q=80',
        sizeLegend: ['M', 'L'],
        items: [
          { name: 'VEG', m: '700/=', l: '1100/=' },
          { name: 'EGG', m: '700/=', l: '1200/=' },
          { name: 'FISH', m: '800/=', l: '1400/=' },
          { name: 'CHICKEN', m: '950/=', l: '1450/=' },
          { name: 'SEAFOOD', m: '1050/=', l: '1750/=' },
          { name: 'NASI', m: '1100/=', l: '2000/=' },
          { name: 'MIXED', m: '1050/=', l: '2050/=' },
          { name: 'BEEF', m: '1000/=', l: '1850/=' },
          { name: 'PORK', m: '1000/=', l: '1850/=' }
        ]
      },
      {
        id: 'basmathi',
        title: 'BASMATHI',
        subtitle: 'Long-grain Basmathi fried rice selections',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80',
        sizeLegend: ['M', 'L'],
        items: [
          { name: 'VEG', m: '850/=', l: '1250/=' },
          { name: 'EGG', m: '900/=', l: '1450/=' },
          { name: 'FISH', m: '1000/=', l: '1700/=' },
          { name: 'CHICKEN', m: '1050/=', l: '1800/=' },
          { name: 'SEAFOOD', m: '1200/=', l: '2150/=' },
          { name: 'NASI', m: '1250/=', l: '2250/=' },
          { name: 'MIXED', m: '1250/=', l: '2250/=' },
          { name: 'BEEF', m: '1200/=', l: '2000/=' },
          { name: 'PORK', m: '1200/=', l: '2000/=' }
        ]
      },
      {
        id: 'biriyani',
        title: 'BIRIYANI',
        subtitle: 'Traditional spiced biriyani served in Medium & Large',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80',
        sizeLegend: ['M', 'L'],
        items: [
          { name: 'BIRIYANI', m: '800/=', l: '1400/=' }
        ]
      },
      {
        id: 'kottu',
        title: 'KOTTU',
        subtitle: 'Chopped godamba roti tossed hot on the iron griddle',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=300&q=80',
        sizeLegend: ['M', 'L'],
        items: [
          { name: 'VEG', m: '650/=', l: '1000/=' },
          { name: 'EGG', m: '750/=', l: '1050/=' },
          { name: 'FISH', m: '850/=', l: '1150/=' },
          { name: 'CHICKEN', m: '850/=', l: '1250/=' },
          { name: 'SEAFOOD', m: '1100/=', l: '1600/=' },
          { name: 'MIXED', m: '1250/=', l: '1800/=' },
          { name: 'BEEF', m: '1250/=', l: '1600/=' },
          { name: 'PORK', m: '1400/=', l: '1800/=' },
          { name: 'CHESSE KOTTU', m: '1300/=', l: '1900/=' },
          { name: 'SPECIAL KOCHCHI', m: '1100/=', l: '1550/=' }
        ]
      },
      {
        id: 'noodles-pasta',
        title: 'NOODLES & PASTA',
        subtitle: 'Savoury wok-tossed noodles and pasta',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=300&q=80',
        sizeLegend: ['M', 'L'],
        items: [
          { name: 'CHICKEN NOODLES', m: '900/=', l: '1500/=' },
          { name: 'PASTA', m: '900/=', l: '1500/=' }
        ]
      },
      {
        id: 'devel',
        title: 'DEVEL',
        subtitle: 'Fiery sweet-and-spicy devilled dishes (M: 250g | L: 500g)',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80',
        sizeLegend: ['M (250g)', 'L (500g)'],
        items: [
          { name: 'CHICKEN DEVEL', m: '1300/=', mWeight: '250g', l: '2500/=', lWeight: '500g' },
          { name: 'PORK DEVEL', m: '1800/=', mWeight: '250g', l: '3400/=', lWeight: '500g' },
          { name: 'PRAWNS DEVEL', m: '1800/=', mWeight: '250g', l: '3400/=', lWeight: '500g' },
          { name: 'SAUSAGES DEVEL', m: '850/=', mWeight: '250g', l: '1500/=', lWeight: '500g' },
          { name: 'CUTTLE FISH DEVEL', m: '1900/=', mWeight: '250g', l: '3600/=', lWeight: '500g' },
          { name: 'HOT BATTER PRONS', m: '2100/=', mWeight: '250g', l: '3900/=', lWeight: '500g' }
        ]
      },
      {
        id: 'omlet-fries',
        title: 'OMLET & FRENCH FRIES',
        subtitle: 'Fluffy omelettes and crispy golden french fries',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=80',
        sizeLegend: ['M', 'L (Fries 500g)'],
        items: [
          { name: 'CHICKEN OMLET', m: '1000/=', l: null },
          { name: 'OMLET', m: '600/=', l: null },
          { name: 'CHEESE OMLET', m: '800/=', l: null },
          { name: 'FRENCH FRIES', m: '850/=', mWeight: '250g', l: '1600/=', lWeight: '500g' }
        ]
      }
    ];

    /**
     * ==========================================================================
     * RENDER MENU SECTIONS & HANDLE TAB / SEARCH FILTERING
     * ==========================================================================
     */
    const menuContainer = document.getElementById('menuContainer');
    const menuTabs = document.getElementById('menuTabs');
    const menuSearchInput = document.getElementById('menuSearchInput');

    let activeCategory = 'all';
    let searchQuery = '';

    function renderMenu() {
      const normalizedQuery = searchQuery.trim().toLowerCase();

      const filteredCategories = OFFICIAL_MENU
        .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
        .map(cat => {
          const matchingItems = cat.items.filter(item =>
            item.name.toLowerCase().includes(normalizedQuery) ||
            cat.title.toLowerCase().includes(normalizedQuery)
          );
          return { ...cat, items: matchingItems };
        })
        .filter(cat => cat.items.length > 0);

      if (filteredCategories.length === 0) {
        menuContainer.innerHTML = `
          <div class="menu-empty-state">
            <i class="fa-solid fa-utensils" style="font-size: 2rem; color: var(--accent); margin-bottom: 0.75rem;"></i>
            <h3 style="color: var(--text-primary); margin-bottom: 0.35rem;">No matching dishes found</h3>
            <p>Try searching another keyword or select "All Categories" above.</p>
          </div>
        `;
        return;
      }

      menuContainer.innerHTML = filteredCategories.map(cat => `
        <div class="menu-category-block" data-category-id="${cat.id}">
          <div class="menu-category-header">
            <div class="menu-category-title-group">
              <img src="${cat.image}" alt="${cat.title}" class="menu-category-thumb" loading="lazy" />
              <div>
                <h3 class="menu-category-title">${cat.title}</h3>
                <p class="menu-category-meta">${cat.subtitle}</p>
              </div>
            </div>
            <div class="menu-size-legend">
              <span class="size-pill size-pill--m">${cat.sizeLegend[0]}</span>
              ${cat.sizeLegend[1] ? `<span class="size-pill size-pill--l">${cat.sizeLegend[1]}</span>` : ''}
            </div>
          </div>

          <div class="menu-items-grid">
            ${cat.items.map(item => `
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <div class="menu-item-name">${item.name}</div>
                  <div class="menu-item-sub">${cat.title} &bull; LKR</div>
                </div>
                <div class="menu-item-prices">
                  ${item.m ? `
                    <div class="price-box">
                      <span class="price-box__tag">M ${item.mWeight ? `(${item.mWeight})` : ''}</span>
                      <span class="price-box__val">Rs. ${item.m}</span>
                    </div>
                  ` : ''}
                  ${item.l ? `
                    <div class="price-box price-box--large">
                      <span class="price-box__tag">L ${item.lWeight ? `(${item.lWeight})` : ''}</span>
                      <span class="price-box__val">Rs. ${item.l}</span>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');

      if (window.gsap) {
        gsap.fromTo(
          '.menu-category-block',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out' }
        );
      }
    }

    menuTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.menu-tab');
      if (!btn) return;

      document.querySelectorAll('.menu-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      activeCategory = btn.dataset.category;
      renderMenu();
    });

    menuSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });

    renderMenu();

    /**
     * ==========================================================================
     * STICKY NAVBAR, ACTIVE LINK HIGHLIGHT & MOBILE HAMBURGER DRAWER
     * ==========================================================================
     */
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    function handleScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }

      // Highlight active section link
      let currentId = 'home';
      const scrollPos = window.scrollY + 140;
      sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          currentId = sec.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    function toggleMobileMenu(forceClose = false) {
      const isOpen = forceClose ? false : !mobileMenu.classList.contains('is-open');
      mobileMenu.classList.toggle('is-open', isOpen);
      hamburgerBtn.classList.toggle('is-open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(true));
    });

    /**
     * ==========================================================================
     * GALLERY FILTER & FULL-SCREEN LIGHTBOX
     * ==========================================================================
     */
    const galleryFilters = document.getElementById('galleryFilters');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCat = document.getElementById('lightboxCat');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let visibleGalleryItems = [...galleryItems];
    let currentLightboxIndex = 0;

    galleryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.gallery-filter-btn');
      if (!btn) return;

      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      visibleGalleryItems = [];

      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !match);
        if (match) visibleGalleryItems.push(item);
      });
    });

    function openLightbox(index) {
      if (!visibleGalleryItems.length) return;
      currentLightboxIndex = (index + visibleGalleryItems.length) % visibleGalleryItems.length;
      const item = visibleGalleryItems[currentLightboxIndex];

      lightboxImg.src = item.dataset.src;
      lightboxImg.alt = item.dataset.title;
      lightboxTitle.textContent = item.dataset.title;
      lightboxCat.textContent = item.dataset.catLabel;

      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const idx = visibleGalleryItems.indexOf(item);
        openLightbox(idx !== -1 ? idx : 0);
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => openLightbox(currentLightboxIndex - 1));
    lightboxNext.addEventListener('click', () => openLightbox(currentLightboxIndex + 1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightbox.classList.contains('is-open')) closeLightbox();
        if (mobileMenu.classList.contains('is-open')) toggleMobileMenu(true);
      } else if (lightbox.classList.contains('is-open')) {
        if (e.key === 'ArrowLeft') openLightbox(currentLightboxIndex - 1);
        if (e.key === 'ArrowRight') openLightbox(currentLightboxIndex + 1);
      }
    });

    /**
     * ==========================================================================
     * GSAP HERO ANIMATIONS, SUBTLE PARALLAX & AOS SCROLL REVEALS
     * ==========================================================================
     */
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    window.addEventListener('DOMContentLoaded', () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion && window.AOS) {
        AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: true,
          offset: 60
        });
      }

      if (!prefersReducedMotion && window.gsap) {
        gsap.from('.hero-anim', {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out'
        });

        // Subtle Hero Background Parallax
        const heroBg = document.getElementById('heroBg');
        if (heroBg) {
          window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight * 1.2) {
              heroBg.style.transform = `translate3d(0, ${scrolled * 0.22}px, 0)`;
            }
          }, { passive: true });
        }
      }
    });
