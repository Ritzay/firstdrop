;
(function($) {

    "use strict";

    var window_height, scroll_top, window_width;

    /* ===================
     Page reload
     ===================== */
    $(window).load(function() {

        /** current window width */
        window_width = $(window).width();

        $("#page-loadding").fadeOut("slow");

        /** current scroll */
        scroll_top = $(window).scrollTop();

        /** current window width */
        window_height = $(window).height();

        back_to_top();

        leo_menu();
    });

    /**
     * resize event.
     * 
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     * @author Fox
     */
    $(window).on('resize', function() {
        /** current window width */
        window_width = $(window).width();

        leo_menu();
    });

    $(window).scroll(function() {

        /** current scroll */
        scroll_top = $(window).scrollTop();

        back_to_top();

    });

    /* ====================
     Scroll To Top
     ====================== */
    /* Check to see if the window is top if not then display button */
    function back_to_top() {

        if (scroll_top > window_height) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    }

    function leo_menu() {
        if (window_width < 991) {
            /* Menu drop down */
            $('.main-navigation li.menu-item-has-children').append('<span class="main-menu-toggle"></span>');
            $('.menu-item-has-children > a').on('click', function() {
                $(this).parent().find('> .sub-menu').toggleClass('submenu-open');
                $(this).parent().find('> .sub-menu').slideToggle();
            });
            $('.main-menu-toggle').on('click', function() {
                $(this).parent().find('> .sub-menu').toggleClass('submenu-open');
                $(this).parent().find('> .sub-menu').slideToggle();
                $(this).toggleClass('close');
            });
            /* Menu mobile */
            $("#main-menu-mobile .open-menu").on('click', function() {

                if ($(this).hasClass('opened')) {

                    $(this).removeClass('opened');
                } else {

                    $(this).addClass('opened');
                }

                if ($('#site-navigation').hasClass('navigation-open')) {

                    $('#site-navigation').removeClass('navigation-open');
                } else {

                    $('#site-navigation').addClass('navigation-open');
                }
            })
        }
    }

    $(document).ready(function() {
        /* Menu */
        var $menu = $('.main-navigation');
        $menu.find('ul.sub-menu > li').each(function() {
            var $submenu = $(this).find('>ul');
            if ($submenu.length == 1) {
                $(this).hover(function() {
                    if ($submenu.offset().left + $submenu.width() > $(window).width()) {
                        $submenu.addClass('back');
                    } else if ($submenu.offset().left < 0) {
                        $submenu.addClass('back');
                    }
                }, function() {
                    $submenu.removeClass('back');
                });
            }
        });

        /* Menu */
        $('#idsearch').on('show.bs.modal', function() {

            setTimeout(function() {

                var $in = $('.searchform-md .form-search')[0];
                $in.focus();
            }, 300);
        });

        /* =================
         Carousel
         =================== */
        $(".cms-carousel").each(function() {

            // VC 4.4 adds an empty div .vc_row-full-width somehow, get rid of them
            $(this).find('> .vc_row-full-width').remove();

            $(this).owlCarousel({
                margin: parseInt($(this).attr('data-margin')),
                loop: $(this).attr('data-loop') === 'true' ? true : false,
                nav: $(this).attr('data-nav') === 'true' ? true : false,
                navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                dots: $(this).attr('data-dots') === 'true' ? true : false,
                autoplay: $(this).attr('data-autoplay') === 'false' ? false : $(this).attr('data-autoplay'),
                responsive: {
                    0: {
                        items: parseInt($(this).attr('data-xsmall-items'))
                    },
                    768: {
                        items: parseInt($(this).attr('data-small-items'))
                    },
                    992: {
                        items: parseInt($(this).attr('data-medium-items'))
                    },
                    1200: {
                        items: parseInt($(this).attr('data-large-items'))
                    }
                }
            });
        });

        /* ===================
         Popup Images
         ===================== */
        $('.images-light-box').magnificPopup({
            delegate: 'a.light-box',
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-fade',
        });

        /* ===================
         Search Toggle
         ===================== */
        $('#header-search .search-toggle').click(function(e) {
            e.preventDefault();
            $('#header-cart .cartform').removeClass('active');
            $('#header-search .searchform').toggleClass('active').find('.search-field').focus();
        });
        $('#header-search .search-submit').click(function(e) {
            if ($(this).parent().find('.search-field').val() == '') {
                e.preventDefault();
                $(this).parent().parent().removeClass('active');
            }

        });

        /* ===================
         Cart Toggle
         ===================== */
        $('#header-cart .cart-toggle').click(function(e) {
            e.preventDefault();
            $('#header-search .searchform').removeClass('active');
            $('#header-cart .cartform').toggleClass('active');
        });

        /* ====================
         Scroll To Top
         ====================== */
        /* Check to see if the window is top if not then display button */
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1000) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });
        /* Click event to scroll to top */
        $('.back-to-top').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(".wpcf7-submit").on("click", function() {
            $(this).css("opacity", .2);
            $(this).parents(".wpcf7-form").addClass("processing");
        });

        $(document).on("spam.wpcf7", function() {
            $(".wpcf7-submit").css("opacity", 1);
            $(".wpcf7-form").removeClass("processing");
        });

        $(document).on("invalid.wpcf7", function() {
            $(".wpcf7-submit").css("opacity", 1);
            $(".wpcf7-form").removeClass("processing");
        });

        $(document).on("mailsent.wpcf7", function() {
            $(".wpcf7-submit").css("opacity", 1);
            $(".wpcf7-form").removeClass("processing");
        });

        $(document).on("mailfailed.wpcf7", function() {
            $(".wpcf7-submit").css("opacity", 1);
            $(".wpcf7-form").removeClass("processing");
        });
    });

})(jQuery);