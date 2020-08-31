//ripples要素

$(".full-landing-image").ripples({
    resolution: 250,
    dropRadius:20,
    perturbance: 0.5,
})


//フェードイン

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
    var scroll_top = $(window).scrollTop();
    $("#scroll span").text(scroll_top);

    $(".introduction").each(function() {
        var elem_pos = $(this).offset().top;
        $(this).find(".introduction_content span").text(Math.floor(elem_pos));
    　
        //どのタイミングでフェードインさせるか
        if (scroll_top >= elem_pos - window_h+200) {
            $(this).addClass("fadein");
        } else {
            $(this).removeClass("fadein");
        }
    });
});
