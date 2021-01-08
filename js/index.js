//头部绑定鼠标移入盒子显示事件
$.each($('.headnavbox'), function (index, item) {
    $(item).mouseenter(function () {
        $(this).css({
            backgroundColor: '#fff',
            borderRight: '1px solid #ddd',
            borderLeft: '1px solid #ddd'
        })

        $(this).children('.headnavboxs').stop().slideDown(100, 'linear')
    })
    $(item).mouseleave(function () {
        $(this).css({
            backgroundColor: "#f5f5f5",
            borderRight: '1px solid #f5f5f5',
            borderLeft: '1px solid #f5f5f5'
        })
        $(this).children('.headnavboxs').stop().slideUp(1, 'linear')
    })
})
//分类板块的小箭头特效
$('.mainnav a').mouseenter(function () {
    $(this).children('.mainnavjt').slideDown(100, 'linear')
})
$('.mainnav a').mouseleave(function () {
    $(this).children('.mainnavjt').slideUp(1, 'linear')
})
//轮播图
var bnPrev = document.getElementsByClassName('bn_prev')[0];
var bnNext = document.getElementsByClassName('bn_next')[0];
var bannaerTu = document.getElementsByClassName('bannatu')[0]
var bnimgArr = document.getElementsByClassName('bantu');
var bannaBgc = document.getElementById('banna');
var index = 0
var bnDiv = document.createElement('div')
for (var i = bnimgArr.length - 1; i >= 0; i--) {
    var span = document.createElement('span');
    span.innerHTML = i;
    span.className = ''
    bnDiv.insertBefore(span, bnDiv.children[0])
}
bannaerTu.insertBefore(bnDiv, bannaerTu.children[0]);
bnDiv.className = 'bn_sparrbox';
var bnspArr = bnDiv.children;
bnspArr[index].className = "bannadian";
function bnJia() {
    index++
    if (index > bnimgArr.length - 1) {
        index = 0
    }
    if (index < 0) {
        index = bnimgArr.length - 1;
    }
    bannaBgc.className = "bianse" + index;
}
function bnJian() {
    index--
    if (index > bnimgArr.length - 1) {
        index = 0
    }
    if (index < 0) {
        index = bnimgArr.length - 1;
    }
    bannaBgc.className = "bianse" + index;
}
function bntogClass() {
    for (var i = 0; i < bnimgArr.length; i++) {
        bnimgArr[i].className = "bantu"
    }
    bnimgArr[index].className = "bantu bn_lunbo";
    for (var j = 0; j < bnspArr.length; j++) {
        bnspArr[j].className = " ";
    }
    bnspArr[index].className = 'bannadian'
}
bnPrev.onclick = function () {
    bnJian()
    bntogClass()
}
bnNext.onclick = function () {
    bnJia()
    bntogClass()
}
for (var i = 0; i < bnspArr.length; i++) {
    bnspArr[i].onclick = function () {
        index = this.innerHTML * 1;
        bnJia()
        bnJian()
        bntogClass()
    }
}
clearInterval(bnimgArr.timer);
bnimgArr.timer = setInterval(function () {
    bnJia()
    bntogClass()
}, 3000)
//二级导航
$.each($('.bn_leftnavhezi'), function (index, item) {
    $(item).mouseenter(function () {
        $(this).children('.hezi').css({
            width: 990,
            display: "block"
        })
    })
    $(item).mouseleave(function () {
        $(this).children(".hezi").animate({ width: "0", }, 100, function () {
            $(this).css({ display: "none" })
        })
    })
})


// ajax渲染bn_rightnav
$.ajax({
    url: "../mock/bn_rightnav.json",
    dataType: "json",
    success: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var node = $(`<dl>
                        <dt><a href="#"><img src="${arr[i].imgs}" alt=""></a></dt>
                        <dd>${arr[i].html}</dd>
                       </dl>`);
            node.appendTo('.bn_rightnavb')
        }
    }
})
// 定时器秒杀
var timeoutsetHour = document.getElementsByClassName('hours')[0];
var timeoutsetFen = document.getElementsByClassName('fen')[0];
var timeoutsetMiao = document.getElementsByClassName('miao')[0];
var timeoutGettime = new Date('2021-1-9 24:00:00');
timeou = setInterval(function () {
    var nowTime = new Date();
    var times = (timeoutGettime - nowTime) / 1000;
    var h = parseInt(times / 60 / 60 % 24);
    if (/^(1|2)\d{1}$/.test(h)) {
        timeoutsetHour.innerHTML = h;
    } else {
        timeoutsetHour.innerHTML = "0" + h;
    }
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    if (/^\d{2}$/.test(m)) {
        timeoutsetFen.innerHTML = m;
    } else {
        timeoutsetFen.innerHTML = "0" + m;
    }
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    if (/^\d{2}$/.test(s)) {
        timeoutsetMiao.innerHTML = s;
    } else {
        timeoutsetMiao.innerHTML = "0" + s;
    }
}, 1000)
// 秒杀切换时间场
$('.timeoutboxab1').mouseenter(function () {
    $(this).css({
        background: "#ef0027",
        color: "#fff",
    })
    $('.timeoutboxab2').css({
        background: "#fff",
        border: "1px solid #ef0027",
        width: 74,
        height: 22,
        color: "#ef0027",
    })
    $('.timeoutboxabody2').css({ display: "none" })
    $('.timeoutboxabody1').css({ display: "block" })
})
$('.timeoutboxab2').mouseenter(function () {
    $(this).css({
        background: "#ef0027",
        color: "#fff",
    })
    $('.timeoutboxab1').css({
        background: "#fff",
        border: "1px solid #ef0027",
        width: 74,
        height: 22,
        color: "#ef0027",
    })
    $('.timeoutboxabody1').css({ display: "none" })
    $('.timeoutboxabody2').css({ display: "block" })
})
// 推荐榜单的轮播图
var boxsmove1 = document.getElementsByClassName('boxsmove1')[0];
var boxsmove2 = document.getElementsByClassName('boxsmove2')[0];
var boxsmove3 = document.getElementsByClassName('boxsmove3')[0];
var boxmove = document.getElementsByClassName("couponbox2body")[0]

boxmove.timer = setInterval(function () {
    animate(boxsmove1, { top: -238 })
    animate(boxsmove2, { top: 0 }, function () {
        animate(boxsmove2, { top: -238 })
        boxsmove1.style.top = 238 + "px";
        boxsmove3.style.top = 238 + "px";
        animate(boxsmove3, { top: 0 }, function () {
            boxsmove2.style.top = 238 + "px";
            animate(boxsmove3, { top: -238 })
            animate(boxsmove1, { top: 0 })
        })
    })
}, 4000)
boxmove.timers = setInterval(function () {
    $('.liveboxmove ').stop().animate({ marginTop: -214 }, 1500, function () {
        $('.liveboxmove ').stop().animate({ marginTop: -428 }, 1500, function () {
            $('.liveboxmove ').stop().animate({ marginTop: -642 }, 1500, function () {
                $('.liveboxmove ').stop().css({ marginTop: 0 })
            })
        })
    })
}, 5000)

// ajax渲染底部盒子
$.ajax({
    url: "../mock/like_box.json",
    dataType: "json",
    success: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var node = $(`<dl class="${arr[i].dlclass}">
                <dt><a href="${arr[i].a}"><img
                            src="${arr[i].imgs}"
                            alt=""></a></dt>
                <dd class="likebt"><a href="${arr[i].a}"><i class="${arr[i].icon1}">${arr[i].zyhtml}</i><i class="${arr[i].icon2}">${arr[i].sngj}</i><i class="${arr[i].icon3}">${arr[i].gjzyhtml}</i> ${arr[i].html}</a>
                </dd>
                <dd class="likebody">${arr[i].spanVal1}</dd>
                <dd class="likeff"><a href="${arr[i].a}">${arr[i].money}</a><s>${arr[i].s}</s></dd>
            </dl>`)
            node.appendTo('.like')
        }
    }
})
// 页面滚动的特效
$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        // 显示回到顶部按钮
        $('#headnav').css({
            position: "fixed",
            zIndex: 99,
            left: 0,
            top: 0
        })
        $('#tiaolou').css({
            display: "block"
        })
    }
    if ($(this).scrollTop() <= 600) {
        // 隐藏回到顶部按钮
        $('#headnav').css({
            position: "relative",
            left: 0,
            top: 0
        })
        $('#tiaolou').css({
            display: "none"
        })
    }
})
// 2 点击回到顶部按钮，页面滚动回顶部
$('#fhtop').click(function () {
    $(window).scrollTop(0)
})
$('#tiaolou').children().eq(0).click(function () {
    $(window).scrollTop(900)
})
$('#tiaolou').children().eq(1).click(function () {
    $(window).scrollTop(1000)
})
$('#tiaolou').children().eq(2).click(function () {
    $(window).scrollTop(1100)
})
$('#tiaolou').children().eq(3).click(function () {
    $(window).scrollTop(1200)
})
$('#tiaolou').children().eq(4).click(function () {
    $(window).scrollTop(2000)
})
$('#tiaolou').children().eq(5).click(function () {
    $(window).scrollTop(0)
})