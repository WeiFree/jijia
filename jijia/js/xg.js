$(function() {
	ajcp();

	function ajcp() {
		$.ajax({
			type: "get",
			url: "js/ajax.json",
			datatype: "jsonp",
			beforeSend: function(XMLHttpRequest) {
				$(".loading").addClass("block")
				$(".loading").append($("<center><img src='img/xianka/ajax-loader.gif' /><p class='orangered'>正在努力加载中...</p></center>"))

			},
			success: function(date) {
				$("#byimg").html("")
				for(var i = 0; i < date.dateid.length - 3; i++) {
					var t = date.dateid[i].name;
					var d = date.dateid[i].pic;
					$("#byimg").append($("<div class='col-sm-3 col-xs-6'><div><input type='checkbox'/><a href='#'>" + t + "</a><a href='#'><img src='img/XTREMEGAMING/" + d + ".png'/></a></div></div>"))
				}
			},
			complete: function() {
				$(".loading").addClass("none")
				$(".loading").html("");
			}
		})
	}
	$("#two").on("click", function() {
		$("#two").addClass("orangered").siblings().removeClass("orangered")
		if($(".line").hasClass("orangered")) {
			if($("#byline").children.length == 14) {
				for(var i = 0; i < $("#byline").children.length - 3; i++) {
					$("#byline").children[i].fadeOut();
				}
			} else {
				$.ajax({
					type: "get",
					url: "js/ajax.json",
					datatype: "jsonp",
					beforeSend: function(XMLHttpRequest) {
						$(".loading").addClass("block")
						$(".loading").append($("<center><img src='img/xianka/ajax-loader.gif' /><p class='orangered'>正在努力加载中...</p></center>"))

					},
					success: function(date) {
						$("#byline").html("")
						for(var i = date.dateid.length - 3; i < date.dateid.length; i++) {
							var t = date.dateid[i].name;
							var d = date.dateid[i].pic;
							var sp = date.dateid[i].sp;
							var n = date.dateid[i].n;
							$("#byline").append($("<div class='row bgline'><div class='col-xs-3'><a href='#'><img src='img/XTREMEGAMING/" + d + ".png'/></a><input type='checkbox'/>加入对比表</div><div class='col-xs-7'><a href='#'><h4>" + t + "</h4></a><span class='blod orangered'>产品特色</span>" + sp + "<span class='blod orangered'>产品特色</span>" + n + "<a href='#'>更多...</a></div></div>"))
						}
					},
					complete: function() {
						$(".loading").addClass("none")
						$(".loading").html("");
					}
				})
			}
		}
		if($(".tu").hasClass("orangered")) {
			if($("#byimg").children.length == 14) {
				for(var i = 0; i < $("#byimg").children.length - 3; i++) {
					$("#byimg").children[i].fadeOut();
				}
			} else {
				$.ajax({
					type: "get",
					url: "js/ajax.json",
					datatype: "jsonp",
					beforeSend: function(XMLHttpRequest) {
						$(".loading").addClass("block")
						$(".loading").append($("<center><img src='img/xianka/ajax-loader.gif' /><p class='orangered'>正在努力加载中...</p></center>"))

					},
					success: function(date) {
						$("#byimg").html("")
						for(var i = date.dateid.length - 3; i < date.dateid.length; i++) {
							var t = date.dateid[i].name;
							var d = date.dateid[i].pic;
							$("#byimg").append($("<div class='col-sm-3 col-xs-6'><div><input type='checkbox'/><a href='#'>" + t + "</a><a href='#'><img src='img/XTREMEGAMING/" + d + ".png'/></a></div></div>"))
						}
					},
					complete: function() {
						$(".loading").addClass("none")
						$(".loading").html("");
					}
				})
			}
		}
	})
	$("#one").on("click", function() {
		$("#one").addClass("orangered").siblings().removeClass("orangered")
		if($(".line").hasClass("orangered")) {
			if($("#byline").children.length == 14) {
				for(var i = 0; i < $("#byline").children.length - 3; i++) {
					$("#byline").children[i].fadeIn();
				}
			} else {

				$("#byline").children().fadeOut();

				ajcpl();
			}
		}
		if($(".tu").hasClass("orangered")) {
			if($("#byimg").children.length == 14) {
				for(var i = 0; i < $("#byimg").children.length - 3; i++) {
					$("#byimg").children[i].fadeIn();
				}
			} else {

				$("#byimg").children().fadeOut();

				ajcp();
			}
		}
	})
	$(".line").on("click", function() {
		$("#one").addClass("orangered").siblings().removeClass("orangered")
		$("#byimg").fadeOut()
		$("#byline").fadeIn()
		ajcpl();
	})

	function ajcpl() {
		$(".line").addClass("orangered").siblings().removeClass("orangered")
		$(".line").addClass("block")
		$.ajax({
			type: "get",
			url: "js/ajax.json",
			datatype: "jsonp",
			beforeSend: function(XMLHttpRequest) {
				$(".loading").addClass("block")
				$(".loading").append($("<center><img src='img/xianka/ajax-loader.gif' /><p class='orangered'>正在努力加载中...</p></center>"))

			},
			success: function(date) {
				$("#byline").html("")
				for(var i = 0; i < date.dateid.length; i++) {
					var t = date.dateid[i].name;
					var d = date.dateid[i].pic;
					var sp = date.dateid[i].sp;
					var n = date.dateid[i].n;
					$("#byline").append($("<div class='row bgline'><div class='col-xs-3'><a href='#'><img src='img/XTREMEGAMING/" + d + ".png'/></a><input type='checkbox'/>加入对比表</div><div class='col-xs-7'><a href='#'><h4>" + t + "</h4></a><span class='blod orangered'>产品特色</span>" + sp + "<span class='blod orangered'>产品特色</span>" + n + "<a href='#'>更多...</a></div></div>"))
				}
			},
			complete: function() {
				$(".loading").addClass("none")
				$(".loading").html("");
			}
		})
	}
	$(".tu").on("click", function() {
		$("#one").addClass("orangered").siblings().removeClass("orangered")
		$(this).addClass("orangered").siblings().removeClass("orangered");
		$("#byimg").fadeIn()
		$("#byline").fadeOut()
		ajcp();
	})

	//	$("input[type='checkbox']").click(function(){
	//		var leg=$("input[type='checkbox']:checked").length;
	//		console.log(leg);
	////		if($("input[type='checkbox']:checked").length==0){
	////			$(".bijiao").addClass("none")
	////		}
	////		else{
	//			$(".bijiao").addClass("block")
	//			$(".bijiao").children("p").html(leg);
	////		}
	//	})

})