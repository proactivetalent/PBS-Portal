@php
    if (!isset($editor_enabled)) $editor_enabled = true;
    if (!isset($codemirror_enabled)) $codemirror_enabled = false;
    if (!isset($editor_locale)) $editor_locale = 'en-US';
    if (!isset($editor_options)) $editor_options = '{}';
@endphp
@if($editor_enabled)

@if($codemirror_enabled)
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/{{Kordy\Ticketit\Helpers\Cdn::CodeMirror}}/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/{{Kordy\Ticketit\Helpers\Cdn::CodeMirror}}/mode/xml/xml.min.js"></script>
@endif

<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/{{Kordy\Ticketit\Helpers\Cdn::Summernote}}/summernote-bs4.min.js"></script>
@if($editor_locale)
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/{{Kordy\Ticketit\Helpers\Cdn::Summernote}}/lang/summernote-{{$editor_locale}}.min.js"></script>
@endif
<script>


    $(function() {


        var defaultOptions = {
            lang: '{{$editor_locale}}',
            dialogsInBody: true,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'italic', 'underline', 'clear']],
                ['fontname', ['fontname']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ]
        };
        var options = $.extend(true, defaultOptions {!! $codemirror_enabled ? ", { codemirror: {theme: '{$codemirror_theme}', mode: 'text/html', htmlMode: true, lineWrapping: true} }" : ''  !!}, {!! $editor_options !!});

        $("textarea.summernote-editor").summernote(options);

        $("label[for=content]").click(function () {
            $("#content").summernote("focus");
        });
    });


</script>
@endif