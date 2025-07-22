<!-- Loginfooter: Shared footer for all auth pages -->
<footer class="footer">
    <div class="footer-container">
        <div class="footer-content">
            <!-- Menu Columns -->
            <div class="footer-menu">
                <div class="footer-menu-section">
                    <h3>Useful Links</h3>
                    <ul class="footer-menu-list">
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/about-us" class="footer-menu-link">About Us</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/contacts" class="footer-menu-link">Contact Us</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/faqs" class="footer-menu-link">FAQs</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/terms-of-service" class="footer-menu-link">Terms of Service</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/privacy-policy" class="footer-menu-link">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-menu-section">
                    <h3>Resources</h3>
                    <ul class="footer-menu-list">
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/press" class="footer-menu-link">Press</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/blog" class="footer-menu-link">Blog</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/law/local-law" class="footer-menu-link">Local Law guide</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/alert" class="footer-menu-link">Alert System guide</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-menu-section">
                    <h3>Services & Solutions</h3>
                    <ul class="footer-menu-list">
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/property-management" class="footer-menu-link">Property Management</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/owner-representative" class="footer-menu-link">Owner Representative</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/inspection-services" class="footer-menu-link">Inspection Services</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/expediting-services" class="footer-menu-link">Expediting Services</a>
                        </li>
                        <li class="footer-menu-item">
                            <span class="footer-dot-icon"></span>
                            <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/alert" class="footer-menu-link">Alert Service</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Subscribe Section -->
            <div class="footer-subscribe">
                <h3>Subscribe</h3>
                <p>Join our community to receive updates</p>
                <!-- Email Subscription Form -->
                <form class="footer-form" id="newsletter-subscribe-form" method="post" action="/subscribe">
                    {{ csrf_field() }}
                    <input type="email" name="widget-subscribe-form-email" id="newsletter-email" placeholder="Enter your email" aria-label="Email address" required>
                    <button type="submit">Subscribe</button>
                </form>
                <div id="newsletter-subscribe-result" style="margin-top:10px;color:#2ecc40;"></div>
                <p class="footer-form-disclaimer">By subscribing, you agree to our Privacy Policy</p>
            </div>
        </div>
        <!-- Divider -->
        <div class="footer-divider"></div>
        <!-- Bottom Section -->
        <div class="footer-bottom">
            <!-- Logo -->
            <div class="footer-logo">
                <img src="{{ asset('pics/LOGO.png') }}" alt="PBS NYC Logo" onerror="this.onerror=null; this.style.display='none'; this.parentNode.insertBefore(document.createTextNode('PBS NYC'), this);">
            </div>
            <!-- Copyright Notice -->
            <p class="footer-copyright">
                © {{ date('Y') }} PBS NYC. All rights reserved
            </p>
            <!-- Privacy Links -->
            <div class="footer-links">
                <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/" class="footer-link" aria-label="View Privacy Policy">
                    Privacy Policy
                </a>
                <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/" class="footer-link" aria-label="View Terms of Service">
                    Terms of Service
                </a>
                <a href="{{ env('NEXTJS_FRONTEND_URL', 'https://pbs.nyc') }}/" class="footer-link" aria-label="View Cookie Policy">
                    Cookie Policy
                </a>
            </div>
        </div>
    </div>
</footer>
<!-- Newsletter AJAX logic -->
<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<script>
$(document).ready(function() {
    $('#newsletter-subscribe-form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        var $result = $('#newsletter-subscribe-result');
        $result.text('');
        $.ajax({
            url: $form.attr('action'),
            type: 'POST',
            data: $form.serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(data) {
                if (data && data.message) {
                    $result.css('color', '#2ecc40').html(data.message);
                } else {
                    $result.css('color', '#2ecc40').text('Subscribed successfully!');
                }
            },
            error: function(xhr) {
                var msg = 'Subscription failed.';
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    msg = xhr.responseJSON.message;
                }
                $result.css('color', '#e74c3c').html(msg);
            }
        });
    });
});
</script>
