$(window).scroll(function(e){
	console.log($('.nav').offset().top)
	var w=($(window).scrollTop())
	var h=($(window).height())
	if(w>317){
		$('.nav').css({'position':'fixed','top':'0','z-index':'2'})
	}
	if(w<317){
		$('.nav').css({'position':'relative'})
	}
})


$('.weixin').hover(function(){
	$('.xiazai').show()
	$('p span').mouseleave(function(){
	$('.xiazai').hide()
	})
})

$('.text p').hover(function(){
	$(this).css({'color':'#fb6720','cursor':'pointer'})
	$('.current').css({'cursor':'default'})
	$('.text p').mouseleave(function(){
		$('.text p').css({'color':'#666'})
		$('.current').css({'color':'#fb6720'})
	})
});
$('.mo').hover(function(){
	$('.mo span').css({'background-image':'../img/icon_arrow.png','background-position':'0 -16px'})
	$('.m_text').show()
	$('.mo').mouseleave(function(){
		$('.mo span').css({'background-image':'../img/icon_arrow.png','background-position':'0 -8px'})
		
	})

	$('.m_text').mouseleave(function(){
		$('.m_text').hide()
	})
})

$('.img span,.b_img span').click(function(){
	$(this).toggleClass('play')
})
/*var n=0;
$('.stop').click(function(){
	if(n==0){
		$(this).css({'background-image':'../img/collect.png','background-position':'-36px 0'})
		n++;
		return
	}
	if(n==1){
		$(this).css({'background-image':'../img/collect.png','background-position':'0 0'})
		n=0;
	}
})*/

$('.db').hover(function(){
	$('.db span').css({'background-image':'../img/icon_gotop.png','background-position':'-26px 0'})
	$('.db p').css({'color':'#fc9827'})
	$('.db').mouseleave(function(){
		$('.db span').css({'background-image':'../img/icon_gotop.png','background-position':'0 0'})
		$('.db p').css({'color':'#333'})
	})
})
$('.db').click(function(){
	$('html,body').scrollTop(0)
});

$('.m_one').hover(function(){
	$('.map_one').show()
	$('.m_one').mouseleave(function(){
		$('.map_one').hide()
	})
})
$('.m_two').hover(function(){
	$('.map_two').show()
	$('.m_two').mouseleave(function(){
		$('.map_two').hide()
	})
})
/*$('.content p a').hover(function(){
	$('.map').css({'display':'block'})
})*/

$('.text p').click(function(){
	var index=$(this).index()
	console.log(index)
	if(index==0){
		var top=$('#bj').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
		
	}	
	if(index==1){
		var top=$('#sh').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==2){
		var top=$('#gz').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==3){
		var top=$('#sz').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==4){
		var top=$('#cd').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==5){
		var top=$('#xa').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
	}
	if(index==6){
		var top=$('#hz').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
	}
})
$('.m_text a').click(function(){
	var index=$(this).index()
	console.log(index)
	if(index==0){
		var top=$('#nj').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
		
	}	
	if(index==1){
		var top=$('#cq').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==2){
		var top=$('#xm').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==3){
		var top=$('#sy').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==4){
		var top=$('#bhd').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
							
	}
	if(index==5){
		var top=$('#xjp').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 54},1000)
	}
})