$(document).ready(function(){
    $('.js-header-menu').click(function(){
        $('.header-menu').slideToggle(400);
    });
    $('.js-chat-menu').click(function(){
        $('.chat-menu').toggle();
    });
    $('.js-chat-search').click(function(){
        $('.chat-search').toggle(300);
    });

    $('.js-nav-left').click(function(){
        $('.nav-left').toggle();
    });
});