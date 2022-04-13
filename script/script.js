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

$('.features').parallax({imageSrc: './img/feature/34121-rassvet_more_planetyi.jpg'});

$('.busy').parallax({imageSrc: './img/busy/37479-lampochka_programmist.jpg'});

$('.trusted').parallax({imageSrc: './img/37440-shar_rastitelnost_provod.jpg'});

$('.about').parallax({imageSrc: './img/24550-grafika_mir_transport.jpg'});

$('.all').parallax({imageSrc: './img/all.png/54178-serfing_deushka_doska_na_vode_vid_sverhu_vysota.jpg'});
