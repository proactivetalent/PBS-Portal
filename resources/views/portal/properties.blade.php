@extends('portal.master')

@section('title', 'PBS Portal | Properties')
@section('meta_description', 'Browse and manage your properties in the PBS Portal for efficient property management.')

@section('content_header')
    <h1 class="m-0 text-dark">Properties</h1>
@stop

@section('content')
    <!-- Main content -->
    <section class="content">
@php($property = $properties->first())
        <!-- Default box -->
        <div class="card card-solid">
            <div class="card-body pb-0">
                <div class="row d-flex align-items-stretch">
                    <div class="col-12 col-sm-6 col-md-6 d-flex align-items-stretch">
                        <div class="card bg-light">
                            <div class="card-header border-bottom-0">
                                <h2 class="lead">
                                    <b>{{$property->getAddressOnlyWithHouseStreet()}}</b>
                                    {{\App\Helpers\Helper::getBoroName($property->boro)}}
                                </h2>
                            </div>
                            <div class="card-body pt-0">
                                <div class="row">
                                    <div class="col-7 text-center">
                                        <img src="{{$property->image()}}" alt="Property image for {{$property->getAddressOnlyWithHouseStreet()}} {{\App\Helpers\Helper::getBoroName($property->boro)}}" class="img-fluid">
                                    </div>
                                    <div class="col-5">
                                        <p class="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist
                                            / Coffee Lover </p>
                                        <ul class="ml-4 mb-0 fa-ul text-muted">
                                            <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                                Address: Demo Street 123, Demo City 04312, NJ
                                            </li>
                                            <li class="small"><span class="fa-li"><i
                                                            class="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12
                                                12 23 52
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="text-right">
                                    <a href="#" class="btn btn-sm bg-teal">
                                        <i class="fas fa-comments"></i>
                                    </a>
                                    <a href="#" class="btn btn-sm btn-primary">
                                        <i class="fas fa-user"></i> View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <nav aria-label="Contacts Page Navigation">
                    <ul class="pagination justify-content-center m-0">
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item"><a class="page-link" href="#">6</a></li>
                        <li class="page-item"><a class="page-link" href="#">7</a></li>
                        <li class="page-item"><a class="page-link" href="#">8</a></li>
                    </ul>
                </nav>
            </div>
            <!-- /.card-footer -->
        </div>
        <!-- /.card -->

    </section>
    <!-- /.content -->

@stop

@section('js')
@stop
