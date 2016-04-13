$(document).ready(function() {

    //导航链接被点击
    $("dt").click(function() {
        $(this).next("div").toggle("slow");
    });

    $(".nav-child-item").click(function() {
        $("dt").children("a").removeClass("color-orange");
        $("a").removeClass("color-orange");
        $(this).addClass("color-orange");
    });



    //右侧的伸缩
    $(window).on("scroll resize", function() {
        var total_height = $(document).height();
        var height = $(this).scrollTop();
        if ($(window).width() >= 740) {
            var margin_top = height - 170;
            if (height >= 100) {
                $(".right-top").children(".right-top-title").addClass("right-top-title-changed");
            } else {
                $(".right-top").children(".right-top-title").removeClass("right-top-title-changed");
            }
            if (height >= 195) {
                //变为面包屑
                $(".right-top").addClass("right-top-changed");
                $("#theme_style").css("top", margin_top);
            } else {
                //恢复
                $(".right-top").removeClass("right-top-changed");
                $("#theme_style").css("top", "20px");
            }
            if (height <= 10) {
                $("#totop").addClass("element-show");
            } else {
                $("#totop").removeClass("element-show");
            }
        } else {
            var margin_top = height - 20;
            if (height >= 35) {
                $("#theme_style").css("top", margin_top);
            } else {
                $("#theme_style").css("top", "20px");
            }
        }

        var screenHeight = $(window).height();
        var margin_top = Math.floor(Number(height) / Number(total_height - screenHeight) * 100);
        //$("#download").text(margin_top);
        switch (location.pathname) {
            case "/logo.html":
                if (margin_top < 20) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#standerd").addClass("color-orange");
                } else if (margin_top < 70) {
                    $("#vertical_item").css("top", "40%");
                    $(".theme-item").removeClass("color-orange");
                    $("#application").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "75%");
                    $(".theme-item").removeClass("color-orange");
                    $("#download").addClass("color-orange");
                }
                break;
            case "/color.html":
                if (margin_top < 20) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#standerd").addClass("color-orange");
                } else if (margin_top < 70) {
                    $("#vertical_item").css("top", "40%");
                    $(".theme-item").removeClass("color-orange");
                    $("#application").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "75%");
                    $(".theme-item").removeClass("color-orange");
                    $("#download").addClass("color-orange");
                }
                break;
            case "/standerd_font.html":
                if (margin_top <= 40) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#size").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "60%");
                    $(".theme-item").removeClass("color-orange");
                    $("#show").addClass("color-orange");
                }
                break;
            case "/icons.html":
                if (margin_top <= 50) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#icon").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "60%");
                    $(".theme-item").removeClass("color-orange");
                    $("#light").addClass("color-orange");
                }
                break;
            case "/button.html":
                if (margin_top < 15) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#important").addClass("color-orange");
                } else if (margin_top <= 64) {
                    $("#vertical_item").css("top", "40%");
                    $(".theme-item").removeClass("color-orange");
                    $("#ordinary").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "75%");
                    $(".theme-item").removeClass("color-orange");
                    $("#buy").addClass("color-orange");
                }
                break;
            case "/controler.html":
                console.log(margin_top);
                if (margin_top < 25) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#header").addClass("color-orange");
                } else if (margin_top < 37) {
                    $("#vertical_item").css("top", "13%");
                    $(".theme-item").removeClass("color-orange");
                    $("#footer").addClass("color-orange");
                } else if (margin_top < 46) {
                    $("#vertical_item").css("top", "26%");
                    $(".theme-item").removeClass("color-orange");
                    $("#switch").addClass("color-orange");
                } else if (margin_top < 56) {
                    $("#vertical_item").css("top", "40%");
                    $(".theme-item").removeClass("color-orange");
                    $("#checkbox").addClass("color-orange");
                } else if (margin_top < 67) {
                    $("#vertical_item").css("top", "52%");
                    $(".theme-item").removeClass("color-orange");
                    $("#radiobutton").addClass("color-orange");
                } else if (margin_top < 83) {
                    $("#vertical_item").css("top", "65%");
                    $(".theme-item").removeClass("color-orange");
                    $("#exittext").addClass("color-orange");
                } else if (margin_top < 90) {
                    $("#vertical_item").css("top", "77%");
                    $(".theme-item").removeClass("color-orange");
                    $("#dialog").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "95%");
                    $(".theme-item").removeClass("color-orange");
                    $("#loading").addClass("color-orange");
                }
                break;
            case "/layout.html":
                if (margin_top < 10) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#structure").addClass("color-orange");
                } else if (margin_top <= 25) {
                    $("#vertical_item").css("top", "28%");
                    $(".theme-item").removeClass("color-orange");
                    $("#header").addClass("color-orange");
                } else if (margin_top <= 60) {
                    $("#vertical_item").css("top", "55%");
                    $(".theme-item").removeClass("color-orange");
                    $("#tabs").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "85%");
                    $(".theme-item").removeClass("color-orange");
                    $("#footbar").addClass("color-orange");
                }
                break;
            case "/named.html":
                break;
            case "/adapter.html":
                if (margin_top < 30) {
                    $("#vertical_item").css("top", "0%");
                    $(".theme-item").removeClass("color-orange");
                    $("#ios").addClass("color-orange");
                } else if (margin_top <= 80) {
                    $("#vertical_item").css("top", "40%");
                    $(".theme-item").removeClass("color-orange");
                    $("#android").addClass("color-orange");
                } else {
                    $("#vertical_item").css("top", "75%");
                    $(".theme-item").removeClass("color-orange");
                    $("#adaptor").addClass("color-orange");
                }
                break;

        }
    });

    function scroll() {
        if ($(window).width() >= 740) {
            var margin_top = height - 170;
            if (height >= 100) {
                $(".right-top").children(".right-top-title").addClass("right-top-title-changed");
            } else {
                $(".right-top").children(".right-top-title").removeClass("right-top-title-changed");
            }
            if (height >= 195) {
                //变为面包屑
                $(".right-top").addClass("right-top-changed");
                $("#theme_style").css("top", margin_top);
            } else {
                //恢复
                $(".right-top").removeClass("right-top-changed");
                $("#theme_style").css("top", "20px");
            }
            if (height <= 10) {
                $("#totop").addClass("element-show");
            } else {
                $("#totop").removeClass("element-show");
            }
        } else {
            var margin_top = height - 20;
            if (height >= 35) {
                $("#theme_style").css("top", margin_top);
            } else {
                $("#theme_style").css("top", "20px");
            }
        }
    }

    //菜单被点击
    $(".right-top-menu").click(function() {
        $(".moudle").addClass("element-show");
        $("#side_nav").addClass("side-nav-changed");
        $("body").css("overflow-y", "hidden");
        $(".moudle").click(function() {
            $(".moudle").removeClass("element-show");
            $("#side_nav").removeClass("side-nav-changed");
            $("body").css("overflow-y", "auto");
        });
    });

    //悬浮提示
    $(".check-colors-item").hover(function() {});

    //点击获取se值
    $(".check-colors-item").zclip({
        path: "js/ZeroClipboard.swf",

        copy: function() {
            return $(this).attr("title");
        },

        afterCopy: function() { /* 复制成功后的操作 */
            alert("已经复制颜色" + $(this).attr("title"));
        }
    });

    //提示
    $(".check-colors-item").hover(function() {
        $(this).children(".mask").addClass("element-show");
        $(this).mouseout(function() {
            $(this).children(".mask").removeClass("element-show");
        });
    });



});
