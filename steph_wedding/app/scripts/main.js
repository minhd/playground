!function ($) {
    $(function(){

        var $root = $('html, body');

        $('#nav a').click(function() {
            $('#nav a').parent().removeClass('active');
            $(this).parent().addClass('active');
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });

        $(document).on('keydown', '#rsvp_form', function(e){
            if(e.keyCode==13) e.preventDefault();
        });
        
    })
}(window.jQuery)