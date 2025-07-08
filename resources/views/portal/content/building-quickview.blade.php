@extends('portal.master')

@section('title', 'PBS Portal | Building Quickview')
@section('meta_description', 'Quickly view building details, compliance, and alerts for your properties in the PBS Portal.')
@section('plugins.Datatables', true)

{{--@section('css')--}}
{{--    <style>--}}
{{--        .color-palette {--}}
{{--            height: 35px;--}}
{{--            line-height: 35px;--}}
{{--            text-align: right;--}}
{{--            padding-right: .75rem;--}}
{{--        }--}}

{{--        .color-palette.disabled {--}}
{{--            text-align: center;--}}
{{--            padding-right: 0;--}}
{{--            display: block;--}}
{{--        }--}}

{{--        .color-palette-set {--}}
{{--            margin-bottom: 15px;--}}
{{--        }--}}

{{--        .color-palette span {--}}
{{--            display: none;--}}
{{--            font-size: 12px;--}}
{{--        }--}}

{{--        .color-palette:hover span {--}}
{{--            display: block;--}}
{{--        }--}}

{{--        .color-palette.disabled span {--}}
{{--            display: block;--}}
{{--            text-align: left;--}}
{{--            padding-left: .75rem;--}}
{{--        }--}}

{{--        .color-palette-box h4 {--}}
{{--            position: absolute;--}}
{{--            left: 1.25rem;--}}
{{--            margin-top: .75rem;--}}
{{--            color: rgba(255, 255, 255, 0.8);--}}
{{--            font-size: 12px;--}}
{{--            display: block;--}}
{{--            z-index: 7;--}}
{{--        }--}}
{{--    </style>--}}
{{--@endsection--}}

@section('css')
    <!-- Leaflet CSS for OpenStreetMap -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""/>
    <style>
        #map_wrapper {
            height: 400px;
        }

        #map_canvas {
            width: 100%;
            height: 100%;
        }

        .info_content {
            text-align: center;
        }

        /* Custom marker popup styling */
        .leaflet-popup-content {
            margin: 8px 12px;
            line-height: 1.4;
        }
        
        .leaflet-popup-content h3 {
            margin: 0 0 8px 0;
            font-size: 14px;
            font-weight: bold;
            color: #38403e;
        }
        
        .leaflet-popup-content img {
            max-width: 100px;
            height: auto;
            border-radius: 4px;
            margin-top: 8px;
        }
    </style>
@endsection

@section('content_header')
    <h1 class="m-0 text-dark"><i class="fas fa-puzzle-piece"></i> Property Overview</h1>
@stop


@section('content')
    <div class="row">

        <div class="col-12">

            <div class="card">

                <div class="card-body">
                    <div id="map_wrapper">
                        <div id="map_canvas" class="mapping"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- row  -->
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h31 class="card-title">
                        <i class="far fa-chart-bar"></i>
                        PROPERTY LIST
                    </h31>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <div style="width: 100%;display: inline;">
                        <div style="display: inline; float:right; width: 100%;">
                            <table id="resultstable2" data-order='[[ 0, "desc" ]]'
                                   class="table table-bordered table-striped" autosize="1"
                                   style="page-break-inside: avoid;border-collapse: collapse; width: 100%;"
                                   width="100%"
                                   border="0" cellspacing="0" cellpadding="0" bgcolor="#bdc0c2">
                                <thead>
                                <tr>

                                    <th>ADDRESS</th>
                                    <th>DOB VIOL.</th>
                                    <th>DOB COMP.</th>
                                    <th>ECB HEAR.</th>
                                    <th>ECB VIOL.</th>
                                    <th>ECB PENA.</th>
                                    <th>HPD VIOL.</th>
                                    <th>HPD COMP.</th>
                                    <th>HPD REPA.</th>
                                    <th>311 SER.</th>
                                </tr>
                                </thead>
                                <tbody>
                                @php($propers = \DB::table('property_active_summary')->where('user_id',$user->id)->get())
                                @foreach($propers as $property)
                                    <tr>
                                        <td> {{$property->house_number}} {{$property->stname}} {{\App\Helpers\Helper::getBoroAbbr($property->boro)}}</td>
                                        <td>
                                            <a href="{{route('liveViolationSingle',['buildingid'=>$property->id])}}">{{$property->dob_violations_count}}
                                                <i class="fas fa-search"></i> </a></td>
                                        <td>
                                            <a href="{{route('DOBcomplaintsSingle',['buildingid'=>$property->id])}}">{{$property->dob_complaints_count}}
                                                <i class="fas fa-search"></i> </a></td>
                                        <td>
                                            <a href="{{route('ECBliveHearingsSingle',['buildingid'=>$property->id])}}">{{$property->ecb_hearings_count}}
                                                <i class="fas fa-search"></i> </a></td>
                                        <td>
                                            <a href="{{route('ECBviolationsSingle',['buildingid'=>$property->id])}}">{{$property->ecb_violations_count}}
                                                <i class="fas fa-search"></i> </a></td>
                                        <td>
                                            <a href="{{route('ECBviolationsSingle',['buildingid'=>$property->id])}}">
                                                ${{$property->ecb_violations_penality}} </a>
                                        </td>
                                        <td>
                                            <a href="{{route('HPDliveViolationsSingle',['buildingid'=>$property->id])}}">{{$property->hpd_violations_count}}
                                                <i class="fas fa-search"></i> </a></td>
                                        <td>
                                            <a href="{{route('HPDcomplaintsSingle',['buildingid'=>$property->id])}}"> {{$property->hpd_complaints_count}}
                                                <i class="fas fa-search"></i> </a></td>
                                        <td>
                                            <a href="{{route('HPDrepairsSingle',['buildingid'=>$property->id])}}"> {{$property->hpd_emergency_repairs_count}}
                                                <i class="fas fa-search"></i> </a></td>
                                        <td>
                                            <a href="{{route('SERVICErequests311Single',['buildingid'=>$property->id])}}"> {{$property->service_requests311_count}}
                                                <i class="fas fa-search"></i> </a></td>

                                    </tr>
                                @endforeach
                                {{--                                                @foreach($user->properties as $property)--}}
                                {{--                                                    <tr>--}}
                                {{--                                                        <td> {{$property->house_number}} {{$property->stname}} {{\App\Helpers\Helper::getBoroAbbr($property->boro)}}</td>--}}
                                {{--                                                        <td> <a href="{{route('liveViolationSingle',['buildingid'=>$property->id])}}">{{$property->dobViolations()->isOpen()->count()}} <i class="fas fa-search"></i> </a></td>--}}
                                {{--                                                        <td> <a href="{{route('DOBcomplaintsSingle',['buildingid'=>$property->id])}}">{{$property->dobComplaints->where('status','ACTIVE')->count()}} <i class="fas fa-search"></i> </a> </td>--}}
                                {{--                                                        <td>  <a href="{{route('ECBliveHearingsSingle',['buildingid'=>$property->id])}}">{{$property->oathHearings()->where('hearing_status','DEFAULT')->where('hearing_status','DOCKETED')->count()}} <i class="fas fa-search"></i> </a></td>--}}
                                {{--                                                        <td> <a href="{{route('ECBviolationsSingle',['buildingid'=>$property->id])}}">{{$property->ecbViolations()->where('ecb_violation_status','ACTIVE')->count()}} <i class="fas fa-search"></i> </a> </td>--}}
                                {{--                                                        <td> <a href="{{route('ECBviolationsSingle',['buildingid'=>$property->id])}}"> {{$property->ecbViolations()->where('ecb_violation_status','ACTIVE')->get()->sum('balance_due')}} </a> </td>--}}
                                {{--                                                        <td><a href="{{route('HPDliveViolationsSingle',['buildingid'=>$property->id])}}">{{$property->hpdViolations()->where('violationstatus','Open')->count()}} <i class="fas fa-search"></i> </a> </td>--}}
                                {{--                                                        <td><a href="{{route('HPDcomplaintsSingle',['buildingid'=>$property->id])}}"> {{$property->hpdComplaints()->where('status','OPEN')->count()}}<i class="fas fa-search"></i> </a> </td>--}}
                                {{--                                                        <td><a href="{{route('HPDrepairsSingle',['buildingid'=>$property->id])}}"> {{$property->hpdEmergencyRepairs()->where('omostatusreason','Access')->count()}}<i class="fas fa-search"></i> </a> </td>--}}
                                {{--                                                        <td><a href="{{route('SERVICErequests311Single',['buildingid'=>$property->id])}}"> {{$property->serviceRequests311()->where('status','!=','Closed')->count()}}<i class="fas fa-search"></i> </a> </td>--}}

                                {{--                                                    </tr>--}}
                                {{--                                                @endforeach--}}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>$</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->

@stop

@section('js')
    <!-- page script -->
    <script>
        $(function () {
            $('#resultstable2').DataTable({
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": true,
                "responsive": true,
                "pageLength": 50,

                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;

                    // converting to interger to find total
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };

                    // computing column Total of the complete result
                    var total0 = api
                        .column(1)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal($.parseHTML(b)[0].text);
                        }, 0);

                    var total1 = api
                        .column(2)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal($.parseHTML(b)[0].text);
                        }, 0);

                    var total2 = api
                        .column(3)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal($.parseHTML(b)[0].text);
                        }, 0);

                    var total3 = api
                        .column(4)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal($.parseHTML(b)[0].text);
                        }, 0);

                    var total4 = api
                        .column(5)
                        .data()
                        .reduce(function (a, b) {
                            return "$ " + (intVal(a) + intVal($.parseHTML(b)[0].text)).toFixed(2);
                        }, 0);
                    var total5 = api
                        .column(6)
                        .data()
                        .reduce(function (a, b) {
                            return (intVal(a) + intVal($.parseHTML(b)[0].text));
                        }, 0);
                    var total6 = api
                        .column(7)
                        .data()
                        .reduce(function (a, b) {
                            return (intVal(a) + intVal($.parseHTML(b)[0].text));
                        }, 0);
                    var total7 = api
                        .column(8)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal($.parseHTML(b)[0].text);
                        }, 0);
                    var total8 = api
                        .column(9)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal($.parseHTML(b)[0].text);
                        }, 0);


                    // Update footer by showing the total with the reference of the column index
                    $(api.column(0).footer()).html('Total');
                    $(api.column(1).footer()).html(total0);
                    $(api.column(2).footer()).html(total1);
                    $(api.column(3).footer()).html(total2);
                    $('#totalecb').html(total2);
                    $(api.column(4).footer()).html(total3);
                    $(api.column(5).footer()).html(total4);
                    $('#balance').html(total4);
                    $(api.column(6).footer()).html(total5);
                    $(api.column(7).footer()).html(total6);
                    $(api.column(8).footer()).html(total7);
                    $(api.column(9).footer()).html(total8);
                },
                "processing": true,
                "serverSide": false,
                buttons: [
                    {
                        extend: 'copyHtml5',
                        text: '<i class="fas fa-copy" style="font-size: 1.2em;"></i>',
                        titleAttr: 'Copy'
                    },
                    {
                        extend: 'excelHtml5',
                        text: '<i class="fas fa-file-excel" style="font-size: 1.2em;"></i>',
                        titleAttr: 'Excel'
                    },
                    {
                        extend: 'csvHtml5',
                        text: '<i class="fas fa-file-alt" style="font-size: 1.2em;"></i>',
                        titleAttr: 'CSV'
                    },
                    {
                        extend: 'pdfHtml5',
                        text: '<i class="fas fa-file-pdf" style="font-size: 1.2em;"></i>',
                        titleAttr: 'PDF'
                    }
                ],
                dom: "<'row'<'col-sm-12 col-md-4'l><'col-sm-12 col-md-4 text-center'B><'col-sm-12 col-md-4'f>>" +
                    "<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",

            });
            // $('#resultstable2').DataTable({
            //     "paging": true,
            //     "lengthChange": true,
            //     "searching": true,
            //     "ordering": true,
            //     "info": true,
            //     "autoWidth": true,
            //     "responsive": true,
            //
            //     "footerCallback": function (row, data, start, end, display) {
            //         var api = this.api(), data;
            //
            //         // converting to interger to find total
            //         var intVal = function (i) {
            //             return typeof i === 'string' ?
            //                 i.replace(/[\$,]/g, '') * 1 :
            //                 typeof i === 'number' ?
            //                     i : 0;
            //         };
            //
            //         // computing column Total of the complete result
            //         var total0 = api
            //             .column(1)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //
            //         var total1 = api
            //             .column(2)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //
            //         var total2 = api
            //             .column(3)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //
            //         var total3 = api
            //             .column(4)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //
            //         var total4 = api
            //             .column(5)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //         var total5 = api
            //             .column(6)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //         var total6 = api
            //             .column(7)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //         var total7 = api
            //             .column(8)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //         var total8 = api
            //             .column(9)
            //             .data()
            //             .reduce(function (a, b) {
            //                 return intVal(a) + intVal(b);
            //             }, 0);
            //
            //
            //         // Update footer by showing the total with the reference of the column index
            //         $(api.column(0).footer()).html('Total');
            //         $(api.column(1).footer()).html(total0);
            //         $(api.column(2).footer()).html(total1);
            //         $(api.column(3).footer()).html(total2);
            //         $(api.column(4).footer()).html(total3);
            //         $(api.column(5).footer()).html(total4);
            //         $(api.column(6).footer()).html(total5);
            //         $(api.column(7).footer()).html(total6);
            //         $(api.column(8).footer()).html(total7);
            //         $(api.column(9).footer()).html(total8);
            //     },
            //     "processing": true,
            //     "serverSide": false,
            //     buttons: [
            //         {
            //             extend: 'copyHtml5',
            //             text: '<i class="fas fa-copy" style="font-size: 1.2em;"></i>',
            //             titleAttr: 'Copy'
            //         },
            //         {
            //             extend: 'excelHtml5',
            //             text: '<i class="fas fa-file-excel" style="font-size: 1.2em;"></i>',
            //             titleAttr: 'Excel'
            //         },
            //         {
            //             extend: 'csvHtml5',
            //             text: '<i class="fas fa-file-alt" style="font-size: 1.2em;"></i>',
            //             titleAttr: 'CSV'
            //         },
            //         {
            //             extend: 'pdfHtml5',
            //             text: '<i class="fas fa-file-pdf" style="font-size: 1.2em;"></i>',
            //             titleAttr: 'PDF'
            //         }
            //     ],
            //     dom: "<'row'<'col-sm-12 col-md-4'l><'col-sm-12 col-md-4 text-center'B><'col-sm-12 col-md-4'f>>" +
            //         "<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
            //
            // });
        });
    </script>    <!-- Leaflet JavaScript for OpenStreetMap -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>

    <script>
        jQuery(function ($) {
            // Initialize the map with Leaflet.js (OpenStreetMap)
            initializeLeafletMap();
        });

        function initializeLeafletMap() {
            // Initialize the map centered on New York City
            var map = L.map('map_canvas').setView([40.7589, -73.9851], 10);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19
            }).addTo(map);

            // Custom icon for property markers
            var propertyIcon = L.divIcon({
                className: 'custom-div-icon',
                html: '<div style="background-color:#38403e;width:12px;height:12px;border-radius:50%;border:2px solid white;"></div>',
                iconSize: [16, 16],
                iconAnchor: [8, 8]
            });

            // Array to hold all markers for bounds calculation
            var markers = [];

            @foreach($user->properties as $property)
            @if($property->lat && $property->lng)
            // Create marker for each property
            var marker = L.marker([{{$property->lat}}, {{$property->lng}}], {icon: propertyIcon}).addTo(map);
            
            // Create popup content
            var popupContent = '<div class="info_content">' +
                '<h3>{{$property->house_number}} {{$property->stname}}, {{\App\Helpers\Helper::getBoroName($property->boro)}}</h3>' +
                '<p><img src="{{$property->image()}}" style="max-width:100px;height:auto;"></p>' +
                '</div>';
            
            marker.bindPopup(popupContent);
            markers.push(marker);
            @endif
            @endforeach

            // Fit map to show all markers if we have any
            if (markers.length > 0) {
                var group = new L.featureGroup(markers);
                map.fitBounds(group.getBounds().pad(0.1));
                
                // Set maximum zoom level after fitting bounds
                if (map.getZoom() > 15) {
                    map.setZoom(15);
                }
            }
        }
    </script>
@stop
