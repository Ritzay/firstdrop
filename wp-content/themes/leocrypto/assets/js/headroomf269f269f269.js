;
(function($) {
    "use strict";
    $(document).ready(function() {
        var myElement = document.querySelector("#headroom");
        var headroom = new Headroom(myElement, {
            offset: 280
        });
        headroom.init();
    });
})(jQuery);