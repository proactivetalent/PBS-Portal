@extends('portal.master')

{{-- Include Leaflet CSS and JS for OpenStreetMap --}}
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>

@section('content')
    <div class="dark tab-container">
        <div class="tab-content clearfix" id="tab-karbonsearch">
            <div class="p-5 center" id="form-widget-submitted">
                <i class="icon-line-mail h1 color"></i>
                <h4 class="t400 mb-0 font-body">Thank You for Contact Us! Our Team will contact you asap on your
                    email Address.</h4>
            </div>
            <div id="alert-subscribe-form" class="form-widget">
                <div class="form-result"></div>

                <form action="include/form.php" method="post" class="nobottommargin">
                    <div class="row">
                        <div class="col-md-6 col-12 bottommargin-sm">
                            <label for="karbon-property-borough">Choose Borough</label>
                            <select class="selectpicker form-control" id="borough" data-live-search="false"
                                    data-size="6"
                                    style="width:100%;">
                                <option value="0">Pick a Borough</option>
                                <option value="1">Manhattan</option>
                                <option value="2">Bronx</option>
                                <option value="3">Brooklyn</option>
                                <option value="4">Queens</option>
                                <option value="5">Staten Island</option>
                            </select>
                        </div>
                        <div class="col-md-6 col-12 bottommargin-sm">
                            <label for="house-number">Your House Number:</label>
                            <input class="form-control required typeahead" id="house-number"
                                   name="karbon-property-house-number" placeholder="Enter House Number" required
                                   type="text" value="">
                        </div>
                        <div class="w-100"></div>
                        <div class="col-sm-6 bottommargin-sm">
                            <label for="street-name">Your Street Name:</label>
                            <input class="form-control required" id="street-name"
                                   name="karbon-property-street-name" data-provide="typeahead"
                                   placeholder="Enter Street Name" required
                                   type="text" value="">
                        </div>
                        <div class="col-sm-6 bottommargin-sm">
                            <label for="karbon-property-name">First and Last Name<small
                                    class="text-danger">*</small></label>
                            <input class="form-control required" id="karbon-property-name" name="karbon-property-name"
                                   placeholder="Enter your Full Name" required
                                   type="text" value=""/>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-sm-6 bottommargin-sm">
                            <label for="karbon-property-contact">Contact Number<small
                                    class="text-danger">*</small></label>
                            <input class="form-control required" id="karbon-property-contact"
                                   name="karbon-property-contact"
                                   placeholder="Enter your contact Number" required
                                   type="text" value="">
                        </div>
                        <div class="col-sm-6 bottommargin-sm">
                            <label for="karbon-property-email">Email Address<small
                                    class="text-danger">*</small></label>
                            <input class="form-control required" id="karbon-property-email" name="karbon-property-email"
                                   placeholder="user@company.com" required
                                   type="email" value="">
                        </div>
                        <div id="property-detail-body"></div>
                        <!--											<div class="w-100 d-block d-md-none bottommargin-sm"></div>-->
                        <input type="hidden" name="prefix" value="karbon-property-">
                        <div class="col-md-12 clearfix">
                            <button class="button button-3d button-rounded btn-block nomargin"
                                    style="margin-top: 35px !important;">Subscribe for violations
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="tab-content text-dark clearfix" id="tab-info">
            <h2 class="text-dark">6 months free</h2>
            PBS will serve you by email all violations that was recorded before. Even <strong> whenever your </strong>
            property gets a
            violation you'll get an email from us.<br/>
            <h3 class="text-dark">Now it's free for 6 months</h3> Lorem ipsum
        </div>
    </div>
@stop

@section('js')
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.2/bootstrap3-typeahead.min.js"></script>
    <script type="text/javascript">
        var route = "{{ route('property.search.ac') }}";
        var routeatl = "{{ route('property.list.add') }}";
        $('#street-name').typeahead({
            source: function (term, process) {
                $('#property-detail').hide();
                var borough = $('#borough').val();
                var house = $('#house-number').val();
                return $.get(route, {borough: borough, house: house, term: term}, function (data) {
                    return process(data);
                });
            },
            matcher: function(item){
                return true;
            },
            items: 'all',
            delay: 500,
            minLenght: 3,
            autoSelect: true,
            fitToElement: true,
            displayText: function (item) {
                return item.bin + " - " +item.stname;
            },            afterSelect: function (item) {
                if (item.pluto != null && item.pluto.lat != null && item.pluto.lng != null) {
                    // Create a simple map view using OpenStreetMap instead of Google Street View
                    var mapId = 'property-map-' + Math.random().toString(36).substr(2, 9);
                    $('#property-detail-body').html(
                        '<div id="' + mapId + '" style="height: 200px; width: 100%; border-radius: 8px; border: 1px solid #dce2e1;"></div>' +
                        '<p style="margin-top: 8px; font-size: 0.875rem; color: #616c66; text-align: center;">' +
                        'Property Location: ' + item.stname + 
                        '</p>'
                    );
                    
                    // Initialize Leaflet map for this property
                    setTimeout(function() {
                        var map = L.map(mapId).setView([item.pluto.lat, item.pluto.lng], 16);
                        
                        // Add OpenStreetMap tiles
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                            maxZoom: 19
                        }).addTo(map);
                        
                        // Add marker for the property
                        var propertyIcon = L.divIcon({
                            className: 'custom-property-marker',
                            html: '<div style="background-color:#38403e;width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
                            iconSize: [22, 22],
                            iconAnchor: [11, 11]
                        });
                        
                        L.marker([item.pluto.lat, item.pluto.lng], {icon: propertyIcon})
                         .addTo(map)
                         .bindPopup('<strong>' + item.stname + '</strong><br>BIN: ' + item.bin)
                         .openPopup();
                    }, 100);
                } else {
                    $('#property-detail-body').html('');
                }
                $('#add-to-my-props').on('click', function () {
                    $.post(routeatl, {bin: item.bin, bbl: item.bbl}, function (response) {
                        if (response) {
                            Swal.fire(
                                'Success',
                                'Property Addition Successfull',
                                'success'
                            );

                            //toastr.success("Property Successfuly Added To List");
                            //$file.parent().fadeOut(300, function() { $(this).remove(); })
                        } else {
                            Swal.fire(
                                'Error',
                                'There is an error',
                                'error'
                            );
                            //toastr.error("Property Add Failed.");

                        }
                    });
                    console.log(item);
                });
                $('#property-detail').show();
            }
        });
    </script>
@stop
