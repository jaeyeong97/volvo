// 헤더 사용자 아이콘 클릭
$('.user').mouseover(function () {
    $('.u_list').stop().slideDown();
}).mouseout(function () {
    $('.u_list').stop().slideUp();
})

// 헤더 gnb
$('.gnb > ul > li').mouseover(function () {
    $('.gnb .depth2').stop().slideUp();
    $(this).find('.depth2').stop().slideDown();
}).mouseout(function () {
    $(this).find('.depth2').stop().slideUp();
})

// 헤더 햄버거
$('.m_icon > a').click(function (e) {
    e.preventDefault();
    $('.m_wrap').show();
    $('body').css({
        'overflow-y': 'hidden'
    })
})
$('.mw_close').click(function (e) {
    e.preventDefault();
    $('.m_wrap').hide();
    $('body').css({
        overflow: 'visible'
    })
})

// 메인 슬라이드 슬릭
$('.ms_wrap').slick({
    prevArrow: '.ma_left',
    nextArrow: '.ma_right',
    dots: true,
    appendDots: '.main_dot',
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000
});

// 메인 슬라이드 슬릭 버튼
$('.ma_stop').click(function () {
    $(this).hide();
    $('.ma_start').show();
    $('.ms_wrap').slick('slickPause');
});
$('.ma_start').click(function () {
    $(this).hide();
    $('.ma_stop').show();
    $('.ms_wrap').slick('slickPlay');
});

