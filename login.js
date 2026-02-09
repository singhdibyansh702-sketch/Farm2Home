document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('language-select');
    langSelect.addEventListener('change', changeLanguage);
});

// --- DATA DEFINITIONS ---
const roleData = {
    farmer: {
        imgSrc: "https://sl.bing.net/i4oWpIvTnbM",
        fallbackImg: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop",
        themeBg: "farmer-theme-bg",
        btnClass: "btn-primary",
        linkClass: "text-green",
        slideDirection: "from-left" // Slide in from Left
    },
    customer: {
        imgSrc: "https://sl.bing.net/czYfpDTj2yW",
        fallbackImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
        themeBg: "customer-theme-bg",
        btnClass: "btn-secondary",
        linkClass: "text-orange",
        slideDirection: "from-right" // Slide in from Right
    }
};

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

let currentRole = null;

function showLoginScreen(role) {
    currentRole = role;
    const lang = document.getElementById("language-select").value;
    const t = translations[lang];
    const data = roleData[role];

    const initialView = document.getElementById('initial-view');
    const footer = document.getElementById('main-footer');
    const overlayContainer = document.getElementById('login-overlay');
    const dynamicInfoPanel = document.getElementById('dynamic-info-panel');
    const loginImg = document.getElementById('login-img');

    // 1. Prepare Overlay Content
    dynamicInfoPanel.className = `info-panel ${data.themeBg}`; 
    loginImg.src = data.imgSrc;
    loginImg.onerror = function() { this.src = data.fallbackImg; };
    
    document.getElementById('login-role-title').innerText = t[role];
    document.getElementById('login-role-desc').innerText = t[role + 'Desc'];
    document.getElementById('login-form-header').innerText = t[role] + t.loginHeader;
    
    document.getElementById('dynamic-otp-btn').className = `btn-primary full-width ${data.btnClass}`;
    document.getElementById('dynamic-reg-link').className = data.linkClass;

    // 2. Set Slide Direction (Reset first)
    overlayContainer.classList.remove('from-left', 'from-right', 'active');
    
    // Force reflow to ensure clean state before adding direction
    void overlayContainer.offsetWidth; 
    
    overlayContainer.classList.add(data.slideDirection);

    // 3. Trigger Animations
    // Small timeout ensures the class addition registers for transition
    setTimeout(() => {
        initialView.classList.add('faded');
        footer.classList.add('faded');
        overlayContainer.classList.add('active');
    }, 10);
}

function resetView() {
    const initialView = document.getElementById('initial-view');
    const footer = document.getElementById('main-footer');
    const overlayContainer = document.getElementById('login-overlay');

    // Slide out
    overlayContainer.classList.remove('active');

    // Fade initial view back in
    setTimeout(() => {
        initialView.classList.remove('faded');
        footer.classList.remove('faded');
        currentRole = null;
    }, 300);
}

function changeLanguage() {
    const lang = document.getElementById("language-select").value;
    const t = translations[lang];

    document.getElementById("txt-tagline").innerText = t.tagline;
    document.getElementById("txt-title").innerText = t.title;
    document.getElementById("txt-subtitle").innerText = t.subtitle;
    document.getElementById("txt-farmer").innerText = t.farmer;
    document.getElementById("txt-farmer-desc").innerText = t.farmerDesc;
    document.getElementById("txt-customer").innerText = t.customer;
    document.getElementById("txt-customer-desc").innerText = t.customerDesc;
    document.getElementById("txt-btn-1").innerText = t.btn + (lang === "en" ? "Farmer" : t.farmer);
    document.getElementById("txt-btn-2").innerText = t.btn + (lang === "en" ? "Customer" : t.customer);
    document.getElementById("txt-guest").innerText = t.guest;
    document.getElementById("txt-help").innerText = t.help;
    document.getElementById("txt-back").innerText = t.back;
    document.getElementById("txt-label-mobile").innerText = t.mobileLabel;
    document.getElementById("txt-otp").innerText = t.sendOtp;
    document.getElementById("txt-new").innerText = t.newHere;
    document.getElementById("dynamic-reg-link").innerText = t.register;

    if (currentRole) {
        document.getElementById('login-role-title').innerText = t[currentRole];
        document.getElementById('login-role-desc').innerText = t[currentRole + 'Desc'];
        document.getElementById('login-form-header').innerText = t[currentRole] + t.loginHeader;
    }
}