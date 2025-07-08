@if ($paginator->hasPages())
    <nav class="pagination-nav" style="width: 100%; text-align: center; overflow: hidden;">
        <ul class="pagination" style="display: inline-flex; flex-wrap: nowrap; align-items: center; justify-content: center; margin: 0; white-space: nowrap;">
            {{-- Previous Page Link - REMOVED TO FIX LAYOUT ISSUE --}}
            {{-- 
            @if ($paginator->onFirstPage())
                <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                    <span class="page-link" aria-hidden="true">&lsaquo;</span>
                </li>
            @else
                <li class="page-item">
                    <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">&lsaquo;</a>
                </li>
            @endif
            --}}

            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <li class="page-item disabled" aria-disabled="true" style="flex-shrink: 0;"><span class="page-link" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px;">{{ $element }}</span></li>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <li class="page-item active" aria-current="page" style="flex-shrink: 0;"><span class="page-link" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px;">{{ $page }}</span></li>
                        @else
                            <li class="page-item" style="flex-shrink: 0;"><a class="page-link" href="{{ $url }}" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; text-decoration: none;">{{ $page }}</a></li>
                        @endif
                    @endforeach
                @endif
            @endforeach

            {{-- Next Page Link - REMOVED TO FIX LAYOUT ISSUE --}}
            {{-- 
            @if ($paginator->hasMorePages())
                <li class="page-item">
                    <a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">&rsaquo;</a>
                </li>
            @else
                <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                    <span class="page-link" aria-hidden="true">&rsaquo;</span>
                </li>
            @endif
            --}}
        </ul>
    </nav>
@endif
