$(document).ready(function(){
	//左侧导航
	$("dt, .nav-child-item").mouseover(function(){
		$(this).css("background-color", "#efefef");
		$(this).mouseout(function(){
			$(this).css("background-color", "white");
		});
	});

	$("dt").click(function(){

		if($(this).next(".side-nav-children").css("display") != undefined){
			$("dt").css("color", "black");
			$(".side-nav-children").css("display", "none");
			$(this).next("div").css("display", "block");
		}else{
			$(".side-nav-children, dt").css("color","black");
			$(".side-nav-children").css("display", "none");
			$(this).css("color", "#ff5000");
		}

	});

	$(".nav-child-item").click(function(){
		$("dt, .nav-child-item").css("color", "black");
		$(this).css("color", "#ff5000");
	});


	//右侧的伸缩
	$(window).scroll(function(){
		var height = $(this).scrollTop();
		if(height >= 100){
			$(".right-top").children("span").css({"position":"fixed","top":"10px", "font-size":"1em"});
		}else{
			$(".right-top").children("span").css({"position":"relative","top":"60%", "font-size":"3em"});
		}
		if(height >= 240){
			//变为面包屑
			$(".right-top").css({"position":"fixed", "height":"60px"});
		}else{
			//恢复
			$(".right-top").css({"position":"absolute", "height":"300px"});
		}
	});
});