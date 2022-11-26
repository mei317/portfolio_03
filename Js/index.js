// ツールチップ


// チケットスライド
$(window).scroll(function () {
    let wHeight = $(window).height();
    let scrollAmount = $(window).scrollTop();
    $('.p-topWrap__bannerPC').each(function () {
        let targetPosition = $('#aboutSection').offset().top;
        if(scrollAmount > targetPosition - wHeight + 50) {
            $('.p-topWrap__bannerPC').removeClass('ticketIn');
            $('.p-topWrap__bannerPC').addClass('ticketOut');
        }else{
            $('.p-topWrap__bannerPC').removeClass('ticketOut');
            $('.p-topWrap__bannerPC').addClass('ticketIn');
        }
    });
});

// ヘッダースライドイン
$(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 200) {
        $('#topWrap .c-logoText').slideDown(100);
        } else {
        $('#topWrap .c-logoText').slideUp(100);
        }
    });
});

// チケットスライドイン
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
                $('#mainBG div.p-back').removeClass('positionC');
                $('#mainBG div.p-back').addClass('positionA');
            }else{
                $('#mainBG div.p-back').removeClass('positionA');
                $('#mainBG div.p-back').addClass('positionC');
            }
        });
    });
});

// 背景画像を移動
// $(function () {
//     $(window).scroll(function () {
//         let wHeight = $(window).height();
//         let scrollAmount = $(window).scrollTop();
//         $('#mainBG div.p-front').each(function () {
//             let targetPosition = $('#aboutSection').offset().top;
//             if(scrollAmount > targetPosition - wHeight + 50) {
//                 $('#mainBG div.p-front').removeClass('positionC');
//                 $('#mainBG div.p-front').addClass('positionB');
//             }else{
//                 $('#mainBG div.p-front').removeClass('positionB');
//                 $('#mainBG div.p-front').addClass('positionC');
//             }
//         });
//     });
// });
