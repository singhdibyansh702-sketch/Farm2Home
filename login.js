document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('language-select');
    langSelect.addEventListener('change', changeLanguage);

    // --- MODAL LOGIC START ---
    const modalOverlay = document.getElementById('help-modal');
    // Updated ID to target the footer link
    const openBtn = document.getElementById('txt-help'); 
    const closeBtn = document.getElementById('close-modal-btn');

    // Function to Open Modal
    const openModal = (e) => {
        if(e) e.preventDefault(); // Prevent default anchor jump
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // Function to Close Modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    };

    // Event Listeners for Modal
    if(openBtn) openBtn.addEventListener('click', openModal);
    if(closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close modal if user clicks outside the container
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    // --- MODAL LOGIC END ---
});

/* --- ANIMATION LOGIC --- */

function expandCard(role) {
    const farmerCard = document.getElementById('card-farmer');
    const customerCard = document.getElementById('card-customer');
    const introText = document.getElementById('intro-text');

    // Fade out Welcome Text
    introText.classList.add('hidden');

    if (role === 'farmer') {
        // Expand Farmer, Hide Customer
        customerCard.classList.add('hidden');
        farmerCard.classList.add('expanded');
    } else {
        // Expand Customer, Hide Farmer
        farmerCard.classList.add('hidden');
        customerCard.classList.add('expanded');
    }
}

function resetCards() {
    const farmerCard = document.getElementById('card-farmer');
    const customerCard = document.getElementById('card-customer');
    const introText = document.getElementById('intro-text');

    // Remove classes to revert to original state
    farmerCard.classList.remove('expanded', 'hidden');
    customerCard.classList.remove('expanded', 'hidden');

    // Show Welcome Text again
    setTimeout(() => {
        introText.classList.remove('hidden');
    }, 300);
}

/* --- TRANSLATION DATA --- */
const translations = {
    en: {
        tagline: "Freshness Delivered.",
        title: "Welcome to Farm2Home",
        subtitle: "Select your profile type to access the dashboard.",
        farmer: "Farmer",
        farmerDesc: "List crops and manage sales.",
        customer: "Customer",
        customerDesc: "Order fresh straight from the source.",
        btn: "Login as ",
        guest: "Guest View",
        help: "Need Help?",
        back: "Back",
        loginHeader: " Login",
        mobileLabel: "Mobile Number",
        sendOtp: "Send OTP",
        newHere: "New here?",
        register: "Register >"
    },
    hi: {
        tagline: "ताजा वितरण।",
        title: "Farm2Home में स्वागत है",
        subtitle: "डैशबोर्ड तक पहुंचने के लिए अपनी प्रोफ़ाइल चुनें।",
        farmer: "किसान",
        farmerDesc: "फसलें सूचीबद्ध करें और बिक्री प्रबंधित करें।",
        customer: "ग्राहक",
        customerDesc: "सीधे स्रोत से ताजा ऑर्डर करें।",
        btn: "लॉगिन करें: ",
        guest: "अतिथि दृश्य",
        help: "मदद चाहिए?",
        back: "वापस",
        loginHeader: " लॉगिन",
        mobileLabel: "मोबाइल नंबर",
        sendOtp: "ओटीपी भेजें",
        newHere: "यहाँ नए हैं?",
        register: "पंजीकरण करें >"
    },
    mr: {
        tagline: "ताजेपणा वितरित.",
        title: "Farm2home मध्ये आपले स्वागत आहे",
        subtitle: "डॅशबोर्डवर जाण्यासाठी आपली प्रोफाइल निवडा.",
        farmer: "शेतकरी",
        farmerDesc: "पिके सूचीबद्ध करा आणि विक्री व्यवस्थापित करा.",
        customer: "ग्राहक",
        customerDesc: "थेट स्त्रोताकडून ताजे मागवा.",
        btn: "लॉगिन करा: ",
        guest: "पाहुणे दृश्य",
        help: "मदत हवी?",
        back: "मागे",
        loginHeader: " लॉगिन",
        mobileLabel: "मोबाईल नंबर",
        sendOtp: "ओटीपी पाठवा",
        newHere: "नवीन आहात?",
        register: "नोंदणी करा >"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language-select").value;
    const t = translations[lang];

    // Main Headers
    document.getElementById("txt-tagline").innerText = t.tagline;
    document.getElementById("txt-title").innerText = t.title;
    document.getElementById("txt-subtitle").innerText = t.subtitle;
    
    // Farmer Card
    document.getElementById("txt-farmer").innerText = t.farmer;
    document.getElementById("txt-farmer-desc").innerText = t.farmerDesc;
    document.getElementById("txt-btn-1").innerText = t.btn + (lang === "en" ? "Farmer" : t.farmer);
    
    // Customer Card
    document.getElementById("txt-customer").innerText = t.customer;
    document.getElementById("txt-customer-desc").innerText = t.customerDesc;
    document.getElementById("txt-btn-2").innerText = t.btn + (lang === "en" ? "Customer" : t.customer);
    
    // Login Forms
    document.getElementById("txt-back-1").innerText = t.back;
    document.getElementById("txt-back-2").innerText = t.back;
    
    document.getElementById("txt-login-header-1").innerText = t.farmer + t.loginHeader;
    document.getElementById("txt-login-header-2").innerText = t.customer + t.loginHeader;
    
    document.getElementById("txt-label-1").innerText = t.mobileLabel;
    document.getElementById("txt-label-2").innerText = t.mobileLabel;
    
    document.getElementById("txt-otp-1").innerText = t.sendOtp;
    document.getElementById("txt-otp-2").innerText = t.sendOtp;
    
    document.getElementById("txt-new-1").innerText = t.newHere;
    document.getElementById("txt-new-2").innerText = t.newHere;
    document.getElementById("txt-reg-1").innerText = t.register;
    document.getElementById("txt-reg-2").innerText = t.register;

    // Footer
    document.getElementById("txt-guest").innerText = t.guest;
    document.getElementById("txt-help").innerText = t.help;
}