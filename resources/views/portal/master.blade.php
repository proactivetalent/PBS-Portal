@extends('adminlte::page')

@section('meta_tags')
    <title>@yield('title', 'PBS Portal')</title>
    <meta name="description" content="@yield('meta_description', 'PBS Portal for property management, alerts, and more.')">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RW51TYX51S"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-RW51TYX51S');
    </script>
@endsection

@section('css')
    @vite(['resources/css/app-optimized.css'])
    <style>
        /* --- Portal Customizations (minified for performance) --- */
        .main-footer{background:#38403e!important;border:0!important;color:#dce2e1!important}.main-footer a.text-muted{color:#a2acaa!important}.main-footer a.text-muted:hover{color:#fff!important}.content-header h1{color:#38403e!important}.info-box-icon{background:#38403e!important}.small-box .icon{color:rgba(255,255,255,.8)!important}.card-header{background:#38403e!important;color:#fff!important;border-bottom:1px solid #505955!important}.card-primary .card-header{background:#38403e!important}.table th{border-top:1px solid #a2acaa!important;color:#38403e!important;font-weight:600!important}.table-striped tbody tr:nth-of-type(odd){background:rgba(162,172,170,.05)!important}.form-group label{color:#38403e!important;font-weight:500!important}.box.box-primary{border-top-color:#38403e!important}.box.box-primary .box-header{background:#38403e!important;color:#fff!important}.badge-primary{background:#38403e!important}.badge-success{background:#5d8a5f!important}.badge-info{background:#6c8a93!important}.badge-warning{background:#b8a05c!important}.badge-danger{background:#a55c5c!important}.nav-tabs .nav-link.active{color:#38403e!important;background:#fff!important;border-color:#38403e #38403e #fff!important}.nav-tabs .nav-link{color:#616c66!important}.nav-tabs .nav-link:hover{color:#38403e!important;border-color:#dce2e1 #dce2e1 #dee2e6!important}
        /* --- Sidebar Logo Alignment & Hover Fix --- */
        .main-sidebar .brand-link{display:flex!important;align-items:center!important;justify-content:center!important;height:70px!important;padding:0!important;background:#38403e!important;border-bottom:1px solid rgba(255,255,255,0.1)!important;position:relative!important;}
        .main-sidebar .brand-link img,.main-sidebar .brand-link .brand-image,.main-sidebar .brand-link .brand-image-xl{height:48px!important;width:auto!important;margin:0 auto!important;display:block!important;background:none!important;box-shadow:none!important;border:none!important;}
        .main-sidebar .brand-link:after,.main-sidebar .brand-link:before{display:none!important;content:none!important;}
        .main-sidebar .brand-link:hover,.main-sidebar .brand-link:focus,.main-sidebar .brand-link:active{background:#38403e!important;box-shadow:none!important;outline:none!important;}
        .main-sidebar .brand-link *:hover,.main-sidebar .brand-link *:focus{background:none!important;box-shadow:none!important;outline:none!important;}
        .main-sidebar .brand-link .brand-text{display:none!important;}
        
        /* --- Fixed Sidebar Scrollbar --- */
        .main-sidebar {
            height: 100vh !important;
            overflow-y: scroll !important;
            overflow-x: hidden !important;
            position: fixed !important;
            width: 250px !important;
        }
        
        .main-sidebar .sidebar {
            height: auto !important;
            overflow: visible !important;
            padding-bottom: 20px !important;
            min-height: 150vh !important;
        }
        
        /* Force proper scrollbar behavior */
        .main-sidebar .nav-sidebar {
            overflow: visible !important;
            height: auto !important;
            min-height: 150vh !important;
            padding-bottom: 100px !important;
        }
        
        /* Custom scrollbar styling - applied to main sidebar */
        .main-sidebar::-webkit-scrollbar {
            width: 8px !important;
        }
        
        .main-sidebar::-webkit-scrollbar-track {
            background: transparent !important;
        }
        
        .main-sidebar::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.5) !important;
            border-radius: 4px !important;
        }
        
        .main-sidebar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(255, 255, 255, 0.7) !important;
        }
        
        /* Firefox scrollbar */
        .main-sidebar {
            scrollbar-width: thin !important;
            scrollbar-color: rgba(255, 255, 255, 0.5) transparent !important;
        }
        
        /* Ensure menu items don't cause horizontal overflow */
        .main-sidebar .nav-item {
            width: 100% !important;
            box-sizing: border-box !important;
        }
        
        .main-sidebar .nav-link {
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }
        
        /* Mobile sidebar overlay and behavior */
        #sidebar-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: rgba(0, 0, 0, 0.7) !important;
            z-index: 1039 !important;
            display: block !important;
            backdrop-filter: blur(3px) !important;
            -webkit-backdrop-filter: blur(3px) !important;
        }
        
        /* Mobile sidebar styles */
        @media (max-width: 768px) {
            body.sidebar-open {
                overflow: hidden !important;
                position: fixed !important;
                width: 100% !important;
                height: 100% !important;
            }
            
            body.sidebar-open .main-sidebar {
                width: 100vw !important;
                left: 0 !important;
                z-index: 1040 !important;
                transform: translateX(0) !important;
                background-color: #38403e !important;
                overflow-y: auto !important;
            }
            
            body:not(.sidebar-open) .main-sidebar {
                transform: translateX(-100%) !important;
                left: 0 !important;
            }
            
            .main-sidebar {
                transition: transform 0.3s ease-in-out !important;
                width: 100vw !important;
                background-color: #38403e !important;
            }
            
            /* Ensure sidebar content is visible and scrollable on mobile */
            .main-sidebar .sidebar {
                background-color: #38403e !important;
                padding: 10px 0 !important;
                height: auto !important;
                min-height: 100vh !important;
            }
            
            .main-sidebar .nav-sidebar {
                background-color: transparent !important;
                padding: 0 !important;
            }
            
            .main-sidebar .nav-item {
                width: 100% !important;
                margin: 0 !important;
            }
            
            .main-sidebar .nav-item .nav-link {
                color: #c2c7d0 !important;
                background-color: transparent !important;
                border-radius: 0 !important;
                margin: 0 !important;
                padding: 15px 25px !important;
                display: flex !important;
                align-items: center !important;
                white-space: nowrap !important;
                text-decoration: none !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
            }
            
            .main-sidebar .nav-item .nav-link:hover,
            .main-sidebar .nav-item .nav-link.active {
                background-color: rgba(255, 255, 255, 0.1) !important;
                color: #ffffff !important;
            }
            
            .main-sidebar .nav-item .nav-link i,
            .main-sidebar .nav-item .nav-link .nav-icon {
                margin-right: 15px !important;
                width: 20px !important;
                text-align: center !important;
                font-size: 16px !important;
            }
            
            .main-sidebar .nav-item .nav-link p {
                margin: 0 !important;
                font-size: 15px !important;
                font-weight: 400 !important;
            }
        }
    </style>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Setup sidebar functionality for both mobile and desktop
            function setupSidebar() {
                const sidebarToggle = document.querySelector('[data-widget="pushmenu"]');
                const body = document.body;
                const isMobile = window.innerWidth <= 768;
                const sidebar = document.querySelector('.main-sidebar');
                
                if (!sidebar || !sidebarToggle) return;
                
                // Make sure sidebar is visible
                sidebar.style.display = 'block';
                sidebar.style.visibility = 'visible';
                
                // Remove existing event listeners
                const newToggle = sidebarToggle.cloneNode(true);
                sidebarToggle.parentNode.replaceChild(newToggle, sidebarToggle);
                
                newToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (isMobile) {
                        // Mobile view: toggle sidebar with overlay and scroll lock
                        body.classList.toggle('sidebar-open');
                        setTimeout(handleMobileSidebar, 10);
                    } else {
                        // Desktop view: toggle sidebar collapsed
                        body.classList.toggle('sidebar-mini');
                        body.classList.toggle('sidebar-collapse');
                    }
                });
                
                // Initialize mobile behavior if needed
                if (isMobile) {
                    handleMobileSidebar();
                } else {
                    // Desktop - ensure no mobile restrictions
                    body.style.overflow = '';
                    body.style.position = '';
                    body.style.width = '';
                    body.style.height = '';
                    removeSidebarOverlay();
                }
            }
            
            // Handle mobile sidebar behavior with scroll prevention
            function handleMobileSidebar() {
                const body = document.body;
                const sidebar = document.querySelector('.main-sidebar');
                const isMobile = window.innerWidth <= 768;
                
                if (!isMobile) return;
                
                if (body.classList.contains('sidebar-open')) {
                    // Sidebar is opening on mobile - prevent page scroll
                    body.style.overflow = 'hidden';
                    body.style.position = 'fixed';
                    body.style.width = '100%';
                    body.style.height = '100%';
                    body.style.top = '0';
                    body.style.left = '0';
                    
                    if (sidebar) {
                        sidebar.style.width = '100vw';
                        sidebar.style.left = '0';
                        sidebar.style.transform = 'translateX(0)';
                        sidebar.style.backgroundColor = '#38403e';
                        sidebar.style.zIndex = '1040';
                    }
                    
                    addSidebarOverlay();
                } else {
                    // Sidebar is closing on mobile - restore page scroll
                    body.style.overflow = '';
                    body.style.position = '';
                    body.style.width = '';
                    body.style.height = '';
                    body.style.top = '';
                    body.style.left = '';
                    
                    if (sidebar) {
                        sidebar.style.transform = 'translateX(-100%)';
                    }
                    
                    removeSidebarOverlay();
                }
            }
            
            // Add overlay for mobile sidebar with improved styling
            function addSidebarOverlay() {
                removeSidebarOverlay(); // Remove any existing overlay
                
                const overlay = document.createElement('div');
                overlay.id = 'sidebar-overlay';
                overlay.style.cssText = `
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    background: rgba(0, 0, 0, 0.7) !important;
                    z-index: 1039 !important;
                    display: block !important;
                    backdrop-filter: blur(3px) !important;
                    -webkit-backdrop-filter: blur(3px) !important;
                `;
                
                overlay.addEventListener('click', function() {
                    const body = document.body;
                    body.classList.remove('sidebar-open');
                    handleMobileSidebar();
                });
                
                // Handle escape key to close sidebar
                const escapeHandler = function(e) {
                    if (e.key === 'Escape') {
                        const body = document.body;
                        body.classList.remove('sidebar-open');
                        handleMobileSidebar();
                        document.removeEventListener('keydown', escapeHandler);
                    }
                };
                document.addEventListener('keydown', escapeHandler);
                
                document.body.appendChild(overlay);
            }
            
            // Remove overlay
            function removeSidebarOverlay() {
                const overlay = document.getElementById('sidebar-overlay');
                if (overlay) overlay.remove();
            }
            
            // Initialize proper scrollbar behavior - AGGRESSIVE APPROACH
            function initSidebarScrollbar() {
                const mainSidebar = document.querySelector('.main-sidebar');
                const isMobile = window.innerWidth <= 768;
                
                if (mainSidebar) {
                    if (isMobile) {
                        // Mobile: ensure sidebar is scrollable
                        mainSidebar.style.height = '100vh';
                        mainSidebar.style.overflowY = 'auto';
                        mainSidebar.style.overflowX = 'hidden';
                        
                        const sidebar = mainSidebar.querySelector('.sidebar');
                        const nav = mainSidebar.querySelector('.nav-sidebar');
                        
                        if (sidebar) {
                            sidebar.style.height = 'auto';
                            sidebar.style.minHeight = '100vh';
                            sidebar.style.overflow = 'visible';
                            sidebar.style.padding = '10px 0';
                        }
                        
                        if (nav) {
                            nav.style.height = 'auto';
                            nav.style.overflow = 'visible';
                            nav.style.paddingBottom = '50px';
                        }
                    } else {
                        // Desktop: force scrollable container
                        mainSidebar.style.height = '100vh';
                        mainSidebar.style.overflowY = 'scroll';
                        mainSidebar.style.overflowX = 'hidden';
                        
                        const sidebar = mainSidebar.querySelector('.sidebar');
                        const nav = mainSidebar.querySelector('.nav-sidebar');
                        
                        if (sidebar) {
                            sidebar.style.height = 'auto';
                            sidebar.style.minHeight = '150vh';
                            sidebar.style.overflow = 'visible';
                            sidebar.style.paddingBottom = '20px';
                        }
                        
                        if (nav) {
                            nav.style.height = 'auto';
                            nav.style.minHeight = '150vh';
                            nav.style.paddingBottom = '100px';
                        }
                        
                        // Force scroll to test
                        mainSidebar.scrollTop = 10;
                        setTimeout(() => {
                            mainSidebar.scrollTop = 0;
                        }, 100);
                    }
                    
                    console.log(`Scrollbar initialized on ${isMobile ? 'mobile' : 'desktop'} sidebar`);
                }
            }
            
            // Fix sidebar menu items styling for both mobile and desktop
            function fixSidebarMenuItems() {
                const menuItems = document.querySelectorAll('.nav-sidebar .nav-item .nav-link');
                const sidebar = document.querySelector('.main-sidebar');
                const isMobile = window.innerWidth <= 768;
                
                // Set the background color for the entire sidebar
                if (sidebar) {
                    sidebar.style.backgroundColor = '#38403e';
                }
                
                menuItems.forEach(item => {
                    // Find icon and text elements
                    const icon = item.querySelector('i, .fa, .fas, .far, .fab, .nav-icon');
                    const text = item.querySelector('p, span:not(.badge):not(.right)');
                    
                    if (!isMobile) {
                        // Desktop styling
                        if (icon) {
                            icon.style.width = '25px';
                            icon.style.textAlign = 'center';
                            icon.style.marginRight = '10px';
                            icon.style.fontSize = '16px';
                        }
                        
                        if (text) {
                            text.style.display = 'block';
                            text.style.overflow = 'hidden';
                            text.style.textOverflow = 'ellipsis';
                            text.style.whiteSpace = 'nowrap';
                            text.style.margin = '0';
                        }
                        
                        // Style the link itself for desktop
                        item.style.display = 'flex';
                        item.style.alignItems = 'center';
                        item.style.padding = '12px 20px';
                        item.style.overflow = 'hidden';
                        item.style.backgroundColor = 'transparent';
                    }
                });
            }
            
            setupSidebar();
            initSidebarScrollbar();
            fixSidebarMenuItems();
            
            // Re-initialize after a delay to ensure DOM is ready
            setTimeout(() => {
                initSidebarScrollbar();
                fixSidebarMenuItems();
            }, 500);
            
            // Re-initialize on window resize with mobile behavior handling
            window.addEventListener('resize', function() {
                setupSidebar();
                setTimeout(() => {
                    initSidebarScrollbar();
                    fixSidebarMenuItems();
                    
                    // Handle mobile sidebar state on resize
                    const isMobile = window.innerWidth <= 768;
                    const body = document.body;
                    
                    if (!isMobile) {
                        // If switching to desktop, clean up mobile state
                        body.style.overflow = '';
                        body.style.position = '';
                        body.style.width = '';
                        body.style.height = '';
                        body.style.top = '';
                        body.style.left = '';
                        removeSidebarOverlay();
                    } else if (body.classList.contains('sidebar-open')) {
                        // If switching to mobile and sidebar is open, apply mobile styles
                        handleMobileSidebar();
                    }
                }, 100);
            });
        });
    </script>
@append


@include('portal.partials.footer')