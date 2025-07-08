import './bootstrap';

// PBS Portal - Collapsed Sidebar Enhancement
// Ensures collapsed sidebar appears as thin green strip with icons only
document.addEventListener('DOMContentLoaded', function() {
    function ensureCollapsedSidebarBehavior() {
        const sidebar = document.querySelector('.main-sidebar');
        const body = document.body;
        
        if (sidebar && (body.classList.contains('sidebar-collapse') || 
            (body.classList.contains('sidebar-mini') && body.classList.contains('sidebar-collapse')))) {
            
            // Force collapsed sidebar properties
            sidebar.style.width = '4.6rem';
            sidebar.style.display = 'block';
            sidebar.style.visibility = 'visible';
            sidebar.style.opacity = '1';
            sidebar.style.backgroundColor = '#38403e';
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
            sidebar.style.height = '100vh';
            sidebar.style.zIndex = '1000';
            sidebar.style.overflow = 'hidden';
            
            // Adjust navbar positioning - NO GAP
            const navbar = document.querySelector('.main-header.navbar');
            if (navbar) {
                navbar.style.marginLeft = '4.6rem';
                navbar.style.left = '4.6rem';
                navbar.style.width = 'calc(100% - 4.6rem)';
                navbar.style.position = 'fixed';
                navbar.style.top = '0';
                navbar.style.right = '0';
                navbar.style.borderLeft = 'none';
                navbar.style.boxShadow = 'none';
                
                // Fix burger icon positioning in collapsed state
                const burgerIcon = navbar.querySelector('[data-widget="pushmenu"]');
                if (burgerIcon) {
                    burgerIcon.style.position = 'relative';
                    burgerIcon.style.left = '0';
                    burgerIcon.style.transform = 'none';
                    burgerIcon.style.margin = '0.2rem 0';
                    burgerIcon.style.padding = '0.3rem 0.5rem';
                    burgerIcon.style.fontSize = '0.9rem';
                    burgerIcon.style.lineHeight = '1.2';
                }
                
                // Ensure navbar nav container is properly positioned
                const navbarNav = navbar.querySelector('.navbar-nav');
                if (navbarNav) {
                    navbarNav.style.marginLeft = '0';
                    navbarNav.style.paddingLeft = '0.5rem';
                }
            }
            
            // Adjust content wrapper
            const contentWrapper = document.querySelector('.content-wrapper');
            if (contentWrapper) {
                contentWrapper.style.marginLeft = '4.6rem';
            }
            
            // Hide brand text elements
            const brandTexts = sidebar.querySelectorAll('.brand-link *:not(.brand-image):not(img)');
            brandTexts.forEach(element => {
                element.style.display = 'none';
                element.style.visibility = 'hidden';
                element.style.opacity = '0';
            });
            
            // Remove tooltip attributes from navigation links in collapsed state
            const navLinks = sidebar.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.hasAttribute('title')) {
                    link.removeAttribute('title');
                }
                if (link.hasAttribute('data-original-title')) {
                    link.removeAttribute('data-original-title');
                }
                if (link.hasAttribute('data-toggle') && link.getAttribute('data-toggle') === 'tooltip') {
                    link.removeAttribute('data-toggle');
                }
            });
        }
    }
    
    // Run on load
    ensureCollapsedSidebarBehavior();
    
    // Watch for sidebar toggle
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                setTimeout(ensureCollapsedSidebarBehavior, 50);
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
    
    // Listen for hamburger menu clicks
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-widget="pushmenu"]') || 
            e.target.closest('[data-widget="pushmenu"]')) {
            setTimeout(ensureCollapsedSidebarBehavior, 100);
        }
    });
});
