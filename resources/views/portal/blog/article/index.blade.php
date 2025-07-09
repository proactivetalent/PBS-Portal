@extends('portal.master')

@section('title', 'PBS Portal | Blog Articles')
@section('meta_description', 'Browse and manage blog articles in the PBS Portal.')

@section('content_header')
    <h1 class="m-0 text-dark">Blog Articles</h1>
    @if (Session::has('success'))
        <div class="alert alert-success" role="alert">
            <strong>Success:</strong> {!! Session::get('success') !!}
        </div>
    @endif
@stop

@section('content')

    <div class="row">
        <div class="col-md-10">
            <h2>All Articles</h2>
        </div>
        <div class="col-md-2 text-right">
            <a href="{{route('article.create')}}" class="btn btn-lg btn-block" style="background-color: #8AD5B7 !important; border-color: #8AD5B7 !important; color: #1E2322 !important; font-weight: 500 !important;">Create New Article</a>
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
                <th width="25%">Title</th>
                <th width="20%">Featured Image</th>
                <th width="10%">Category</th>
                <th width="8%">Created At</th>
                <th width="8%">Updated At</th>
                <th width="4%">Published</th>
                <th width="15%">Actions</th>
                </thead>
                <tbody>
                @forelse($articles as $article)
                    <tr>
                        <td>{{$article->id}}</td>
                        <td>{{$article->title}}</td>
                        <td>
                            @if($article->featured)
                                <img height="50px" src="{{Storage::url($article->featured)}}" alt="{{$article->title}}" class="img-thumbnail" onerror="this.src='{{asset('images/placeholder-article.svg')}}';">
                            @else
                                <img height="50px" src="{{asset('images/placeholder-article.svg')}}" alt="No Image" class="img-thumbnail">
                            @endif
                        </td>
                        <td>@if($article->category) {{$article->category->name}} @else N/A @endif</td>
                        <td>{{$article->created_at->format('Y/m/d H:s')}}</td>
                        <td>{{$article->updated_at->format('Y/m/d H:s')}}</td>
                        <td><i class="fas fa-fw @if($article->isActive) fa-check-circle @else fa-times-circle @endif"></i>
                        </td>
                        <td>
                            <div class="d-flex flex-column">
                                <a href="{{route('article.show',$article->id)}}" class="btn mx-1 mb-1" style="background-color: #37403D !important; border-color: #37403D !important; color: #DCE2E2 !important; font-weight: 500 !important;">View</a>
                                <a href="{{route('article.edit',$article->id)}}" class="btn mx-1 mb-1" style="background-color: #8AD5B7 !important; border-color: #8AD5B7 !important; color: #1E2322 !important; font-weight: 500 !important;">Edit</a>
                                {!! Form::open(['route' => ['article.destroy', $article->id], 'method' => 'DELETE','class'=>'mx-1']) !!}
                                {!! Form::submit('Delete', ['class' => 'btn btn-danger mx-1 mb-1', 'style' => 'font-weight: 500 !important; width: 100%;']) !!}
                                {!! Form::close() !!}
                            </div>
                    </tr>
                @empty
                    <tr>
                        <td class="text-center" colspan="8">No articles written yet.</td>
                    </tr>
                @endforelse
                </tbody>
                <tfoot>
                <th>#</th>
                <th>Title</th>
                <th>Featured Image</th>
                <th>Category</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Published</th>
                <th>Actions</th>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="pagination-container">
        {{$articles->links('vendor.pagination.bootstrap-4')}}
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
