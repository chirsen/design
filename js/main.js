$(document).ready(function() {

	//导航链接被点击
	$("dt").click(function() {
		$(this).next("div").toggle("slow");
		$("dt").children("a").removeClass("color-orange");
		$("nav-child-item").removeClass("color-orange");
		$(this).children("a").addClass("color-orange");
	});

	$(".nav-child-item").click(function() {
		$("dt").children("a").removeClass("color-orange");
		$("a").removeClass("color-orange");
		$(this).addClass("color-orange");
	});



	//右侧的伸缩
	$(window).on("scroll resize",function() {

		var height = $(this).scrollTop();
		if ($(window).width() >= 720) {
			if (height >= 100) {
				$(".right-top").children(".right-top-title").addClass("right-top-title-changed");
			} else {
				$(".right-top").children(".right-top-title").removeClass("right-top-title-changed");
			}
			if (height >= 240) {
				//变为面包屑
				$(".right-top").addClass("right-top-changed");
				$("#theme_style").addClass("theme-style-changed");
			} else {
				//恢复
				$(".right-top").removeClass("right-top-changed");
				$("#theme_style").removeClass("theme-style-changed");
			}
			if (height <= 10) {
				$("#totop").addClass("element-show");
			} else {
				$("#totop").removeClass("element-show");
			}
		}
	});

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

	//点击获取se值
	$(".check-colors-item").hover(function(){
	});

	$(".check-colors-item").zclip({
		path: "js/ZeroClipboard.swf",
		copy: function(){
		return $(this).attr("title");
		},
		afterCopy:function(){/* 复制成功后的操作 */
			alert("fuzhichenggong");
        }
	});

});