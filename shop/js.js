	
	var oDiv=$('.lunbo ul li div');
		
		for(var i=0;i<oDiv.length;i++){
			oDiv.eq(i).css({'background':"url(images/"+i+".jpg) no-repeat",'background-size':'100% 350px'});	
		} 
		//banner图轮播
		var oul=$('.lunbo ul');
		var ali=$('.lunbo ul li');
		var numLi=$('.lunbo ol li');
		var aliWidth=$('.lunbo ul li').eq(0).width();
		var _now=0;//控制数字样式的计数器
		var _now2=0;//控制图片运动距离的计数器
		var timeId=null;
		

		numLi.click(function(){
			var index=$(this).index();
			_now=index;
			_now2=index;
			$(this).addClass('current').siblings().removeClass();
			oul.animate({'left':-aliWidth*index},500);
		});
	//图片自动轮播
	autoPlay();
	function autoPlay(){
		timeId=setInterval(function(){
			if(_now==numLi.length-1){
				ali.eq(0).css({
					'position':'relative',
					'left': oul.width()
				});
				_now=0;
			}else{
				_now++;
			}
			_now2++;

			numLi.eq(_now).addClass('current').siblings().removeClass();
			// alert(aimg.eq(_now).attr('alt'));
			
			oul.animate({'left':-aliWidth*_now2},500,function(){
				if(_now==0){
				ali.eq(0).css('position','static');
				oul.css('left',0);
				_now2=0;
			}
			});
		
		},1500);
	}
	$('.lunbo').hover(function(){
		clearInterval(timeId);
	},function(){
		autoPlay();	
		
	});
	//登录页面
	var oBtn=$('#show');
	var oBtn = $('#show');
	var popWindow = $('.popWindow');
	var oClose = $('.popWindow h3 span');

	//浏览器可视区域的宽度
	var browserWidth = $(window).width();

	//浏览器可视区域的高度
	var browserHeight = $(window).height();

	//浏览器纵向滚动条距离上边界的值
	var browserScrollTop = $(window).scrollTop();
	//弹出窗口的宽度
	var popWindowWidth = popWindow.outerWidth(true);
	//弹出窗口的高度
	var popWindowHeight = popWindow.outerHeight(true);
	var positionLeft = browserWidth/2 - popWindowWidth/2;
	var positionTop = browserHeight/2 - popWindowHeight/2+browserScrollTop;


	var oMask = '<div class="mask"></div>'
	//遮照层的宽度
	var maskWidth = $(document).width();
	var maskHeight=$(document).height();
	//遮照层的高度
	var maskHeight = $(document).height();
	oBtn.click(function(){
		popWindow.show().animate({
					'left':positionLeft+'px',
					'top':positionTop+'px'
		},500);

		$('body').append(oMask);
		$('.mask').width(maskWidth).height(maskHeight);

	});
	$(window).resize(function(){	
		if(popWindow.is(':visible')){
			browserWidth = $(window).width();
			browserHeight = $(window).height();
			positionLeft = browserWidth/2 - popWindowWidth/2;
			positionTop = browserHeight/2 - popWindowHeight/2+browserScrollTop;

			popWindow.animate({
						'left':positionLeft+'px',
						'top':positionTop+'px'
			},500);		
		}
	});
	$(window).scroll(function(){
		if(popWindow.is(':visible')){
			browserScrollTop = $(window).scrollTop();
			browserScrollLeft = $(window).scrollLeft();
			positionLeft = browserWidth/2 - popWindowWidth/2;
			positionTop = browserHeight/2 - popWindowHeight/2+browserScrollTop;
			popWindow.animate({
						'left':positionLeft+'px',
						'top':positionTop+'px'
			},500).dequeue();
		}
				
	});
	oClose.click(function(){
		popWindow.hide();
		$('.mask').remove();
	});