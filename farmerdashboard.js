document.addEventListener('DOMContentLoaded', () => {
    
    // Select DOM elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Event Listeners
    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    
    // Close sidebar when clicking the overlay (backdrop)
    overlay.addEventListener('click', closeSidebar);

    // Optional: Close sidebar on window resize if screen becomes large
    // (Keeps UI clean if user resizes browser)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeSidebar();
        }
    });
});