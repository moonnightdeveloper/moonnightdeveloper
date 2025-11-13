// main.js - Global Navbar Styles and Functionality with Bootstrap Integration

// Bootstrap CDN and additional styles
const bootstrapAndStyles = `
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

<style>
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #1C1B1F;
    background-color: #ffe3e3ff !important;
    font-size: 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Bootstrap Overrides for Custom Design */
.navbar-brand {
    font-weight: 700 !important;
    font-size: 1.5rem !important;
    color: #dfe7f6ff !important;
}

.navbar-nav .nav-link {
    font-weight: 500;
    transition: all 0.3s ease;
    color: #1C1B1F !important;
}

.navbar-nav .nav-link:hover {
    color: #1c3974 !important;
}

.navbar-nav .nav-link.active {
    color: #1c3974 !important;
    font-weight: 600;
}

.btn-primary {
    background-color: #1c3974 !important;
    border-color: #1c3974 !important;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: #4a74c7 !important;
    border-color: #4a74c7 !important;
    transform: translateY(-1px);
}

.btn-outline-primary {
    color: #1c3974 !important;
    border-color: #1c3974 !important;
}

.btn-outline-primary:hover {
    background-color: #1c3974 !important;
    border-color: #1c3974 !important;
    color: white !important;
}

/* Main content area */
.main-content {
    flex: 1;
    padding: 40px 20px;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    animation: fadeIn 0.5s ease-in;
}

/* Loading animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Blog specific styles */
.blog-container {
    background: white;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.blog-title {
    font-size: 1.5rem;
    color: #1c3974;
    margin-bottom: 20px;
    text-align: center;
}

.blog-content {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
}

.blog-content p {
    margin-bottom: 20px;
}

/* Custom Header Styles */
.custom-header {
    background-color: white !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1020;
    padding: 12px 0;
    transition: all 0.3s ease;
}

.custom-header.scrolled {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    padding: 8px 0;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}

.creator-info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.logo {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background: linear-gradient(135deg, #1c3974, #4a74c7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white;
    font-size: 18px;
    transition: transform 0.3s ease;
    cursor: pointer;
    text-decoration: none;
}

.logo:hover {
    transform: scale(1.05);
    color: white;
    text-decoration: none;
}

.creator-name {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
}

.creator-name a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
}

.creator-name a:hover {
    color: #1c3974;
    text-decoration: none;
}

.supporter-count {
    font-size: 14px;
    color: #717171;
    margin: 0;
}

/* Custom Tabs for Desktop */
.custom-tabs {
    display: flex;
    gap: 20px;
    align-items: center;
}

.custom-tab {
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    color: #1C1B1F;
    text-decoration: none;
    position: relative;
    transition: color 0.2s;
    white-space: nowrap;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.custom-tab:hover {
    color: #1c3974;
    background-color: rgba(28, 57, 116, 0.05);
    text-decoration: none;
}

.custom-tab.active {
    color: #1c3974;
    font-weight: 600;
}

.custom-tab.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1c3974;
    border-radius: 2px;
}

/* Footer Styles */
.custom-footer {
    background-color: #1c3974;
    color: white;
    padding: 40px 0 20px;
    margin-top: auto;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
}

.footer-link {
    color: white;
    text-decoration: none;
    font-size: 12px;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border-radius: 3px;
}

.footer-link:hover {
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
}

.footer-divider {
    width: 1px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0.3);
}

.footer-cta h5 {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.8;
    margin: 0;
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #1c3974;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: #4a74c7;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Loading Spinner */
.loading-spinner {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.loading-spinner.active {
    display: flex;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #1c3974;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Toast Notifications */
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1090;
}

.custom-toast {
    background: #1c3974;
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.custom-toast.success {
    background: #10b981;
}

.custom-toast.error {
    background: #ef4444;
}

.custom-toast.warning {
    background: #f59e0b;
}

.custom-toast.info {
    background: #3b82f6;
}

/* Enhanced Bootstrap Cards */
.enhanced-card {
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.enhanced-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #0f172a;
        color: #e2e8f0;
    }
    
    .blog-container {
        background: #1e293b;
        color: #e2e8f0;
    }
    
    .custom-header {
        background-color: #1e293b;
        border-bottom: 1px solid #334155;
    }
    
    .custom-tab {
        color: #e2e8f0;
    }
    
    .custom-tab:hover {
        color: #60a5fa;
    }
    
    .enhanced-card {
        background-color: #1e293b;
        color: #e2e8f0;
    }
}

/* Responsive Styles */
@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
    
    .main-content {
        padding: 20px 15px;
    }

    .blog-container {
        padding: 25px;
        margin-top: 10px;
    }

    .blog-title {
        font-size: 0.5rem;
    }

    .footer-links {
        flex-direction: column;
        gap: 10px;
    }

    .footer-divider {
        display: none;
    }
    
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
    }
    
    .custom-tabs {
        display: none;
    }
    
    .navbar-nav {
        text-align: center;
    }
    
    /* REMOVE AUTH BUTTONS ON MOBILE */
    .auth-buttons {
        display: none !important;
    }
}

@media (min-width: 769px) {
    .navbar-toggler {
        display: none;
    }
    
    /* Show auth buttons only on desktop */
    .auth-buttons {
        display: flex;
        gap: 10px;
        align-items: center;
    }
}

/* Bootstrap Navbar Customization */
.navbar-custom {
    padding: 0.5rem 0;
}

.navbar-nav .nav-item {
    margin: 0 5px;
}

/* Utility Classes */
.gradient-bg {
    background: linear-gradient(135deg, #1c3974, #4a74c7);
}

.text-primary-custom {
    color: #1c3974 !important;
}

.bg-primary-custom {
    background-color: #1c3974 !important;
}

/* Fix for navbar toggler alignment */
.navbar-toggler {
    border: none;
    padding: 4px 8px;
}

.navbar-toggler:focus {
    box-shadow: none;
}

/* Ensure proper spacing for auth buttons */
.auth-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>
`;

// Enhanced page detection with URL parameters support
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');

    // Map file names to page keys
    const pageMap = {
        'index.html': 'home',
        'index': 'home',
        '': 'home',
        'about.html': 'about',
        'about': 'about',
        'services.html': 'services',
        'services': 'services',
        'team.html': 'team',
        'team': 'team',
        'project.html': 'project',
        'project': 'project',
        'blog.html': 'blog',
        'blog': 'blog',
        'contact.html': 'contact',
        'contact': 'contact',
        'Contact.html': 'contact'
    };

    return pageParam || pageMap[page] || 'home';
}

// Bootstrap-enhanced Navbar HTML Structure
function createNavbarHTML(currentPage = null) {
    if (!currentPage) {
        currentPage = getCurrentPage();
    }

    const pages = {
        'home': { name: 'Home', url: 'index.html' },
        'about': { name: 'About', url: 'about.html' },
        'services': { name: 'Services', url: 'services.html' },
        'team': { name: 'Team', url: 'team.html' },
        'project': { name: 'Projects', url: 'project.html' },
        'blog': { name: 'Blog', url: 'blog.html' },
        'contact': { name: 'Contact', url: 'contact.html' }
    };

    let navItemsHTML = '';
    for (const [key, value] of Object.entries(pages)) {
        const isActive = key === currentPage ? 'active' : '';
        navItemsHTML += `
            <li class="nav-item">
                <a class="nav-link ${isActive}" href="${value.url}">${value.name}</a>
            </li>`;
    }

    return `
    <!-- Bootstrap Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light custom-header">
        <div class="container header-container">
            <!-- Brand/Logo -->
            <div class="creator-info">
                <a href="index.html" class="logo">MND</a>
                <div>
                    <a href="index.html" class="creator-name navbar-brand">MND</a>
                    <p class="supporter-count">Development</p>
                </div>
            </div>

            <!-- Mobile Toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation Items -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    ${navItemsHTML}
                </ul>
                
                <!-- Auth Buttons - Hidden on Mobile -->
                <!-- <div class="auth-buttons d-none d-lg-flex">
                    <button class="btn btn-outline-primary me-2" onclick="MND.handleAuth('login')">Log in</button>
                    <button class="btn btn-primary" onclick="MND.handleAuth('signup')">Sign up</button>
                </div>-->
            </div>
        </div>
    </nav>
    `;
}

// Toast notification system using Bootstrap Toasts
function showToast(message, type = 'info', duration = 3000) {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toastId = 'toast-' + Date.now();
    const toastHTML = `
        <div id="${toastId}" class="toast custom-toast ${type}" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <i class="bi bi-${getToastIcon(type)} me-2"></i>
                <strong class="me-auto">MND Development</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    const toastElement = document.getElementById(toastId);
    
    // Check if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        const toast = new bootstrap.Toast(toastElement, { delay: duration });
        toast.show();

        // Remove toast from DOM after it's hidden
        toastElement.addEventListener('hidden.bs.toast', () => {
            if (toastElement && toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
            }
        });
    } else {
        // Fallback if Bootstrap is not available
        toastElement.style.display = 'block';
        setTimeout(() => {
            if (toastElement && toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
            }
        }, duration);
    }
}

function getToastIcon(type) {
    const icons = {
        'success': 'check-circle-fill',
        'error': 'exclamation-circle-fill',
        'warning': 'exclamation-triangle-fill',
        'info': 'info-circle-fill'
    };
    return icons[type] || 'info-circle-fill';
}

// Loading spinner management
function showLoading() {
    let spinner = document.querySelector('.loading-spinner');
    if (!spinner) {
        spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = `
            <div class="spinner"></div>
            <p class="mt-3 text-primary-custom">Loading...</p>
        `;
        document.body.appendChild(spinner);
    }
    spinner.classList.add('active');
}

function hideLoading() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.classList.remove('active');
    }
}

// Auth handler function
function handleAuth(type) {
    showLoading();
    setTimeout(() => {
        hideLoading();
        showToast(
            `${type === 'login' ? 'Login' : 'Signup'} functionality coming soon!`, 
            'info', 
            2000
        );
    }, 1000);
}

// Enhanced Navbar Functionality
function initializeNavbar() {
    // Add Bootstrap and custom styles to document
    const styleSheet = document.createElement('div');
    styleSheet.innerHTML = bootstrapAndStyles;
    document.head.appendChild(styleSheet);

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.custom-header');
        if (header && window.scrollY > 50) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
    });

    // Initialize back to top button
    initializeBackToTop();

    // Close mobile menu when clicking on a nav link
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                // Use Bootstrap's collapse method if available
                if (typeof bootstrap !== 'undefined') {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                } else {
                    // Fallback if Bootstrap not available
                    navbarCollapse.classList.remove('show');
                }
            }
        }
    });
}

// Back to top functionality
function initializeBackToTop() {
    let backToTop = document.querySelector('.back-to-top');
    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="bi bi-chevron-up"></i>';
        backToTop.setAttribute('aria-label', 'Back to top');
        backToTop.setAttribute('type', 'button');
        document.body.appendChild(backToTop);
    }

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Enhanced layout setup with Bootstrap components
function setupPageLayout(currentPage = null) {
    // Show loading spinner during setup
    showLoading();

    setTimeout(() => {
        try {
            // Check if navbar already exists
            if (!document.querySelector('.custom-header')) {
                // Add navbar
                const navbarHTML = createNavbarHTML(currentPage);
                document.body.insertAdjacentHTML('afterbegin', navbarHTML);
            }

            // Create main content area if it doesn't exist
            if (!document.querySelector('.main-content')) {
                const mainContent = document.createElement('main');
                mainContent.className = 'main-content';

                // Move existing body content into main content area
                const bodyChildren = Array.from(document.body.children);
                bodyChildren.forEach(child => {
                    if (!child.classList.contains('custom-header') && !child.classList.contains('custom-footer') && !child.classList.contains('back-to-top')) {
                        mainContent.appendChild(child);
                    }
                });
                document.body.appendChild(mainContent);
            }

            // Add footer if it doesn't exist
            if (!document.querySelector('.custom-footer')) {
                const footerHTML = `
                <footer class="custom-footer">
                    <div class="footer-container">
                        <div class="footer-links">
                            <a href="services.html" class="footer-link">Services</a>
                            <div class="footer-divider"></div>
                            <a href="team.html" class="footer-link">Our Team</a>
                            <div class="footer-divider"></div>
                            <a href="privacy.html" class="footer-link">Privacy Policy</a>
                            <div class="footer-divider"></div>
                            <a href="term.html" class="footer-link">Terms of Service</a>
                        </div>
                        <div class="footer-cta text-center">
                            <h5>© Copyright ${new Date().getFullYear()} by MND. All rights reserved!</h5>
                        </div>
                    </div>
                </footer>
                `;
                document.body.insertAdjacentHTML('beforeend', footerHTML);
            }

            // Initialize functionality
            initializeNavbar();
            
            // Hide loading spinner
            hideLoading();
            
            // Show welcome message
            setTimeout(() => {
                showToast('Welcome to MND Development!', 'success', 2000);
            }, 500);
        } catch (error) {
            console.error('Error setting up page layout:', error);
            hideLoading();
        }
    }, 500);
}

// Enhanced Blog content setup with Bootstrap components
function setupBlogContent() {
    const blogContainer = document.querySelector('.blog-container');
    if (blogContainer && !blogContainer.innerHTML.trim()) {
        blogContainer.innerHTML = `
            <div class="container">
                <h1 class="blog-title text-center mb-5">Welcome to Our Blog</h1>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4">
                        <div class="card enhanced-card h-100">
                            <img src="https://via.placeholder.com/300x200/1c3974/ffffff?text=Web+Dev" class="card-img-top" alt="Web Development">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Web Development Trends</h5>
                                <p class="card-text flex-grow-1">Latest trends and technologies in modern web development.</p>
                                <a href="#" class="btn btn-primary mt-auto">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card enhanced-card h-100">
                            <img src="https://via.placeholder.com/300x200/4a74c7/ffffff?text=UI+UX" class="card-img-top" alt="UI/UX Design">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">UI/UX Best Practices</h5>
                                <p class="card-text flex-grow-1">Essential principles for creating great user experiences.</p>
                                <a href="#" class="btn btn-primary mt-auto">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card enhanced-card h-100">
                            <img src="https://via.placeholder.com/300x200/1c3974/ffffff?text=Mobile+App" class="card-img-top" alt="Mobile Development">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Mobile First Approach</h5>
                                <p class="card-text flex-grow-1">Why mobile-first design is crucial in today's landscape.</p>
                                <a href="#" class="btn btn-primary mt-auto">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Enhanced Security Features
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showToast('Right-click is disabled for security', 'warning', 2000);
});

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.addEventListener('keydown', (e) => {
    if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    ) {
        showToast('This action is not allowed', 'error', 2000);
        e.preventDefault();
        return false;
    }
});

// Enhanced Main initialization
document.addEventListener('DOMContentLoaded', function () {
    // Check if Bootstrap is already loaded
    if (typeof bootstrap === 'undefined') {
        // Load Bootstrap JS dynamically
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
        bootstrapScript.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
        bootstrapScript.crossOrigin = 'anonymous';
        
        bootstrapScript.onload = function() {
            // Setup page layout with navbar and footer after Bootstrap loads
            setupPageLayout();
            setupBlogContent();
            
            // Show welcome message
            setTimeout(() => {
                showToast('Welcome to MND Development!', 'success', 2000);
            }, 1000);
        };
        
        bootstrapScript.onerror = function() {
            // Fallback if Bootstrap fails to load
            console.warn('Bootstrap failed to load, using fallback setup');
            setupPageLayout();
            setupBlogContent();
        };
        
        document.head.appendChild(bootstrapScript);
    } else {
        // Bootstrap already loaded
        setupPageLayout();
        setupBlogContent();
    }
});

// Enhanced fallback for older browsers
window.addEventListener('load', function () {
    // Remove loading spinner if still present
    hideLoading();
    
    // Ensure back to top button is initialized
    initializeBackToTop();
});

// Export enhanced functions for global access
window.MND = {
    getCurrentPage,
    setupPageLayout,
    initializeNavbar,
    showToast,
    showLoading,
    hideLoading,
    handleAuth,
    initializeBackToTop
};

// Add error handling for better user experience
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
    showToast('An error occurred. Please refresh the page.', 'error', 4000);
});

// Add offline detection
window.addEventListener('offline', function() {
    showToast('You are currently offline', 'warning', 5000);
});

window.addEventListener('online', function() {
    showToast('Connection restored', 'success', 3000);
});

// Initialize tooltips when Bootstrap is loaded
function initializeBootstrapComponents() {
    // Check if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        // Initialize popovers
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }
}

// Call this after a delay to ensure Bootstrap is loaded
setTimeout(() => {
    initializeBootstrapComponents();
}, 1000);

// Prevent zoom on mobile devices
function preventZoom() {
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(viewport);
    }
    
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Initialize zoom prevention
preventZoom();