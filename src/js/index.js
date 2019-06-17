$(".banner-box").slide({
    mainCell: ".bd ul",
    effect: "leftLoop",
    autoPlay: true,
    interTime: 3000 // 自动切换的间隔(毫秒)
});
$(".zj-slide").slide({ mainCell: ".bd ul", effect: "leftLoop", autoPlay: true });
theaMsForm();
$('.tc-btn').click(function() {
    $('.mask').show();
    $('.tc').show();
});
$('.close').click(function() {
    $('.mask').hide();
    $('.tc').hide();
});

function popWindow(aTime, n, e1) {
    setTimeout(function() {
        e1.fadeIn(300);
    }, 6000);
    var times = 0;
    $('.close-800', e1).click(function() {
        times++;
        e1.fadeOut(300);
        if (times < n) {
            setTimeout(function() {
                e1.fadeIn(300);
            }, aTime)
        };
    })
}
popWindow(40000, 2, $('.tc-800'));

midtc('.xl-bottom', '.xx', 8000, 30000, 233);

function midtc(ele, c, f, a, n) {
    var $par = $(ele);
    var $num = 0
    popupTc(f);
    $(c, $par).click(function() {
        $par.hide();
        $('.blank').hide();
        $('.mask').hide();
        $('body').css('padding-bottom', '0');
        $num++;
        if ($num <= n) {
            popupTc(a)
        }
    })

    function popupTc(d) {
        setTimeout(function() {
            $('body').css('padding-bottom', '92px');
            $par.fadeIn(300);
            $('.blank').fadeIn(300);
        }, d)
    }
};
// 回到顶部
$(".backtop").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500);
    })
    // 倒计时
$('.tc-800 .m').text(getDay(3).month);
$('.tc-800 .d').text(getDay(3).date);

function getDay(day) {
    var today = new Date();
    // 得到指定日期的毫秒数
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    // 根据毫秒数得到新的日期对象
    today.setTime(targetday_milliseconds);
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return { 'year': tYear, "month": tMonth, 'date': tDate };
}

function doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
        m = "0" + month;
    }
    return m;
};

//滚动插件
(function($) {
    $.fn.extend({
        Scroll: function(opt, callback) {
            //参数初始化
            if (!opt) var opt = {};
            var _this = this.eq(0).find("ul:first");
            var lineH = _this.find("li:first").height(), //获取行高
                line = opt.line ? parseInt(opt.line, 20) : parseInt(this.height() / lineH, 10), //每次滚动的行数，默认为一屏，即父容器高度
                speed = opt.speed ? parseInt(opt.speed, 10) : 800, //卷动速度，数值越大，速度越慢（毫秒）
                timer = opt.timer ? parseInt(opt.timer, 10) : 8000; //滚动的时间间隔（毫秒）
            if (line == 0) line = 1;
            var upHeight = 0 - line * lineH;
            //滚动函数
            scrollUp = function() {
                    _this.animate({
                        marginTop: upHeight
                    }, speed, function() {
                        for (i = 1; i <= line; i++) {
                            _this.find("li:first").appendTo(_this);
                        }
                        _this.css({
                            marginTop: 0
                        });
                    });
                }
                //鼠标事件绑定
            _this.hover(function() {
                clearInterval(timerID);
            }, function() {
                timerID = setInterval("scrollUp()", timer);
            }).mouseout();
        }
    })
})(jQuery);

$(document).ready(function() {
    $(".cp").Scroll({
        line: 1,
        speed: 600,
        timer: 1000
    });
});