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
                        // Mobile view: toggle sidebar with overlay
                        body.classList.toggle('sidebar-open');
                        if (body.classList.contains('sidebar-open')) {
                            sidebar.style.width = '280px'; // Set explicit width
                            sidebar.style.left = '0';
                            sidebar.style.backgroundColor = '#38403e'; // Match desktop background
                            
                            // Also set the brand link bg color
                            const brandLink = sidebar.querySelector('.brand-link');
                            if (brandLink) {
                                brandLink.style.backgroundColor = '#38403e';
                            }
                            
                            fixSidebarMenuItems(); // Fix menu items when opening
                            addSidebarOverlay();
                    } else {
                        sidebar.style.left = '-280px';
                        removeSidebarOverlay();
                        }
                    } else {
                        // Desktop view: toggle collapse
                        body.classList.toggle('sidebar-collapse');
                    }
                });
                
                // Reset sidebar based on current state
                if (isMobile) {
                    if (!body.classList.contains('sidebar-open')) {
                        sidebar.style.left = '-280px';
                        removeSidebarOverlay();
                    } else {
                        sidebar.style.width = '280px'; // Set explicit width
                        sidebar.style.left = '0';
                        sidebar.style.backgroundColor = '#38403e'; // Match desktop background
                        
                        // Also set the brand link bg color
                        const brandLink = sidebar.querySelector('.brand-link');
                        if (brandLink) {
                            brandLink.style.backgroundColor = '#38403e';
                        }
                        
                        addSidebarOverlay();
                    }
                }
            }
            
            // Add overlay for mobile sidebar
            function addSidebarOverlay() {
                removeSidebarOverlay(); // Remove any existing overlay
                
                const overlay = document.createElement('div');
                overlay.id = 'sidebar-overlay';
                
                overlay.addEventListener('click', function() {
                    const sidebar = document.querySelector('.main-sidebar');
                    document.body.classList.remove('sidebar-open');
                    if (sidebar) {
                        sidebar.style.left = '-280px';
                    }
                    this.remove();
                });
                
                document.body.appendChild(overlay);
            }
            
            // Remove overlay
            function removeSidebarOverlay() {
                const overlay = document.getElementById('sidebar-overlay');
                if (overlay) overlay.remove();
            }
            
            // Fix sidebar menu items styling
            function fixSidebarMenuItems() {
                // Get all menu items
                const menuItems = document.querySelectorAll('.nav-sidebar .nav-item .nav-link');
                const sidebar = document.querySelector('.main-sidebar');
                
                // Set the background color for the entire sidebar
                if (sidebar) {
                    sidebar.style.backgroundColor = '#38403e';
                    
                    // Set background for child elements
                    const navItems = sidebar.querySelectorAll('.nav-sidebar, .nav-item');
                    navItems.forEach(item => {
                        item.style.backgroundColor = 'transparent';
                    });
                }
                
                menuItems.forEach(item => {
                    // Find icon and text elements
                    const icon = item.querySelector('i, .fa, .fas, .far, .fab, .nav-icon');
                    const text = item.querySelector('p, span:not(.badge):not(.right)');
                    
                    if (icon) {
                        // Style the icon
                        icon.style.width = '25px';
                        icon.style.textAlign = 'center';
                        icon.style.float = 'left';
                        icon.style.fontSize = '16px';
                    }
                    
                    if (text) {
                        // Style the text
                        text.style.display = 'block';
                        text.style.overflow = 'hidden';
                        text.style.textOverflow = 'ellipsis';
                        text.style.whiteSpace = 'nowrap';
                    }
                    
                    // Style the link itself
                    item.style.display = 'flex';
                    item.style.alignItems = 'center';
                    item.style.padding = '12px 20px';
                    item.style.overflow = 'hidden';
                    item.style.backgroundColor = 'transparent';
                });
            }
            
            // Initialize
            setupSidebar();
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    // Remove mobile classes on larger screens
                    document.body.classList.remove('sidebar-open');
                    removeSidebarOverlay();
                }
                
                setupSidebar();
            });
        });
    </script>
@append


@include('portal.partials.footer')