@php
    // Set default values for ticketit configuration variables to prevent undefined variable errors
    $editor_enabled = $editor_enabled ?? true;
    $include_font_awesome = $include_font_awesome ?? true;
    $codemirror_enabled = $codemirror_enabled ?? false;
    $codemirror_theme = $codemirror_theme ?? 'default';
@endphp

{{-- Load the css file to the header --}}
<script type="text/javascript">
    function loadCSS(filename) {
        var file = document.createElement("link");
        file.setAttribute("rel", "stylesheet");
        file.setAttribute("type", "text/css");
        file.setAttribute("href", filename);

        if (typeof file !== "undefined"){
            document.getElementsByTagName("head")[0].appendChild(file)
        }
    }
    loadCSS({!! '"'.asset('https://cdn.datatables.net/v/bs4/dt-' . Kordy\Ticketit\Helpers\Cdn::DataTables . '/r-' . Kordy\Ticketit\Helpers\Cdn::DataTablesResponsive . '/datatables.min.css').'"' !!});
    @if($editor_enabled)
        loadCSS({!! '"'.asset('https://cdnjs.cloudflare.com/ajax/libs/summernote/' . Kordy\Ticketit\Helpers\Cdn::Summernote . '/summernote-bs4.css').'"' !!});
        @if($include_font_awesome)
            loadCSS({!! '"'.asset('https://use.fontawesome.com/releases/v' . Kordy\Ticketit\Helpers\Cdn::FontAwesome5 . '/css/solid.css').'"' !!});
            loadCSS({!! '"'.asset('https://use.fontawesome.com/releases/v' . Kordy\Ticketit\Helpers\Cdn::FontAwesome5 . '/css/fontawesome.css').'"' !!});
        @endif
        @if($codemirror_enabled)
            loadCSS({!! '"'.asset('https://cdnjs.cloudflare.com/ajax/libs/codemirror/' . Kordy\Ticketit\Helpers\Cdn::CodeMirror . '/codemirror.min.css').'"' !!});
            loadCSS({!! '"'.asset('https://cdnjs.cloudflare.com/ajax/libs/codemirror/' . Kordy\Ticketit\Helpers\Cdn::CodeMirror . '/theme/'.$codemirror_theme.'.min.css').'"' !!});
        @endif
    @endif
</script>