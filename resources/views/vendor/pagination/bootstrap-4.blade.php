@if ($paginator->hasPages())
    <nav class="pagination-nav" style="width: 100%; text-align: center; overflow: hidden;">
        <ul class="pagination" style="display: inline-flex; flex-wrap: nowrap; align-items: center; justify-content: center; margin: 0; white-space: nowrap;">
            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <li class="page-item disabled" aria-disabled="true" style="flex-shrink: 0;">
                    <span class="page-link" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; background-color: #37403D; color: #DCE2E2;">Prev</span>
                </li>
            @else
                <li class="page-item" style="flex-shrink: 0;">
                    <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; background-color: #37403D; color: #DCE2E2;">Prev</a>
                </li>
            @endif

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
                            <li class="page-item active" aria-current="page" style="flex-shrink: 0;"><span class="page-link" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; background-color: #8AD5B7; border-color: #8AD5B7; color: #1E2322; font-weight: 500;">{{ $page }}</span></li>
                        @else
                            <li class="page-item" style="flex-shrink: 0;"><a class="page-link" href="{{ $url }}" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; text-decoration: none; color: #38403e; border-color: #dce2e1;">{{ $page }}</a></li>
                        @endif
                    @endforeach
                @endif
            @endforeach

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <li class="page-item" style="flex-shrink: 0;">
                    <a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; background-color: #37403D; color: #DCE2E2;">Next</a>
                </li>
            @else
                <li class="page-item disabled" aria-disabled="true" style="flex-shrink: 0;">
                    <span class="page-link" style="display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; background-color: #37403D; color: #DCE2E2;">Next</span>
                </li>
            @endif
        </ul>
    </nav>
@endif
