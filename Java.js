
js_content = '''/* ========================================
   LANDORA PROPERTIES - JavaScript
   ======================================== */

// Property Data
const properties = [
    {
        id: 1,
        title: "Luxury Beachfront Villa",
        location: "Galle",
        type: "villa",
        purpose: "sale",
        price: 45000000,
        bedrooms: 5,
        bathrooms: 4,
        landSize: 25,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
        featured: true,
        description: "Stunning beachfront villa with panoramic ocean views, private pool, and modern architecture. Perfect for luxury living or vacation rental.",
        seller: { name: "Sunil Perera", phone: "+94 77 234 5678", email: "sunil@example.com" }
    },
    {
        id: 2,
        title: "Modern Apartment in Colombo 7",
        location: "colombo",
        type: "apartment",
        purpose: "sale",
        price: 28000000,
        bedrooms: 3,
        bathrooms: 2,
        landSize: 0,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
        featured: true,
        description: "Premium apartment in the heart of Colombo 7 with city views, gym access, and 24/7 security.",
        seller: { name: "Nimal Silva", phone: "+94 77 345 6789", email: "nimal@example.com" }
    },
    {
        id: 3,
        title: "Colonial House in Kandy",
        location: "kandy",
        type: "house",
        purpose: "sale",
        price: 18500000,
        bedrooms: 4,
        bathrooms: 3,
        landSize: 15,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
        featured: true,
        description: "Beautiful colonial-style house with a large garden, mountain views, and traditional Sri Lankan architecture.",
        seller: { name: "Priya Fernando", phone: "+94 77 456 7890", email: "priya@example.com" }
    },
    {
        id: 4,
        title: "Commercial Building in Negombo",
        location: "negombo",
        type: "commercial",
        purpose: "sale",
        price: 65000000,
        bedrooms: 0,
        bathrooms: 4,
        landSize: 30,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        featured: true,
        description: "Prime commercial building near Negombo beach with retail space and office units. High rental yield potential.",
        seller: { name: "Ranjith Perera", phone: "+94 77 567 8901", email: "ranjith@example.com" }
    },
    {
        id: 5,
        title: "Land for Sale - Nuwara Eliya",
        location: "nuwara-eliya",
        type: "land",
        purpose: "sale",
        price: 8500000,
        bedrooms: 0,
        bathrooms: 0,
        landSize: 50,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
        featured: true,
        description: "Beautiful tea estate land with stunning hill country views. Perfect for building a holiday home or boutique hotel.",
        seller: { name: "Kamal Jayawardena", phone: "+94 77 678 9012", email: "kamal@example.com" }
    },
    {
        id: 6,
        title: "Cozy House for Rent - Jaffna",
        location: "jaffna",
        type: "house",
        purpose: "rent",
        price: 75000,
        bedrooms: 3,
        bathrooms: 2,
        landSize: 8,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
        featured: true,
        description: "Well-maintained family house in a quiet neighborhood of Jaffna. Close to schools and markets.",
        seller: { name: "Sivakumar", phone: "+94 77 789 0123", email: "siva@example.com" }
    },
    {
        id: 7,
        title: "Luxury Apartment - Colombo 3",
        location: "colombo",
        type: "apartment",
        purpose: "rent",
        price: 120000,
        bedrooms: 2,
        bathrooms: 2,
        landSize: 0,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
        featured: false,
        description: "Fully furnished luxury apartment with sea views, modern kitchen, and premium fittings.",
        seller: { name: "Dilani Perera", phone: "+94 77 890 1234", email: "dilani@example.com" }
    },
    {
        id: 8,
        title: "Beach Land - Matara",
        location: "matara",
        type: "land",
        purpose: "sale",
        price: 12000000,
        bedrooms: 0,
        bathrooms: 0,
        landSize: 20,
        image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=600&h=400&fit=crop",
        featured: false,
        description: "Prime beachfront land in Matara with clear title. Ideal for resort development or private villa.",
        seller: { name: "Chaminda Rajapaksa", phone: "+94 77 901 2345", email: "chaminda@example.com" }
    },
    {
        id: 9,
        title: "Office Space - Colombo Fort",
        location: "colombo",
        type: "commercial",
        purpose: "rent",
        price: 250000,
        bedrooms: 0,
        bathrooms: 2,
        landSize: 0,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        featured: false,
        description: "Premium office space in Colombo Fort with parking, AC, and high-speed internet connectivity.",
        seller: { name: "Ashan De Silva", phone: "+94 77 012 3456", email: "ashan@example.com" }
    },
    {
        id: 10,
        title: "Family Home - Anuradhapura",
        location: "anuradhapura",
        type: "house",
        purpose: "sale",
        price: 9500000,
        bedrooms: 3,
        bathrooms: 2,
        landSize: 12,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        featured: false,
        description: "Spacious family home near historical sites with a large garden and traditional design elements.",
        seller: { name: "Bandara Wickramasinghe", phone: "+94 77 123 4567", email: "bandara@example.com" }
    },
    {
        id: 11,
        title: "Penthouse - Colombo 5",
        location: "colombo",
        type: "apartment",
        purpose: "sale",
        price: 55000000,
        bedrooms: 4,
        bathrooms: 3,
        landSize: 0,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
        featured: false,
        description: "Exclusive penthouse with rooftop terrace, private elevator, and breathtaking city views.",
        seller: { name: "Tharindu Fernando", phone: "+94 77 234 5678", email: "tharindu@example.com" }
    },
    {
        id: 12,
        title: "Rental Villa - Galle",
        location: "galle",
        type: "villa",
        purpose: "rent",
        price: 200000,
        bedrooms: 4,
        bathrooms: 3,
        landSize: 18,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
        featured: false,
        description: "Elegant villa near Galle Fort with a private pool, garden, and traditional Sri Lankan hospitality.",
        seller: { name: "Malini Gunawardena", phone: "+94 77 345 6789", email: "malini@example.com" }
    }
];

// Favorites State
let favorites = JSON.parse(localStorage.getItem('landora_favorites')) || [];

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const featuredGrid = document.getElementById('featuredGrid');
const listingsGrid = document.getElementById('listingsGrid');
const favCount = document.getElementById('favCount');
const btnFavorite = document.getElementById('btnFavorite');
const favoritesDrawer = document.getElementById('favoritesDrawer');
const drawerClose = document.getElementById('drawerClose');
const drawerOverlay = document.getElementById('drawerOverlay');
const favoritesBody = document.getElementById('favoritesBody');
const propertyModal = document.getElementById('propertyModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const loginModal = document.getElementById('loginModal');
const btnLogin = document.getElementById('btnLogin');
const loginModalClose = document.getElementById('loginModalClose');
const postPropertyModal = document.getElementById('postPropertyModal');
const postPropertyBtn = document.getElementById('postPropertyBtn');
const postModalClose = document.getElementById('postModalClose');
const scrollTop = document.getElementById('scrollTop');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Initialize
function init() {
    renderFeaturedProperties();
    renderListings(properties);
    updateFavoritesCount();
    setupEventListeners();
    setupScrollEffects();
    setupCounters();
    setupTestimonials();
}

// Format Price
function formatPrice(price, purpose) {
    if (purpose === 'rent') {
        return 'LKR ' + price.toLocaleString() + '/mo';
    }
    if (price >= 1000000) {
        return 'LKR ' + (price / 1000000).toFixed(1) + 'M';
    }
    return 'LKR ' + price.toLocaleString();
}

// Format Full Price
function formatFullPrice(price, purpose) {
    if (purpose === 'rent') {
        return 'LKR ' + price.toLocaleString() + ' per month';
    }
    return 'LKR ' + price.toLocaleString();
}

// Create Property Card HTML
function createPropertyCard(property, isFeatured = false) {
    const isFav = favorites.includes(property.id);
    const priceFormatted = formatPrice(property.price, property.purpose);
    const purposeLabel = property.purpose === 'sale' ? 'For Sale' : 'For Rent';
    const purposeClass = property.purpose === 'rent' ? 'rent' : '';
    
    let featuresHtml = '';
    if (property.bedrooms > 0) {
        featuresHtml += `<span class="property-feature"><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>`;
    }
    if (property.bathrooms > 0) {
        featuresHtml += `<span class="property-feature"><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>`;
    }
    if (property.landSize > 0) {
        featuresHtml += `<span class="property-feature"><i class="fas fa-ruler-combined"></i> ${property.landSize} P</span>`;
    }
    
    return `
        <div class="property-card" data-id="${property.id}">
            <div class="property-img">
                <img src="${property.image}" alt="${property.title}" loading="lazy">
                <span class="property-badge ${purposeClass}">${purposeLabel}</span>
                <button class="property-fav ${isFav ? 'active' : ''}" data-id="${property.id}" title="${isFav ? 'Remove from' : 'Add to'} favorites">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <span class="property-type">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location.charAt(0).toUpperCase() + property.location.slice(1)}, Sri Lanka</span>
                </div>
                <div class="property-price">${priceFormatted}</div>
                <div class="property-features">
                    ${featuresHtml}
                </div>
                <div class="property-actions">
                    <button class="btn btn-primary view-details" data-id="${property.id}"><i class="fas fa-eye"></i> View Details</button>
                    <a href="https://wa.me/94771234567?text=I'm interested in: ${encodeURIComponent(property.title)}" target="_blank" class="btn btn-gold"><i class="fab fa-whatsapp"></i> Contact</a>
                </div>
            </div>
        </div>
    `;
}

// Render Featured Properties
function renderFeaturedProperties() {
    const featured = properties.filter(p => p.featured);
    featuredGrid.innerHTML = featured.map(p => createPropertyCard(p, true)).join('');
}

// Render Listings
function renderListings(props) {
    if (props.length === 0) {
        listingsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gold); margin-bottom: 20px;"></i>
                <h3 style="font-family: var(--font-heading); color: var(--primary-green); margin-bottom: 10px;">No Properties Found</h3>
                <p style="color: var(--medium-gray);">Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    listingsGrid.innerHTML = props.map(p => createPropertyCard(p)).join('');
}

// Filter Properties
function filterProperties() {
    const location = document.getElementById('filterLocation').value;
    const category = document.getElementById('filterCategory').value;
    const minPrice = document.getElementById('filterMinPrice').value;
    const maxPrice = document.getElementById('filterMaxPrice').value;
    const bedrooms = document.getElementById('filterBedrooms').value;
    const sortBy = document.getElementById('sortBy').value;
    
    let filtered = [...properties];
    
    if (location) {
        filtered = filtered.filter(p => p.location === location);
    }
    if (category) {
        filtered = filtered.filter(p => p.type === category);
    }
    if (minPrice) {
        filtered = filtered.filter(p => p.price >= parseInt(minPrice));
    }
    if (maxPrice) {
        filtered = filtered.filter(p => p.price <= parseInt(maxPrice));
    }
    if (bedrooms) {
        filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms));
    }
    
    // Sort
    switch(sortBy) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            break;
        default:
            filtered.sort((a, b) => b.id - a.id);
    }
    
    renderListings(filtered);
}

// Search Properties (Hero Search)
function searchProperties(e) {
    e.preventDefault();
    const location = document.getElementById('searchLocation').value;
    const type = document.getElementById('searchType').value;
    const purpose = document.getElementById('searchPurpose').value;
    const priceRange = document.getElementById('searchPrice').value;
    
    // Scroll to listings
    document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
    
    // Apply filters
    document.getElementById('filterLocation').value = location;
    document.getElementById('filterCategory').value = type;
    
    if (priceRange) {
        const [min, max] = priceRange.split('-');
        if (min) document.getElementById('filterMinPrice').value = min;
        if (max && max !== '999999999') document.getElementById('filterMaxPrice').value = max;
    }
    
    filterProperties();
    showToast('Search results updated!');
}

// Toggle Favorite
function toggleFavorite(propertyId) {
    const index = favorites.indexOf(propertyId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removed from favorites');
    } else {
        favorites.push(propertyId);
        showToast('Added to favorites');
    }
    localStorage.setItem('landora_favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderFavorites();
    
    // Update button state
    document.querySelectorAll(`.property-fav[data-id="${propertyId}"]`).forEach(btn => {
        btn.classList.toggle('active');
    });
}

// Update Favorites Count
function updateFavoritesCount() {
    favCount.textContent = favorites.length;
    if (favorites.length > 0) {
        favCount.style.display = 'flex';
    } else {
        favCount.style.display = 'none';
    }
}

// Render Favorites Drawer
function renderFavorites() {
    if (favorites.length === 0) {
        favoritesBody.innerHTML = '<p class="drawer-empty">No favorites yet. Start browsing properties!</p>';
        return;
    }
    
    const favProperties = properties.filter(p => favorites.includes(p.id));
    favoritesBody.innerHTML = favProperties.map(p => `
        <div class="drawer-item">
            <img src="${p.image}" alt="${p.title}">
            <div class="drawer-item-info">
                <h4>${p.title}</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${p.location.charAt(0).toUpperCase() + p.location.slice(1)}</p>
                <span class="price">${formatPrice(p.price, p.purpose)}</span>
            </div>
            <button class="drawer-item-remove" data-id="${p.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join('');
    
    // Add remove listeners
    favoritesBody.querySelectorAll('.drawer-item-remove').forEach(btn => {
        btn.addEventListener('click', () => toggleFavorite(parseInt(btn.dataset.id)));
    });
}

// Show Property Details
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const priceFormatted = formatFullPrice(property.price, property.purpose);
    const purposeLabel = property.purpose === 'sale' ? 'For Sale' : 'For Rent';
    
    let featuresHtml = '';
    if (property.bedrooms > 0) {
        featuresHtml += `<div class="detail-feature"><i class="fas fa-bed"></i> ${property.bedrooms} Bedrooms</div>`;
    }
    if (property.bathrooms > 0) {
        featuresHtml += `<div class="detail-feature"><i class="fas fa-bath"></i> ${property.bathrooms} Bathrooms</div>`;
    }
    if (property.landSize > 0) {
        featuresHtml += `<div class="detail-feature"><i class="fas fa-ruler-combined"></i> ${property.landSize} Perches</div>`;
    }
    featuresHtml += `<div class="detail-feature"><i class="fas fa-home"></i> ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</div>`;
    featuresHtml += `<div class="detail-feature"><i class="fas fa-tag"></i> ${purposeLabel}</div>`;
    
    modalBody.innerHTML = `
        <div class="property-detail">
            <div class="property-detail-gallery">
                <img src="${property.image}" alt="${property.title}">
            </div>
            <div class="property-detail-info">
                <span class="property-type">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                <h2>${property.title}</h2>
                <div class="property-detail-price">${priceFormatted}</div>
                <div class="property-detail-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location.charAt(0).toUpperCase() + property.location.slice(1)}, Sri Lanka</span>
                </div>
                <p class="property-detail-desc">${property.description}</p>
                <div class="detail-features">
                    ${featuresHtml}
                </div>
                <div class="detail-seller">
                    <h4><i class="fas fa-user"></i> Seller Information</h4>
                    <p><strong>Name:</strong> ${property.seller.name}</p>
                    <p><strong>Phone:</strong> ${property.seller.phone}</p>
                    <p><strong>Email:</strong> ${property.seller.email}</p>
                </div>
                <div class="detail-actions">
                    <a href="https://wa.me/${property.seller.phone.replace(/\\D/g, '')}?text=I'm interested in: ${encodeURIComponent(property.title)}" target="_blank" class="btn btn-gold"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <button class="btn btn-primary contact-seller" data-id="${property.id}"><i class="fas fa-envelope"></i> Contact Seller</button>
                </div>
            </div>
        </div>
    `;
    
    propertyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Show Toast
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Hamburger Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Favorites Drawer
    btnFavorite.addEventListener('click', () => {
        favoritesDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        renderFavorites();
    });
    
    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    
    function closeDrawer() {
        favoritesDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
    }
    
    // Property Card Actions (Event Delegation)
    document.addEventListener('click', (e) => {
        const favBtn = e.target.closest('.property-fav');
        if (favBtn) {
            e.preventDefault();
            toggleFavorite(parseInt(favBtn.dataset.id));
        }
        
        const viewBtn = e.target.closest('.view-details');
        if (viewBtn) {
            e.preventDefault();
            showPropertyDetails(parseInt(viewBtn.dataset.id));
        }
    });
    
    // Modal Close
    modalClose.addEventListener('click', closePropertyModal);
    propertyModal.addEventListener('click', (e) => {
        if (e.target === propertyModal) closePropertyModal();
    });
    
    function closePropertyModal() {
        propertyModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Login Modal
    btnLogin.addEventListener('click', () => {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    loginModalClose.addEventListener('click', closeLoginModal);
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) closeLoginModal();
    });
    
    function closeLoginModal() {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Auth Tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.dataset.tab;
            document.getElementById('loginContent').classList.toggle('hidden', tabName !== 'login');
            document.getElementById('registerContent').classList.toggle('hidden', tabName !== 'register');
        });
    });
    
    // Switch Tab Links
    document.querySelectorAll('.switch-tab').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = link.dataset.tab;
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelector(`.auth-tab[data-tab="${tabName}"]`).classList.add('active');
            document.getElementById('loginContent').classList.toggle('hidden', tabName !== 'login');
            document.getElementById('registerContent').classList.toggle('hidden', tabName !== 'register');
        });
    });
    
    // Post Property Modal
    postPropertyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        postPropertyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    postModalClose.addEventListener('click', closePostModal);
    postPropertyModal.addEventListener('click', (e) => {
        if (e.target === postPropertyModal) closePostModal();
    });
    
    function closePostModal() {
        postPropertyModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Search Form
    document.getElementById('searchForm').addEventListener('submit', searchProperties);
    
    // Filter Changes
    ['filterLocation', 'filterCategory', 'filterMinPrice', 'filterMaxPrice', 'filterBedrooms', 'sortBy'].forEach(id => {
        document.getElementById(id).addEventListener('change', filterProperties);
    });
    
    // Category Cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.getElementById('filterCategory').value = category === 'rental' ? '' : category;
            document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
            filterProperties();
        });
    });
    
    // Scroll to Top
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Contact Form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully! We will contact you soon.');
        e.target.reset();
    });
    
    // Login Form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Login successful! Welcome back.');
        closeLoginModal();
        btnLogin.textContent = 'My Account';
    });
    
    // Register Form
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Account created successfully! Please login.');
        document.querySelector('.auth-tab[data-tab="login"]').click();
    });
    
    // Post Property Form
    document.getElementById('postForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Property listing submitted for review!');
        closePostModal();
        e.target.reset();
    });
    
    // File Upload
    const fileUpload = document.getElementById('fileUpload');
    const fileInput = document.getElementById('propertyImages');
    
    fileUpload.addEventListener('click', () => fileInput.click());
    fileUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = 'var(--gold)';
    });
    fileUpload.addEventListener('dragleave', () => {
        fileUpload.style.borderColor = 'var(--light-gray)';
    });
    fileUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = 'var(--light-gray)';
        showToast('Images uploaded successfully!');
    });
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            showToast(`${fileInput.files.length} image(s) selected`);
        }
    });
    
    // Keyboard Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePropertyModal();
            closeLoginModal();
            closePostModal();
            closeDrawer();
        }
    });
    
    // Load More
    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        showToast('Loading more properties...');
        setTimeout(() => {
            showToast('All properties loaded!');
        }, 1000);
    });
}

// Scroll Effects
function setupScrollEffects() {
    // Navbar scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to top button
        if (window.scrollY > 500) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
        
        // Active nav link
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.property-card, .category-card, .feature-card, .testimonial-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Animated Counters
function setupCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const increment = target / speed;
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Testimonials Auto-Slide (for mobile)
function setupTestimonials() {
    // Simple fade effect could be added here for a slider
    // For now, the grid layout works well on all screens
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
'''

with open('/mnt/agents/output/script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("script.js created successfully!")
print(f"File size: {len(js_content)} characters")
print("\nAll three files created:")
print("- index.html (40,189 chars)")
print("- style.css (43,514 chars)")
print("- script.js (15,000+ chars)")
