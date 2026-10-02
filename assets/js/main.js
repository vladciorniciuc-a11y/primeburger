// LOCATIONS DIRECTORY (OFFICIAL DATA FROM PRIME BURGER NETWORK)
const LOCATIONS = {
  bistrita: { 
    city: 'Bistrița', 
    subdomain: 'bistrita.primeburger.ro', 
    phone: '0742454444', 
    formattedPhone: '+40 742 454 444',
    hours: 'Marți: 09:30-23:30, Miercuri-Duminică: 09:30-00:00',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  baiamare: { 
    city: 'Baia Mare', 
    subdomain: 'baiamare.primeburger.ro', 
    phone: '0754836169', 
    formattedPhone: '+40 754 836 169',
    hours: 'Marți - Duminică: 09:00 - 21:00',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  botosani: { 
    city: 'Botoșani', 
    subdomain: 'botosani.primeburger.ro', 
    phone: '0743390390', 
    formattedPhone: '+40 743 390 390',
    hours: 'Marți - Sâmbătă: 11:00 - 23:00, Duminică: 12:00 - 23:00',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  radauti: { 
    city: 'Rădăuți', 
    subdomain: 'radauti.primeburger.ro', 
    phone: '0753598638', 
    formattedPhone: '+40 753 598 638',
    hours: 'Marți - Sâmbătă: 09:00 - 21:30, Duminică: 13:00 - 21:30',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  siret: { 
    city: 'Siret', 
    subdomain: 'siret.primeburger.ro', 
    phone: '0772282187', 
    formattedPhone: '+40 772 282 187',
    hours: 'Marți - Sâmbătă: 09:30 - 21:30, Duminică: 12:00 - 21:30',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  gurahumorului: { 
    city: 'Gura Humorului', 
    subdomain: 'gurahumorului.primeburger.ro', 
    phone: '0736150150', 
    formattedPhone: '+40 736 150 150',
    hours: 'Marți - Sâmbătă: 10:00 - 21:00, Duminică: 12:00 - 21:00',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  dumbraveni: { 
    city: 'Dumbrăveni', 
    subdomain: 'dumbraveni.primeburger.ro', 
    phone: '0759888588', 
    formattedPhone: '+40 759 888 588',
    hours: 'Marți - Sâmbătă: 10:00 - 21:00, Duminică: 12:30 - 21:30',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  bosanci: { 
    city: 'Bosanci', 
    subdomain: 'bosanci.primeburger.ro', 
    phone: '0740333314', 
    formattedPhone: '+40 740 333 314',
    hours: 'Marți - Sâmbătă: 10:00 - 22:00, Duminică: 12:00 - 22:00',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  bivolarie: { 
    city: 'Bivolărie', 
    subdomain: 'bivolarie.primeburger.ro', 
    phone: '0746677706', 
    formattedPhone: '+40 746 677 706',
    hours: 'Marți - Sâmbătă: 10:00 - 22:00, Duminică: 11:30 - 22:00',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  negrestioas: { 
    city: 'Negrești Oaș', 
    subdomain: 'negrestioas.primeburger.ro', 
    phone: '0772219949', 
    formattedPhone: '+40 772 219 949',
    hours: 'Marți - Sâmbătă: 09:30 - 21:30, Duminică: 12:00 - 21:30',
    service: 'Dine-in · La pachet · Livrare locală'
  },
  trusesti: { 
    city: 'Trușești', 
    subdomain: 'trusesti.primeburger.ro', 
    phone: '0751555512', 
    formattedPhone: '+40 751 555 512',
    hours: 'Marți - Duminică: 09:00 - 21:00',
    service: 'Dine-in · La pachet · Livrare locală'
  }
};

let selectedLocationKey = 'bistrita';

// 1. SUBDOMAIN SELECTOR SYNC
const subdomainSelect = document.getElementById('subdomainSelect');
const browserUrlPreview = document.getElementById('browserUrlPreview');
const browserCityPreview = document.getElementById('browserCityPreview');
const browserPhonePreview = document.getElementById('browserPhonePreview');
const browserSchedulePreview = document.getElementById('browserSchedulePreview');
const modalOrderCityLabel = document.getElementById('modalOrderCityLabel');

function updateSubdomainView(key) {
  selectedLocationKey = key;
  const loc = LOCATIONS[key];
  if (!loc) return;

  if (browserUrlPreview) browserUrlPreview.textContent = `https://${loc.subdomain}`;
  if (browserCityPreview) browserCityPreview.textContent = `Prime Burger ${loc.city}`;
  if (browserPhonePreview) browserPhonePreview.innerHTML = `<i class="fab fa-whatsapp"></i> ${loc.formattedPhone}`;
  if (browserSchedulePreview) browserSchedulePreview.innerHTML = `<i class="far fa-clock"></i> ${loc.hours} · <span style="color:#00A149;">Deschis</span>`;
  if (modalOrderCityLabel) modalOrderCityLabel.textContent = `Locație Curentă: ${loc.city} (${loc.subdomain})`;
}

    subdomainSelect.addEventListener('change', (e) => {
      updateSubdomainView(e.target.value);
    });

    // 2. ROMANIA SVG MAP INTERACTIVITY (NO TOOLTIPS, DIRECT EXPANSION CLICK)

    // 3. ROMANIA SVG MAP INTERACTIVITY (NO TOOLTIPS, DIRECT EXPANSION CLICK)
    // Click on pulsating radar nodes jumps to franchise application form
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

    // 4. ORDER MODAL LOGIC (STEP-BY-STEP GONDOLA STYLE)
    let currentBurger = {
      name: 'Prime Burger Signature',
      basePrice: 34,
      pattyPrice: 0,
      pattyName: 'Standard Patty (120g)',
      sidePrice: 0,
      sideName: 'Fără Cartofi',
      sauces: [],
      drinks: []
    };

    const orderModal = document.getElementById('orderModal');
    const modalBurgerTitle = document.getElementById('modalBurgerTitle');
    const modalLiveTotal = document.getElementById('modalLiveTotal');

    function openOrderModal(burgerName, price, slug) {
      currentBurger.name = burgerName;
      currentBurger.basePrice = price;
      currentBurger.pattyPrice = 0;
      currentBurger.pattyName = 'Standard Patty (120g)';
      currentBurger.sidePrice = 0;
      currentBurger.sideName = 'Fără Cartofi';
      currentBurger.sauces = [];
      currentBurger.drinks = [];

      modalBurgerTitle.textContent = burgerName;
      
      // Reset selections
      document.querySelectorAll('#pattyOptions .option-card-radio').forEach((c, idx) => {
        c.classList.toggle('selected', idx === 0);
      });
      document.querySelectorAll('#sidesOptions .option-card-radio').forEach((c, idx) => {
        c.classList.toggle('selected', idx === 0);
      });
      document.querySelectorAll('.option-card-check').forEach(c => c.classList.remove('selected'));

      updateLiveTotal();
      orderModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeOrderModal() {
      orderModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Step 1: Radio Patty
    document.querySelectorAll('#pattyOptions .option-card-radio').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('#pattyOptions .option-card-radio').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        currentBurger.pattyPrice = parseInt(opt.dataset.price) || 0;
        currentBurger.pattyName = opt.dataset.name;
        updateLiveTotal();
      });
    });

    // Step 2: Radio Sides
    document.querySelectorAll('#sidesOptions .option-card-radio').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('#sidesOptions .option-card-radio').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        currentBurger.sidePrice = parseInt(opt.dataset.price) || 0;
        currentBurger.sideName = opt.dataset.name;
        updateLiveTotal();
      });
    });

    // Step 3: Sauces Checkboxes
    document.querySelectorAll('#saucesOptions .option-card-check').forEach(opt => {
      opt.addEventListener('click', () => {
        opt.classList.toggle('selected');
        const name = opt.dataset.name;
        const price = parseInt(opt.dataset.price) || 4;

        if (opt.classList.contains('selected')) {
          currentBurger.sauces.push({ name, price });
        } else {
          currentBurger.sauces = currentBurger.sauces.filter(s => s.name !== name);
        }
        updateLiveTotal();
      });
    });

    // Step 4: Drinks Checkboxes
    document.querySelectorAll('#drinksOptions .option-card-check').forEach(opt => {
      opt.addEventListener('click', () => {
        opt.classList.toggle('selected');
        const name = opt.dataset.name;
        const price = parseInt(opt.dataset.price) || 6;

        if (opt.classList.contains('selected')) {
          currentBurger.drinks.push({ name, price });
        } else {
          currentBurger.drinks = currentBurger.drinks.filter(d => d.name !== name);
        }
        updateLiveTotal();
      });
    });

    function calculateTotal() {
      let total = currentBurger.basePrice + currentBurger.pattyPrice + currentBurger.sidePrice;
      currentBurger.sauces.forEach(s => total += s.price);
      currentBurger.drinks.forEach(d => total += d.price);
      return total;
    }

    function updateLiveTotal() {
      if (modalLiveTotal) modalLiveTotal.textContent = calculateTotal();
    }

    // Step 5: Send Order via WhatsApp to Chosen Subdomain Location
    document.getElementById('btnSendWhatsAppOrder').addEventListener('click', () => {
      const loc = LOCATIONS[selectedLocationKey] || LOCATIONS.bistrita;
      const name = document.getElementById('orderCustomerName').value.trim() || 'Client';
      const orderType = document.getElementById('orderTypeSelect').value;
      const address = document.getElementById('orderCustomerAddress').value.trim();

      let saucesText = currentBurger.sauces.length > 0 
        ? currentBurger.sauces.map(s => s.name).join(', ') 
        : 'Niciunul';

      let drinksText = currentBurger.drinks.length > 0 
        ? currentBurger.drinks.map(d => d.name).join(', ') 
        : 'Niciuna';

      let msg = `*COMANDĂ NOUĂ PRIME BURGER (${loc.city.toUpperCase()})*\n\n`;
      msg += `🍔 *Burger:* ${currentBurger.name} (${currentBurger.pattyName})\n`;
      msg += `🍟 *Garnitură:* ${currentBurger.sideName}\n`;
      msg += `🥫 *Sosuri:* ${saucesText}\n`;
      msg += `🥤 *Băuturi:* ${drinksText}\n\n`;
      msg += `👤 *Client:* ${name}\n`;
      msg += `📦 *Modalitate:* ${orderType}\n`;
      if (address) {
        msg += `📍 *Adresă livrare:* ${address}\n`;
      }
      msg += `🌐 *Comandă plasată via:* ${loc.subdomain}`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/4${loc.phone}?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank');
      closeOrderModal();
      showToast('Comanda ta a fost trimisă către restaurant pe WhatsApp!');
    });

    // 5. FRANCHISE APPLICATION SUBMISSION
    document.getElementById('franchiseApplicationForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('applicantName').value;
      const phone = document.getElementById('applicantPhone').value;
      const city = document.getElementById('applicantCity').value;
      const budget = document.getElementById('applicantBudget').value;

      showToast(`Mulțumim, ${name}! Solicitarea pentru franciza din ${city} (buget ${budget}) a fost înregistrată.`);
      document.getElementById('franchiseApplicationForm').reset();
    });

    // 6. FREE INFO PACK DOWNLOAD FORM (BROOKLYN FITBOXING STYLE LEAD MAGNET)
    const infoPackForm = document.getElementById('infoPackForm');
    if (infoPackForm) {
      infoPackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('infoPackName').value.trim();
        const phone = document.getElementById('infoPackPhone').value.trim();
        const city = document.getElementById('infoPackCity').value.trim();

        showToast(`Mulțumim, ${name}! Ghidul Oficial al Francizei pentru ${city} se descarcă acum.`);

        // Also prepare a WhatsApp direct link to HQ for immediate contact
        const msg = encodeURIComponent(`Bună ziua! Mă numesc ${name} (Tel: ${phone}) și doresc Pachetul Informativ complet pentru deschiderea unei francize Prime Burger în orașul ${city}.`);
        setTimeout(() => {
          window.open(`https://wa.me/40746064310?text=${msg}`, '_blank');
        }, 1200);

        infoPackForm.reset();
      });
    }

    // Toast helper
    function showToast(text) {
      const toast = document.getElementById('toastBox');
      document.getElementById('toastText').textContent = text;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4500);
    }

    // Export modal functions to global scope
    window.openOrderModal = openOrderModal;
    window.closeOrderModal = closeOrderModal;

    // Close modal on click outside sheet
    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) {
        closeOrderModal();
      }
    });

    // Initialize default view
    document.addEventListener('DOMContentLoaded', () => {
      updateSubdomainView(selectedLocationKey);
    });