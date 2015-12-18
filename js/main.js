$(document).ready(function() {
	//左侧导航
	$("dt, .nav-child-item").mouseover(function() {
		$(this).css("background-color", "#efefef");
		$(this).mouseout(function() {
			$(this).css("background-color", "white");
		});
	});

	//导航链接被点击
	$("dt").click(function() {
		$(this).next("div").toggle();
		$("dt").children("a").css("color", "black");
		$(".nav-child-item").css("color", "black");
		$(this).children("a").css("color", "#ff5500");
	});

	$(".nav-child-item").click(function() {
		$("dt").children("a").css("color", "black");
		$(".nav-child-item").css("color", "black");
		$(this).css("color", "#ff5500");
	});



	//右侧的伸缩
	$(window).scroll(function() {
		var height = $(this).scrollTop();
		if ($(window).width() >= 720) {
			if (height >= 100) {
				$(".right-top").children(".right-top-title").css({
					"position": "fixed",
					"top": "10px",
					"font-size": "1.0em"
				});
			} else {
				$(".right-top").children(".right-top-title").css({
					"position": "relative",
					"top": "60%",
					"font-size": "3em"
				});
			}
			if (height >= 240) {
				//变为面包屑
				$(".right-top").css({
					"position": "fixed",
					"height": "60px"
				});
			} else {
				//恢复
				$(".right-top").css({
					"position": "absolute",
					"height": "300px"
				});
			}
			if (height <= 10) {
				$("#totop").css("display", "none");
			} else {
				$("#totop").css("display", "block");
			}
		}
	});

	//菜单被点击
	$(".right-top-menu").click(function() {
		$(".moudle").css("display", "block");
		$(".side-nav").animate({"left":"0px"});
		$("body").css("overflow-y", "hidden");
		$(".moudle").click(function() {
			$(this).css("display", "none");
			$(".side-nav").animate({"left":"-201px"});
			$("body").css("overflow-y", "auto");
		});
	});
});