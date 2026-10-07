// LOCATIONS DIRECTORY (OFFICIAL DATA FROM PRIME BURGER NETWORK)
// Accurate GPS coordinates & delivery availability for each location
const LOCATIONS = {
  bistrita: { 
    city: 'Bistrița', 
    subdomain: 'bistrita.primeburger.ro', 
    phone: '0742454444', 
    formattedPhone: '+40 742 454 444',
    hours: 'Marți: 09:30-23:30, Miercuri-Duminică: 09:30-00:00',
    service: 'Dine-in · La pachet · Livrare locală (max 10 km)',
    lat: 47.1325,
    lng: 24.5001,
    hasDelivery: true
  },
  baiamare: { 
    city: 'Baia Mare', 
    subdomain: 'baiamare.primeburger.ro', 
    phone: '0754836169', 
    formattedPhone: '+40 754 836 169',
    hours: 'Marți - Duminică: 09:00 - 21:00',
    service: 'Dine-in · La pachet · Livrare locală (max 10 km)',
    lat: 47.6597,
    lng: 23.5795,
    hasDelivery: true
  },
  botosani: { 
    city: 'Botoșani', 
    subdomain: 'botosani.primeburger.ro', 
    phone: '0743390390', 
    formattedPhone: '+40 743 390 390',
    hours: 'Marți - Sâmbătă: 11:00 - 23:00, Duminică: 12:00 - 23:00',
    service: 'Dine-in · La pachet · Livrare locală (max 10 km)',
    lat: 47.7460,
    lng: 26.6695,
    hasDelivery: true
  },
  radauti: { 
    city: 'Rădăuți', 
    subdomain: 'radauti.primeburger.ro', 
    phone: '0753598638', 
    formattedPhone: '+40 753 598 638',
    hours: 'Marți - Sâmbătă: 09:00 - 21:30, Duminică: 13:00 - 21:30',
    service: 'Dine-in · La pachet · Livrare locală (max 10 km)',
    lat: 47.8427,
    lng: 25.9189,
    hasDelivery: true
  },
  siret: { 
    city: 'Siret', 
    subdomain: 'siret.primeburger.ro', 
    phone: '0772282187', 
    formattedPhone: '+40 772 282 187',
    hours: 'Marți - Sâmbătă: 09:30 - 21:30, Duminică: 12:00 - 21:30',
    service: 'Dine-in · La pachet (Ridicare din restaurant)',
    lat: 47.9525,
    lng: 26.0689,
    hasDelivery: false
  },
  gurahumorului: { 
    city: 'Gura Humorului', 
    subdomain: 'gurahumorului.primeburger.ro', 
    phone: '0736150150', 
    formattedPhone: '+40 736 150 150',
    hours: 'Marți - Sâmbătă: 10:00 - 21:00, Duminică: 12:00 - 21:00',
    service: 'Dine-in · La pachet · Livrare locală (max 10 km)',
    lat: 47.5544,
    lng: 25.8978,
    hasDelivery: true
  },
  dumbraveni: { 
    city: 'Dumbrăveni', 
    subdomain: 'dumbraveni.primeburger.ro', 
    phone: '0759888588', 
    formattedPhone: '+40 759 888 588',
    hours: 'Marți - Sâmbătă: 10:00 - 21:00, Duminică: 12:30 - 21:30',
    service: 'Dine-in · La pachet · Hub Central Logistic',
    lat: 47.6567,
    lng: 26.4256,
    hasDelivery: false
  },
  bosanci: { 
    city: 'Bosanci', 
    subdomain: 'bosanci.primeburger.ro', 
    phone: '0740333314', 
    formattedPhone: '+40 740 333 314',
    hours: 'Marți - Sâmbătă: 10:00 - 22:00, Duminică: 12:00 - 22:00',
    service: 'Dine-in · La pachet (Ridicare din restaurant)',
    lat: 47.5858,
    lng: 26.3142,
    hasDelivery: false
  },
  bivolarie: { 
    city: 'Bivolărie', 
    subdomain: 'bivolarie.primeburger.ro', 
    phone: '0746677706', 
    formattedPhone: '+40 746 677 706',
    hours: 'Marți - Sâmbătă: 10:00 - 22:00, Duminică: 11:30 - 22:00',
    service: 'Dine-in · La pachet (Ridicare din restaurant)',
    lat: 47.9250,
    lng: 25.6883,
    hasDelivery: false
  },
  negrestioas: { 
    city: 'Negrești Oaș', 
    subdomain: 'negrestioas.primeburger.ro', 
    phone: '0772219949', 
    formattedPhone: '+40 772 219 949',
    hours: 'Marți - Sâmbătă: 09:30 - 21:30, Duminică: 12:00 - 21:30',
    service: 'Dine-in · La pachet (Ridicare din restaurant)',
    lat: 47.8689,
    lng: 23.4244,
    hasDelivery: false
  },
  trusesti: { 
    city: 'Trușești', 
    subdomain: 'trusesti.primeburger.ro', 
    phone: '0751555512', 
    formattedPhone: '+40 751 555 512',
    hours: 'Marți - Duminică: 09:00 - 21:00',
    service: 'Dine-in · La pachet (Ridicare din restaurant)',
    lat: 47.7711,
    lng: 27.0089,
    hasDelivery: false
  },
  roznov: { 
    city: 'Roznov', 
    subdomain: 'roznov.primeburger.ro', 
    phone: '0749025555', 
    formattedPhone: '+40 749 025 555',
    hours: 'Luni - Duminică: 11:00 - 22:00',
    service: 'Dine-in · La pachet · Livrare locală (max 10 km)',
    lat: 46.8406,
    lng: 26.5133,
    hasDelivery: true
  }
};

let selectedLocationKey = 'bistrita';
let userLocation = null; // { lat, lng, key, distanceKm, isWithin10km }

// ==========================================
// 1. HAVERSINE DISTANCE & SMART GEO-TRACKING (10 KM LIMIT)
// ==========================================
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10; // Round to 1 decimal place (e.g. 3.4 km)
}

function findClosestLocation(userLat, userLng) {
  let closestKey = 'bistrita';
  let minDistance = Infinity;

  Object.entries(LOCATIONS).forEach(([key, loc]) => {
    const dist = calculateDistanceKm(userLat, userLng, loc.lat, loc.lng);
    if (dist < minDistance) {
      minDistance = dist;
      closestKey = key;
    }
  });

  return {
    key: closestKey,
    location: LOCATIONS[closestKey],
    distanceKm: minDistance,
    isWithin10km: minDistance <= 10.0
  };
}

function detectUserLocation(callback, showToastNotification = true) {
  const btnGps = document.getElementById('btnDetectGpsMenu');
  if (btnGps) {
    btnGps.classList.add('loading');
    btnGps.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Se detectează prin GPS...</span>';
  }

  if (!navigator.geolocation) {
    if (btnGps) {
      btnGps.classList.remove('loading');
      btnGps.innerHTML = '<i class="fas fa-crosshairs"></i> <span>Găsește Cel Mai Apropiat Restaurant (GPS)</span>';
    }
    if (showToastNotification) {
      showToast('Geolocația nu este suportată de browserul tău. Selectează orașul manual.');
    }
    updateGeoUI({ status: 'unsupported' });
    if (callback) callback(null);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const result = findClosestLocation(latitude, longitude);

      userLocation = {
        lat: latitude,
        lng: longitude,
        key: result.key,
        distanceKm: result.distanceKm,
        isWithin10km: result.isWithin10km
      };

      if (btnGps) {
        btnGps.classList.remove('loading');
        btnGps.innerHTML = '<i class="fas fa-check-circle" style="color:#34d399;"></i> <span>Locație GPS Identificată</span>';
      }

      // Auto-select closest restaurant across the entire app
      updateSubdomainView(result.key);
      updateGeoUI({ status: 'success', ...result });

      if (showToastNotification) {
        if (result.isWithin10km) {
          if (result.location.hasDelivery) {
            showToast(`📍 Ești la ${result.distanceKm} km de Prime Burger ${result.location.city}! Livrare și Ridicare disponibile în raza de 10 km.`);
          } else {
            showToast(`📍 Ești la ${result.distanceKm} km de Prime Burger ${result.location.city}! (Această locație asigură doar Ridicare / La pachet).`);
          }
        } else {
          showToast(`📍 Cel mai apropiat restaurant: Prime Burger ${result.location.city} la ${result.distanceKm} km (în afara razei de 10 km pentru livrare directă - poți comanda cu Ridicare).`);
        }
      }

      if (callback) callback(userLocation);
    },
    (err) => {
      console.warn('Geolocation error:', err.message);
      if (btnGps) {
        btnGps.classList.remove('loading');
        btnGps.innerHTML = '<i class="fas fa-crosshairs"></i> <span>Găsește Cel Mai Apropiat Restaurant (GPS)</span>';
      }
      updateGeoUI({ status: 'denied' });
      if (showToastNotification) {
        showToast('Localizarea GPS a fost refuzată sau este indisponibilă. Poți alege orașul manual din listă.');
      }
      if (callback) callback(null);
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 180000 }
  );
}

function updateGeoUI(geoInfo) {
  const distTag = document.getElementById('menuDistanceTag');
  const geoNotice = document.getElementById('menuGeoNotice');
  const cartGeoBadge = document.getElementById('cartGeoDistBadge');

  if (geoInfo.status === 'success') {
    const loc = LOCATIONS[geoInfo.key];
    const isWithin = geoInfo.isWithin10km;

    if (distTag) {
      distTag.style.display = 'inline-flex';
      distTag.className = `geo-distance-tag ${isWithin ? 'in-radius' : 'out-radius'}`;
      distTag.innerHTML = isWithin 
        ? `<i class="fas fa-check-circle"></i> Ești la <strong>${geoInfo.distanceKm} km</strong> (În raza de livrare 10 km)`
        : `<i class="fas fa-exclamation-triangle"></i> Ești la <strong>${geoInfo.distanceKm} km</strong> (Peste limita de 10 km)`;
    }

    if (geoNotice) {
      if (!isWithin) {
        geoNotice.style.display = 'block';
        geoNotice.innerHTML = `<i class="fas fa-info-circle"></i> Ești la <strong>${geoInfo.distanceKm} km</strong> de locația din ${loc.city}. Livrarea la domiciliu este limitată la <strong>10 km</strong>, dar poți comanda cu <strong>Ridicare din restaurant (Takeaway)</strong> sau alege alt oraș.`;
      } else if (!loc.hasDelivery) {
        geoNotice.style.display = 'block';
        geoNotice.innerHTML = `<i class="fas fa-info-circle"></i> Ești în raza de acoperire (<strong>${geoInfo.distanceKm} km</strong>), însă locația din ${loc.city} funcționează exclusiv în regim <strong>Dine-in & Ridicare / La pachet</strong>.`;
      } else {
        geoNotice.style.display = 'none';
      }
    }

    if (cartGeoBadge) {
      cartGeoBadge.className = `cart-geo-badge ${isWithin ? 'badge-ok' : 'badge-warn'}`;
      cartGeoBadge.innerHTML = isWithin 
        ? `<i class="fas fa-satellite"></i> GPS: ~${geoInfo.distanceKm} km (OK Livrare)`
        : `<i class="fas fa-satellite"></i> GPS: ~${geoInfo.distanceKm} km (>10 km: Doar Ridicare)`;
    }
  } else if (geoInfo.status === 'denied' || geoInfo.status === 'unsupported') {
    if (distTag) {
      distTag.style.display = 'inline-flex';
      distTag.className = 'geo-distance-tag manual-mode';
      distTag.innerHTML = '<i class="fas fa-map-pin"></i> Selectare manuală oraș';
    }
    if (cartGeoBadge) {
      cartGeoBadge.className = 'cart-geo-badge';
      cartGeoBadge.textContent = 'Selectat manual';
    }
  }

  updateFulfillmentOptions();
}

function updateFulfillmentOptions() {
  const loc = LOCATIONS[selectedLocationKey];
  const select = document.getElementById('cartOrderTypeSelect');
  const deliveryNotice = document.getElementById('cartDeliveryNotice');
  const addressWrap = document.getElementById('cartAddressFieldWrap');

  if (!loc || !select) return;

  const optDelivery = select.querySelector('option[value="Livrare la domiciliu"]');
  const optPickup = select.querySelector('option[value="Ridicare din restaurant"]');

  let deliveryAllowed = true;
  let reason = '';

  if (!loc.hasDelivery) {
    deliveryAllowed = false;
    reason = 'Restaurantul din această locație asigură doar Ridicare / La pachet (fără livrare la domiciliu).';
  } else if (userLocation && userLocation.key === selectedLocationKey && !userLocation.isWithin10km) {
    deliveryAllowed = false;
    reason = `Distanța ta (${userLocation.distanceKm} km) depășește limita operațională de 10 km. Disponibil doar cu Ridicare personală.`;
  }

  if (optDelivery) {
    if (!deliveryAllowed) {
      optDelivery.disabled = true;
      optDelivery.textContent = '🛵 Livrare la domiciliu (Indisponibilă)';
      select.value = 'Ridicare din restaurant';
    } else {
      optDelivery.disabled = false;
      optDelivery.textContent = '🛵 Livrare la domiciliu (În raza de 10 km)';
    }
  }

  if (deliveryNotice) {
    if (!deliveryAllowed) {
      deliveryNotice.textContent = reason;
      deliveryNotice.style.color = '#FFC222';
    } else {
      deliveryNotice.textContent = 'Livrarea directă se efectuează în maximum 10 km de la restaurant.';
      deliveryNotice.style.color = 'var(--text-dim)';
    }
  }

  // Toggle delivery address visibility
  if (addressWrap) {
    addressWrap.style.display = select.value === 'Livrare la domiciliu' ? 'block' : 'none';
  }
}

// Global Order CTA Click: detect GPS and smooth scroll to menu
function handleOrderCtaClick(e) {
  if (e) e.preventDefault();
  const menuElem = document.getElementById('meniu');
  if (menuElem) {
    menuElem.scrollIntoView({ behavior: 'smooth' });
  }
  if (!userLocation) {
    detectUserLocation(null, true);
  }
}

// ==========================================
// 2. SUBDOMAIN & LOCATION SELECTORS SYNC
// ==========================================
const subdomainSelect = document.getElementById('subdomainSelect');
const menuLocationSelect = document.getElementById('menuLocationSelect');
const cartLocationSelect = document.getElementById('cartLocationSelect');
const geoModalSelect = document.getElementById('geoModalSelect');
const browserUrlPreview = document.getElementById('browserUrlPreview');
const browserCityPreview = document.getElementById('browserCityPreview');
const browserPhonePreview = document.getElementById('browserPhonePreview');
const browserSchedulePreview = document.getElementById('browserSchedulePreview');
const menuServiceBadge = document.getElementById('menuServiceBadge');

function updateSubdomainView(key) {
  if (!LOCATIONS[key]) return;
  selectedLocationKey = key;
  const loc = LOCATIONS[key];

  // Sync all dropdowns
  if (subdomainSelect && subdomainSelect.value !== key) subdomainSelect.value = key;
  if (menuLocationSelect && menuLocationSelect.value !== key) menuLocationSelect.value = key;
  if (cartLocationSelect && cartLocationSelect.value !== key) cartLocationSelect.value = key;
  if (geoModalSelect && geoModalSelect.value !== key) geoModalSelect.value = key;

  // Sync previews
  if (browserUrlPreview) browserUrlPreview.textContent = `https://${loc.subdomain}`;
  if (browserCityPreview) browserCityPreview.textContent = `Prime Burger ${loc.city}`;
  if (browserPhonePreview) browserPhonePreview.innerHTML = `<i class="fab fa-whatsapp"></i> ${loc.formattedPhone}`;
  if (browserSchedulePreview) browserSchedulePreview.innerHTML = `<i class="far fa-clock"></i> ${loc.hours} · <span style="color:#00A149;">Deschis</span>`;

  // Sync menu service badge
  if (menuServiceBadge) {
    if (loc.hasDelivery) {
      menuServiceBadge.className = 'geo-service-badge badge-delivery';
      menuServiceBadge.innerHTML = '<i class="fas fa-motorcycle"></i> Livrare max 10 km & Ridicare';
    } else {
      menuServiceBadge.className = 'geo-service-badge badge-pickup';
      menuServiceBadge.innerHTML = '<i class="fas fa-shopping-bag"></i> Exclusiv Ridicare (Takeaway)';
    }
  }

  // Update floating cart snippet
  const snippet = document.getElementById('cartLocationSnippet');
  if (snippet) {
    let distStr = (userLocation && userLocation.key === key) ? ` (${userLocation.distanceKm} km)` : '';
    snippet.textContent = `Prime Burger ${loc.city}${distStr}`;
  }

  // Update fulfillment options in modal
  updateFulfillmentOptions();
}

// Populate menu & cart dropdowns from LOCATIONS
function populateLocationDropdowns() {
  const optionsHtml = Object.entries(LOCATIONS).map(([key, loc]) => {
    return `<option value="${key}">${loc.city} - ${loc.subdomain}</option>`;
  }).join('');

  if (menuLocationSelect) {
    menuLocationSelect.innerHTML = optionsHtml;
    menuLocationSelect.value = selectedLocationKey;
    menuLocationSelect.addEventListener('change', (e) => {
      updateSubdomainView(e.target.value);
      updateGeoUI({ status: 'manual', key: e.target.value });
    });
  }

  if (cartLocationSelect) {
    cartLocationSelect.innerHTML = optionsHtml;
    cartLocationSelect.value = selectedLocationKey;
    cartLocationSelect.addEventListener('change', (e) => {
      updateSubdomainView(e.target.value);
      updateGeoUI({ status: 'manual', key: e.target.value });
    });
  }

  // Geo modal selector: Curat fara 'livrare 10km'
  if (geoModalSelect) {
    geoModalSelect.innerHTML = optionsHtml;
    geoModalSelect.value = selectedLocationKey;
    geoModalSelect.addEventListener('change', (e) => {
      updateSubdomainView(e.target.value);
      updateGeoUI({ status: 'manual', key: e.target.value });
    });
  }

  if (subdomainSelect) {
    subdomainSelect.addEventListener('change', (e) => {
      updateSubdomainView(e.target.value);
      updateGeoUI({ status: 'manual', key: e.target.value });
    });
  }
}

// ==========================================
// 3. ROMANIA SVG MAP INTERACTIVITY
// ==========================================
document.querySelectorAll('.radar-node').forEach(node => {
  node.addEventListener('click', () => {
    const city = node.dataset.city;
    const input = document.getElementById('applicantCity');
    if (input) {
      input.value = city;
      input.focus();
    }
    const franchiseSection = document.getElementById('franciza');
    if (franchiseSection) {
      franchiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==========================================
// 4. STEP-BY-STEP BURGER CONFIGURATOR (GONDOLA STYLE)
// ==========================================
let currentBurger = {
  name: 'Prime Burger Signature',
  basePrice: 39,
  pattyPrice: 0,
  pattyName: 'Standard Patty (120g)',
  sidePrice: 0,
  sideName: 'Fără Cartofi',
  sauces: [],
  drinks: [],
  notes: '',
  slug: 'prime-signature'
};

const orderModal = document.getElementById('orderModal');
const modalBurgerTitle = document.getElementById('modalBurgerTitle');

function getBurgerImage(burgerName) {
  const lower = (burgerName || '').toLowerCase();
  if (lower.includes('bacon') || lower.includes('american')) {
    return 'assets/images/american-burger.png';
  }
  if (lower.includes('cheese') || lower.includes('dublu')) {
    return 'assets/images/double-cheeseburger.png';
  }
  return 'assets/images/prime-burger.png';
}

function updateConfiguratorLivePrice() {
  const saucesTotal = currentBurger.sauces.reduce((sum, s) => sum + (s.price || 0), 0);
  const drinksTotal = currentBurger.drinks.reduce((sum, d) => sum + (d.price || 0), 0);
  const total = currentBurger.basePrice + currentBurger.pattyPrice + currentBurger.sidePrice + saucesTotal + drinksTotal;
  
  const livePriceEl = document.getElementById('configBurgerLivePrice');
  if (livePriceEl) {
    livePriceEl.textContent = `${total} LEI`;
  }
  return total;
}

function openOrderModal(burgerName, price, slug) {
  currentBurger.name = burgerName;
  currentBurger.basePrice = price || (burgerName.toLowerCase().includes('bacon') ? 43 : 39);
  currentBurger.pattyPrice = 0;
  currentBurger.pattyName = 'Standard Patty (120g)';
  currentBurger.sidePrice = 0;
  currentBurger.sideName = 'Fără Cartofi';
  currentBurger.sauces = [];
  currentBurger.drinks = [];
  currentBurger.notes = '';
  currentBurger.slug = slug || 'prime-burger';

  if (modalBurgerTitle) modalBurgerTitle.textContent = burgerName;

  const notesInput = document.getElementById('configBurgerNotes');
  if (notesInput) notesInput.value = '';

  // Reset selections in configurator
  document.querySelectorAll('#pattyOptions .option-card-radio').forEach((c, idx) => {
    c.classList.toggle('selected', idx === 0);
  });
  document.querySelectorAll('#sidesOptions .option-card-radio').forEach((c, idx) => {
    c.classList.toggle('selected', idx === 0);
  });
  document.querySelectorAll('.option-card-check').forEach(c => c.classList.remove('selected'));

  updateConfiguratorLivePrice();

  if (orderModal) {
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderModal() {
  if (orderModal) {
    orderModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Step 1: Radio Patty
document.querySelectorAll('#pattyOptions .option-card-radio').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('#pattyOptions .option-card-radio').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    currentBurger.pattyName = opt.dataset.name;
    currentBurger.pattyPrice = parseInt(opt.dataset.price) || 0;
    updateConfiguratorLivePrice();
  });
});

// Step 2: Radio Sides
document.querySelectorAll('#sidesOptions .option-card-radio').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('#sidesOptions .option-card-radio').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    currentBurger.sideName = opt.dataset.name;
    currentBurger.sidePrice = parseInt(opt.dataset.price) || 0;
    updateConfiguratorLivePrice();
  });
});

// Step 3: Sauces Checkboxes
document.querySelectorAll('#saucesOptions .option-card-check').forEach(opt => {
  opt.addEventListener('click', () => {
    opt.classList.toggle('selected');
    const name = opt.dataset.name;
    const price = parseInt(opt.dataset.price) || 0;

    if (opt.classList.contains('selected')) {
      currentBurger.sauces.push({ name, price });
    } else {
      currentBurger.sauces = currentBurger.sauces.filter(s => s.name !== name);
    }
    updateConfiguratorLivePrice();
  });
});

// Step 4: Drinks Checkboxes
document.querySelectorAll('#drinksOptions .option-card-check').forEach(opt => {
  opt.addEventListener('click', () => {
    opt.classList.toggle('selected');
    const name = opt.dataset.name;
    const price = parseInt(opt.dataset.price) || 0;

    if (opt.classList.contains('selected')) {
      currentBurger.drinks.push({ name, price });
    } else {
      currentBurger.drinks = currentBurger.drinks.filter(d => d.name !== name);
    }
    updateConfiguratorLivePrice();
  });
});

// ==========================================
// 5. MULTI-BURGER CART SYSTEM
// ==========================================
let cart = []; // Array of burger objects

function addCurrentBurgerToCart() {
  const notesInput = document.getElementById('configBurgerNotes');
  const customNotes = notesInput ? notesInput.value.trim() : '';
  const itemPrice = updateConfiguratorLivePrice();

  const item = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: currentBurger.name,
    image: getBurgerImage(currentBurger.name),
    patty: currentBurger.pattyName,
    side: currentBurger.sideName,
    sauces: [...currentBurger.sauces],
    drinks: [...currentBurger.drinks],
    notes: customNotes,
    unitPrice: itemPrice,
    totalPrice: itemPrice,
    quantity: 1
  };

  cart.push(item);
  renderCart();
  closeOrderModal();
  showToast(`🍔 ${item.name} (${itemPrice} LEI) a fost adăugat în comandă!`);
}

function removeCartItem(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
  if (cart.length === 0) {
    closeCartModal();
    showToast('Coșul de cumpărături este acum gol.');
  }
}

function updateCartItemQty(id, delta) {
  const item = cart.find(it => it.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeCartItem(id);
  } else {
    renderCart();
  }
}

// Anulare comanda si golire cos (din bara meniu jos sau popup)
function cancelEntireOrder() {
  if (cart.length === 0) {
    showToast('Coșul de cumpărături este deja gol.');
    return;
  }
  if (confirm('Sigur dorești să anulezi comanda curentă? Toate produsele selectate vor fi eliminate din coș.')) {
    cart = [];
    renderCart();
    closeCartModal();
    showToast('❌ Comanda a fost anulată cu succes, iar coșul a fost golit.');
  }
}

function updateCartDeliveryUI() {
  const orderTypeSelect = document.getElementById('cartOrderTypeSelect');
  const addressWrap = document.getElementById('cartAddressFieldWrap');
  const deliveryBadge = document.getElementById('cartFooterDeliveryBadge');
  const isDelivery = orderTypeSelect && orderTypeSelect.value === 'Livrare la domiciliu';

  if (addressWrap) {
    addressWrap.style.display = isDelivery ? 'block' : 'none';
  }
  if (deliveryBadge) {
    if (isDelivery) {
      deliveryBadge.innerHTML = '<i class="fas fa-motorcycle"></i> Livrare la domiciliu (în raza de max 10 km)';
      deliveryBadge.style.color = '#34d399';
    } else {
      deliveryBadge.innerHTML = '<i class="fas fa-shopping-bag"></i> Ridicare din restaurant (La pachet)';
      deliveryBadge.style.color = '#FFC222';
    }
  }
}

function renderCart() {
  const totalBurgers = cart.reduce((acc, it) => acc + it.quantity, 0);
  const totalOrderPrice = cart.reduce((acc, it) => acc + (it.totalPrice * it.quantity), 0);

  // 1. Update Floating Cart Bar
  const floatingBar = document.getElementById('floatingCartBar');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const cartSummaryTitle = document.getElementById('cartSummaryTitle');
  const cartCountBtn = document.getElementById('cartCountBtn');
  const loc = LOCATIONS[selectedLocationKey];

  if (floatingBar) {
    if (totalBurgers > 0) {
      floatingBar.style.display = 'block';
      if (cartCountBadge) cartCountBadge.textContent = totalBurgers;
      if (cartCountBtn) cartCountBtn.textContent = totalBurgers;
      if (cartSummaryTitle) {
        cartSummaryTitle.textContent = `Comanda Ta: ${totalOrderPrice} LEI (${totalBurgers} ${totalBurgers === 1 ? 'burger' : 'burgeri'})`;
      }
      const snippet = document.getElementById('cartLocationSnippet');
      if (snippet && loc) {
        let distStr = (userLocation && userLocation.key === selectedLocationKey) ? ` • ~${userLocation.distanceKm} km` : '';
        snippet.textContent = `Prime Burger ${loc.city}${distStr}`;
      }
    } else {
      floatingBar.style.display = 'none';
    }
  }

  // 2. Update Cart Modal List
  const itemsContainer = document.getElementById('cartItemsList');
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align:center; padding: 30px 10px; color:var(--text-muted);">
          <i class="fas fa-shopping-basket" style="font-size:2.4rem; color:var(--text-dim); margin-bottom:12px; display:block;"></i>
          <strong>Nu ai niciun burger în comandă.</strong>
          <p style="font-size:0.86rem; margin-top:6px;">Alege rețeta dorită din meniu și configureaz-o!</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map((item, index) => {
        const saucesStr = item.sauces.length > 0 
          ? item.sauces.map(s => s.name).join(', ') 
          : 'Fără sosuri';
        const drinksStr = item.drinks.length > 0 
          ? item.drinks.map(d => d.name).join(', ') 
          : 'Fără băutură';

        const isBurgerItem = item.isBurger !== false && item.patty && item.patty !== '-';
        const specsHtml = isBurgerItem ? `
          <div class="cart-item-specs">
            <div class="cart-spec-pill"><i class="fas fa-drumstick-bite"></i> ${item.patty}</div>
            <div class="cart-spec-pill"><i class="fas fa-utensils"></i> ${item.side}</div>
            <div class="cart-spec-pill"><i class="fas fa-mortar-pestle"></i> ${saucesStr}</div>
            <div class="cart-spec-pill"><i class="fas fa-glass-cheers"></i> ${drinksStr}</div>
            ${item.notes ? `<div class="cart-spec-pill note-pill"><i class="fas fa-comment-dots"></i> ${item.notes}</div>` : ''}
          </div>
        ` : (item.notes ? `<div class="cart-item-specs"><div class="cart-spec-pill note-pill"><i class="fas fa-comment-dots"></i> ${item.notes}</div></div>` : '');

        return `
          <div class="cart-item-card">
            <div class="cart-item-main-row">
              <div class="cart-burger-thumb-wrap">
                <img src="${item.image}" alt="${item.name}" class="cart-burger-thumb-img" onerror="this.src='assets/images/prime-burger.png'">
              </div>

              <div class="cart-item-details">
                <div class="cart-item-header">
                  <div class="cart-item-title-wrap">
                    <span class="cart-item-idx">${index + 1}</span>
                    <div>
                      <h4 class="cart-item-name">${item.name}</h4>
                      <span class="cart-item-price-tag">${item.totalPrice} LEI / buc</span>
                    </div>
                  </div>
                  <button type="button" class="btn-remove-cart-item" onclick="removeCartItem(${item.id})" title="Șterge produs" aria-label="Șterge produs">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
                
                ${specsHtml}

                <div class="cart-item-footer">
                  <div class="cart-subtotal-val">
                    Subtotal: <strong style="color:var(--primary); font-size:1.02rem;">${item.totalPrice * item.quantity} LEI</strong>
                  </div>
                  <div class="cart-qty-stepper">
                    <button type="button" class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)" aria-label="Scade cantitate">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button type="button" class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)" aria-label="Crește cantitate">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 3. Update Footer Total Text & Delivery Badge
  const footerCount = document.getElementById('cartFooterCount');
  const footerTotal = document.getElementById('cartFooterTotalText');
  if (footerCount) footerCount.textContent = `(${totalBurgers} ${totalBurgers === 1 ? 'burger selectat' : 'burgeri selectați'})`;
  if (footerTotal) footerTotal.textContent = `${totalOrderPrice} LEI`;

  updateCartDeliveryUI();

  // 4. Sync WhatsApp button text
  const btnSubmit = document.getElementById('btnSubmitCartWhatsApp');
  if (btnSubmit && loc) {
    btnSubmit.innerHTML = `<i class="fab fa-whatsapp"></i> Trimite Comanda pe WhatsApp (${totalOrderPrice} LEI)`;
  }
}

// Configurator buttons
const btnAddToCartModal = document.getElementById('btnAddToCartModal');
if (btnAddToCartModal) {
  btnAddToCartModal.addEventListener('click', () => {
    addCurrentBurgerToCart();
  });
}

const btnAddAndCheckoutDirect = document.getElementById('btnAddAndCheckoutDirect');
if (btnAddAndCheckoutDirect) {
  btnAddAndCheckoutDirect.addEventListener('click', () => {
    addCurrentBurgerToCart();
    openCartModal();
  });
}

// Cart Modal Open / Close
const cartModal = document.getElementById('cartModal');

function openCartModal() {
  if (cart.length === 0) {
    showToast('Adaugă mai întâi cel puțin un burger în comandă!');
    return;
  }
  renderCart();
  updateFulfillmentOptions();
  updateCartDeliveryUI();
  if (cartModal) {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartModal() {
  if (cartModal) {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function scrollToMenu() {
  const menu = document.getElementById('meniu');
  if (menu) menu.scrollIntoView({ behavior: 'smooth' });
}

// Order fulfillment type change listener
const cartOrderTypeSelect = document.getElementById('cartOrderTypeSelect');
if (cartOrderTypeSelect) {
  cartOrderTypeSelect.addEventListener('change', () => {
    updateCartDeliveryUI();
  });
}

// ==========================================
// 6. MULTI-BURGER WHATSAPP ORDER SUBMISSION
// ==========================================
const btnSubmitCartWhatsApp = document.getElementById('btnSubmitCartWhatsApp');
if (btnSubmitCartWhatsApp) {
  btnSubmitCartWhatsApp.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Coșul tău este gol! Te rugăm să configurezi un burger.');
      return;
    }

    const loc = LOCATIONS[selectedLocationKey] || LOCATIONS.bistrita;
    const name = document.getElementById('cartCustomerName')?.value.trim() || 'Client';
    const orderType = document.getElementById('cartOrderTypeSelect')?.value || 'Ridicare din restaurant';
    const address = document.getElementById('cartCustomerAddress')?.value.trim() || '';
    const notes = document.getElementById('cartCustomerNotes')?.value.trim() || '';

    // Validate delivery address if delivery chosen (inlocuieste telefonul)
    if (orderType === 'Livrare la domiciliu' && !address) {
      showToast('Te rugăm să completezi adresa de livrare!');
      document.getElementById('cartCustomerAddress')?.focus();
      return;
    }

    const totalBurgers = cart.reduce((acc, it) => acc + it.quantity, 0);
    const totalOrderPrice = cart.reduce((acc, it) => acc + (it.totalPrice * it.quantity), 0);

    let msg = `🍔 *COMANDĂ NOUĂ PRIME BURGER (${loc.city.toUpperCase()})*\n`;
    msg += `🌐 *Subdomeniu:* https://${loc.subdomain}\n`;
    if (userLocation && userLocation.key === selectedLocationKey) {
      msg += `📍 *Distanță GPS estimată:* ~${userLocation.distanceKm} km (${userLocation.isWithin10km ? 'în raza de 10 km' : 'peste 10 km'})\n`;
    }
    msg += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📋 *PRODUSE COMANDATE (${totalBurgers} ${totalBurgers === 1 ? 'PRODUS' : 'PRODUSE'}):*\n\n`;

    cart.forEach((item, idx) => {
      const subtotal = item.totalPrice * item.quantity;
      msg += `*${idx + 1}. ${item.name.toUpperCase()}* (x${item.quantity}) - *${subtotal} LEI*\n`;
      if (item.isBurger !== false && item.patty && item.patty !== '-') {
        msg += `   • Carne: ${item.patty}\n`;
        msg += `   • Garnitură: ${item.side}\n`;
        const saucesStr = item.sauces.length > 0 ? item.sauces.map(s => s.name).join(', ') : 'Fără sosuri';
        msg += `   • Sosuri: ${saucesStr}\n`;
        const drinksStr = item.drinks.length > 0 ? item.drinks.map(d => d.name).join(', ') : 'Fără băutură';
        msg += `   • Băutură: ${drinksStr}\n`;
      }
      if (item.notes) {
        msg += `   • Mențiuni speciale: ${item.notes}\n`;
      }
      msg += `\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *TOTAL DE PLATĂ:* *${totalOrderPrice} LEI*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *DETALII PRELUARE COMANDĂ:*\n`;
    msg += `• Nume client: ${name}\n`;
    msg += `• Modalitate: ${orderType}\n`;
    if (orderType === 'Livrare la domiciliu' && address) {
      msg += `• Adresă livrare: ${address}\n`;
      msg += `• Notă livrare: În limita razei de max 10 km de la restaurant\n`;
    }
    if (notes) {
      msg += `• Observații: ${notes}\n`;
    }
    msg += `\n_Comandă transmisă direct pe WhatsApp fără comisioane către platforme terțe._`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/4${loc.phone}?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');
    closeCartModal();
    showToast(`Comanda ta (${totalBurgers} ${totalBurgers === 1 ? 'produs' : 'produse'} - ${totalOrderPrice} LEI) a fost transmisă pe WhatsApp către restaurantul din ${loc.city}!`);
  });
}

// ==========================================
// 7. FRANCHISE APPLICATION SUBMISSION
// ==========================================
const franchiseForm = document.getElementById('franchiseApplicationForm');
if (franchiseForm) {
  franchiseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('applicantName').value;
    const phone = document.getElementById('applicantPhone').value;
    const city = document.getElementById('applicantCity').value;
    const budget = document.getElementById('applicantBudget').value;

    showToast(`Mulțumim, ${name}! Solicitarea pentru franciza din ${city} (buget ${budget}) a fost înregistrată.`);
    franchiseForm.reset();
  });
}

// 8. FREE INFO PACK DOWNLOAD FORM
const infoPackForm = document.getElementById('infoPackForm');
if (infoPackForm) {
  infoPackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('infoPackName').value.trim();
    const phone = document.getElementById('infoPackPhone').value.trim();
    const city = document.getElementById('infoPackCity').value.trim();

    showToast(`Mulțumim, ${name}! Ghidul Oficial al Francizei pentru ${city} se descarcă acum.`);

    const msg = encodeURIComponent(`Bună ziua! Mă numesc ${name} (Tel: ${phone}) și doresc Pachetul Informativ complet pentru deschiderea unei francize Prime Burger în orașul ${city}.`);
    setTimeout(() => {
      window.open(`https://wa.me/40746064310?text=${msg}`, '_blank');
    }, 1200);

    infoPackForm.reset();
  });
}

// ==========================================
// 9. BRANDED LOCATION POPUP MODAL CONTROLLER
// ==========================================
const locationModal = document.getElementById('locationModal');
const geoModalContentBox = document.getElementById('geoModalContentBox');

function openLocationModal(triggerGps = true) {
  if (locationModal) {
    locationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (triggerGps) {
    renderLocationModalState('scanning');
    detectUserLocation((res) => {
      if (res) {
        if (res.isWithin10km) {
          renderLocationModalState('in_radius', res);
        } else {
          renderLocationModalState('out_radius', res);
        }
      } else {
        renderLocationModalState('manual');
      }
    }, false);
  } else {
    if (userLocation) {
      if (userLocation.isWithin10km) {
        renderLocationModalState('in_radius', userLocation);
      } else {
        renderLocationModalState('out_radius', userLocation);
      }
    } else {
      renderLocationModalState('manual');
    }
  }
}

function closeLocationModal() {
  if (locationModal) {
    locationModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderLocationModalState(state, data) {
  if (!geoModalContentBox) return;

  if (state === 'scanning') {
    geoModalContentBox.innerHTML = `
      <div class="geo-state-scanning">
        <div class="geo-scan-spinner"><i class="fas fa-satellite fa-spin"></i></div>
        <h4>Scanăm cele 12 restaurante Prime Burger...</h4>
        <p>Căutăm cel mai apropiat restaurant și verificăm dacă te afli în raza de 10 km pentru livrare directă.</p>
      </div>
    `;
  } else if (state === 'in_radius') {
    const loc = LOCATIONS[data.key];
    geoModalContentBox.innerHTML = `
      <div class="geo-state-result in-radius-card">
        <div class="geo-result-badge-top">
          <span class="badge-status-pill green"><i class="fas fa-check-circle"></i> În Raza de Livrare (max 10 km)</span>
          <span class="badge-distance-km">~${data.distanceKm} km</span>
        </div>
        <h4 class="geo-result-city">Prime Burger ${loc.city}</h4>
        <div class="geo-result-subdomain">
          <i class="fas fa-globe"></i> https://${loc.subdomain}
        </div>
        <div class="geo-result-services">
          ${loc.hasDelivery 
            ? '<span class="service-pill ok"><i class="fas fa-motorcycle"></i> Livrare La Domiciliu Disponibilă</span><span class="service-pill ok"><i class="fas fa-shopping-bag"></i> Ridicare / La Pachet</span>' 
            : '<span class="service-pill warn"><i class="fas fa-store"></i> Exclusiv Ridicare din restaurant (La pachet)</span>'}
        </div>
        <div class="geo-result-schedule">
          <i class="far fa-clock"></i> ${loc.hours} · <span style="color:#34d399; font-weight:700;">Deschis Acum</span>
        </div>
        <div class="geo-result-actions">
          <button type="button" class="btn btn-green" onclick="confirmLocationAndOrder()">
            <i class="fas fa-hamburger"></i> Comandă de la Prime Burger ${loc.city}
          </button>
        </div>
      </div>
    `;
  } else if (state === 'out_radius') {
    const loc = LOCATIONS[data.key];
    geoModalContentBox.innerHTML = `
      <div class="geo-state-result out-radius-card">
        <div class="geo-result-badge-top">
          <span class="badge-status-pill warn"><i class="fas fa-exclamation-triangle"></i> Peste Limita de Livrare (10 km)</span>
          <span class="badge-distance-km">~${data.distanceKm} km</span>
        </div>
        <h4 class="geo-result-city">Cea mai apropiată locație: Prime Burger ${loc.city}</h4>
        <p class="geo-result-explanation">
          Te afli la <strong>${data.distanceKm} km</strong> distanță de restaurant. Pentru a garanta prospețimea cărnii rumenite pe plită, livrarea directă se efectuează în limita a <strong>10 km</strong>.
        </p>
        <div class="geo-result-takeaway-banner">
          <i class="fas fa-info-circle"></i> Poți comanda cu <strong>Ridicare din restaurant (Takeaway)</strong> sau poți alege alt oraș din rețea!
        </div>
        <div class="geo-result-actions">
          <button type="button" class="btn btn-primary" onclick="confirmLocationAndOrder()">
            <i class="fas fa-shopping-bag"></i> Continuă cu Ridicare (Takeaway)
          </button>
        </div>
      </div>
    `;
  } else if (state === 'manual') {
    geoModalContentBox.innerHTML = `
      <div class="geo-state-result">
        <div class="geo-result-badge-top">
          <span class="badge-status-pill neutral"><i class="fas fa-map-marker-alt"></i> Selectare Manuală</span>
        </div>
        <h4 class="geo-result-city">Alege Orașul Tău</h4>
        <p class="geo-result-explanation">
          Localizarea automată prin satelit este oprită sau indisponibilă. Alege orașul dorit din rețeaua Prime Burger România (12 restaurante active) din selectorul de mai jos:
        </p>
      </div>
    `;
  }
}

function confirmLocationAndOrder() {
  closeLocationModal();
  scrollToMenu();
  const loc = LOCATIONS[selectedLocationKey];
  showToast(`Comanzi de la Prime Burger ${loc.city} (${loc.subdomain})`, 'Locație Confirmată');
}

function confirmManualLocationModal() {
  if (geoModalSelect) {
    const key = geoModalSelect.value;
    updateSubdomainView(key);
    updateGeoUI({ status: 'manual', key });
    closeLocationModal();
    scrollToMenu();
    const loc = LOCATIONS[key];
    showToast(`Ai selectat locația Prime Burger ${loc.city}`, 'Oraș Actualizat');
  }
}

// Enhanced Toast Notification Helper
let toastTimer = null;
function showToast(text, title = 'Prime Burger România') {
  const toast = document.getElementById('toastBox');
  const toastText = document.getElementById('toastText');
  const toastTitle = document.getElementById('toastTitle');
  if (toast && toastText) {
    toastText.textContent = text;
    if (toastTitle) toastTitle.textContent = title;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
}

function hideToast() {
  const toast = document.getElementById('toastBox');
  if (toast) toast.classList.remove('show');
}

// Global scope bindings
window.openOrderModal = openOrderModal;
window.closeOrderModal = closeOrderModal;
window.openCartModal = openCartModal;
window.closeCartModal = closeCartModal;
window.openLocationModal = openLocationModal;
window.closeLocationModal = closeLocationModal;
window.confirmLocationAndOrder = confirmLocationAndOrder;
window.confirmManualLocationModal = confirmManualLocationModal;
window.removeCartItem = removeCartItem;
// ==========================================
// 10. INTERACTIVE PRIME BURGER CHAT WIDGET
// ==========================================
const primeChatPanel = document.getElementById('primeChatPanel');
const primeChatTrigger = document.getElementById('primeChatTrigger');
const chatDynamicFeed = document.getElementById('chatDynamicFeed');
const chatBody = document.getElementById('primeChatBody');
const chatCustomInput = document.getElementById('chatCustomInput');

function togglePrimeChat() {
  if (!primeChatPanel) return;
  const isActive = primeChatPanel.classList.toggle('active');
  if (isActive && chatCustomInput) {
    setTimeout(() => chatCustomInput.focus(), 250);
  }
}

function scrollToChatBottom() {
  if (chatBody) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function handlePredefinedChat(type) {
  if (!chatDynamicFeed) return;

  const loc = LOCATIONS[selectedLocationKey] || LOCATIONS['bistrita'];
  let userText = '';
  let botReply = '';
  let waNumber = '40746064310'; // Central Headquarters by default
  let waMessage = '';
  let btnLabel = 'Deschide WhatsApp';

  switch (type) {
    case 'franchise':
      userText = 'Vreau mai multe informații pentru a decide dacă vreau să am o astfel de franciză Prime Burger.';
      botReply = 'Excelent! Te punem în legătură directă cu <strong>Departamentul de Dezvoltare Francize Prime Burger</strong> (+40 746 064 310) pentru a primi Dosarul de Prezentare 2026, ghidul de investiție și analiza de profitabilitate.';
      waNumber = '40746064310';
      waMessage = 'Salut Prime Burger! Doresc mai multe informații pentru a decide dacă deschid o franciză Prime Burger în orașul meu. Vă rog să-mi trimiteți dosarul de prezentare și detaliile de colaborare.';
      btnLabel = 'Continuă pe WhatsApp Franciză';
      break;

    case 'b2b_meat':
      userText = 'Am restaurant și vreau să aflu despre prețul și calitatea cărnii livrate de la Hub-ul Dumbrăveni.';
      botReply = 'Bun găsit! Hub-ul nostru central de producție & logistică din <strong>Dumbrăveni (Suceava)</strong> procesează zilnic <strong>carne de vită maturată Black Angus</strong> porționată și chifle artizanale cu maia atât pentru rețeaua Prime Burger, cât și pentru restaurante partenere Horeca. Te conectăm direct cu <strong>Directorul Comercial de la Hub-ul Dumbrăveni</strong> (+40 746 064 310 / 0759 888 588).';
      waNumber = '40746064310';
      waMessage = 'Salut Prime Burger! Administrez un restaurant și doresc detalii despre prețurile en-gros și calitatea cărnii de vită (și chiflelor) livrate prin Hub-ul Central Dumbrăveni.';
      btnLabel = 'Vorbește cu Hub Dumbrăveni pe WhatsApp';
      break;

    case 'food_order':
      userText = `Vreau să comand burgeri la cel mai apropiat restaurant Prime Burger (${loc.city}).`;
      botReply = `Te conectăm direct cu linia de comenzi rapide pentru <strong>Prime Burger ${loc.city}</strong> (${loc.formattedPhone}).`;
      waNumber = `4${loc.phone}`;
      waMessage = `Salut Prime Burger ${loc.city}! Doresc să plasez o comandă de burgeri.`;
      btnLabel = `Comandă pe WhatsApp (${loc.city})`;
      break;

    case 'commercial_space':
      userText = 'Dețin / reprezint un spațiu comercial și aș dori să propun o nouă locație pentru Prime Burger.';
      botReply = 'Mulțumim pentru interes! Rețeaua Prime Burger este în plină expansiune națională. Căutăm spații comerciale (40–120 mp, acces stradal / pietonal, vizibilitate excelentă). Te punem în legătură directă cu <strong>Departamentul de Expansiune & Locații</strong> (+40 746 064 310 / Hub Dumbrăveni) pe WhatsApp pentru a ne trimite detalii, suprafață și fotografii.';
      waNumber = '40746064310';
      waMessage = 'Salut Prime Burger! Dețin / reprezint un spațiu comercial și aș dori să vă propun o nouă locație pentru extinderea rețelei Prime Burger. Vă pot trimite detalii despre oraș, suprafață, vad comercial și fotografii.';
      btnLabel = 'Propune Spațiu pe WhatsApp';
      break;

    case 'allergens':
      userText = 'Ce alergeni conțin cei 2 burgeri (Signature & American Bacon)?';
      botReply = 'Transparența este prioritatea noastră la Prime Burger! 🍔<br><br>' +
        '• <strong>Prime Burger Signature (39 LEI):</strong> Conține <em>Gluten</em> (chiflă cu maia), <em>Lapte/Lactoză</em> (Halloumi, unt), <em>Ou</em> (sosul casei), <em>Susan</em>, <em>Muștar</em>.<br>' +
        '• <strong>American Bacon Double-Cheese (43 LEI):</strong> Conține <em>Gluten</em> (chiflă cu maia), <em>Lapte/Lactoză</em> (Dublu Cheddar), <em>Ou</em> (sos), <em>Susan</em>, <em>Muștar</em>.<br><br>' +
        '<em>La comanda pe WhatsApp poți solicita bucătăriei excluderea oricărui ingredient (ex: fără sos, fără brânză).</em>';
      waNumber = `4${loc.phone}`;
      waMessage = `Salut Prime Burger ${loc.city}! Aș dori detalii suplimentare despre ingrediente și alergeni pentru o comandă.`;
      btnLabel = `Întreabă Bucătăria (${loc.city})`;
      break;

    default:
      userText = 'Bună ziua, doresc mai multe informații despre Prime Burger.';
      botReply = 'Un reprezentant Prime Burger este gata să te ajute pe WhatsApp:';
      waNumber = '40746064310';
      waMessage = 'Salut! Aș dori câteva informații despre serviciile voastre.';
  }

  // 1. Append User Message Bubble
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'chat-msg chat-msg-user';
  userMsgEl.innerHTML = `
    <div class="chat-bubble user-bubble">
      ${userText}
    </div>
    <span class="chat-timestamp">Acum</span>
  `;
  chatDynamicFeed.appendChild(userMsgEl);
  scrollToChatBottom();

  // 2. Append Typing Indicator
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg chat-msg-bot';
  typingEl.id = 'chatTypingIndicator';
  typingEl.innerHTML = `
    <div class="chat-bubble bot-bubble">
      <div class="chat-typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  chatDynamicFeed.appendChild(typingEl);
  scrollToChatBottom();

  // 3. After short delay, show bot reply and button
  setTimeout(() => {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.remove();

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    let extraButtons = '';
    if (type === 'allergens') {
      extraButtons = `
        <a href="assets/docs/ValoriNutritionalesiListadealergenidecembrie.pdf" target="_blank" download class="chat-action-wa-btn" style="background:#374151; margin-right:6px;">
          <i class="fas fa-file-pdf"></i> Descarcă Fișa PDF Decembrie
        </a>
      `;
    }

    const botMsgEl = document.createElement('div');
    botMsgEl.className = 'chat-msg chat-msg-bot';
    botMsgEl.innerHTML = `
      <div class="chat-bubble bot-bubble">
        <p>${botReply}</p>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">
          ${extraButtons}
          <a href="${waUrl}" target="_blank" rel="noopener" class="chat-action-wa-btn" style="margin-top:0;">
            <i class="fab fa-whatsapp"></i> ${btnLabel}
          </a>
        </div>
      </div>
      <span class="chat-timestamp">Acum</span>
    `;
    chatDynamicFeed.appendChild(botMsgEl);
    scrollToChatBottom();

    // Auto-open WhatsApp in new tab for direct lead generation
    if (type !== 'allergens') {
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 700);
    }
  }, 450);
}

function handleCustomChatSend(event) {
  if (event) event.preventDefault();
  if (!chatCustomInput || !chatDynamicFeed) return;

  const rawText = chatCustomInput.value.trim();
  if (!rawText) return;

  chatCustomInput.value = '';

  // Append user bubble
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'chat-msg chat-msg-user';
  userMsgEl.innerHTML = `
    <div class="chat-bubble user-bubble">${rawText}</div>
    <span class="chat-timestamp">Acum</span>
  `;
  chatDynamicFeed.appendChild(userMsgEl);
  scrollToChatBottom();

  // Typing indicator
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg chat-msg-bot';
  typingEl.id = 'chatTypingIndicatorCustom';
  typingEl.innerHTML = `
    <div class="chat-bubble bot-bubble">
      <div class="chat-typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  chatDynamicFeed.appendChild(typingEl);
  scrollToChatBottom();

  setTimeout(() => {
    const indicator = document.getElementById('chatTypingIndicatorCustom');
    if (indicator) indicator.remove();

    const waUrl = `https://wa.me/40746064310?text=${encodeURIComponent('Salut Prime Burger! ' + rawText)}`;

    const botMsgEl = document.createElement('div');
    botMsgEl.className = 'chat-msg chat-msg-bot';
    botMsgEl.innerHTML = `
      <div class="chat-bubble bot-bubble">
        <p>Îți transmitem mesajul direct pe WhatsApp către echipa Prime Burger...</p>
        <a href="${waUrl}" target="_blank" rel="noopener" class="chat-action-wa-btn">
          <i class="fab fa-whatsapp"></i> Trimite acum pe WhatsApp
        </a>
      </div>
      <span class="chat-timestamp">Acum</span>
    `;
    chatDynamicFeed.appendChild(botMsgEl);
    scrollToChatBottom();

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  }, 400);
}

// ==========================================
// 11. FULL EXTENDED CATALOG CONTROLLER (50 PRODUSE)
// ==========================================
let currentCatalogCategory = 'all';

function renderCatalog(filterCategory = 'all') {
  const grid = document.getElementById('catalogProductsGrid');
  if (!grid || typeof PB_CATALOG === 'undefined') return;

  currentCatalogCategory = filterCategory;

  const products = filterCategory === 'all' 
    ? PB_CATALOG 
    : PB_CATALOG.filter(p => p.category === filterCategory);

  grid.innerHTML = products.map(p => {
    const allergensStr = p.allergens && p.allergens.length > 0
      ? `<div class="burger-allergens-strip" style="margin:6px 0 10px 0; padding:4px 8px;">
          <span class="allergens-title"><i class="fas fa-exclamation-triangle"></i></span>
          ${p.allergens.map(a => `<span class="allergen-tag">${a}</span>`).join('')}
         </div>`
      : '';

    const actionBtn = p.isBurger
      ? `<button type="button" class="btn btn-primary btn-sm btn-block" onclick="openOrderModal('${p.name}', ${p.price}, '${p.slug}')" style="width:100%; justify-content:center;">
          <i class="fas fa-sliders-h"></i> Configurează (${p.price} LEI)
         </button>`
      : `<button type="button" class="btn-gold-outline" onclick="addDirectCatalogItem('${p.slug}')">
          <i class="fas fa-plus"></i> Adaugă în Comandă (${p.price} LEI)
         </button>`;

    return `
      <div class="catalog-product-card" data-category="${p.category}">
        <div class="catalog-card-media">
          <img src="${p.image}" alt="${p.name}" class="catalog-card-img" loading="lazy" onerror="this.src='assets/images/prime-burger.png'">
          <span class="catalog-cat-badge">${p.category}</span>
        </div>
        <div class="catalog-card-body">
          <div class="catalog-card-header">
            <h4 class="catalog-prod-name">${p.name}</h4>
            <span class="catalog-prod-price">${p.price} LEI</span>
          </div>
          <p class="catalog-prod-desc">${p.description || 'Preparat artizanal realizat proaspăt din ingrediente atent selecționate.'}</p>
          ${allergensStr}
        </div>
        <div class="catalog-card-action">
          ${actionBtn}
        </div>
      </div>
    `;
  }).join('');
}

function initCatalogTabs() {
  const tabs = document.querySelectorAll('.catalog-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category || 'all';
      renderCatalog(cat);
    });
  });
}

function addDirectCatalogItem(slug) {
  if (typeof PB_CATALOG === 'undefined') return;
  const product = PB_CATALOG.find(p => p.slug === slug);
  if (!product) return;

  const item = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: product.name,
    image: product.image,
    isBurger: false,
    patty: '-',
    side: '-',
    sauces: [],
    drinks: [],
    notes: '',
    unitPrice: product.price,
    totalPrice: product.price,
    quantity: 1
  };

  cart.push(item);
  renderCart();
  showToast(`🛒 ${product.name} (${product.price} LEI) a fost adăugat în comandă!`);
}

window.updateCartItemQty = updateCartItemQty;
window.scrollToMenu = scrollToMenu;
window.detectUserLocation = detectUserLocation;
window.handleOrderCtaClick = handleOrderCtaClick;
window.showToast = showToast;
window.hideToast = hideToast;
window.cancelEntireOrder = cancelEntireOrder;
window.updateCartDeliveryUI = updateCartDeliveryUI;
window.togglePrimeChat = togglePrimeChat;
window.handlePredefinedChat = handlePredefinedChat;
window.handleCustomChatSend = handleCustomChatSend;
window.renderCatalog = renderCatalog;
window.initCatalogTabs = initCatalogTabs;
window.addDirectCatalogItem = addDirectCatalogItem;

// Close modals when clicking outside sheet
if (orderModal) {
  orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) closeOrderModal();
  });
}

if (cartModal) {
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCartModal();
  });
}

if (locationModal) {
  locationModal.addEventListener('click', (e) => {
    if (e.target === locationModal) closeLocationModal();
  });
}

// Close chat when clicking outside panel
document.addEventListener('click', (e) => {
  if (primeChatPanel && primeChatPanel.classList.contains('active')) {
    if (!primeChatPanel.contains(e.target) && !primeChatTrigger.contains(e.target)) {
      primeChatPanel.classList.remove('active');
    }
  }
});

// Attach header order CTA button
const headerOrderBtn = document.getElementById('headerOrderBtn');
if (headerOrderBtn) {
  headerOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openLocationModal(true);
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  populateLocationDropdowns();
  updateSubdomainView(selectedLocationKey);
  renderCatalog('all');
  initCatalogTabs();
});