// ツールチップ
// タイトルスライドイン
    $(window).scroll(function () {
        let wHeight = $(window).height();
        let scrollAmount = $(window).scrollTop();
        $('#titleSection .c-container').each(function () {
            let targetPosition = $('#aboutSection').offset().top;
            if(scrollAmount > targetPosition - wHeight + 10) {
                $('#titleSection .c-container').removeClass('slideIn');
            }else{
                $('#titleSection .c-container').addClass('slideIn');
            }
        });
    });


// チケットスライドイン
    $(window).scroll(function () {
        let wHeight = $(window).height();
        let scrollAmount = $(window).scrollTop();
        $('.p-topWrap__bannerPC').each(function () {
            let targetPosition = $('#aboutSection').offset().top;
            if(scrollAmount > targetPosition - wHeight + 100) {
                $('.p-topWrap__bannerPC').removeClass('ticketIn');
            }else{
                $('.p-topWrap__bannerPC').addClass('ticketIn');
            }
        });
    });
// チケットスライドインSP
$(window).scroll(function () {
    let wHeight = $(window).height();
    let scrollAmount = $(window).scrollTop();
    $('.p-topWrap__banner').each(function () {
        let targetPosition = $('#aboutSection').offset().top;
        if(scrollAmount > targetPosition - wHeight + 100) {
            $('.p-topWrap__banner').removeClass('ticketIn');
        }else{
            $('.p-topWrap__banner').addClass('ticketIn');
        }
    });
});


// ヘッダースライドイン
$(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 50) {
        $('#topWrap .c-logoText').slideDown(200);
        } else {
        $('#topWrap .c-logoText').slideUp(50);
        }
    });
});

// footerBtn配色
$("#footer .c-hoverType_b").hover(function() {
    let colors = ["#00d1f7", "#e6be40", "#69cf26", "#e878b3", "#00d1f7"];
    let pick = Math.floor(Math.random() * 5);
    let color = colors[pick];
    $(this).css('background-color', color);
}, function() {
    $(this).css('background-color', '#ddd');

});

// ticket配色
$(".p-topWrap__bannerPC .c-box").hover(function() {
    let colors = ["#00d1f7", "#e6be40", "#ddd", "#e878b3", "#00d1f7"];
    let pick = Math.floor(Math.random() * 5);
    let color = colors[pick];
    $(this).css('background-color', color);
}, function() {
    $(this).css('background-color', '#fff');
});

// sectionTitleフェードイン
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.c-titleScroll').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 100) {
                $(this).addClass("fadeIn");
            }
        });
    });
});

// 背景画像を移動
$(function () {
    $(window).scroll(function () {
        let wHeight = $(window).height();
        let scrollAmount = $(window).scrollTop();
        $('#mainBG div.p-back').each(function () {
            let targetPosition = $('#aboutSection').offset().top;
            if(scrollAmount > targetPosition - wHeight + 50) {
                $('#mainBG div.p-back').addClass('positionA');
            }else{
                $('#mainBG div.p-back').removeClass('positionA');
            }
        });
    });
});

// 背景画像を移動
$(function () {
    $(window).scroll(function () {
        let wHeight = $(window).height();
        let scrollAmount = $(window).scrollTop();
        $('#mainBG div.p-front').each(function () {
            let targetPosition = $('#aboutSection').offset().top;
            if(scrollAmount > targetPosition - wHeight + 50) {
                $('#mainBG div.p-front').addClass('positionB');
            }else{
                $('#mainBG div.p-front').removeClass('positionB');
            }
        });
    });
});
