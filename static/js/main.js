"use strict";

// Close Share Popup
function share_popup_close() {
    jQuery('.pm_sharing_back .pm_popup_share_wrapper').removeClass('active_block');
    setTimeout("jQuery('.pm_sharing_back').removeClass('active')", 300);
}

function pm_fullwidth_block() {
    if (jQuery('div').hasClass('right_sidebar') || jQuery('div').hasClass('left_sidebar')) {
    } else {
        var container = jQuery('.pm_fullwidth_block'),
            cont_parent_width = jQuery(container).parent().width(),
            site_width = jQuery('body').width(),
            difference = site_width - cont_parent_width;

        jQuery(container).css({
            'margin-left': '-' + (difference / 2) + 'px',
            'width': site_width + 'px'
        }).children().css({'padding-left': (difference / 2) + 'px', 'padding-right': (difference / 2) + 'px'});

        jQuery('.pm_no_padding_block').css({'padding-left': '0px', 'padding-right': '0px'});
    }
}

function hover_on(i){
    jQuery('.pm_gallery').find('.pm_gallery_item_wrapper').css('opacity', '.3');
    jQuery(i).css('opacity', '1');
}

function hover_off(i) {
    jQuery('.pm_gallery').find('.pm_gallery_item_wrapper').css('opacity', '1');
}

// Counter on Coming Soon Page
jQuery(function() {
    var austDay = new Date(),
        coundown_cont = jQuery('#pm_counter');
    austDay = new Date(2017, 11-1, 22);

    if (coundown_cont.length) {
        jQuery(coundown_cont).countdown({
            until: austDay,
            padZeroes: true
        })
    }
});

// Form Popup Position
function form_position() {
    var form_wrapper = jQuery('.pm_form_popup_back').find(".pm_popup_form_wrapper"),
        form_wrapper_height = jQuery(form_wrapper).height();

    jQuery(form_wrapper).css({"margin-top": -1 * (form_wrapper_height / 2)}).addClass('active_form');
}

// Close Form Popup
function form_popup_close() {
    jQuery('.pm_form_popup_back .pm_popup_form_wrapper').removeClass('active_form');
    setTimeout("jQuery('.pm_form_popup_back').css('display', 'none')", 500);
}

// Isotope Setup
function isotope_setup() {
    var container = jQuery('.isotope');

    if (container.length) {
        jQuery(container).isotope({
            itemSelector: '.pm_gallery_item'
        });
    }
}

function listing_isotope_setup() {
    var container = jQuery('.listing_isotope');

    if (container.length) {
        jQuery(container).isotope({
            itemSelector: '.pm_albums_listing_item'
        });
    }
}

function blog_isotope_setup() {
    var container = jQuery('.blog_isotope');

    if (container.length) {
        jQuery(container).isotope({
            itemSelector: '.pm_blog_item'
        });
    }
}

function portfolio_isotope_setup() {
    var container = jQuery('.portfolio_isotope');

    if (container.length) {
        jQuery(container).isotope({
            itemSelector: '.pm_portfolio_item'
        });
    }
}

/////////////////////////////
// Load More Gallery Items //
/////////////////////////////
// Gallery with Advanced Hover
jQuery.fn.gallery_addon_advanced = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_gallery_item added"><div class="pm_gallery_item_wrapper" onmouseover="hover_on(this)" onmouseout="hover_off(this)"><div class="pm_image_wrapper"><img src="' + addon_options.items[i].src + '" alt=""><div class="pm_image_likes_wrapper"><div class="pm_image_likes_container"><div class="pm_add_like_button"><i class="pm_likes_icon fa fa-heart-o"></i><span class="pm_likes_counter">0</span></div><a class="pm_popup_trigger" href="' + addon_options.items[i].popup_href + '"></a><div class="clear"></div></div></div></div></div></div>';
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.isotope').isotope();", 500);
            setTimeout("jQuery('.isotope').isotope();", 1000);
            setTimeout("jQuery('.isotope').isotope();", 2000);
            setTimeout("jQuery('.isotope').isotope();", 3000);
        }
    });
};

// Gallery Grid
jQuery.fn.gallery_addon = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_gallery_item added"><div class="pm_gallery_item_wrapper"><div class="pm_image_wrapper"><img src="' + addon_options.items[i].src + '" alt=""><div class="pm_image_likes_wrapper"><div class="pm_image_likes_container"><div class="pm_add_like_button"><i class="pm_likes_icon fa fa-heart-o"></i><span class="pm_likes_counter">0</span></div><a class="pm_popup_trigger" href="' + addon_options.items[i].popup_href + '"></a><div class="clear"></div></div></div></div></div></div>';
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.isotope').isotope();", 500);
            setTimeout("jQuery('.isotope').isotope();", 1000);
            setTimeout("jQuery('.isotope').isotope();", 2000);
            setTimeout("jQuery('.isotope').isotope();", 3000);
        }
    });
};

// Gallery Grid with Titles
jQuery.fn.gallery_addon_title = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_gallery_item added"><div class="pm_gallery_item_wrapper"><div class="pm_image_wrapper"><img src="' + addon_options.items[i].src + '" alt=""><div class="pm_image_likes_wrapper"><div class="pm_image_likes_container"><div class="pm_add_like_button"><i class="pm_likes_icon fa fa-heart-o"></i><span class="pm_likes_counter">0</span></div><a class="pm_popup_trigger" href="' + addon_options.items[i].popup_href + '"></a><div class="clear"></div></div></div></div><div class="pm_image_title">' + addon_options.items[i].title + '</div></div></div>';
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.isotope').isotope();", 500);
            setTimeout("jQuery('.isotope').isotope();", 1000);
            setTimeout("jQuery('.isotope').isotope();", 2000);
            setTimeout("jQuery('.isotope').isotope();", 3000);
        }
    });
};

// Grid Albums Listing
jQuery.fn.gallery_listing_addon = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.listing_isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_albums_listing_item added" style="width: 25%;"><div class="pm_slbums_listing_wrapper"><div class="pm_album_thumb_wrapper"><img src="' + addon_options.items[i].src + '" alt=""><div class="pm_album_likes_wrapper"><div class="pm_album_likes_container"><div class="pm_add_like_button"><i class="pm_likes_icon fa fa-heart-o"></i><span class="pm_likes_counter">0</span></div><a class="pm_images_counter_wrapper" href="' + addon_options.items[i].album_href + '"><span class="pm_images_counter_icon"></span><span class="images_counter">' + addon_options.items[i].item_count + '</span></a><div class="clear"></div></div></div></div></div></div>';
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.listing_isotope').isotope();", 500);
            setTimeout("jQuery('.listing_isotope').isotope();", 1000);
            setTimeout("jQuery('.listing_isotope').isotope();", 2000);
            setTimeout("jQuery('.listing_isotope').isotope();", 3000);
        }
    });
};

// Grid Albums Listing with Titles
jQuery.fn.gallery_listing_title_addon = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.listing_isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_albums_listing_item added" style="width: 25%;"><div class="pm_slbums_listing_wrapper" style="padding-left: 10px; padding-bottom: 10px"><div class="pm_album_thumb_wrapper"><img src="' + addon_options.items[i].src + '" alt=""><div class="pm_album_likes_wrapper"><div class="pm_album_likes_container"><div class="pm_add_like_button"><i class="pm_likes_icon fa fa-heart-o"></i><span class="pm_likes_counter">0</span></div><a class="pm_images_counter_wrapper" href="' + addon_options.items[i].album_href + '"><span class="pm_images_counter_icon"></span><span class="images_counter">' + addon_options.items[i].item_count + '</span></a><div class="clear"></div></div></div></div><div class="pm_album_title">' + addon_options.items[i].title + '</div></div></div>';
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.listing_isotope').isotope();", 500);
            setTimeout("jQuery('.listing_isotope').isotope();", 1000);
            setTimeout("jQuery('.listing_isotope').isotope();", 2000);
            setTimeout("jQuery('.listing_isotope').isotope();", 3000);
        }
    });
};

// Blog Listing Grid
jQuery.fn.blog_listing_addon = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.blog_isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_blog_item added">' +
                    '<div class="pm_blog_item_wrapper">' +
                    '<div class="pm_blog_featured_image_wrapper">' +
                    '<img src="' + addon_options.items[i].src + '" alt="" />' +
                    '<div class="pm_post_likes_wrapper">' +
                    '<div class="pm_image_likes_container">' +
                    '<div class="pm_add_like_button">' +
                    '<i class="pm_likes_icon fa fa-heart-o"></i>' +
                    '<span class="pm_likes_counter">0</span>' +
                    '</div>' +
                    '<a class="pm_potrfolio_read_more" href="' + addon_options.items[i].href + '"></a>' +
                    '<div class="clear"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.blog_isotope').isotope();", 500);
            setTimeout("jQuery('.blog_isotope').isotope();", 1000);
            setTimeout("jQuery('.blog_isotope').isotope();", 2000);
            setTimeout("jQuery('.blog_isotope').isotope();", 3000);
        }
    });
};

// Blog Listing Grid with Titles
jQuery.fn.blog_listing_addon_title = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.blog_isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_blog_item added">' +
                    '<div class="pm_blog_item_wrapper">' +
                    '<div class="pm_blog_featured_image_wrapper">' +
                    '<img src="' + addon_options.items[i].src + '" alt="" />' +
                    '<div class="pm_post_likes_wrapper">' +
                    '<div class="pm_image_likes_container">' +
                    '<div class="pm_add_like_button">' +
                    '<i class="pm_likes_icon fa fa-heart-o"></i>' +
                    '<span class="pm_likes_counter">0</span>' +
                    '</div>' +
                    '<a class="pm_potrfolio_read_more" href="' + addon_options.items[i].href + '"></a>' +
                    '<div class="clear"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="pm_blog_post_title">' +
                    addon_options.items[i].title +
                    '</div>' +
                    '</div>' +
                    '</div>'
                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.blog_isotope').isotope();", 500);
            setTimeout("jQuery('.blog_isotope').isotope();", 1000);
            setTimeout("jQuery('.blog_isotope').isotope();", 2000);
            setTimeout("jQuery('.blog_isotope').isotope();", 3000);
        }
    });
};

// Portfolio Listing Grid
jQuery.fn.portfolio_listing_addon = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.portfolio_isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_portfolio_item added">' +
                    '<div class="pm_portfolio_item_wrapper">' +
                    '<div class="pm_portfolio_featured_image_wrapper">' +
                    '<img src="' + addon_options.items[i].src + '" alt="" />' +
                    '<div class="pm_post_likes_wrapper">' +
                    '<div class="pm_image_likes_container">' +
                    '<div class="pm_add_like_button">' +
                    '<i class="pm_likes_icon fa fa-heart-o"></i>' +
                    '<span class="pm_likes_counter">0</span>' +
                    '</div>' +
                    '<a class="pm_potrfolio_read_more" href="' + addon_options.items[i].href + '"></a>' +
                    '<div class="clear"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.portfolio_isotope').isotope();", 500);
            setTimeout("jQuery('.portfolio_isotope').isotope();", 1000);
            setTimeout("jQuery('.portfolio_isotope').isotope();", 2000);
            setTimeout("jQuery('.portfolio_isotope').isotope();", 3000);
        }
    });
};

// Portfolio Listing Grid with Titles
jQuery.fn.portfolio_listing_addon_title = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.portfolio_isotope');

    jQuery('.pm_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_portfolio_item added">' +
                    '<div class="pm_portfolio_item_wrapper">' +
                    '<div class="pm_portfolio_featured_image_wrapper">' +
                    '<img src="' + addon_options.items[i].src + '" alt="" />' +
                    '<div class="pm_post_likes_wrapper">' +
                    '<div class="pm_image_likes_container">' +
                    '<div class="pm_add_like_button">' +
                    '<i class="pm_likes_icon fa fa-heart-o"></i>' +
                    '<span class="pm_likes_counter">0</span>' +
                    '</div>' +
                    '<a class="pm_potrfolio_read_more" href="' + addon_options.items[i].href + '"></a>' +
                    '<div class="clear"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="pm_portfolio_post_title">' +
                    addon_options.items[i].title  +
                    '</div>' +
                    '</div>' +
                    '</div>'
                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            setTimeout("jQuery('.portfolio_isotope').isotope();", 500);
            setTimeout("jQuery('.portfolio_isotope').isotope();", 1000);
            setTimeout("jQuery('.portfolio_isotope').isotope();", 2000);
            setTimeout("jQuery('.portfolio_isotope').isotope();", 3000);
        }
    });
};

function image_post_format_container() {
    var item_height = jQuery(".pm_gallery_item").height();

    jQuery(".pm_media_output_cont_wrapper").width(item_height + 1.003690036900369);
}

/**************************************/
/*********** DOCUMENT READY ***********/
/**************************************/
jQuery(document).ready(function(){
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('.pm_header').height();

    pm_fullwidth_block();

    // Mail
    jQuery('.pm_popup_form_wrapper input[type=submit]').click(function(){
        var this_contact = jQuery(this).parents('form');
        jQuery.post('mail.php', {
            send_mail: 'true',
            form_name: this_contact.find('input[name=name]').val(),
            form_email: this_contact.find('input[name=email]').val(),
            form_subject: this_contact.find('input[name=subject]').val(),
            form_text: this_contact.find('textarea[name=message]').val(),
        }).done(function (data) {
            alert(data);
        });

        return false;
    });

    // Activate Preloader
    jQuery(".preloader_active").width(site_width).height(site_height);
    jQuery(".pm_preloader_load_line").addClass("active");

    // Open Sharing Popup
    jQuery('.pm_share_button').on('click', function () {
        jQuery('.pm_sharing_back').addClass('active');
        setTimeout("jQuery('.pm_popup_share_wrapper').addClass('active_block');", 100);
    });

    // Fullscreen Toggler Button Activate
    jQuery('.pm_fullscreen_toggler').on('click', function () {
        jQuery('.pm_header.fixed_header').toggleClass('hidden_header');
        jQuery('.pm_navigation_container').toggleClass('hidden_nav');
        jQuery('.pm_slides_title_and_likes_container').toggleClass('hidden_title_and_likes');
        jQuery(this).toggleClass('active');

        if (site_width < 1025) {
            jQuery('.pm_menu_mobile_container_wrapper').toggleClass('pm_without_margin');
        }
    });

    // Menu mobile
    jQuery('.pm_menu_mobile_toggler').on('click', function () {
        jQuery('.pm_menu_mobile_container').slideToggle(600);

        if (site_width < 1025) {
            jQuery('body').toggleClass('scrollable');
        }
    });

    // Activate Form Popup
    var popup_container = jQuery(".pm_form_popup_back"),
        form_wrapper = popup_container.find(".pm_popup_form_wrapper");

    popup_container.width(site_width).height(site_height).css("display", "none");

    // Coming Soon Page
    if (site_width > 737) {
        jQuery('.pm_coming_soon_container').height(site_height);
    }

    // Ken Burns Album
    var slider_container = jQuery('#kenburns');

    if (slider_container.length) {
        slider_container.attr({'width': site_width, 'height': site_height});

        slider_container.kenburns({
            images: [
                'img/clipart/gallery-1920-04.jpg',
                'img/clipart/gallery-1920-02.jpg',
                'img/clipart/gallery-1920-03.jpg',
                'img/clipart/gallery-1920-01.jpg',
                'img/clipart/gallery-1920-05.jpg',
                'img/clipart/gallery-1920-06.jpg',
                'img/clipart/gallery-1920-07.jpg',
                'img/clipart/gallery-1920-08.jpg',
                'img/clipart/gallery-1920-12.jpg',
                'img/clipart/gallery-1920-15.jpg'
            ],
            frames_per_second: 30,
            display_time: 5000,
            fade_time: 1000,
            zoom: 1.2,
            background_color:'#000000'
        });
    }

    // Custom Scroll Activation
    var scroll_cont = jQuery('.pm_scroll_container'),
        desc_scroll_cont = jQuery('.pm_slider_description_cont');

    if (scroll_cont.length) {
        if (site_width > 769) {
            jQuery(scroll_cont).jScrollPane({
                autoReinitialise: true
            });
        }
    }

    if (desc_scroll_cont.length) {
        if (site_width > 737) {
        jQuery(desc_scroll_cont).jScrollPane({
                autoReinitialise: true
            });
        }
    }

    // Sizes of Fullscreen Pages Containers
    var container_height = site_height - header_height,
        media_height = site_height - 160;

    jQuery('.pm_post_container').width(site_width).height(container_height);
    jQuery('.pm_content_block').height(container_height - 187);
    jQuery('.pm_media_output_cont_wrapper').find('iframe').attr('height', media_height);

    if (site_width > 737) {
        jQuery('.gallery_descriptions').height(container_height).css('margin-top', header_height);
    }

    // Open Form Popup
    jQuery('.pm_about_form_button').on('click', function(){
        jQuery('.pm_form_popup_back').css('display', 'block');
        setTimeout(form_position, 100);
    });

    jQuery('.pm_contacts_form_button').on('click', function(){
        jQuery('.pm_form_popup_back').css('display', 'block');
        setTimeout(form_position, 100);
    });

    // Magnific Popup Initialize
    var photo_gallery = jQuery('.photo_gallery');

    if (photo_gallery.length){
        jQuery(photo_gallery).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }


    if (site_width < 1025) {
        jQuery('.pm_albums_tape_container, .pm_album_fullscreen, .pm_album_kenburns, .pm_album_descriptions, .pm_album_portrait, .pm_album_tape, .pm_album_stripes, .pm_album_scattered, .pm_album_waterwheel, .pm_album_video, .pm_blog_listing_tape_container').parent().find('.pm_menu_mobile_container_wrapper').css('padding-top', header_height);

        var menu_mobile = jQuery('.pm_innerpadding_menu .pm_menu_cont').find('ul.menu').detach();

        jQuery('.pm_menu_mobile_container_wrapper .pm_menu_mobile_container').html(menu_mobile);
        jQuery('.pm_menu_mobile_container_wrapper .pm_menu_mobile_container ul.menu').find('ul.sub-menu').unwrap();

        jQuery('.pm_menu_mobile_container .menu li.menu-item-has-children a').on('click', function () {
            jQuery(this).next().slideToggle(600);
        });
    }

    // Load More Items in Grid Pages
    jQuery('.advanced_hover_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/gallery-1920-04.jpg', popup_href: 'img/clipart/gallery-1920-04.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-14.jpg', popup_href: 'img/clipart/gallery-1920-14.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-15.jpg', popup_href: 'img/clipart/gallery-1920-15.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-16.jpg', popup_href: 'img/clipart/gallery-1920-16.jpg'}
        ];

        jQuery('#list').gallery_addon_advanced({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.album_grid_margin_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/gallery-1920-09.jpg', popup_href: 'img/clipart/gallery-1920-09.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-13.jpg', popup_href: 'img/clipart/gallery-1920-13.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-14.jpg', popup_href: 'img/clipart/gallery-1920-14.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-16.jpg', popup_href: 'img/clipart/gallery-1920-16.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-15.jpg', popup_href: 'img/clipart/gallery-1920-15.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-19.jpg', popup_href: 'img/clipart/gallery-1920-19.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-18.jpg', popup_href: 'img/clipart/gallery-1920-18.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-20.jpg', popup_href: 'img/clipart/gallery-1920-20.jpg'}
        ];

        jQuery('#list').gallery_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.album_grid_title_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/gallery-1920-13.jpg', title: 'Carpathian Mountains', popup_href: 'img/clipart/gallery-1920-13.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-14.jpg', title: 'Ocean Storm', popup_href: 'img/clipart/gallery-1920-14.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-16.jpg', title: 'Snowy Mountains', popup_href: 'img/clipart/gallery-1920-16.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-15.jpg', title: 'Pines', popup_href: 'img/clipart/gallery-1920-15.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-17.jpg', title: 'Autumn Adventures', popup_href: 'img/clipart/gallery-1920-17.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-19.jpg', title: 'Dark Mountain', popup_href: 'img/clipart/gallery-1920-19.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-18.jpg', title: 'Pier', popup_href: 'img/clipart/gallery-1920-18.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-20.jpg', title: 'Golden Gate Bridge', popup_href: 'img/clipart/gallery-1920-20.jpg'}
        ];

        jQuery('#list').gallery_addon_title({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.album_grid_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/gallery-1920-13.jpg', popup_href: 'img/clipart/gallery-1920-13.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-14.jpg', popup_href: 'img/clipart/gallery-1920-14.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-16.jpg', popup_href: 'img/clipart/gallery-1920-16.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-15.jpg', popup_href: 'img/clipart/gallery-1920-15.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-17.jpg', popup_href: 'img/clipart/gallery-1920-17.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-19.jpg', popup_href: 'img/clipart/gallery-1920-19.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-18.jpg', popup_href: 'img/clipart/gallery-1920-18.jpg'},
            {src: 'img/clipart/grid/col-4/gallery-1920-20.jpg', popup_href: 'img/clipart/gallery-1920-20.jpg'}
        ];

        jQuery('#list').gallery_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.album_masonry_page').each(function(){
        var items_set = [
            {src: 'img/clipart/masonry/col-4/masonry-06.jpg', popup_href: 'img/clipart/masonry/masonry-06.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-16.jpg', popup_href: 'img/clipart/masonry/masonry-16.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-09.jpg', popup_href: 'img/clipart/masonry/masonry-09.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-10.jpg', popup_href: 'img/clipart/masonry/masonry-10.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-11.jpg', popup_href: 'img/clipart/masonry/masonry-11.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-13.jpg', popup_href: 'img/clipart/masonry/masonry-13.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-12.jpg', popup_href: 'img/clipart/masonry/masonry-12.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-14.jpg', popup_href: 'img/clipart/masonry/masonry-14.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-22.jpg', popup_href: 'img/clipart/masonry/masonry-22.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-21.jpg', popup_href: 'img/clipart/masonry/masonry-21.jpg'},
            {src: 'img/clipart/masonry/col-4/masonry-23.jpg', popup_href: 'img/clipart/masonry/masonry-23.jpg'}
        ];

        jQuery('#list').gallery_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.albums_listing_grid_title_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/thumbs/thumb-13.jpg', album_href: 'album-grid.html', title: 'Grid Gallery', item_count: '20'},
            {src: 'img/clipart/grid/thumbs/thumb-14.jpg', album_href: 'album-scattered.html', title: 'Scattered Gallery', item_count: '48'}
        ];

        jQuery('#list').gallery_listing_title_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.albums_listing_grid_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/thumbs/thumb-13.jpg', album_href: 'album-grid.html', item_count: '20'},
            {src: 'img/clipart/grid/thumbs/thumb-14.jpg', album_href: 'album-scattered.html', item_count: '48'}
        ];

        jQuery('#list').gallery_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.blog_grid_2_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/col-2/blog11.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/col-2/blog03.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/col-2/blog14.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/col-2/blog06.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/col-2/blog10.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/col-2/blog02.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/col-2/post10.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/col-2/blog05.jpg', href: 'blog-post-standard.html'}
        ];

        jQuery('#list').blog_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.blog_grid_3_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/col-3/blog03.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/col-3/blog14.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/col-3/blog06.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/col-3/blog10.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/col-3/blog02.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/col-3/post10.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/col-3/blog05.jpg', href: 'blog-post-standard.html'}
        ];

        jQuery('#list').blog_listing_addon({
            load_count: 3,
            items: items_set
        });
    });

    jQuery('.blog_grid_4_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/col-4/blog10.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/col-4/blog02.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/col-4/post10.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/col-4/blog05.jpg', href: 'blog-post-standard.html'}
        ];

        jQuery('#list').blog_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.blog_grid_5_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/col-5/blog05.jpg', href: 'blog-post-standard.html'}
        ];

        jQuery('#list').blog_listing_addon({
            load_count: 5,
            items: items_set
        });
    });

    jQuery('.blog_grid_margin_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/col-4/blog10.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/col-4/blog02.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/col-4/post10.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/col-4/blog05.jpg', href: 'blog-post-standard.html'}
        ];

        jQuery('#list').blog_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.blog_grid_title_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/col-4/blog10.jpg', href: 'blog-post-standard.html', title: 'The Fox'},
            {src: 'img/clipart/blog/col-4/blog02.jpg', href: 'blog-post-image-full.html', title: 'Stephany'},
            {src: 'img/clipart/blog/col-4/post10.jpg', href: 'blog-post-video-full.html', title: 'Something About Me'},
            {src: 'img/clipart/blog/col-4/blog05.jpg', href: 'blog-post-standard.html', title: 'Summer House'}
        ];

        jQuery('#list').blog_listing_addon_title({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.blog_masonry_margin_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/blog10.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/blog02.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/post10.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/blog05.jpg', href: 'blog-post-standard.html'}
        ];

        jQuery('#list').blog_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.blog_masonry_title_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/blog10.jpg', href: 'blog-post-standard.html', title: 'The Fox '},
            {src: 'img/clipart/blog/blog02.jpg', href: 'blog-post-image-full.html', title: 'Stephany '},
            {src: 'img/clipart/blog/post10.jpg', href: 'blog-post-video-full.html', title: 'Something About Me '},
            {src: 'img/clipart/blog/blog05.jpg', href: 'blog-post-standard.html', title: 'Summer House '}
        ];

        jQuery('#list').blog_listing_addon_title({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.blog_masonry_page').each(function(){
        var items_set = [
            {src: 'img/clipart/blog/blog10.jpg', href: 'blog-post-standard.html'},
            {src: 'img/clipart/blog/blog02.jpg', href: 'blog-post-image-full.html'},
            {src: 'img/clipart/blog/post10.jpg', href: 'blog-post-video-full.html'},
            {src: 'img/clipart/blog/blog05.jpg', href: 'blog-post-standard.html'}
        ];

        jQuery('#list').blog_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.portfolio_grid_2_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-2/gallery-1920-25.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-2/gallery-1920-12.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-2/gallery-1920-09.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-2/gallery-1920-23.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-2/gallery-1920-05.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-2/gallery-1920-07.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-2/gallery-1920-17.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-2/gallery-1920-08.jpg', href: 'porfolio-post-standard.html'}
        ];

        jQuery('#list').portfolio_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.portfolio_grid_3_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-3/gallery-1920-12.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-3/gallery-1920-09.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-3/gallery-1920-23.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-3/gallery-1920-05.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-3/gallery-1920-07.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-3/gallery-1920-17.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-3/gallery-1920-08.jpg', href: 'porfolio-post-standard.html'}
        ];

        jQuery('#list').portfolio_listing_addon({
            load_count: 3,
            items: items_set
        });
    });

    jQuery('.portfolio_grid_4_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/gallery-1920-05.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-4/gallery-1920-07.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-4/gallery-1920-17.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-4/gallery-1920-08.jpg', href: 'porfolio-post-standard.html'}
        ];

        jQuery('#list').portfolio_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.portfolio_grid_5_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-5/gallery-1920-08.jpg', href: 'porfolio-post-standard.html'}
        ];

        jQuery('#list').portfolio_listing_addon({
            load_count: 5,
            items: items_set
        });
    });

    jQuery('.portfolio_grid_margin_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/gallery-1920-05.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-4/gallery-1920-07.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-4/gallery-1920-17.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-4/gallery-1920-08.jpg', href: 'porfolio-post-standard.html'}
        ];

        jQuery('#list').portfolio_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.portfolio_grid_title_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/gallery-1920-05.jpg', href: 'porfolio-post-standard.html', title: 'Forests'},
            {src: 'img/clipart/grid/col-4/gallery-1920-07.jpg', href: 'porfolio-post-image-full.html', title: 'Сrows'},
            {src: 'img/clipart/grid/col-4/gallery-1920-17.jpg', href: 'porfolio-post-video-full.html', title: 'Autumn Mountains'},
            {src: 'img/clipart/grid/col-4/gallery-1920-08.jpg', href: 'porfolio-post-standard.html', title: 'Green Forest'}
        ];

        jQuery('#list').portfolio_listing_addon_title({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.portfolio_masonry_margin_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/featured05.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-4/featured07.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-4/featured16.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-4/featured08.jpg', href: 'porfolio-post-standard.html'}
        ];

        jQuery('#list').portfolio_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.portfolio_masonry_title_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/featured05.jpg', href: 'porfolio-post-standard.html', title: 'Forests'},
            {src: 'img/clipart/grid/col-4/featured07.jpg', href: 'porfolio-post-image-full.html', title: 'Сrows'},
            {src: 'img/clipart/grid/col-4/featured16.jpg', href: 'porfolio-post-video-full.html', title: 'Autumn Mountains'},
            {src: 'img/clipart/grid/col-4/featured08.jpg', href: 'porfolio-post-standard.html', title: 'Green Forest'}
        ];

        jQuery('#list').portfolio_listing_addon_title({
            load_count: 4,
            items: items_set
        });
    });

    jQuery('.portfolio_masonry_page').each(function(){
        var items_set = [
            {src: 'img/clipart/grid/col-4/featured05.jpg', href: 'porfolio-post-standard.html'},
            {src: 'img/clipart/grid/col-4/featured07.jpg', href: 'porfolio-post-image-full.html'},
            {src: 'img/clipart/grid/col-4/featured16.jpg', href: 'porfolio-post-video-full.html'},
            {src: 'img/clipart/grid/col-4/featured08.jpg', href: 'porfolio-post-standard.html'}
        ];

        jQuery('#list').portfolio_listing_addon({
            load_count: 4,
            items: items_set
        });
    });

    // Album Fullscreen
    jQuery('.album_fullscreen_page').each(function(){
        jQuery(this).height(site_height);

        slider_fade();
    });

    // Album Scattered
    jQuery('.album_scattered_page').each(function(){
        if (site_width > 1024) {
            jQuery('.gallery_scattered').width(site_width).height(site_height);
        }

        setTimeout("jQuery('.pm_scattered_layer .photo_1').removeClass('invisible')", 400);
        setTimeout("jQuery('.pm_scattered_layer .photo_2').removeClass('invisible')", 400);
        setTimeout("jQuery('.pm_scattered_layer .photo_3').removeClass('invisible')", 400);
        setTimeout("jQuery('.pm_scattered_layer .photo_4').removeClass('invisible')", 600);
        setTimeout("jQuery('.pm_scattered_layer .photo_5').removeClass('invisible')", 600);
        setTimeout("jQuery('.pm_scattered_layer .photo_6').removeClass('invisible')", 600);
        setTimeout("jQuery('.pm_scattered_layer .photo_7').removeClass('invisible')", 800);
        setTimeout("jQuery('.pm_scattered_layer .photo_8').removeClass('invisible')", 800);
        setTimeout("jQuery('.pm_scattered_layer .photo_9').removeClass('invisible')", 800);
        setTimeout("jQuery('.pm_scattered_layer .photo_10').removeClass('invisible')", 1000);
        setTimeout("jQuery('.pm_scattered_layer .photo_11').removeClass('invisible')", 1000);
        setTimeout("jQuery('.pm_scattered_layer .photo_12').removeClass('invisible')", 1000);
        setTimeout("jQuery('.pm_scattered_layer .photo_13').removeClass('invisible')", 1200);
        setTimeout("jQuery('.pm_scattered_layer .photo_14').removeClass('invisible')", 1200);
        setTimeout("jQuery('.pm_scattered_layer .photo_15').removeClass('invisible')", 1400);
        setTimeout("jQuery('.pm_scattered_layer .photo_16').removeClass('invisible')", 1400);

        var items_set = [
            {src: 'img/clipart/scattered/gallery-1920-15.jpg', layer_num: 'layer_3', photo_num: 'photo_1', popup_href: 'img/clipart/gallery-1920-15.jpg', title: 'Pines'},
            {src: 'img/clipart/scattered/gallery-1920-04.jpg', layer_num: 'layer_3', photo_num: 'photo_2', popup_href: 'img/clipart/gallery-1920-04.jpg', title: 'Mount Everest'},
            {src: 'img/clipart/scattered/gallery-1920-17.jpg', layer_num: 'layer_3', photo_num: 'photo_3', popup_href: 'img/clipart/gallery-1920-17.jpg', title: 'Autumn Adventures'},
            {src: 'img/clipart/scattered/gallery-1920-18.jpg', layer_num: 'layer_3', photo_num: 'photo_4', popup_href: 'img/clipart/gallery-1920-18.jpg', title: 'Pier'},
            {src: 'img/clipart/scattered/gallery-1920-44.jpg', layer_num: 'layer_3', photo_num: 'photo_5', popup_href: 'img/clipart/gallery-1920-44.jpg', title: 'Zenit'},
            {src: 'img/clipart/scattered/gallery-1920-19.jpg', layer_num: 'layer_3', photo_num: 'photo_6', popup_href: 'img/clipart/gallery-1920-19.jpg', title: 'Dark Mountain'},
            {src: 'img/clipart/scattered/gallery-1920-20.jpg', layer_num: 'layer_3', photo_num: 'photo_7', popup_href: 'img/clipart/gallery-1920-20.jpg', title: 'Golden Gate Bridge'},
            {src: 'img/clipart/scattered/gallery-1920-21.jpg', layer_num: 'layer_3', photo_num: 'photo_8', popup_href: 'img/clipart/gallery-1920-21.jpg', title: 'Long Way Home'},
            {src: 'img/clipart/scattered/gallery-1920-22.jpg', layer_num: 'layer_4', photo_num: 'photo_1', popup_href: 'img/clipart/gallery-1920-22.jpg', title: 'Carpathian Mountains'},
            {src: 'img/clipart/scattered/gallery-1920-23.jpg', layer_num: 'layer_4', photo_num: 'photo_2', popup_href: 'img/clipart/gallery-1920-23.jpg', title: 'Pines'},
            {src: 'img/clipart/scattered/gallery-1920-33.jpg', layer_num: 'layer_4', photo_num: 'photo_3', popup_href: 'img/clipart/gallery-1920-33.jpg', title: 'Clouds'},
            {src: 'img/clipart/scattered/gallery-1920-32.jpg', layer_num: 'layer_4', photo_num: 'photo_4', popup_href: 'img/clipart/gallery-1920-32.jpg', title: 'Sunset'},
            {src: 'img/clipart/scattered/gallery-1920-31.jpg', layer_num: 'layer_4', photo_num: 'photo_5', popup_href: 'img/clipart/gallery-1920-31.jpg', title: 'Snowy Pines'},
            {src: 'img/clipart/scattered/gallery-1920-30.jpg', layer_num: 'layer_4', photo_num: 'photo_6', popup_href: 'img/clipart/gallery-1920-30.jpg', title: 'Shore'},
            {src: 'img/clipart/scattered/gallery-1920-28.jpg', layer_num: 'layer_4', photo_num: 'photo_7', popup_href: 'img/clipart/gallery-1920-28.jpg', title: 'Summer Trip'},
            {src: 'img/clipart/scattered/gallery-1920-27.jpg', layer_num: 'layer_4', photo_num: 'photo_8', popup_href: 'img/clipart/gallery-1920-27.jpg', title: 'Mountains and Sea'},
            {src: 'img/clipart/scattered/gallery-1920-26.jpg', layer_num: 'layer_1', photo_num: 'photo_1', popup_href: 'img/clipart/gallery-1920-26.jpg', title: 'Ocean'},
            {src: 'img/clipart/scattered/gallery-1920-25.jpg', layer_num: 'layer_1', photo_num: 'photo_2', popup_href: 'img/clipart/gallery-1920-25.jpg', title: 'The Road'},
            {src: 'img/clipart/scattered/gallery-1920-24.jpg', layer_num: 'layer_1', photo_num: 'photo_3', popup_href: 'img/clipart/gallery-1920-24.jpg', title: 'Adventures'},
            {src: 'img/clipart/scattered/gallery-1920-34.jpg', layer_num: 'layer_1', photo_num: 'photo_4', popup_href: 'img/clipart/gallery-1920-34.jpg', title: 'Vanilla Sky'},
            {src: 'img/clipart/scattered/gallery-1920-35.jpg', layer_num: 'layer_1', photo_num: 'photo_5', popup_href: 'img/clipart/gallery-1920-35.jpg', title: 'Rainy Day'},
            {src: 'img/clipart/scattered/gallery-1920-36.jpg', layer_num: 'layer_1', photo_num: 'photo_6', popup_href: 'img/clipart/gallery-1920-36.jpg', title: 'Green Forest'},
            {src: 'img/clipart/scattered/gallery-1920-37.jpg', layer_num: 'layer_1', photo_num: 'photo_7', popup_href: 'img/clipart/gallery-1920-37.jpg', title: 'Pines'},
            {src: 'img/clipart/scattered/gallery-1920-38.jpg', layer_num: 'layer_1', photo_num: 'photo_8', popup_href: 'img/clipart/gallery-1920-38.jpg', title: 'Foggy Forest'},
            {src: 'img/clipart/scattered/gallery-1920-39.jpg', layer_num: 'layer_2', photo_num: 'photo_1', popup_href: 'img/clipart/gallery-1920-39.jpg', title: 'The Last Autumn Trip'},
            {src: 'img/clipart/scattered/gallery-1920-40.jpg', layer_num: 'layer_2', photo_num: 'photo_2', popup_href: 'img/clipart/gallery-1920-40.jpg', title: 'Golden Shore'},
            {src: 'img/clipart/scattered/gallery-1920-41.jpg', layer_num: 'layer_2', photo_num: 'photo_3', popup_href: 'img/clipart/gallery-1920-41.jpg', title: 'Blue Ocean'},
            {src: 'img/clipart/scattered/gallery-1920-42.jpg', layer_num: 'layer_2', photo_num: 'photo_4', popup_href: 'img/clipart/gallery-1920-42.jpg', title: 'Big Mount'},
            {src: 'img/clipart/scattered/gallery-1920-43.jpg', layer_num: 'layer_2', photo_num: 'photo_5', popup_href: 'img/clipart/gallery-1920-43.jpg', title: 'Stones'},
            {src: 'img/clipart/scattered/gallery-1920-46.jpg', layer_num: 'layer_2', photo_num: 'photo_6', popup_href: 'img/clipart/gallery-1920-46.jpg', title: 'Grasses'},
            {src: 'img/clipart/scattered/gallery-1920-48.jpg', layer_num: 'layer_2', photo_num: 'photo_7', popup_href: 'img/clipart/gallery-1920-48.jpg', title: 'Autumn Field'},
            {src: 'img/clipart/scattered/gallery-1920-45.jpg', layer_num: 'layer_2', photo_num: 'photo_8', popup_href: 'img/clipart/gallery-1920-45.jpg', title: 'Seagulls'}
        ];

        jQuery('#list').gallery_scattered_addon({
            load_count: 8,
            items: items_set
        });
    });

    // Album Video
    jQuery('.album_video_page').each(function(){
        var pm_body = jQuery('body');

        pm_body.height(site_height);

        setTimeout(slider_fade_video, 500);
    });
});

/***********************************/
/*********** WINDOW LOAD ***********/
/***********************************/
jQuery(window).load(function(){
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('.pm_header').height();

    // Hide Preloader
    setTimeout("jQuery('.preloader_active').fadeOut();", 1000);

    //Share Popup Position
    jQuery(".pm_sharing_back").width(site_width).height(site_height);

    // Image Slider in Post
    jQuery('.pm_media_outout_image_listing').each(function(){
        post_image_slider();
    });

    // Album Description Page
    jQuery('.album_description_page').each(function(){
        if (site_width > 737) {
            slide_carousel();
        } else {
            jQuery('.pm_album_descriptions').prepend('<div class="pm_fullscreen_toggler"></div>');

            jQuery('.pm_fullscreen_toggler').on('click', function(){
                jQuery('.pm_header.fixed_header').toggleClass('hidden_header');
                jQuery('.pm_navigation_container').toggleClass('hidden_nav');
                jQuery('.pm_slides_title_and_likes_container').toggleClass('hidden_title_and_likes');
                jQuery(this).toggleClass('active');

                if (site_width < 769) {
                    jQuery('.pm_menu_mobile_container_wrapper').toggleClass('pm_without_margin');
                }
            });
        }
    });

    // Isotope Initialize
    isotope_setup();
    setTimeout(isotope_setup, 500);
    setTimeout(isotope_setup, 1000);
    setTimeout(isotope_setup, 2000);
    setTimeout(isotope_setup, 3000);

    listing_isotope_setup();
    setTimeout(listing_isotope_setup, 500);
    setTimeout(listing_isotope_setup, 1000);
    setTimeout(listing_isotope_setup, 2000);
    setTimeout(listing_isotope_setup, 3000);

    blog_isotope_setup();
    setTimeout(blog_isotope_setup, 500);
    setTimeout(blog_isotope_setup, 1000);
    setTimeout(blog_isotope_setup, 2000);
    setTimeout(blog_isotope_setup, 3000);

    portfolio_isotope_setup();
    setTimeout(portfolio_isotope_setup, 500);
    setTimeout(portfolio_isotope_setup, 1000);
    setTimeout(portfolio_isotope_setup, 2000);
    setTimeout(portfolio_isotope_setup, 3000);

    setTimeout("jQuery('.pm_album_grid').css('opacity', '1')", 1000);
    setTimeout("jQuery('.pm_blog_listing_container').css('opacity', '1')", 1000);
    setTimeout("jQuery('.pm_portfolio_listing_container').css('opacity', '1')", 1000);

    // Album WaterWheel
    jQuery('.album_waterwheel_page').each(function(){
        var next_button = jQuery(this).find('.pm_next_slide_button'),
            prev_button = jQuery(this).find('.pm_prev_slide_button');

        if (site_width > 737) {
            carousel_waterWheel();
            setTimeout(carousel_waterWheel, 300);
            setTimeout("jQuery('.gallery_waterwheel .pm_gallery').css('opacity', '1')", 500);

            next_button.on('click', function(){
                ww_next_slide();
            });

            prev_button.on('click', function(){
                ww_prev_slide();
            });

            /* Autoplay */
            var autoplay_status = 'on',
                slide_duration = '5000',
                intervalID;

            if (autoplay_status == 'on') {

                intervalID = setInterval(ww_next_slide, slide_duration);

                jQuery('.pm_pause_button').on('click', function(){
                    if (jQuery(this).hasClass('pm_paused')) {
                        intervalID = setInterval(ww_next_slide, slide_duration);
                        jQuery(this).removeClass('pm_paused');
                    } else {
                        clearInterval(intervalID);
                        jQuery(this).addClass('pm_paused');
                    }
                });
            } else {
                jQuery('.pm_pause_button').remove();
            }

            /* Likes */
            var current_item = jQuery('.current_item'),
                slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

            jQuery('.pm_slide_likes_wrapper').html(slide_likes);

            /* Fullscreen Mode */
            jQuery('.pm_fullscreen_toggler').on('click', function(){
                jQuery('.pm_gallery_container').toggleClass('fullscreen_mode');
                resize_waterWheel();
                setTimeout(resize_waterWheel, 100);
                setTimeout(resize_waterWheel, 200);
                setTimeout(resize_waterWheel, 300);
                setTimeout(resize_waterWheel, 400);
                setTimeout(resize_waterWheel, 500);
            });
        }
    });

    // Album Tape
    jQuery('.album_tape_page').each(function(){
        var next_button = jQuery(this).find('.pm_next_slide_button'),
            prev_button = jQuery(this).find('.pm_prev_slide_button');

        if (site_width > 737) {
            carousel_tape();
            setTimeout(carousel_tape, 300);
            setTimeout(carousel_tape, 500);

            next_button.on('click', function(){
                tape_next_slide();
            });

            prev_button.on('click', function(){
                tape_prev_slide();
            });

            /* Autoplay */
            var autoplay_status = 'on',
                slide_duration = '5000',
                intervalID;

            if (autoplay_status == 'on') {

                intervalID = setInterval(tape_next_slide, slide_duration);

                jQuery('.pm_pause_button').on('click', function(){
                    if (jQuery(this).hasClass('pm_paused')) {
                        intervalID = setInterval(tape_next_slide, slide_duration);
                        jQuery(this).removeClass('pm_paused');
                    } else {
                        clearInterval(intervalID);
                        jQuery(this).addClass('pm_paused');
                    }
                });
            } else {
                jQuery('.pm_pause_button').remove();
            }

            /* Likes */
            var current_item = jQuery('.current_item'),
                slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

            jQuery('.pm_slide_likes_wrapper').html(slide_likes);

            jQuery('.pm_fullscreen_toggler').on('click', function() {
                jQuery('.pm_gallery_container').toggleClass('fullscreen_mode');
                tape_resize();
                setTimeout(tape_resize, 100);
                setTimeout(tape_resize, 200);
                setTimeout(tape_resize, 300);
                setTimeout(tape_resize, 400);
                setTimeout(tape_resize, 500);
            });
        }
    });

    // Album Stripes
    jQuery('.album_stripes_page').each(function(){
        var slider_height = site_height - header_height - 107,
            slider_width = jQuery('.pm_stripes_wrapper').width(),
            margin_size = 10,
            items_per_page = 6,
            item_with = (slider_width + margin_size) / items_per_page;

        if (site_width > 737) {
            jQuery('.gallery_stripes').height(slider_height).css('margin-top', header_height);

            jQuery('.gallery_stripes .pm_gallery_item').width(item_with);

            pm_stripe_carousel();

            jQuery('.pm_gallery li').on({
                mouseenter: function() {
                    jQuery('.pm_stripe_item_wrapper').find('.pm_stripes_fader').css('opacity', '.7');
                    jQuery(this).find('.pm_stripes_fader').css('opacity', '0');
                },
                mouseleave: function() {
                    jQuery('.pm_stripe_item_wrapper').find('.pm_stripes_fader').css('opacity', '0');
                }
            });
        } else {
            jQuery('.pm_gallery_item').attr('onclick', '');
            jQuery('.pm_album_stripes').prepend('<div class="pm_fullscreen_toggler"></div>');

            jQuery('.pm_fullscreen_toggler').on('click', function(){
                jQuery('.pm_header.fixed_header').toggleClass('hidden_header');
                jQuery('.pm_navigation_container').toggleClass('hidden_nav');
                jQuery('.pm_slides_title_and_likes_container').toggleClass('hidden_title_and_likes');
                jQuery(this).toggleClass('active');

                if (site_width < 769) {
                    jQuery('.pm_menu_mobile_container_wrapper').toggleClass('pm_without_margin');
                }
            });
        }
    });

    // Album Portrait
    jQuery('.album_portrait_page').each(function(){
        var slider_height = site_height - header_height - 80,
            slider_container = jQuery('.pm_gallery_container');

        if (site_width > 737) {
            slider_container.height(slider_height).css('margin-top', (header_height + 40));

            jQuery('.pm_fullscreen_toggler').on('click', function(){
                if (jQuery(this).hasClass('active')) {
                    slider_height = site_height - 80;

                    slider_container.height(slider_height).css('margin-top', '40px');
                } else {
                    slider_height = site_height - header_height - 80;

                    slider_container.height(slider_height).css('margin-top', (header_height + 40));
                }
            });

            slider_fade();
        }
    });

    // Albums Listing Stripes
    jQuery('.albums_listing_stripes_page').each(function(){
        var pm_albums_height = site_height - header_height;

        jQuery('.pm_albums_stripes').width(site_width).height(pm_albums_height);
    });

    // Albums Listing Tape
    jQuery('.albums_listing_tape_page').each(function(){
        var next_button = jQuery(this).find('.pm_next_slide_button'),
            prev_button = jQuery(this).find('.pm_prev_slide_button'),
            pm_index = 107;

        listing_carousel_tape();
        setTimeout(listing_carousel_tape, 300);
        setTimeout(listing_carousel_tape, 500);

        image_post_format_container();

        jQuery('.pm_media_outout_image_listing').each(function(){
            var listing_id = jQuery(this).attr('id');

            listing_post_format_image_slider(listing_id);
        });

        // Navigation
        next_button.on('click', function(){
            listing_tape_next_slide();
        });
        prev_button.on('click', function(){
            listing_tape_prev_slide();
        });
        jQuery('.pm_gallery_item').on('click', function(){
            if (jQuery(this).hasClass('next_item')) {
                listing_tape_next_slide();
            }

            if (jQuery(this).hasClass('prev_item')) {
                listing_tape_prev_slide();
            }
        });

        /* Likes */
        var current_item = jQuery('.current_item'),
            slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

        jQuery('.pm_slide_likes_wrapper').html(slide_likes);

        /* Fullscreen Mode */
        jQuery('.pm_fullscreen_toggler').on('click', function() {
            jQuery('.pm_albums_tape_container').toggleClass('fullscreen_mode');
            listing_tape_resize(pm_index);
            setTimeout(listing_tape_resize, 100);
            setTimeout(listing_tape_resize, 200);
            setTimeout(listing_tape_resize, 300);
            setTimeout(listing_tape_resize, 400);
            setTimeout(listing_tape_resize, 500);

            setTimeout(image_post_format_container, 100);
            setTimeout(image_post_format_container, 200);
            setTimeout(image_post_format_container, 300);
            setTimeout(image_post_format_container, 400);
            setTimeout(image_post_format_container, 500);
        });
    });

    // Blog Listing Tape
    jQuery('.blog_tape_page').each(function(){
        var next_button = jQuery(this).find('.pm_next_slide_button'),
            prev_button = jQuery(this).find('.pm_prev_slide_button'),
            pm_index = 107;

        blog_listing_carousel_tape(pm_index);
        setTimeout(blog_listing_carousel_tape, 300);
        setTimeout(blog_listing_carousel_tape, 500);

        image_post_format_container();

        jQuery('.pm_media_outout_image_listing').each(function(){
            var listing_id = jQuery(this).attr('id');

            blog_listing_post_format_image_slider(listing_id);
        });

        // Navigation
        next_button.on('click', function(){
            blog_listing_tape_next_slide();
        });
        prev_button.on('click', function(){
            blog_listing_tape_prev_slide();
        });
        jQuery('.pm_gallery_item').on('click', function(){
            if (jQuery(this).hasClass('next_item')) {
                blog_listing_tape_next_slide();
            }

            if (jQuery(this).hasClass('prev_item')) {
                blog_listing_tape_prev_slide();
            }
        });

        // Likes and Comments
        var current_item = jQuery('.current_item'),
            slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach(),
            comments_link = current_item.find('.pm_temp_comment_counter').attr('data-link'),
            slide_comments = current_item.find('.pm_temp_comment_counter').html();

        jQuery('.pm_slide_likes_wrapper').html(slide_likes);
        jQuery('.pm_comments_counter').attr('href', comments_link);
        jQuery('.pm_comments_counter .pm_counter_wrapper').html(slide_comments);

        // Fullscreen Mode
        jQuery('.pm_fullscreen_toggler').on('click', function() {
            jQuery('.pm_blog_listing_tape_container').toggleClass('fullscreen_mode');
            blog_listing_tape_resize(pm_index);
            setTimeout(blog_listing_tape_resize, 100);
            setTimeout(blog_listing_tape_resize, 200);
            setTimeout(blog_listing_tape_resize, 300);
            setTimeout(blog_listing_tape_resize, 400);
            setTimeout(blog_listing_tape_resize, 500);

            setTimeout(image_post_format_container, 100);
            setTimeout(image_post_format_container, 200);
            setTimeout(image_post_format_container, 300);
            setTimeout(image_post_format_container, 400);
            setTimeout(image_post_format_container, 500);
        });
    });

    // Error 404 Page
    jQuery('.page404').each(function(){
        var container_height = site_height - header_height - 107,
            wrapper = jQuery('.pm_404_content_wrapper'),
            wrapper_height = jQuery(wrapper).height();

        if (site_width > 737) {
            jQuery('.pm_404_container').height(container_height);
            wrapper.css('margin-top', (container_height - wrapper_height) / 2);
        }

        if (site_width < 737) {
            var button_back = jQuery('.pm_404_back_button').detach();

            jQuery('.pm_404_searh_container').append(button_back);
        }
    });
});

/*************************************/
/*********** WINDOW RESIZE ***********/
/*************************************/
jQuery(window).resize(function(){
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('.pm_header').height(),
        media_height = site_height - header_height - 80;

    // Sare Popup Position
    jQuery(".pm_sharing_back").width(site_width).height(site_height);

    // Coming Soon Page
    if (site_width > 737) {
        jQuery('.pm_coming_soon_container').height(site_height);
    }

    // Ken Burns Album Reload
    jQuery("#kenburns").remove();
    setTimeout(travis_kenburns_resize, 200);

    // Album Description Reload
    jQuery('.album_description_page').each(function(){
        if (site_width > 767 && site_width < 1025) {
            location.href = '';
        }
    });

    // Sizes of Fullscreen Pages Containers
    var container_height = site_height - header_height;

    jQuery('.pm_post_container').width(site_width).height(container_height);
    jQuery('.pm_content_block').height(container_height - 187);

    if (site_width > 737) {
        jQuery('.gallery_descriptions').height(container_height).css('margin-top', header_height);
    }

    jQuery('.pm_media_output_cont_wrapper').find('iframe').attr('height', media_height);

    // Form Popup
    var popup_cont = jQuery('.pm_form_popup_back');

    jQuery(popup_cont).width(site_width).height(site_height);

    jQuery('.album_fullscreen_page').height(site_height);

    if (site_width > 1024) {
        jQuery('.gallery_scattered').width(site_width).height(site_height);
    }

    // Album WaterWheel
    jQuery('.album_waterwheel_page').each(function(){
        if (site_width > 737) {
            resize_waterWheel();
            setTimeout(resize_waterWheel, 100);
            setTimeout(resize_waterWheel, 200);
            setTimeout(resize_waterWheel, 300);
            setTimeout(resize_waterWheel, 400);
            setTimeout(resize_waterWheel, 500);

            if (site_width < 1025) {
                location.href = '';
            }
        }
    });

    // Album Tape
    jQuery('.album_tape_page').each(function(){
        if (site_width > 737) {
            tape_resize();
            setTimeout(tape_resize, 100);
            setTimeout(tape_resize, 200);
            setTimeout(tape_resize, 300);
            setTimeout(tape_resize, 400);
            setTimeout(tape_resize, 500);

            if (site_width < 1025) {
                location.href = '';
            }
        }
    });

    // Album Stripes
    jQuery('.album_stripes_page').each(function(){
        var slider_height = site_height - header_height - 107;

        if (site_width > 737) {
            jQuery('.gallery_stripes').height(slider_height).css('margin-top', header_height);
        }
    });

    // Album Portrait
    jQuery('.album_portrait_page').each(function(){
        location.href = '';
    });

    // Album Video
    jQuery('.album_video_page').each(function(){
        jQuery('body').height(site_height);

        if (site_width < 737) {
            location.href = '';
        }
    });

    // Albums Listing Stripes
    jQuery('.albums_listing_stripes_page').each(function(){
        var pm_albums_height = site_height - header_height;

        jQuery('.pm_albums_stripes').width(site_width).height(pm_albums_height);
    });

    // Albums Listing Tape
    jQuery('.albums_listing_tape_page').each(function(){
        if (jQuery('body').hasClass('customize-support')) {
            var pm_index = 139;
        } else {
            pm_index = 107;
        }

        listing_tape_resize(pm_index);
        setTimeout(listing_tape_resize, 100);
        setTimeout(listing_tape_resize, 200);
        setTimeout(listing_tape_resize, 300);
        setTimeout(listing_tape_resize, 400);
        setTimeout(listing_tape_resize, 500);

        setTimeout(image_post_format_container, 100);
        setTimeout(image_post_format_container, 200);
        setTimeout(image_post_format_container, 300);
        setTimeout(image_post_format_container, 400);
        setTimeout(image_post_format_container, 500);
    });

    // Blog Listing Tape
    jQuery('.blog_tape_page').each(function(){
        var pm_index = 107;

        blog_listing_tape_resize(pm_index);
        setTimeout(blog_listing_tape_resize, 100);
        setTimeout(blog_listing_tape_resize, 200);
        setTimeout(blog_listing_tape_resize, 300);
        setTimeout(blog_listing_tape_resize, 400);
        setTimeout(blog_listing_tape_resize, 500);

        setTimeout(image_post_format_container, 100);
        setTimeout(image_post_format_container, 200);
        setTimeout(image_post_format_container, 300);
        setTimeout(image_post_format_container, 400);
        setTimeout(image_post_format_container, 500);

        if (site_width < 737) {
            location.href = '';
        }
    });

    // Error 404 Page
    jQuery('.page404').each(function(){
        var container_height = site_height - header_height - 107,
            wrapper = jQuery('.pm_404_content_wrapper'),
            wrapper_height = jQuery(wrapper).height();

        if (site_width > 737) {
            jQuery('.pm_404_container').height(container_height);
            wrapper.css('margin-top', (container_height - wrapper_height) / 2);
        }
    });
});

///////////////////////////
//// Post Image Slider ////
///////////////////////////
function post_image_slider() {
    var slider_container = jQuery('.pm_media_outout_image_listing'),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length,
        slide_item = jQuery('.pm_media_outout_image_listing li'),
        intervalID,
        next_button = jQuery('.pm_media_output_cont_wrapper .pm_next_slide_button'),
        prev_button = jQuery('.pm_media_output_cont_wrapper .pm_prev_slide_button'),
        current_item,
        slide_number;

    slide_item.first().addClass('visible_slide');

    current_item = jQuery('.pm_media_outout_image_listing li.visible_slide');

    var next_thumb_back = current_item.next().attr('data-thumbnail'),
        prev_thumb_back = slide_item.last().attr('data-thumbnail');

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});


    // Autoplay
    intervalID = setInterval(post_image_next_slide, 5000);

    next_button.on({
        mouseenter: function () {
            clearInterval(intervalID);
        },
        mouseleave: function () {
            intervalID = setInterval(post_image_next_slide, 5000);
        }
    });

    prev_button.on({
        mouseenter: function () {
            clearInterval(intervalID);
        },
        mouseleave: function () {
            intervalID = setInterval(post_image_next_slide, 5000);
        }
    });

    // Navigation
    next_button.on('click', function () {
        post_image_next_slide();
    });

    prev_button.on('click', function () {
        post_image_prev_slide();
    });
}

// Next Slide //
function post_image_next_slide() {
    var slider_container = jQuery('.pm_media_outout_image_listing'),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length,
        slide_item = jQuery('.pm_media_outout_image_listing li'),
        current_item = jQuery('.pm_media_outout_image_listing li.visible_slide'),
        slide_number = current_item.attr('data-number'),
        next_button = jQuery('.pm_media_output_cont_wrapper .pm_next_slide_button'),
        prev_button = jQuery('.pm_media_output_cont_wrapper .pm_prev_slide_button');

    if (slide_number < number_of_elements) {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').next().addClass('visible_slide');
    } else {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
        slide_item.first().addClass('visible_slide');
    }

    // Thumbnails
    var current_item_new = slider_container.find('.visible_slide'),
        slide_number_new = current_item_new.attr('data-number'),
        next_thumb_back,
        prev_thumb_back;

    if (slide_number_new < number_of_elements) {
        next_thumb_back = current_item_new.next().attr('data-thumbnail');
        prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
    } else {
        next_thumb_back = slide_item.first().attr('data-thumbnail');
        prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
    }

    if (slide_number_new == '1') {
        prev_thumb_back = slide_item.last().attr('data-thumbnail');
    }

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

// Prev Slide //
function post_image_prev_slide() {
    var slider_container = jQuery('.pm_media_outout_image_listing'),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length,
        slide_item = jQuery('.pm_media_outout_image_listing li'),
        current_item = jQuery('.pm_media_outout_image_listing li.visible_slide'),
        slide_number = current_item.attr('data-number'),
        next_button = jQuery('.pm_media_output_cont_wrapper .pm_next_slide_button'),
        prev_button = jQuery('.pm_media_output_cont_wrapper .pm_prev_slide_button');

    if (slide_number == '1') {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
        slide_item.last().addClass('visible_slide');
    } else {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').prev().addClass('visible_slide');
    }

    // Thumbnails
    var current_item_new = slider_container.find('.visible_slide'),
        slide_number_new = current_item_new.attr('data-number'),
        next_thumb_back,
        prev_thumb_back;

    if (slide_number_new == '1') {
        next_thumb_back = current_item_new.next().attr('data-thumbnail');
        prev_thumb_back = slide_item.last().attr('data-thumbnail');
    } else {
        next_thumb_back = current_item_new.next().attr('data-thumbnail');
        prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
    }

    if (slide_number_new == number_of_elements) {
        next_thumb_back = slide_item.first().attr('data-thumbnail');
    }

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

///////////////////////////////////
// Carousel on Album Description //
///////////////////////////////////
function slide_carousel() {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        sliderList = jQuery('.pm_gallery.effect_slide'),
        slide_item = jQuery(sliderList).find('li');

    slide_item.width(site_width - 80);

    var increment = jQuery(sliderList).children().outerWidth(true),
        elmnts = jQuery(sliderList).children(),
        numElmts = elmnts.length,
        sizeFirstElmnt = increment,
        shownInViewport = Math.round(jQuery(window).width() / sizeFirstElmnt),
        firstElementOnViewPort = 1,
        isAnimating = false,
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button'),
        i;

    if (elmnts) {
        for (i = 0; i < (shownInViewport); i++) {
            jQuery(sliderList).css('width',(numElmts+shownInViewport)*increment + increment + "px");
            jQuery(sliderList).append(jQuery(elmnts[i]).clone().addClass('cloned_slide'));
        }

        slide_item.first().addClass('visible_slide');

        // Thumbnails
        var current_item = jQuery('.pm_gallery.effect_slide li.visible_slide'),
            next_thumb_back = current_item.next().attr('data-thumbnail'),
            prev_thumb_back = slide_item.last().attr('data-thumbnail');

        next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
        prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});

        // Navigation
        next_button.on('click', function(){
            slide_carousel_next_slide(isAnimating, firstElementOnViewPort, numElmts, sliderList, increment);

            if (firstElementOnViewPort > numElmts) {
                firstElementOnViewPort = 2
            } else {
                firstElementOnViewPort++;
            }
        });

        prev_button.on('click', function(){
            slide_carousel_prev_slide(isAnimating, firstElementOnViewPort, numElmts, sliderList, increment, sizeFirstElmnt);

            if (firstElementOnViewPort == 1) {
                firstElementOnViewPort = numElmts;
            } else {
                firstElementOnViewPort--;
            }
        });
    }
}

// Next Slide //
function slide_carousel_next_slide(isAnimating, firstElementOnViewPort, numElmts, sliderList, increment) {
    var slider_container = jQuery('.pm_gallery.effect_slide'),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length - 1,
        slide_item = jQuery('.pm_gallery.effect_slide li'),
        current_item = jQuery('.pm_gallery.effect_slide li.visible_slide'),
        slide_number = current_item.attr('data-number'),
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button');


    if (!isAnimating) {
        if (firstElementOnViewPort > numElmts) {
            jQuery(sliderList).css('left', "0px");
        }

        jQuery(sliderList).animate({
            left: "-=" + increment,
            y: 0,
            queue: true
        }, "swing", function(){isAnimating = false;});
        isAnimating = true;
    }

    // Current Slide
    if (slide_number < number_of_elements) {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').next().addClass('visible_slide');
    } else {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
        slide_item.first().addClass('visible_slide');
    }

    // Thumbnails
    var current_item_new = slider_container.find('.visible_slide'),
        slide_number_new = current_item_new.attr('data-number'),
        next_thumb_back,
        prev_thumb_back;

    if (slide_number_new < number_of_elements) {
        next_thumb_back = current_item_new.next().attr('data-thumbnail');
        prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
    } else {
        next_thumb_back = slide_item.first().attr('data-thumbnail');
        prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
    }

    if (slide_number_new == '1') {
        prev_thumb_back = jQuery(slider_container).find('[data-number="' + number_of_elements + '"]').attr('data-thumbnail');
    }

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

// Previous Slide //
function slide_carousel_prev_slide(isAnimating, firstElementOnViewPort, numElmts, sliderList, increment, sizeFirstElmnt) {
    var slider_container = jQuery('.pm_gallery.effect_slide'),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length - 1,
        slide_item = jQuery('.pm_gallery.effect_slide li'),
        current_item = jQuery('.pm_gallery.effect_slide li.visible_slide'),
        slide_number = current_item.attr('data-number'),
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button');

    if (!isAnimating) {
        if (firstElementOnViewPort == 1) {
            jQuery(sliderList).css('left', "-" + numElmts * sizeFirstElmnt + "px");
        }

        jQuery(sliderList).animate({
            left: "+=" + increment,
            y: 0,
            queue: true
        }, "swing", function(){isAnimating = false;});
        isAnimating = true;
    }

    // Current Slide
    if (slide_number == '1') {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
        jQuery(slider_container).find('[data-number="' + number_of_elements + '"]').addClass('visible_slide');
    } else {
        jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').prev().addClass('visible_slide');
    }

    // Thumbnails
    var current_item_new = slider_container.find('.visible_slide'),
        slide_number_new = current_item_new.attr('data-number'),
        next_thumb_back,
        prev_thumb_back;

    if (slide_number_new == '1') {
        next_thumb_back = current_item_new.next().attr('data-thumbnail');
        prev_thumb_back = jQuery(slider_container).find('[data-number="' + number_of_elements + '"]').attr('data-thumbnail');
    } else {
        next_thumb_back = current_item_new.next().attr('data-thumbnail');
        prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
    }

    if (slide_number_new == number_of_elements) {
        next_thumb_back = slide_item.first().attr('data-thumbnail');
    }

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

/////////////////////
//// Slider Fade ////
/////////////////////
function slider_fade() {
    var slider_container = jQuery('.pm_gallery.effect_fade'),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length,
        slide_item = jQuery('.pm_gallery.effect_fade li'),
        intervalID,
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button'),
        autuplay_status = 'on',
        slide_duration = 5000;

    slide_item.css({'width': 100 + '%', 'height': 100 + '%'});
    slide_item.first().addClass('visible_slide');

    // Slide Title
    var current_item = jQuery('.pm_gallery.effect_fade li.visible_slide'),
        slide_title = current_item.attr('data-title');

    jQuery('.pm_slide_title_wrapper').html(slide_title);

    // Likes
    var slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

    jQuery('.pm_slide_likes_wrapper').html(slide_likes);

    // Thumbnails
    var next_thumb_back = current_item.next().attr('data-thumbnail'),
        prev_thumb_back = slide_item.last().attr('data-thumbnail');

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});

    // Autoplay
    if (autuplay_status == 'on') {
        intervalID = setInterval(next_slide, slide_duration);

        jQuery('.pm_pause_button').on('click', function(){
            if (jQuery(this).hasClass('pm_paused')) {
                intervalID = setInterval(next_slide, slide_duration);
                jQuery(this).removeClass('pm_paused');
            } else {
                clearInterval(intervalID);
                jQuery(this).addClass('pm_paused');
            }
        });
    } else {
        jQuery('.pm_pause_button').remove();
    }

    // Navigation
    next_button.on('click', function(){
        next_slide();
    });

    prev_button.on('click', function(){
        prev_slide();
    });

    // Next Slide
    function next_slide() {
        var slider_container = jQuery('.pm_gallery.effect_fade'),
            elements = jQuery(slider_container).children(),
            number_of_elements = elements.length,
            slide_item = jQuery('.pm_gallery.effect_fade li'),
            current_item = jQuery('.pm_gallery.effect_fade li.visible_slide'),
            slide_number = current_item.attr('data-number'),
            next_button = jQuery('.pm_next_slide_button'),
            prev_button = jQuery('.pm_prev_slide_button');

        if (slide_number < number_of_elements) {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').next().addClass('visible_slide');
        } else {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
            slide_item.first().addClass('visible_slide');
        }

        // Likes
        var likes_container = jQuery('.pm_slide_likes_wrapper');

        slide_likes = likes_container.find('.pm_add_like_button').detach();

        current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

        var current_item_next = slider_container.find('li.visible_slide');

        slide_likes = current_item_next.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

        likes_container.html(slide_likes);

        // Slide Title
        var slide_title = current_item_next.attr('data-title');

        jQuery('.pm_slide_title_wrapper').html(slide_title);

        // Thumbnails
        var current_item_new = slider_container.find('.visible_slide'),
            slide_number_new = current_item_new.attr('data-number'),
            next_thumb_back,
            prev_thumb_back;

        if (slide_number_new < number_of_elements) {
            next_thumb_back = current_item_new.next().attr('data-thumbnail');
            prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
        } else {
            next_thumb_back = slide_item.first().attr('data-thumbnail');
            prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
        }

        if (slide_number_new == '1') {
            prev_thumb_back = slide_item.last().attr('data-thumbnail');
        }

        next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
        prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
    }

    // Previous Slide
    function prev_slide() {
        var slider_container = jQuery('.pm_gallery.effect_fade'),
            elements = jQuery(slider_container).children(),
            number_of_elements = elements.length,
            slide_item = jQuery('.pm_gallery.effect_fade li'),
            current_item = jQuery('.pm_gallery.effect_fade li.visible_slide'),
            slide_number = current_item.attr('data-number'),
            next_button = jQuery('.pm_next_slide_button'),
            prev_button = jQuery('.pm_prev_slide_button');

        if (slide_number == '1') {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
            slide_item.last().addClass('visible_slide');
        } else {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').prev().addClass('visible_slide');
        }

        // Likes
        var likes_container = jQuery('.pm_slide_likes_wrapper');
        slide_likes = likes_container.find('.pm_add_like_button').detach();

        current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

        var current_item_next = slider_container.find('li.visible_slide');

        slide_likes = current_item_next.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

        likes_container.html(slide_likes);

        // Slide Title
        var slide_title = current_item_next.attr('data-title');

        jQuery('.pm_slide_title_wrapper').html(slide_title);

        // Thumbnails
        var current_item_new = slider_container.find('.visible_slide'),
            slide_number_new = current_item_new.attr('data-number'),
            next_thumb_back,
            prev_thumb_back;

        if (slide_number_new == '1') {
            next_thumb_back = current_item_new.next().attr('data-thumbnail');
            prev_thumb_back = slide_item.last().attr('data-thumbnail');
        } else {
            next_thumb_back = current_item_new.next().attr('data-thumbnail');
            prev_thumb_back = current_item_new.prev().attr('data-thumbnail');
        }

        if (slide_number_new == number_of_elements) {
            next_thumb_back = slide_item.first().attr('data-thumbnail');
        }

        next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
        prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
    }
}

//////////////////////////////////
// Scattered Album More Loading //
//////////////////////////////////
jQuery.fn.gallery_scattered_addon = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
        addon_base = this,
        img_count = addon_options.items.length,
        img_per_load = addon_options.load_count,
        $newEls = '',
        loaded_object = '',
        $container = jQuery('.pm_scattered_layer');

    jQuery('.pm_more_scattered_photos').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').size();
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                    '<div class="pm_scattered_' + addon_options.items[i].layer_num + ' added">' +
                    '<div class="pm_scattered_photo ' + addon_options.items[i].photo_num + ' invisible">' +
                    '<div class="pm_scattered_image">' +
                    '<a href="' + addon_options.items[i].popup_href + '">' +
                    '<img src="' + addon_options.items[i].src + '" alt="" />' +
                    '</a>' +
                    '</div>' +
                    '<div class="pm_scattered_description">' +
                    '<div class="pm_scattered_title pm_fleft">' + addon_options.items[i].title + '</div>' +
                    '<div class="pm_scattered_likes pm_fright">' +
                    '<div class="pm_add_like_button">' +
                    '<i class="pm_likes_icon fa fa-heart-o"></i>' +
                    '<span class="pm_likes_counter">0</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                ;
            }

            $newEls = jQuery(loaded_object);
            $container.append($newEls);

            setTimeout("jQuery('.pm_scattered_layer .photo_1').removeClass('invisible')", 400);
            setTimeout("jQuery('.pm_scattered_layer .photo_2').removeClass('invisible')", 400);
            setTimeout("jQuery('.pm_scattered_layer .photo_3').removeClass('invisible')", 400);
            setTimeout("jQuery('.pm_scattered_layer .photo_4').removeClass('invisible')", 600);
            setTimeout("jQuery('.pm_scattered_layer .photo_5').removeClass('invisible')", 600);
            setTimeout("jQuery('.pm_scattered_layer .photo_6').removeClass('invisible')", 600);
            setTimeout("jQuery('.pm_scattered_layer .photo_7').removeClass('invisible')", 800);
            setTimeout("jQuery('.pm_scattered_layer .photo_8').removeClass('invisible')", 800);
        }
    });
};

///////////////////////////////////
//// Carousel WaterWheel Setup ////
///////////////////////////////////
function carousel_waterWheel() {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_height = site_height - header_height - 80,
        slider_container = jQuery('.pm_gallery_container'),
        waterWheel = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(waterWheel).children(),
        number_of_elements = elements.length;

    if (site_width > 1025) {
        waterWheel.find('img').unreflect();
    }

    slider_container.height(slider_height).css('margin-top', header_height);

    if (site_width > 1025) {
        waterWheel.height(slider_height * 0.676).css({
            'margin-top': slider_height * 0.084,
            'margin-bottom': slider_height *.24
        });
    } else {
        waterWheel.height(slider_height * 0.79).css({
            'margin-top': slider_height * 0.084,
            'margin-bottom': slider_height *.084
        });
    }

    var current_item;

    current_item = jQuery('#item_3').addClass('current_item');
    current_item.prev().addClass('prev_item').prev().addClass('prev_item_2');
    current_item.next().addClass('next_item').next().addClass('next_item_2');

    position_waterWheel();

    if (site_width > 1025) {
        waterWheel.find('img').reflect({
            height: 0.3,
            opacity: 0.3
        });

        waterWheel.find('canvas').each(function(){
            jQuery(this).width(jQuery(this).prev('img').width());
        });
    }
}

////////////////////////////////
//// Gallery Items Position ////
////////////////////////////////
function position_waterWheel() {
    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.width() * 0.605) * 0.87,
        prev_2_offset = prev_offset + (prev_item_2.width() * 0.605) * 0.74,
        next_offset = cur_offset - (next_item.width() * 0.605) * 0.87,
        next_2_offset = next_offset - (next_item_2.width() * 0.605) * 0.74;

    prev_item_2.css({'margin-left': -1 * prev_2_offset, 'margin-top': (prev_item_2.width() * 0.13) / 2});
    prev_item.css({'margin-left': -1 * prev_offset, 'margin-top': (prev_item.width() * 0.065) / 2});
    current_item.css({'margin-left': -1 * cur_offset, 'margin-top': 0});
    next_item.css({'margin-left': -1 * next_offset, 'margin-top': (next_item.width() * 0.065) / 2});
    next_item_2.css({'margin-left': -1 * next_2_offset, 'margin-top': (next_item_2.width() * 0.13) / 2});

    /*Slide Title*/
    var slide_title = current_item.attr('data-title');

    jQuery('.pm_slide_title_wrapper').html(slide_title);

    /* Prev and Next Thumbnails */
    var next_thumb_back = next_item.attr('data-thumbnail'),
        prev_thumb_back = prev_item.attr('data-thumbnail'),
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button');

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

////////////////////////
//// Gallery Resize ////
////////////////////////
function resize_waterWheel(){
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_height = site_height - header_height - 80,
        slider_container = jQuery('.pm_gallery_container'),
        waterWheel = jQuery(slider_container).find('.pm_gallery'),
        pm_body = jQuery('body');

    if (site_width > 1025) {
        waterWheel.find('img').unreflect();
    }

    if (slider_container.hasClass('fullscreen_mode')) {
        slider_height = site_height - 80;

        slider_container.height(slider_height);

        if (site_width > 1025) {
            waterWheel.height(slider_height * 0.676).css({
                'margin-top': slider_height * 0.084,
                'margin-bottom': slider_height *.24
            });
        } else {
            waterWheel.height(slider_height * 0.79).css({
                'margin-top': slider_height * 0.084,
                'margin-bottom': slider_height *.084
            });
        }
    } else {
        slider_container.height(slider_height).css('margin-top', header_height);

        if (site_width > 1025) {
            waterWheel.height(slider_height * 0.676).css({
                'margin-top': slider_height * 0.084,
                'margin-bottom': slider_height *.24
            });
        } else {
            waterWheel.height(slider_height * 0.79).css({
                'margin-top': slider_height * 0.084,
                'margin-bottom': slider_height *.084
            });
        }
    }

    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.width() * 0.605) * 0.87,
        prev_2_offset = prev_offset + (prev_item_2.width() * 0.605) * 0.74,
        next_offset = cur_offset - (next_item.width() * 0.605) * 0.87,
        next_2_offset = next_offset - (next_item_2.width() * 0.605) * 0.74;

    prev_item_2.css({'margin-left': -1 * prev_2_offset, 'margin-top': (prev_item_2.width() * 0.13) / 2});
    prev_item.css({'margin-left': -1 * prev_offset, 'margin-top': (prev_item.width() * 0.065) / 2});
    current_item.css('margin-left', -1 * cur_offset);
    next_item.css({'margin-left': -1 * next_offset, 'margin-top': (next_item.width() * 0.065) / 2});
    next_item_2.css({'margin-left': -1 * next_2_offset, 'margin-top': (next_item_2.width() * 0.13) / 2});

    if (site_width > 1025) {
        waterWheel.find('img').reflect({
            height: 0.3,
            opacity: 0.3
        });

        waterWheel.find('canvas').each(function(){
            jQuery(this).width(jQuery(this).prev('img').width());
        });
    }
}

////////////////////
//// Next Slide ////
////////////////////
function ww_next_slide() {
    var slider_container = jQuery('.pm_gallery_container'),
        waterWheel = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(waterWheel).children(),
        number_of_elements = elements.length,
        gallery_item = waterWheel.find('.pm_gallery_item'),
        current_item = waterWheel.find('.current_item'),
        prev_item = waterWheel.find('.prev_item'),
        next_item = waterWheel.find('.next_item'),
        prev_item_2 = waterWheel.find('.prev_item_2'),
        next_item_2 = waterWheel.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach();

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == (number_of_elements - 2)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.first().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item');
        gallery_item.first().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item');
        gallery_item.first().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item');
        gallery_item.first().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.first().addClass('prev_item_2');

    } else {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');
    }

    current_item = waterWheel.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

    likes_container.html(slide_likes);

    position_waterWheel();
}

////////////////////
//// Prev Slide ////
////////////////////
function ww_prev_slide() {
    var slider_container = jQuery('.pm_gallery_container'),
        waterWheel = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(waterWheel).children(),
        number_of_elements = elements.length,
        gallery_item = waterWheel.find('.pm_gallery_item'),
        current_item = waterWheel.find('.current_item'),
        prev_item = waterWheel.find('.prev_item'),
        next_item = waterWheel.find('.next_item'),
        prev_item_2 = waterWheel.find('.prev_item_2'),
        next_item_2 = waterWheel.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach();

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == '3') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.last().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item');
        gallery_item.last().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item');
        gallery_item.last().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item');
        gallery_item.last().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.last().addClass('next_item_2');

    } else {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');
    }

    current_item = waterWheel.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

    likes_container.html(slide_likes);

    position_waterWheel();
}
////////////////////////////////////
//// End of Carousel WaterWheel ////
////////////////////////////////////

/////////////////////////////
//// Carousel Tape Setup ////
/////////////////////////////
function carousel_tape() {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_height = site_height - header_height - 107,
        slider_container = jQuery('.pm_gallery_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item');

    slider_container.height(slider_height).css('margin-top', header_height);
    slider_list.height(slider_height * 0.91).css({
        'margin-top': slider_height * 0.044,
        'margin-bottom': slider_height * 0.044
    });

    var current_item;

    current_item = jQuery('#item_1').addClass('current_item');
    gallery_item.last().addClass('prev_item').prev().addClass('prev_item_2');
    current_item.next().addClass('next_item').next().addClass('next_item_2');

    tape_position();
}

////////////////////////////////
//// Gallery Items Position ////
////////////////////////////////
function tape_position() {
    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.find('img').width()) + 10,
        prev_2_offset = prev_offset + (prev_item_2.find('img').width()) + 10,
        next_offset = cur_offset + 10,
        next_2_offset = next_offset + next_item.find('img').width() + 10;

    prev_item_2.css({'margin-left': -1 * prev_2_offset});
    prev_item.css({'margin-left': -1 * prev_offset});
    current_item.css({'margin-left': -1 * cur_offset});
    next_item.css({'margin-left': next_offset});
    next_item_2.css({'margin-left': next_2_offset});

    /*Slide Title*/
    var slide_title = current_item.attr('data-title');

    jQuery('.pm_slide_title_wrapper').html(slide_title);

    /* Prev and Next Thumbnails */
    var next_thumb_back = next_item.attr('data-thumbnail'),
        prev_thumb_back = prev_item.attr('data-thumbnail'),
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button');

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

////////////////////////
//// Gallery Resize ////
////////////////////////
function tape_resize() {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_height = site_height - header_height - 107,
        slider_container = jQuery('.pm_gallery_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery');

    if (slider_container.hasClass('fullscreen_mode')) {
        slider_height = site_height - 40;
        slider_container.height(slider_height).css('margin-top', '0');

        slider_list.height(slider_height).css({
            'margin-top': 40,
            'margin-bottom': 0
        });
    } else {
        slider_container.height(slider_height).css('margin-top', header_height);
        slider_list.height(slider_height * 0.91).css({
            'margin-top': slider_height * 0.044,
            'margin-bottom': slider_height * 0.044
        });
    }

    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.find('img').width()) + 10,
        prev_2_offset = prev_offset + (prev_item_2.find('img').width()) + 10,
        next_offset = cur_offset + 10,
        next_2_offset = next_offset + next_item.find('img').width() + 10;

    prev_item_2.css({'margin-left': -1 * prev_2_offset});
    prev_item.css({'margin-left': -1 * prev_offset});
    current_item.css({'margin-left': -1 * cur_offset});
    next_item.css({'margin-left': next_offset});
    next_item_2.css({'margin-left': next_2_offset});
}

////////////////////
//// Next Slide ////
////////////////////
function tape_next_slide() {
    var slider_container = jQuery('.pm_gallery_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        current_item = slider_list.find('.current_item'),
        prev_item = slider_list.find('.prev_item'),
        next_item = slider_list.find('.next_item'),
        prev_item_2 = slider_list.find('.prev_item_2'),
        next_item_2 = slider_list.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach();

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == (number_of_elements - 2)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.first().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item');
        gallery_item.first().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item');
        gallery_item.first().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item');
        gallery_item.first().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.first().addClass('prev_item_2');

    } else {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');
    }

    current_item = slider_list.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

    likes_container.html(slide_likes);

    tape_position();
}

////////////////////
//// Prev Slide ////
////////////////////
function tape_prev_slide() {
    var slider_container = jQuery('.pm_gallery_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        current_item = slider_list.find('.current_item'),
        prev_item = slider_list.find('.prev_item'),
        next_item = slider_list.find('.next_item'),
        prev_item_2 = slider_list.find('.prev_item_2'),
        next_item_2 = slider_list.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach();

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == '3') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.last().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item');
        gallery_item.last().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item');
        gallery_item.last().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item');
        gallery_item.last().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.last().addClass('next_item_2');

    } else {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');
    }

    current_item = slider_list.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

    likes_container.html(slide_likes);

    tape_position();
}
//////////////////////////////
//// End of Carousel Tape ////
//////////////////////////////

/////////////////////////
//// Stripe Carousel ////
/////////////////////////
function pm_stripe_carousel() {
    var site_width = jQuery(window).width(),
        slider_list = jQuery('.pm_gallery'),
        increment = slider_list.find('li.pm_gallery_item').width(),
        elements = jQuery(slider_list).children(),
        number_elements = elements.length,
        elements_in_window = Math.round(jQuery(this).width() / increment),
        first_element_in_window = 1,
        isAnimating = false,
        i;

    if (elements) {
        for (i = 0; i < (elements_in_window + 1); i++) {
            jQuery(slider_list).css('width',(number_elements + elements_in_window) * increment + increment + "px");
            jQuery(slider_list).append(jQuery(elements[i]).clone().removeClass('pm_gallery_item').addClass('pm_gallery_item_clone'));
        }

        jQuery(slider_list).find('.pm_gallery_item_clone.first_item').removeClass('first_item');
        jQuery(slider_list).find('.pm_gallery_item_clone.last_item').removeClass('last_item');
    }

    // Thumbnails
    var stripe_item = jQuery('.pm_gallery_item'),
        first_item = stripe_item.first(),
        last_item = jQuery(slider_list).find('#item_6'),
        first_item_num = jQuery(first_item).attr('data-number'),
        last_item_num = jQuery(last_item).attr('data-number'),
        prev_thumb_back,
        next_thumb_back,
        all_slides = stripe_item.length,
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button');

    first_item.addClass('first_item');
    last_item.addClass('last_item');

    prev_thumb_back = stripe_item.last().attr('data-thumbnail');

    if (last_item_num < all_slides) {
        next_thumb_back = last_item.next().attr('data-thumbnail');
    } else {
        next_thumb_back = first_item.attr('data-thumbnail');
    }

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});

    // Next Slide
    next_button.on('click', function () {
        stripe_next_slide();
    });

    function stripe_next_slide() {
        if (!isAnimating) {
            if (first_element_in_window > number_elements) {
                first_element_in_window = 2;
                jQuery(slider_list).css('left', "0px");
            } else {
                first_element_in_window++;
            }

            jQuery(slider_list).animate({
                left: "-=" + increment,
                y: 0,
                queue: true
            }, "swing", function(){isAnimating = false;});
            isAnimating = true;
        }

        // Next Thumbnail
        var stripe_container = jQuery('.pm_gallery'),
            stripe_item = jQuery(stripe_container).find('.pm_gallery_item'),
            first_item = jQuery(stripe_container).find('.first_item'),
            last_item = jQuery(stripe_container).find('.last_item'),
            first_item_num = jQuery(first_item).attr('data-number'),
            last_item_num = jQuery(last_item).attr('data-number'),
            all_slides = stripe_item.length,
            next_button = jQuery('.pm_next_slide_button'),
            prev_button = jQuery('.pm_prev_slide_button'),
            new_first_item,
            new_last_item,
            prev_thumb_back,
            next_thumb_back;

        if (last_item_num < all_slides) {
            last_item.removeClass('last_item').next().addClass('last_item');
        } else {
            last_item.removeClass('last_item');
            stripe_item.first().addClass('last_item');
        }

        if (first_item_num < all_slides) {
            first_item.removeClass('first_item').next().addClass('first_item');
        } else {
            first_item.removeClass('first_item');
            stripe_item.first().addClass('first_item');
        }

        new_last_item = jQuery(stripe_container).find('.last_item');
        new_first_item = jQuery(stripe_container).find('.first_item');
        last_item_num = new_last_item.attr('data-number');
        first_item_num = new_first_item.attr('data-number');

        if (last_item_num < all_slides) {
            next_thumb_back = new_last_item.next().attr('data-thumbnail');
        } else {
            next_thumb_back = stripe_item.first().attr('data-thumbnail');
        }

        if (first_item_num !== '1') {
            prev_thumb_back = new_first_item.prev().attr('data-thumbnail');
        } else {
            prev_thumb_back = stripe_item.last().attr('data-thumbnail');
        }

        next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
        prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
    }

    // Prev Slide
    prev_button.on('click', function(){
        stripe_prev_slide();
    });

    function stripe_prev_slide() {
        if (!isAnimating) {
            if (first_element_in_window == 1) {
                jQuery(slider_list).css('left', "-" + number_elements * increment + "px");
                first_element_in_window = number_elements;
            } else {
                first_element_in_window--;
            }

            jQuery(slider_list).animate({
                left: "+=" + increment,
                y: 0,
                queue: true
            }, "swing", function(){isAnimating = false;});
            isAnimating = true;
        }

        // Prev Thumbnail
        var stripe_container = jQuery('.pm_gallery'),
            stripe_item = jQuery(stripe_container).find('.pm_gallery_item'),
            first_item = jQuery(stripe_container).find('.first_item'),
            last_item = jQuery(stripe_container).find('.last_item'),
            first_item_num = jQuery(first_item).attr('data-number'),
            last_item_num = jQuery(last_item).attr('data-number'),
            all_slides = stripe_item.length,
            next_button = jQuery('.pm_next_slide_button'),
            prev_button = jQuery('.pm_prev_slide_button'),
            new_first_item,
            new_last_item,
            prev_thumb_back,
            next_thumb_back;

        if (last_item_num !== '1') {
            last_item.removeClass('last_item').prev().addClass('last_item');
        } else {
            last_item.removeClass('last_item');
            stripe_item.last().addClass('last_item');
        }

        if (first_item_num !== '1') {
            first_item.removeClass('first_item').prev().addClass('first_item');
        } else {
            first_item.removeClass('first_item');
            stripe_item.last().addClass('first_item');
        }

        new_last_item = jQuery(stripe_container).find('.last_item');
        new_first_item = jQuery(stripe_container).find('.first_item');
        last_item_num = new_last_item.attr('data-number');
        first_item_num = new_first_item.attr('data-number');

        if (last_item_num < all_slides) {
            next_thumb_back = new_last_item.next().attr('data-thumbnail');
        } else {
            next_thumb_back = stripe_item.first().attr('data-thumbnail');
        }

        if (first_item_num !== '1') {
            prev_thumb_back = new_first_item.prev().attr('data-thumbnail');
        } else {
            prev_thumb_back = stripe_item.last().attr('data-thumbnail');
        }

        next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
        prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
    }

    /* Autoplay */
    var autoplay_status = 'on',
        slide_duration = '5000',
        intervalID;

    if (autoplay_status == 'on') {

        intervalID = setInterval(stripe_next_slide, slide_duration);

        jQuery('.pm_pause_button').on('click', function(){
            if (jQuery(this).hasClass('pm_paused')) {
                intervalID = setInterval(stripe_next_slide, slide_duration);
                jQuery(this).removeClass('pm_paused');
            } else {
                clearInterval(intervalID);
                jQuery(this).addClass('pm_paused');
            }
        });
    } else {
        jQuery('.pm_pause_button').remove();
    }
}

/////////////////////////////////////
//// Slider Fade for Video Album ////
/////////////////////////////////////
function slider_fade_video() {
    var slider_container = jQuery('.pm_gallery.effect_fade'),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length,
        slide_item = jQuery('.pm_gallery.effect_fade li'),
        intervalID,
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button'),
        site_width = jQuery(window).width(),
        site_height = jQuery(window).height();

    slide_item.css({'width': 100 + '%', 'height': 100 + '%'});
    slide_item.first().addClass('visible_slide').css('z-index', '10');

    var current_item = jQuery('.pm_gallery.effect_fade li.visible_slide'),
        video_player_link = jQuery(current_item).find('.pm_video_link').html();

    jQuery(current_item).find('.pm_video_wrapper').html(video_player_link);

    var video_player = jQuery('.pm_video_wrapper > iframe');

    if (site_width > 1024) {
        if (((site_height + 150) / 9) * 16 > site_width) {
            var player_width = ((site_height + 150) / 9) * 16,
                player_height = site_height + 150;

            video_player.width(player_width).height(player_height);
            video_player.css({'margin-left': -1 * (player_width / 2) + 'px', 'margin-top': '0px', 'top': '-75px'});
        } else {
            player_height = ((site_width / 16) * 9);

            video_player.width(site_width).height(player_height);
            video_player.css({'margin-left': -1 * (player_width / 2) + 'px', 'margin-top': -1 * (player_height / 2) + 'px', 'top': '50%', 'left': '0'});
        }
    } else {
        video_player.width(site_width).height(site_height);
        video_player.css({'margin-left': '0', 'margin-top': '0', 'left': '0', 'top': '0'});
    }

    var likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach();

    // Navigation
    next_button.on('click', function(){
        next_slide();
    });

    prev_button.on('click', function(){
        prev_slide();
    });


    // Next Slide
    function next_slide() {
        var slider_container = jQuery('.pm_gallery.effect_fade'),
            elements = jQuery(slider_container).children(),
            number_of_elements = elements.length,
            slide_item = jQuery('.pm_gallery.effect_fade li'),
            current_item = jQuery('.pm_gallery.effect_fade li.visible_slide'),
            slide_number = current_item.attr('data-number'),
            next_button = jQuery('.pm_next_slide_button'),
            prev_button = jQuery('.pm_prev_slide_button');

        current_item.css('z-index', '0');
        jQuery(current_item).find('.pm_video_wrapper').html('');

        if (slide_number < number_of_elements) {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').next().addClass('visible_slide');
        } else {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
            slide_item.first().addClass('visible_slide');
        }

        current_item = slider_container.find('li.visible_slide');
        video_player_link = jQuery(current_item).find('.pm_video_link').html();

        jQuery(current_item).find('.pm_video_wrapper').html(video_player_link);

        video_player = jQuery('.pm_video_wrapper > iframe');

        if (site_width > 1024) {
            if (((site_height + 150) / 9) * 16 > site_width) {
                var player_width = ((site_height + 150) / 9) * 16,
                    player_height = site_height + 150;

                video_player.width(player_width).height(player_height);
                video_player.css({'margin-left': -1 * (player_width / 2) + 'px', 'margin-top': '0px', 'top': '-75px'});
            } else {
                player_height = ((site_width / 16) * 9);

                video_player.width(site_width).height(player_height);
                video_player.css({'margin-left': -1 * (player_width / 2) + 'px', 'margin-top': -1 * (player_height / 2) + 'px', 'top': '50%', 'left': '0'});
            }
        } else {
            video_player.width(site_width).height(site_height);
            video_player.css({'margin-left': '0', 'margin-top': '0', 'left': '0', 'top': '0'});
        }

        current_item.css('z-index', '10');

        // Likes
        slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

        likes_container.html(slide_likes);
    }

    // Previous Slide
    function prev_slide() {
        var slider_container = jQuery('.pm_gallery.effect_fade'),
            elements = jQuery(slider_container).children(),
            number_of_elements = elements.length,
            slide_item = jQuery('.pm_gallery.effect_fade li'),
            current_item = jQuery('.pm_gallery.effect_fade li.visible_slide'),
            slide_number = current_item.attr('data-number'),
            next_button = jQuery('.pm_next_slide_button'),
            prev_button = jQuery('.pm_prev_slide_button');

        current_item.css('z-index', '0');
        jQuery(current_item).find('.pm_video_wrapper').html('');

        if (slide_number == '1') {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide');
            slide_item.last().addClass('visible_slide');
        } else {
            jQuery(slider_container).find('li.visible_slide').removeClass('visible_slide').prev().addClass('visible_slide');
        }

        current_item = slider_container.find('li.visible_slide');
        video_player_link = jQuery(current_item).find('.pm_video_link').html();

        jQuery(current_item).find('.pm_video_wrapper').html(video_player_link);

        video_player = jQuery('.pm_video_wrapper > iframe');

        if (site_width > 1024) {
            if (((site_height + 150) / 9) * 16 > site_width) {
                var player_width = ((site_height + 150) / 9) * 16,
                    player_height = site_height + 150;

                video_player.width(player_width).height(player_height);
                video_player.css({'margin-left': -1 * (player_width / 2) + 'px', 'margin-top': '0px', 'top': '-75px'});
            } else {
                player_height = ((site_width / 16) * 9);

                video_player.width(site_width).height(player_height);
                video_player.css({'margin-left': -1 * (player_width / 2) + 'px', 'margin-top': -1 * (player_height / 2) + 'px', 'top': '50%', 'left': '0'});
            }
        } else {
            video_player.width(site_width).height(site_height);
            video_player.css({'margin-left': '0', 'margin-top': '0', 'left': '0', 'top': '0'});
        }

        current_item.css('z-index', '10');
    }
}
////////////////////////////////////////////
//// End of Slider Fade for Video Album ////
////////////////////////////////////////////

/////////////////////////////////////
//// Listing Carousel Tape Setup ////
/////////////////////////////////////
function listing_carousel_tape() {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_container = jQuery('.pm_albums_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        gallery_image_width = jQuery(gallery_item).find('img').width();

    if (jQuery('body').hasClass('customize-support')) {
        var slider_height = site_height - header_height - 139;
    } else {
        slider_height = site_height - header_height - 107;
    }

    if (site_width < 737) {
        slider_height = site_height - header_height - 60;
    }

    slider_container.height(slider_height).css('margin-top', header_height);
    slider_list.height(slider_height * 0.91).css({
        'margin-top': slider_height * 0.044,
        'margin-bottom': slider_height * 0.044
    });

    gallery_item.width(gallery_image_width);
    gallery_item.find('.pm_media_output_cont_wrapper').width(gallery_image_width);

    var current_item;

    current_item = jQuery('#item_1').addClass('current_item');
    gallery_item.last().addClass('prev_item').prev().addClass('prev_item_2');
    current_item.next().addClass('next_item').next().addClass('next_item_2');

    listing_tape_position();
}

////////////////////////////////////////
//// Listing Gallery Items Position ////
////////////////////////////////////////
function listing_tape_position() {
    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.find('img').width()) + 10,
        prev_2_offset = prev_offset + (prev_item_2.find('img').width()) + 10,
        next_offset = cur_offset + 10,
        next_2_offset = next_offset + next_item.find('img').width() + 10;

    prev_item_2.css({'margin-left': -1 * prev_2_offset});
    prev_item.css({'margin-left': -1 * prev_offset});
    current_item.css({'margin-left': -1 * cur_offset});
    next_item.css({'margin-left': next_offset});
    next_item_2.css({'margin-left': next_2_offset});

    /*Slide Title*/
    var slide_title = current_item.attr('data-title');

    jQuery('.pm_slide_title_wrapper').html(slide_title);

    /* Prev and Next Thumbnails */
    var next_thumb_back = next_item.attr('data-thumbnail'),
        prev_thumb_back = prev_item.attr('data-thumbnail'),
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button');

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

////////////////////////////////
//// Listing Gallery Resize ////
////////////////////////////////
function listing_tape_resize(i) {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_height = site_height - header_height - i,
        slider_container = jQuery('.pm_albums_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery');

    if (site_width < 737) {
        slider_height = site_height - header_height - 60;
    }

    if (slider_container.hasClass('fullscreen_mode')) {
        slider_height = site_height - 40;
        slider_container.height(slider_height).css('margin-top', '0');

        if (jQuery('body').hasClass('customize-support')) {
            slider_list.height(slider_height).css({
                'margin-top': 8,
                'margin-bottom': 0
            });
        } else {
            slider_list.height(slider_height).css({
                'margin-top': 40,
                'margin-bottom': 0
            });
        }

    } else {
        slider_container.height(slider_height).css('margin-top', header_height);
        slider_list.height(slider_height * 0.91).css({
            'margin-top': slider_height * 0.044,
            'margin-bottom': slider_height * 0.044
        });
    }

    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.find('img').width()) + 10,
        prev_2_offset = prev_offset + (prev_item_2.find('img').width()) + 10,
        next_offset = cur_offset + 10,
        next_2_offset = next_offset + next_item.find('img').width() + 10;

    prev_item_2.css({'margin-left': -1 * prev_2_offset});
    prev_item.css({'margin-left': -1 * prev_offset});
    current_item.css({'margin-left': -1 * cur_offset});
    next_item.css({'margin-left': next_offset});
    next_item_2.css({'margin-left': next_2_offset});
}

////////////////////
//// Next Slide ////
////////////////////
function listing_tape_next_slide() {
    var slider_container = jQuery('.pm_albums_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        current_item = slider_list.find('.current_item'),
        prev_item = slider_list.find('.prev_item'),
        next_item = slider_list.find('.next_item'),
        prev_item_2 = slider_list.find('.prev_item_2'),
        next_item_2 = slider_list.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach();

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == (number_of_elements - 2)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.first().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item');
        gallery_item.first().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item');
        gallery_item.first().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item');
        gallery_item.first().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.first().addClass('prev_item_2');

    } else {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');
    }

    current_item = slider_list.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

    likes_container.html(slide_likes);

    listing_tape_position();
}

////////////////////
//// Prev Slide ////
////////////////////
function listing_tape_prev_slide() {
    var slider_container = jQuery('.pm_albums_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        current_item = slider_list.find('.current_item'),
        prev_item = slider_list.find('.prev_item'),
        next_item = slider_list.find('.next_item'),
        prev_item_2 = slider_list.find('.prev_item_2'),
        next_item_2 = slider_list.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach();

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == '3') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.last().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item');
        gallery_item.last().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item');
        gallery_item.last().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item');
        gallery_item.last().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.last().addClass('next_item_2');

    } else {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');
    }

    current_item = slider_list.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();

    likes_container.html(slide_likes);

    listing_tape_position();
}

//////////////////////////////
// Post Format Image Slider //
//////////////////////////////
function listing_post_format_image_slider(i) {
    var listing_id = '#' + i,
        slider_container = jQuery(listing_id),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length,
        slide_item = jQuery(slider_container).find('li'),
        intervalID,
        next_button = jQuery(slider_container).parent().parent().find('.pm_prev_image_slide_button'),
        prev_button = jQuery(".pm_media_output_cont_wrapper .pm_prev_slide_button"),
        current_item,
        slide_number;

    slide_item.first().addClass("visible");

    // Navigation
    slider_container.parent().parent().find('.pm_prev_image_slide_button').on('click', function(){
        current_item = jQuery(slider_container).find('li.visible');
        slide_number = current_item.attr('data-number');

        if (slide_number == "1") {
            jQuery(slider_container).find("li.visible").removeClass("visible");
            slide_item.last().addClass('visible');
        } else {
            jQuery(slider_container).find("li.visible").removeClass("visible").prev().addClass("visible");
        }
    });

    slider_container.parent().parent().find('.pm_next_image_slide_button').on('click', function(){
        current_item = jQuery(slider_container).find('li.visible');
        slide_number = current_item.attr('data-number');

        if (slide_number < number_of_elements) {
            jQuery(slider_container).find("li.visible").removeClass("visible").next().addClass("visible");
        } else {
            jQuery(slider_container).find("li.visible").removeClass("visible");
            slide_item.first().addClass("visible");
        }
    });
}
////////////////////////////////////////////
//// End of Listing Carousel Tape Setup ////
////////////////////////////////////////////

//////////////////////////////////////////
//// Blog Listing Carousel Tape Setup ////
//////////////////////////////////////////
function blog_listing_carousel_tape(i) {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_height = site_height - header_height - i,
        slider_container = jQuery('.pm_blog_listing_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        gallery_image_width = jQuery(gallery_item).find('img').width();

    if (site_width < 737) {
        slider_height = site_height - header_height - 60;
    }

    slider_container.height(slider_height).css('margin-top', header_height);
    slider_list.height(slider_height * 0.91).css({
        'margin-top': slider_height * 0.044,
        'margin-bottom': slider_height * 0.044
    });

    gallery_item.width(gallery_image_width);
    gallery_item.find('.pm_media_output_cont_wrapper').width(gallery_image_width);

    var current_item;

    current_item = jQuery('#item_1').addClass('current_item');
    gallery_item.last().addClass('prev_item').prev().addClass('prev_item_2');
    current_item.next().addClass('next_item').next().addClass('next_item_2');

    blog_listing_tape_position();
}

/////////////////////////////////////////////
//// Blog Listing Gallery Items Position ////
/////////////////////////////////////////////
function blog_listing_tape_position() {
    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.find('img').width()) + 10,
        prev_2_offset = prev_offset + (prev_item_2.find('img').width()) + 10,
        next_offset = cur_offset + 10,
        next_2_offset = next_offset + next_item.find('img').width() + 10;

    prev_item_2.css({'margin-left': -1 * prev_2_offset});
    prev_item.css({'margin-left': -1 * prev_offset});
    current_item.css({'margin-left': -1 * cur_offset});
    next_item.css({'margin-left': next_offset});
    next_item_2.css({'margin-left': next_2_offset});

    /*Slide Title*/
    var slide_title = current_item.attr('data-title');

    jQuery('.pm_slide_title_wrapper').html(slide_title);

    /* Prev and Next Thumbnails */
    var next_thumb_back = next_item.attr('data-thumbnail'),
        prev_thumb_back = prev_item.attr('data-thumbnail'),
        next_button = jQuery('.pm_next_slide_button'),
        prev_button = jQuery('.pm_prev_slide_button');

    next_button.find('.pm_next_thumb_cont').css({'background-image': 'url(' + next_thumb_back + ')'});
    prev_button.find('.pm_prev_thumb_cont').css({'background-image': 'url(' + prev_thumb_back + ')'});
}

/////////////////////////////////////
//// Blog Listing Gallery Resize ////
/////////////////////////////////////
function blog_listing_tape_resize(i) {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height(),
        header_height = jQuery('header').height(),
        slider_height = site_height - header_height - i,
        slider_container = jQuery('.pm_blog_listing_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        gallery_item = slider_list.find('.pm_gallery_item'),
        gallery_image_width = jQuery(gallery_item).find('img').width();

    if (site_width < 737) {
        slider_height = site_height - header_height - 60;
    }

    if (slider_container.hasClass('fullscreen_mode')) {
        slider_height = site_height - 40;
        slider_container.height(slider_height).css('margin-top', '0');

        slider_list.height(slider_height).css({
            'margin-top': 40,
            'margin-bottom': 0
        });
    } else {
        slider_container.height(slider_height).css('margin-top', header_height);
        slider_list.height(slider_height * 0.91).css({
            'margin-top': slider_height * 0.044,
            'margin-bottom': slider_height * 0.044
        });
    }

    gallery_item.width(gallery_image_width);

    var current_item = jQuery('.current_item'),
        current_item_width = current_item.find('img').width(),
        prev_item = jQuery('.prev_item'),
        next_item = jQuery('.next_item'),
        prev_item_2 = jQuery('.prev_item_2'),
        next_item_2 = jQuery('.next_item_2'),
        cur_offset = current_item_width / 2,
        prev_offset = cur_offset + (prev_item.find('img').width()) + 10,
        prev_2_offset = prev_offset + (prev_item_2.find('img').width()) + 10,
        next_offset = cur_offset + 10,
        next_2_offset = next_offset + next_item.find('img').width() + 10;

    prev_item_2.css({'margin-left': -1 * prev_2_offset});
    prev_item.css({'margin-left': -1 * prev_offset});
    current_item.css({'margin-left': -1 * cur_offset});
    next_item.css({'margin-left': next_offset});
    next_item_2.css({'margin-left': next_2_offset});
}

////////////////////
//// Next Slide ////
////////////////////
function blog_listing_tape_next_slide() {
    var slider_container = jQuery('.pm_blog_listing_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        current_item = slider_list.find('.current_item'),
        prev_item = slider_list.find('.prev_item'),
        next_item = slider_list.find('.next_item'),
        prev_item_2 = slider_list.find('.prev_item_2'),
        next_item_2 = slider_list.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach(),
        comments_link,
        slide_comments;

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == (number_of_elements - 2)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.first().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item');
        gallery_item.first().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item');
        gallery_item.first().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item');
        gallery_item.first().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.first().addClass('prev_item_2');

    } else {
        current_item.removeClass('current_item').next().addClass('current_item');
        next_item.removeClass('next_item').next().addClass('next_item');
        next_item_2.removeClass('next_item_2').next().addClass('next_item_2');
        prev_item.removeClass('prev_item').next().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').next().addClass('prev_item_2');
    }

    // Likes and Comments
    current_item = slider_list.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();
    comments_link = current_item.find('.pm_temp_comment_counter').attr('data-link');
    slide_comments = current_item.find('.pm_temp_comment_counter').html();

    likes_container.html(slide_likes);

    jQuery('.pm_comments_counter').attr('href', comments_link);
    jQuery('.pm_comments_counter .pm_counter_wrapper').html(slide_comments);

    blog_listing_tape_position();
}

////////////////////
//// Prev Slide ////
////////////////////
function blog_listing_tape_prev_slide() {
    var slider_container = jQuery('.pm_blog_listing_tape_container'),
        slider_list = jQuery(slider_container).find('.pm_gallery'),
        elements = jQuery(slider_list).children(),
        number_of_elements = elements.length,
        gallery_item = slider_list.find('.pm_gallery_item'),
        current_item = slider_list.find('.current_item'),
        prev_item = slider_list.find('.prev_item'),
        next_item = slider_list.find('.next_item'),
        prev_item_2 = slider_list.find('.prev_item_2'),
        next_item_2 = slider_list.find('.next_item_2'),
        cur_item_number = current_item.attr('data-number'),
        likes_container = jQuery('.pm_slide_likes_wrapper'),
        slide_likes = likes_container.find('.pm_add_like_button').detach(),
        comments_link,
        slide_comments;

    current_item.find('.pm_temp_likes_wrapper').html(slide_likes);

    if (cur_item_number == '3') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2');
        gallery_item.last().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '2') {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item');
        gallery_item.last().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == '1') {
        current_item.removeClass('current_item');
        gallery_item.last().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == number_of_elements) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item');
        gallery_item.last().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');

    } else if (cur_item_number == (number_of_elements - 1)) {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2');
        gallery_item.last().addClass('next_item_2');

    } else {
        current_item.removeClass('current_item').prev().addClass('current_item');
        prev_item.removeClass('prev_item').prev().addClass('prev_item');
        prev_item_2.removeClass('prev_item_2').prev().addClass('prev_item_2');
        next_item.removeClass('next_item').prev().addClass('next_item');
        next_item_2.removeClass('next_item_2').prev().addClass('next_item_2');
    }

    // Likes and Comments
    current_item = slider_list.find('.current_item');
    slide_likes = current_item.find('.pm_temp_likes_wrapper .pm_add_like_button').detach();
    comments_link = current_item.find('.pm_temp_comment_counter').attr('data-link');
    slide_comments = current_item.find('.pm_temp_comment_counter').html();

    likes_container.html(slide_likes);

    jQuery('.pm_comments_counter').attr('href', comments_link);
    jQuery('.pm_comments_counter .pm_counter_wrapper').html(slide_comments);

    blog_listing_tape_position();
}

//////////////////////////////
// Post Format Image Slider //
//////////////////////////////
function blog_listing_post_format_image_slider(i) {
    var listing_id = '#' + i,
        slider_container = jQuery(listing_id),
        elements = jQuery(slider_container).children(),
        number_of_elements = elements.length,
        slide_item = jQuery(slider_container).find('li'),
        intervalID,
        next_button = jQuery(slider_container).parent().parent().find('.pm_prev_image_slide_button'),
        prev_button = jQuery(".pm_media_output_cont_wrapper .pm_prev_slide_button"),
        current_item,
        slide_number;

    slide_item.first().addClass("visible");

    // Navigation
    slider_container.parent().parent().find('.pm_prev_image_slide_button').on('click', function(){
        current_item = jQuery(slider_container).find('li.visible');
        slide_number = current_item.attr('data-number');

        if (slide_number == "1") {
            jQuery(slider_container).find("li.visible").removeClass("visible");
            slide_item.last().addClass('visible');
        } else {
            jQuery(slider_container).find("li.visible").removeClass("visible").prev().addClass("visible");
        }
    });

    slider_container.parent().parent().find('.pm_next_image_slide_button').on('click', function(){
        current_item = jQuery(slider_container).find('li.visible');
        slide_number = current_item.attr('data-number');

        if (slide_number < number_of_elements) {
            jQuery(slider_container).find("li.visible").removeClass("visible").next().addClass("visible");
        } else {
            jQuery(slider_container).find("li.visible").removeClass("visible");
            slide_item.first().addClass("visible");
        }
    });
}
/////////////////////////////////////////////////
//// End of Blog Listing Carousel Tape Setup ////
/////////////////////////////////////////////////

function travis_kenburns_resize() {
    var site_width = jQuery(window).width(),
        site_height = jQuery(window).height();

    jQuery(".pm_gallery_kenburns").append("<canvas id='kenburns'><p>Your browser doesn't support canvas!</p></canvas>");

    jQuery("#kenburns").attr({"width": site_width, "height": site_height});
    jQuery("#kenburns").kenburns({
        images: [
            'img/clipart/gallery-1920-04.jpg',
            'img/clipart/gallery-1920-02.jpg',
            'img/clipart/gallery-1920-03.jpg',
            'img/clipart/gallery-1920-01.jpg',
            'img/clipart/gallery-1920-05.jpg',
            'img/clipart/gallery-1920-06.jpg',
            'img/clipart/gallery-1920-07.jpg',
            'img/clipart/gallery-1920-08.jpg',
            'img/clipart/gallery-1920-12.jpg',
            'img/clipart/gallery-1920-15.jpg'
        ],
        frames_per_second: 30,
        display_time: 5000,
        fade_time: 1000,
        zoom: 1.2,
        background_color:'#000000'
    });
}
