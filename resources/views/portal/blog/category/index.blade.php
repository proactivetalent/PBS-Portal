@extends('portal.master')

@section('title', 'PBS Portal | Blog Categories')
@section('meta_description', 'Manage blog categories and organization in the PBS Portal.')

@section('content_header')
    @if (Session::has('success'))
        <div class="alert alert-success" role="alert">
            <strong>Success:</strong> {!! Session::get('success') !!}
        </div>
    @endif
@stop

@section('content')

    <div class="row">
        <div class="col-md-10">
            <h1>All Categories</h1>
        </div>
        <div class="col-md-2 text-right">
            <a href="{{route('category.create')}}" class="btn btn-lg btn-block" style="background-color: #8AD5B7 !important; border-color: #8AD5B7 !important; color: #1E2322 !important; font-weight: 500 !important;">Create New Category</a>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <table class="table table-bordered table-striped" autosize="1"
                   style="page-break-inside: avoid;margin: 20px 0px; border-collapse: collapse; width: 100%"
                   width="100%"
                   border="0" cellspacing="0" cellpadding="0" bgcolor="#bdc0c2">
                <thead>
                <th width="10%">#</th>
                <th width="35%">Name</th>
                <th width="20%">Featured Image</th>
                <th width="10%">Created At</th>
                <th width="10%">Updated At</th>
                <th width="15%">Actions</th>
                </thead>
                <tbody>
                @forelse($categories as $category)
                    <tr>
                        <td>{{$category->id}}</td>
                        <td>{{$category->name}}</td>
                        <td>
                            @if($category->featured)
                                <img height="50px" src="{{Storage::url($category->featured)}}" alt="{{$category->name}}" class="img-thumbnail" onerror="this.src='{{asset('images/placeholder-article.svg')}}';">
                            @else
                                <img height="50px" src="{{asset('images/placeholder-article.svg')}}" alt="No Image" class="img-thumbnail">
                            @endif
                        </td>
                        <td>{{$category->created_at->format('Y/m/d H:s')}}</td>
                        <td>{{$category->updated_at->format('Y/m/d H:s')}}</td>
                        <td>
                            <div class="d-flex flex-column">
                                <a href="{{route('category.show',$category->id)}}" class="btn mx-1 mb-1" style="background-color: #37403D !important; border-color: #37403D !important; color: #DCE2E2 !important; font-weight: 500 !important;">View</a>
                                <a href="{{route('category.edit',$category->id)}}" class="btn mx-1 mb-1" style="background-color: #8AD5B7 !important; border-color: #8AD5B7 !important; color: #1E2322 !important; font-weight: 500 !important;">Edit</a>
                                {!! Form::open(['route' => ['category.destroy', $category->id], 'method' => 'DELETE','class'=>'mx-1']) !!}
                                {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                                {!! Form::close() !!}
                            </div>
                    </tr>
                @empty
                <tr>
                    <td class="text-center" colspan="6">No categories defined yet.</td>
                </tr>
                @endforelse
                </tbody>
                <tfoot>
                <th>#</th>
                <th>Name</th>
                <th>Featured Image</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="pagination-container">
        {{$categories->links('vendor.pagination.bootstrap-4')}}
    </div>

@stop

@section('css')
    <style>
        /* Custom pagination styles */
        .pagination-container {
            margin-top: 20px;
        }
        .pagination-container nav {
            display: flex;
            justify-content: center !important;
        }
        .pagination-container .pagination {
            display: flex;
            padding-left: 0;
            list-style: none;
            border-radius: 0.25rem;
        }
        .pagination-container .pagination .page-item .page-link {
            color: #38403e !important;
            border-color: #dce2e1 !important;
            position: relative;
            padding: 0.5rem 0.75rem;
            margin-left: -1px;
            line-height: 1.25;
            background-color: #fff;
            border: 1px solid #dee2e6;
        }
        .pagination-container .pagination .page-item.active .page-link {
            background-color: #8AD5B7 !important;
            border-color: #8AD5B7 !important;
            color: #1E2322 !important;
            font-weight: 500 !important;
        }
    </style>
@stop

@section('js')
    <script>
        // Ensure pagination styles are applied correctly
        document.addEventListener('DOMContentLoaded', function() {
            // Force refresh pagination styling
            const paginationContainer = document.querySelector('.pagination-container');
            if (paginationContainer) {
                // Make sure pagination is visible
                paginationContainer.style.display = 'block';
                
                // Apply styles to nav element
                const nav = paginationContainer.querySelector('nav');
                if (nav) {
                    nav.style.display = 'flex';
                    nav.style.justifyContent = 'center';
                }
            }
        });
    </script>
@stop
