jQuery(document).ready(function() {
    /* Smooth Scroll */
    jQuery(function() {
        jQuery('a.smooth').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top - 69
                    }, 500);
                    return false;
                }
            }
        });
    });

    /* Hide non-mobile content on mobile, et vice versa */
    // var screenWidth = jQuery(window).width();
    // if(screenWidth < 768) { // user is assumed to be using a smaller mobile device (i.e.: phone)
    // 	jQuery('.desktop').hide();
    // 	jQuery('.mobile').show();
    // } else { // User is on a tablet, or larger
    // 	jQuery('.desktop').show();
    // 	jQuery('.mobile').hide();
    // }

    /* Current Page Item */
    var currPage = window.location.href;
    jQuery('#dealer-menu li').each(function() {
        var thisLink = jQuery(this).children('a').attr('href');
        if (currPage.indexOf(thisLink) > -1) {
            jQuery(this).addClass('current-menu-item');
        }
    });

    /* Hamburger Toggle */
    jQuery('#hamburger').click(function() {
        jQuery(this).toggleClass('clicked');
        jQuery('#dealer-menu').toggleClass('reveal');
    });

    /* Call Us Follow Me Toggle */
    jQuery('#call-us i.fa-phone').on('click touchend', function(e) {
        var phoneLink = jQuery('#call-us .dealer-phone-banner a')[0];
        var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // On mobile/tablet, directly navigate to phone link (bypasses hover state issues)
        if (isMobile && phoneLink && phoneLink.href) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = phoneLink.href;
            return false;
        }

        // On desktop, toggle the expanded state
        e.preventDefault();
        jQuery('#call-us').toggleClass('clicked');
    });
});

jQuery(window).on('scroll', function() {
    var scroll = jQuery(window).scrollTop();
    var $header = jQuery('header');
    if (scroll > 20) {
        $header.addClass('scrolled');
    } else {
        $header.removeClass('scrolled');
    }
});

// jQuery(window).resize(function() {
// 	/* Hide non-mobile content on mobile, et vice versa */
// 	var screenWidth = jQuery(window).width();
// 	if(screenWidth < 768) { // user is assumed to be using a smaller mobile device (i.e.: phone)
// 		jQuery('.desktop').hide();
// 		jQuery('.mobile').show();
// 	} else { // User is on a tablet, or larger
// 		jQuery('.desktop').hide();
// 		jQuery('.mobile').show();
// 	}
// });