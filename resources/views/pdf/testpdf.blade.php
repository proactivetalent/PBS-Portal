<!DOCTYPE html>
<html>
<head>
    <title>Summary Report</title>
    <style>
        @page {
            footer: page-footer;
            header: page-header;
            margin: 35pt 0 50pt;
            margin-footer: 18pt;
        }

        @page :first {
            margin-top: 0;
        }

        body {
            margin: 0;
            font-family: sans-serif;
            font-size: 12pt;
        }

        table, tr, td {
            padding: 0;
            border-collapse: collapse;
        }

        table {
            width: 100%;
        }

        td {
            vertical-align: top;
        }

        .page-break-before {
            page-break-before: always;
        }

        .container {
            padding: 0 35pt;
        }

        main .container {
            margin-top: 2em;
        }

        main h2 {
            margin: 0 0 .8em;
            page-break-after: avoid;
        }

        main p, main .table-wrapper {
            margin: 0 0 1em;
        }

        .clearfix {
            clear: both;
        }

        .text-center {
            text-align: center;
        }

        .vertical-bar {
            display: block;
            width: 100px;
            border-bottom: 1px solid #ccc;
            margin: 0 auto;
        }

        .col1 {
            width: 8.33333%;
        }

        .col2 {
            width: 16.66667%;
        }

        .col3 {
            width: 25%;
        }

        .col4 {
            width: 33.33333%;
        }

        .col5 {
            width: 41.66667%;
        }

        .col6 {
            width: 50%;
        }

        .col7 {
            width: 58.33333%;
        }

        .col8 {
            width: 66.66667%;
        }

        .col9 {
            width: 75%;
        }

        .col10 {
            width: 83.33333%;
        }

        .col11 {
            width: 91.66667%;
        }

        .col12 {
            width: 100%;
        }

        #header {
            border: none;
            padding: 30pt 0;
            background-color: #3456D8;
        }

        #header table {
            color: #FFFFFF;
        }

        .grid-images {
            margin: -1%;
        }

        .tile-image {
            float: left;
            padding: 1%;
        }

        .tile-image img {
            display: block;
            width: 100%;
        }

        .details-column-table {
            margin: 0 15pt;
            table-layout: fixed;
        }

        .details-column-table tr {
            border: none;
            border-bottom: .5pt solid #dddddd;
        }

        .details-column-table tr:last-child {
            border: none;
        }

        .details-column-table td {
            line-height: 30pt;
        }

        .details-column-table .label {
            font-weight: bold;
        }

        .details-column-table .value {
            text-align: right;
            white-space: nowrap;
            font-weight: normal;
        }

        .tag {
            float: left;
            width: auto;
            margin: 0 .5em .5em;
            padding: .3em .5em;
            background-color: #eeeeee;
            border-radius: 3px;
            text-align: center;
        }

        .contact-box {
            width: 350pt;
            margin: 35pt auto;
            padding: 30pt;
            border-radius: 2pt;
            border: 1pt solid rgba(0, 0, 0, .1);
            border-bottom-width: 3pt;
            page-break-inside: avoid;
        }

        .contact-image {
            margin: 0 auto;
            width: 30%;
            padding-bottom: 30%;
            border-radius: 50%;
            background-size: 100% auto;
            background-position: center;
            background-image: url(https://dummyimage.com/150x150);
        }

        .contact-details {
            margin: 0 auto;
            width: 70%;
            text-align: center;
        }

        .contact-name {
            margin-top: 18pt;
            margin-bottom: 0;
            font-size: 1.5em;
        }

        .contact-email {
            color: #aaaaaa;
        }

        .contact-phone {
            margin-top: 15pt;
        }
    </style>
</head>
<body>
<htmlpageheader name="page-header" id="header">
    <div class="container">
        <div class="table-wrapper">
            <table>
                <tr>
                    <td class="col9">
                        <h1 style="font-size: 1.6em; margin-bottom: 10pt;">Summary Report</h1>
                        <div style="margin-top: 30pt;">
                            Test
                        </div>
                    </td>
                    <td class="col3" style="text-align: right; vertical-align: middle;">
                        <img alt="Test Team" src="https://pbs.nyc/pics/LOGO.png" style="height: 70px;">
                    </td>
                </tr>
            </table>
        </div>
    </div>
</htmlpageheader>
<main>
    <div class="container">
        <div class="grid-images">
            <div class="tile-image" style="width: 98%;"><img alt="Placeholder image" src="https://dummyimage.com/400x200"></div>
            <div class="clearfix"></div>
        </div>
    </div>

    {{--  Property Adresses  --}}

    <div class="container">
        <table style="margin: 0 -15pt;">
            <thead>
            <tr>
                <th>Buildings</th>
            </tr>
            </thead>
            <tbody>
            @foreach($user->properties as $property)
                <tr>
                    <td>
                        {{$property->getAddressWithoutBin()}}
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

    {{--  bsaApplicationStatus List  --}}
    @if($user->bsaApplicationStatus()->count())
        <div class="container">
            <table style="margin: 0 -15pt;">
                <thead>
                <tr>
                    <th>Property Address</th>
                    <th>Filed Date</th>
                    <th>Application</th>
                    <th>Calendar Code</th>
                    <th>Current Status</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                @foreach($user->properties as $property)
                    @foreach($property->bsaApplicationStatus as $item)
                        <tr>
                            <td>{{$property->getAddressWithoutBin()}}</td>
                            <td>{{$item->filedDate()}}</td>
                            <td>{{$item->application}}</td>
                            <td>{{$item->calendar}}</td>
                            <td>{{$item->status}}</td>
                            <td>{{$item->date()}}</td>
                        </tr>
                    @endforeach
                @endforeach
                </tbody>
            </table>
        </div>
    @endif


    {{--  depCatsPermits List  --}}
    @if($user->depCatsPermits()->count())
        <div class="container">
            <table style="margin: 0 -15pt;">
                <thead>
                <tr>
                    <th>Property Address</th>
                    <th>Request#</th>
                    <th>Application#</th>
                    <th>Request Type</th>
                    <th>Expire Date</th>
                    <th>Issue Date</th>
                    <th>Current Status</th>
                </tr>
                </thead>
                <tbody>
                @foreach($user->properties as $property)
                    @foreach($property->depCatsPermits as $item)
                        <tr>
                            <td>{{$property->getAddressWithoutBin()}}</td>
                            <td>{{$item->requestid}}</td>
                            <td>{{$item->applicationid}}</td>
                            <td>{{$item->requesttype}}</td>
                            <td>{{$item->expirationDate()}}</td>
                            <td>{{$item->issueDate()}}</td>
                            <td>{{$item->status}}</td>
                        </tr>
                    @endforeach
                @endforeach
                </tbody>
            </table>
        </div>
    @endif

    {{--  dobCertOccupancy List  --}}
    @if($user->dobCertOccupancy()->count())
        <div class="container">
            <table style="margin: 0 -15pt;">
                <thead>
                <tr>
                    <th>Property Address</th>
                    <th>Job Number</th>
                    <th>Job Type</th>
                    <th>Issue Date</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                @foreach($user->properties as $property)
                    @foreach($property->dobCertOccupancy as $item)
                        <tr>
                            <td>{{$property->getAddressWithoutBin()}}</td>
                            <td>{{$item->job_number}}</td>
                            <td>{{$item->job_type}}</td>
                            <td>{{$item->issuedDate()}}</td>
                            <td>{{$item->application_status_raw}}</td>
                        </tr>
                    @endforeach
                @endforeach
                </tbody>
            </table>
        </div>
    @endif

    {{--  dobComplaints List  --}}
    @if($user->dobComplaints()->count())
        <div class="container">
            <table style="margin: 0 -15pt;">
                <thead>
                <tr>
                    <th>Property Address</th>
                    <th>Complait Number</th>
                    <th>Status</th>
                    <th>Data Entered Date</th>
                    <th>Community Board</th>
                    <th>Special District</th>
                    <th>ECB Number</th>
                    <th>Complaint Category</th>
                    <th>Unit</th>
                    <th>Disposition Date</th>
                    <th>Inspection Date</th>
                    <th>Dobrun Date</th>
                </tr>
                </thead>
                <tbody>
                @foreach($user->properties as $property)
                    @foreach($property->dobComplaints as $item)
                        <tr>
                            <td>{{$property->getAddressWithoutBin()}}</td>
                            <td>{{$item->complaint_number}}</td>
                            <td>{{$item->status}}</td>
                            <td>{{$item->dateEntered()}}</td>
                            <td>{{$item->community_board}}</td>
                            <td>{{$item->special_district}}</td>
                            <td>{{$item->ecb_number}}</td>
                            <td>{{$item->complaint_category}}</td>
                            <td>{{$item->unit}}</td>
                            <td>{{$item->getDispositionDate()}}</td>
                            <td>{{$item->inspectionDate()}}</td>
                            <td>{{$item->dobrunDate()}}</td>
                        </tr>
                    @endforeach
                @endforeach
                </tbody>
            </table>
        </div>
    @endif

    {{--  dobViolations List  --}}
    @if($user->dobViolations()->count())
        <div class="container">
            <table style="margin: 0 -15pt;">
                <thead>
                <tr>
                    <th>Property Address</th>
                    <th>Issue Date</th>
                    <th>Violation number</th>
                    <th>Disposition Date</th>
                    <th>Comments</th>
                    <th>Description</th>
                    <th>ECB Number</th>
                    <th>Number</th>
                    <th>Violation Category</th>
                    <th>Violation Type</th>
                </tr>
                </thead>
                <tbody>
                @foreach($user->properties as $property)
                    @foreach($property->dobViolations as $item)
                        <tr>
                            <td>{{$property->getAddressWithoutBin()}}</td>
                            <td>{{$item->issueDate()}}</td>
                            <td>{{$item->violation_number}}</td>
                            <td>{{$item->dispositionDate()}}</td>
                            <td>{{$item->disposition_comments}}</td>
                            <td>{{$item->description}}</td>
                            <td>{{$item->ecb_number}}</td>
                            <td>{{$item->number}}</td>
                            <td>{{$item->violation_category}}</td>
                            <td>{{$item->violation_type}}</td>
                        </tr>
                    @endforeach
                @endforeach
                </tbody>
            </table>
        </div>
    @endif


    <div class="container">
        <h2>Details</h2>
        <table style="margin: 0 -15pt;">
            <tr>
                <td class="col6">
                    <table class="details-column-table">
                        <tr>
                            <td class="label">Typ:</td>
                            <td class="value">Wohnung zur Miete</td>
                        </tr>
                    </table>
                </td>
                <td class="col6">
                    <table class="details-column-table">
                        <tr>
                            <td class="label">Nummer:</td>
                            <td class="value">#5865</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div class="container">
        <div class="tags">
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="page-break-before"></div>
    <div class="container">
        <div class="contact-box">
            <div class="contact-image"></div>
            <div class="contact-details">
                <h3 class="contact-name">Niklas</h3>
                <div class="contact-email">
                    test@gmail.com
                </div>
                <div class="contact-phone">
                    1234
                </div>
            </div>
        </div>
    </div>
</main>
</body>
</html>
