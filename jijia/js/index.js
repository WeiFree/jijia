$(function(){
	
	
	$(".sa").on("click",function(){

		$(".jijia_cp").slideToggle()
		$(".jijia_dj").slideUp()
	})
	$(".ss").on("click",function(){
	$(".jijia_cp").slideUp()
		$(".jijia_dj").slideToggle()
	})
	function banner(){
    $(window).on("resize", function () {
        //图片的位置信息
        var imgInfo=[
            {
                bac:"src=img/index/l1.jpg",
                
            },
            {
               bac:"src=img/index/l2.jpg",
              
            },
            {
                bac:"src=img/index/l3.jpg",
            
            },
            {
              bac:"src=img/index/l4.jpg",
               
            },
            {
                bac:"src=img/index/l5.jpg",
            
            }
        ];
        //判断当前设备是否是移动设备
        var isMobile = true;
        var width = $(window).width();
        if(width<768){
            isMobile = true;
        }else{
            isMobile = false;
        };
        //传入imgBox的数据
        var data={
            isMobile:isMobile,
            imgInfo:imgInfo
        };
        //渲染imgBox
        var html =template("imgBox",data);
        $("#inner").html("");
        $("#inner").append(html);
        //渲染pointBox
        var points = template("pointBox",{leg:imgInfo.length});
        $("#points").html("");
        $("#points").append(points);
        //实现滑动功能
        var isMove = false;
        var startX = 0;
        var moveX = 0;
        var distanceX=0;
        $("#inner").on("touchstart", function (e) {
            startX = e.originalEvent.touches[0].clientX;
        }).on("touchmove", function (e) {
            moveX = e.originalEvent.touches[0].clientX;
            isMove = true;
        }).on("touchend", function (e) {
            distanceX = moveX - startX;
            if(Math.abs(distanceX)>50&&isMove){
                if(distanceX<0){
                    //下一张
                    $('#carousel-example-generic').carousel('next');
                }else if(distanceX>0){
                    //上一张
                    $('#carousel-example-generic').carousel('prev');
                }
            }
        })
    }).trigger("resize");
    }

		banner();

	
})
    
