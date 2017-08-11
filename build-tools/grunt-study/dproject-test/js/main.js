/**
 * Created by XIAO034 on 2016/10/12.
 */

// pop关闭按钮
$(".close_pop_btn").click(function () {
    var videoId = $(this).parents(".pop_container").addClass("hd").attr('id');
    var videoBoxId = $(this).prev().attr('id');
    var pauseData = {
        f: videoData.flashaddr,//使用flash播放器时视频地址的
        p:0,//1默认播放0暂停
    };
    CKobject.embed(playerSwf, "play_box", videoId, '1000', '680', true, pauseData, html5video);
});

//点击地址切换
$(".js-city").click(function () {
    var address = $(this).addClass("active").attr("tag");
    $(this).siblings().removeClass("active");
    $("#address_bar").text(address);
});

// var flashvars={
//     f:'http://movie.ks.js.cn/flv/other/1_0.mp4',
//     c:0
// };
// var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
// CKobject.embed('ckplayer/ckplayer.swf','a1','ckplayer_a1','600','400',false,flashvars,video);



var playerSwf = "js/ckplayer/ckplayer.swf";
var videoData = {flashaddr: "video/test.flv", html5addr: "video/01.mp4->video/mp4"};
var flashvars = {
    f: videoData.flashaddr,//使用flash播放器时视频地址的
    c:0,//风格配置参数
    p:1,//1默认播放0暂停
    b:0,
    // i:"img/video_01.jpg",//预览图
};
var html5video = [];
html5video.push(videoData.html5addr);

var videoH = '600';

(function($){
    if(window.screen.width > 640){
        if(videoH > $(window).height()){
            videoH = $(window).height() - 20
        }
        $(window).on("load",function(){
            $(".content_scroll").mCustomScrollbar();
        });

        $("#play_box_cover").click(function () {
            flashvars.f = "video/01.mp4";
            html5video[0] = "video/01.mp4->video/mp4";
            $("#play_box_con").removeClass("hd");
            CKobject.embed(playerSwf, "play_box", 'play_box_con', '1000', videoH, false, flashvars, html5video);
        });

        $("#jcsp1").click(function () {
            flashvars.f = "video/02.mp4";
            html5video[0] = "video/02.mp4->video/mp4";
            $("#play_box_con").removeClass("hd");
            CKobject.embed(playerSwf, "play_box", 'video_player3','1000', videoH, false, flashvars, html5video);
        });

        // $("#jcsp2").click(function () {
        //     flashvars.f = "video/03.mp4";
        //     html5video[0] = "video/03.mp4->video/mp4";
        //     $("#play_box_con").removeClass("hd");
        //     CKobject.embed(playerSwf, "play_box", 'video_player4','1000', '600', false, flashvars, html5video);
        // });


    }else{

        var videoWidth = window.screen.width;
        var videoHeight = videoWidth * 9/16;

        $("#play_box_cover").click(function () {
            html5video[0] = "video/01.mp4->video/mp4";
            $("#play_box_con").removeClass("hd");
            CKobject.embed(playerSwf, "play_box", 'play_box_con', videoWidth, videoHeight, true, flashvars, html5video);
        });

        $("#jcsp1").click(function () {
            html5video[0] = "video/02.mp4->video/mp4";
            $("#play_box_con").removeClass("hd");
            CKobject.embed(playerSwf, "play_box", 'video_player3',videoWidth, videoHeight, true, flashvars, html5video);
        });

        $("#jcsp2").click(function () {
            html5video[0] = "video/03.mp4->video/mp4";
            $("#play_box_con").removeClass("hd");
            CKobject.embed(playerSwf, "play_box", 'video_player4',videoWidth, videoHeight, true, flashvars, html5video);
        });

        //精彩回顾mobile gallery
        var swiper = new Swiper('#jchg_mb_swiper_con',{
            pagination:'.swiper-pagination',//
            paginationClickable :true,//点击小圆点

            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',

            initialSlide:0,//初始化的默认展示页面，默认0
            // autoplay:3000,
        });

    }


    //精彩回顾gallery
    creatSwiper2("#swiper-container");

    // 精彩回顾放大图片 gallery
    var group1 = [
        "img/jchg_big/01.jpg", "img/jchg_big/02.jpg", "img/jchg_big/03.jpg", "img/jchg_big/04.jpg", "img/jchg_big/05.jpg", "img/jchg_big/06.jpg", "img/jchg_big/07.jpg", "img/jchg_big/08.jpg", "img/jchg_big/09.jpg", "img/jchg_big/10.jpg", "img/jchg_big/11.jpg", "img/jchg_big/12.jpg", "img/jchg_big/13.jpg", "img/jchg_big/14.jpg", "img/jchg_big/15.jpg", "img/jchg_big/16.jpg", "img/jchg_big/17.jpg", "img/jchg_big/18.jpg", "img/jchg_big/19.jpg"
    ];
    $(".js-pop-pic").click(function () {

        $("#pop_pic_con").parents(".pop_container").css("visibility","visible").removeClass("hd");
        var initId = $(this).attr("tag");
        popSwiper.swipeTo(initId, 100, false);
        // popSwiper.slideTo(initId, 200, false);

    });
    var popSwiper;
    addPicToPop(group1);
    function addPicToPop(group) {
        $("#pop_pic_con").children(".swiper-wrapper").html("");
        $.each(group,function (i, v) {
            var html = '<div class="swiper-slide pop_pic_slide"><img src=' + v + '></div>';
            $("#pop_pic_con").children(".swiper-wrapper").append(html);
        });

        popSwiper = new Swiper('#pop_pic_con',{
            pagination:'#pop_pic_con-pagination',//
            paginationClickable:true//点击小圆点
        });

        $('#pop_pic_con').find(".swiper-button-prev").click(function () {
            popSwiper.swipePrev();
        });
        $('#pop_pic_con').find(".swiper-button-next").click(function () {
            popSwiper.swipeNext();
        });

    }

    // 明星艺术家了解更多按钮
    $(".more_btn").click(function () {
        $(this).parent().next().removeClass("hd").find(".js-spgs").first().click();
        initArtGallery($(this).attr("tag"))
    });
    // 艺术家pop gallery
    function initArtGallery(id) {
        // var string = id = new Swiper('#'+ id,{
        //     pagination:'.swiper-pagination',//
        //     paginationClickable :true,//点击小圆点
        //
        //     prevButton:'.swiper-button-prev',
        //     nextButton:'.swiper-button-next',
        //
        //     initialSlide:0,//初始化的默认展示页面，默认0
        //     // autoplay:3000,
        // });
        var string = id;
        var string = new Swiper('#'+ id,{
            pagination:'#'+ id + "-pagination",//
            paginationClickable:true//点击小圆点
        });

        $('#'+ id).siblings(".swiper-button-prev").click(function () {
            string.swipePrev();
        });
        $('#'+ id).siblings(".swiper-button-next").click(function () {
            string.swipeNext();
        });

    }

    //艺术家点击小图切换大图
    $(".js-spgs").click(function () {
        var url = $(this).attr("tag");
        $(this).parents(".spg_con").prev().children(".js-spgb").attr("src",url)
    });

    // 视频装置gallery
    creatSwiper2("#video_swiper_con");

    // //视频装置02gallery
    // var swiper = new Swiper('#hdzq_swiper_con2', {
    //     pagination: '.swiper-pagination',
    //     paginationClickable :true,//点击小圆点
    //
    //     prevButton:'.swiper-button-prev',
    //     nextButton:'.swiper-button-next',
    //
    //     effect: 'coverflow',
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     coverflow: {
    //         rotate: 70,
    //         stretch: 40,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows : true
    //     }
    // });

    // 互动专区gallery
    creatSwiper2("#swiper_hdzq_con");

    //互动专区02
    var hdzqSwiper = new Swiper("#hdzq_swiper_con2",{
        onSwiperCreated: function(swiper){
            var t = setTimeout(function () {
                $(".hdzq_slider2 ").height("190")
            },2000);
        },
        pagination:'#hdzq_swiper_con2-pagination',//
        paginationClickable:true,//点击小圆点
        slidesPerView : 3,
        centeredSlides : true,
        tdFlow: {
            rotate : 30,
        }
    });

    $("#hdzq_swiper_con2").find(".swiper-button-prev").click(function () {
        hdzqSwiper.swipePrev();
    });
    $("#hdzq_swiper_con2").find(".swiper-button-next").click(function () {
        hdzqSwiper.swipeNext();
    });

    // var t = setTimeout(function () {
    //     $(".hdzq_slider2 ").height("190")
    // },1500);


    // 战区展示gallery
    var zqzsSwiper = new Swiper('#swiper-container3',{
        pagination:'.swiper-pagination',//
        paginationClickable :true,//点击小圆点

        initialSlide:0,//初始化的默认展示页面，默认0
        // autoplay:3000,
    });





})(jQuery);

IE = function () {
    var UA = navigator.userAgent,
        isIE = UA.indexOf('MSIE') > -1,
        v = isIE ? /\d+/.exec(UA.split(';')[1]) : 'no ie';
    return v;
};
if(IE() <= 9){}

function creatSwiper2(id) {
    var swiper = new Swiper(id,{
        pagination:id + '-pagination',//
        paginationClickable:true//点击小圆点
    });

    $(id).find(".swiper-button-prev").click(function () {
        swiper.swipePrev();
    });
    $(id).find(".swiper-button-next").click(function () {
        swiper.swipeNext();
    });
}
