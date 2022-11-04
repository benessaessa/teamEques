AOS.init();
$(document).ready(function(){
    $("first_section .navbar .navbar-nav .dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});