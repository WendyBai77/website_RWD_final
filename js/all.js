$(document).ready(function () {
    $('.fa-solid.fa-bars.showmenu').click(function (e) { 
        console.log('click');
        $('body').toggleClass('menu-show');
    });
});