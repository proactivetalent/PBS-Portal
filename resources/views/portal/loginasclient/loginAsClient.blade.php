@extends('portal.master')

@section('title', 'PBS Portal | Client Login')
@section('meta_description', 'Login as a client to access property management features in the PBS Portal.')

@section('plugins.Datatables', true)

@section('content_header')
    <h1 class="m-0 text-dark"><i class="fas fa-fw fa-users"></i> Clients</h1>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                Login As Client
                            </span>

                        </div>
                    </div>
                    <div class="card-body">


                        <div class="table-responsive users-table">
                            <table id="example" class="table table-striped table-sm data-table" style="width:100%">
                                {{--                                <caption id="user_count">--}}
                                {{--                                    {!! trans_choice('laravelusers::laravelusers.users-table.caption', 1, ['userscount' => $users->count()]) !!}--}}
                                {{--                                </caption>--}}
                                <thead class="thead">
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th class="hidden-xs">E-mail</th>
                                    <th class="hidden-sm hidden-xs">Role</th>
                                    <th class="hidden-sm hidden-xs hidden-md">Status</th>
                                    <th class="hidden-sm hidden-xs hidden-md">Photo</th>
                                    <th class="no-search no-sort">Actions</th>
                                    <th class="no-search no-sort"></th>
                                    <th class="no-search no-sort"></th>
                                </tr>
                                </thead>
                                <tbody id="users_table">
                                @foreach($users as $user)
                                    @if(\Illuminate\Support\Facades\Auth::user()->level()>=$user->level())
                                        <tr>
                                            <td>{{$user->id}}</td>
                                            <td>{{$user->name}}</td>
                                            <td class="hidden-xs">{{$user->email}}</td>
                                            <td class="hidden-sm hidden-xs">
                                                @foreach ($user->roles as $user_role)
                                                    @if ($user_role->name == 'User')
                                                        <span class="badge" style="background-color: #8AD5B7 !important; color: #1E2322 !important; font-weight: 500 !important;">{{ $user_role->name }}</span>
                                                    @elseif ($user_role->name == 'Admin')
                                                        <span class="badge" style="background-color: #37403D !important; color: #DCE2E2 !important; font-weight: 500 !important;">{{ $user_role->name }}</span>
                                                    @elseif ($user_role->name == 'Unverified')
                                                        <span class="badge bg-danger">{{ $user_role->name }}</span>
                                                    @else
                                                        <span class="badge bg-dark">{{ $user_role->name }}</span>
                                                    @endif
                                                @endforeach
                                            </td>
                                            <td class="hidden-sm hidden-xs hidden-md">
                                                <b>  {{Str::upper(isset($user->subscription()->stripe_status)?$user->subscription()->stripe_status:'Undefined')}} </b>
                                            </td>
                                            <td class="hidden-sm hidden-xs hidden-md">
                                                @if($user->photo)
                                                    <img width="40px" src="{{asset($user->photo)}}" alt="{{$user->name}}" class="img-thumbnail" onerror="this.src='{{asset('images/blank.svg')}}';">
                                                @else
                                                    <img width="40px" src="{{asset('images/blank.svg')}}" alt="No Image" class="img-thumbnail">
                                                @endif
                                            </td>
                                            <td>
                                                <a class="btn btn-sm btn-block"
                                                   href="{{ URL::to('users/' . $user->id) }}" data-toggle="tooltip"
                                                   title="Show User" style="background-color: #8AD5B7 !important; border-color: #8AD5B7 !important; color: #1E2322 !important; font-weight: 500 !important;">
                                                    <i class="fas fa-user-check"></i> Show User
                                                </a>
                                            </td>
                                            <td>
                                               <a class="btn btn-sm btn-warning btn-block"
                                                href="{{ URL::to('portal/impersonate/take/' . $user->id) }}"
                                                data-toggle="tooltip"
                                                title="Login">
                                                <i class="fas fa-door-open"></i> Login This
                                                </a>
                                            </td>
                                        </tr>
                                    @endif
                                @endforeach
                                </tbody>
                                <tbody id="search_results"></tbody>
                            </table>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


@endsection



