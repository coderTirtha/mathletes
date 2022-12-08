var menuBtn = $('#menuBtn');
var closeBtn = $('#closeBtn');
var sideMenu = $('#sideMenu');

$(document).ready(function() {
    menuBtn.click(function() {
        sideMenu.css('transform', 'translateX(0%)');
    });
    closeBtn.click(function() {
        sideMenu.css('transform', 'translateX(-100%)');
    });
});