document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the dropdown
    const langSelect = document.getElementById('language-select');
    langSelect.addEventListener('change', changeLanguage);
});

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
        newHere: "नवीन आहात?",
        register: "नोंदणी करा >"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language-select").value;
    const t = translations[lang];

    // Header & Intro
    document.getElementById("txt-tagline").innerText = t.tagline;
    document.getElementById("txt-title").innerText = t.title;
    document.getElementById("txt-subtitle").innerText = t.subtitle;
    
    // Farmer Card
    document.getElementById("txt-farmer").innerText = t.farmer;
    document.getElementById("txt-farmer-desc").innerText = t.farmerDesc;
    document.getElementById("txt-btn-1").innerText = t.btn + (lang === "en" ? "Farmer" : t.farmer);
    document.getElementById("txt-new-1").innerText = t.newHere;
    document.getElementById("lnk-reg-1").innerText = t.register;

    // Customer Card
    document.getElementById("txt-customer").innerText = t.customer;
    document.getElementById("txt-customer-desc").innerText = t.customerDesc;
    document.getElementById("txt-btn-2").innerText = t.btn + (lang === "en" ? "Customer" : t.customer);
    document.getElementById("txt-new-2").innerText = t.newHere;
    document.getElementById("lnk-reg-2").innerText = t.register;

    // Footer
    document.getElementById("txt-guest").innerText = t.guest;
    document.getElementById("txt-help").innerText = t.help;
}