$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor'); 
})

$('.feature-items > div').on('click', function(){
    $(this).children('.feature-position').toggleClass('toggleColorFeatures');
    $(this).parent('.feature-items').toggleClass('toggleBgFeatures');
    $(this).next('p').slideToggle(300);
})

$('.carousel').slick({
    dots: true,
})


