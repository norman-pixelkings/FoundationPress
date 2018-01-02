import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

//import './lib/demosite';

$(document).foundation();


// Advanced tabs in elementor.
$('.tabs-nav a').on('click', function( event ) {
    var currentTab = $(this).attr('href');
    $('.tabs-nav a').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    $(currentTab).show();
    return false;
});

//initial activate tab with 'tab-active'
$('.tabs-nav .tab-active').find('a').trigger('click').addClass(active);