
var timer;
var num=0;
$(document).mousewheel(function(e,d){
	clearTimeout(timer);
	timer=setTimeout(function(){
		num-=d;
		if(num<0){
			num=0;
		}
		if(num>4){
			num=4;
		}
		if(d==-1){
			
			$('.box>div').eq(num-1).animate({'top':'-100%'})
		}else{
			$('.box>div').eq(num).animate({'top':'0%'})
		}
			$('ul li').eq(num).addClass('current').siblings().removeClass()
	},400)
})
var m=0;
$('ul li').click(function(){
	var index=$(this).index();
	console.log(index);
	
	$(this).addClass('current')
	$(this).siblings().removeClass('current')
	if(index==0){
		$(this).animate({'top':'-100%'});
		$('.box>div').eq(0).css({'top':'0%'});
		$('.box>div').eq(1).css({'top':'0%'});
		$('.box>div').eq(2).css({'top':'0%'});
		$('.box>div').eq(3).css({'top':'0%'});
		$('.box>div').eq(4).css({'top':'0%'});
		num=index;
	}else if(index==1){
		if(m==0){
			$('.box>div').eq(0).css({'top':'0%'});
			$('.box>div').eq(0).animate({'top':'-100%'});
			m++;
		}
		$('.box>div').eq(0).css({'top':'-100%'});
		$(this).animate({'top':'-100%'});
		$('.box>div').eq(1).css({'top':'0%'});
		$('.box>div').eq(2).css({'top':'0%'});
		$('.box>div').eq(3).css({'top':'0%'});
		$('.box>div').eq(4).css({'top':'0%'});
		num=index;
	}else if(index==2){
		if(m==0){
			$('.box>div').eq(0).css({'top':'0%'});
			$('.box>div').eq(0).animate({'top':'-100%'});
			m++;
		}
		$('.box>div').eq(0).css({'top':'-100%'});
		$('.box>div').eq(1).css({'top':'-100%'});
		$(this).animate({'top':'-100%'});
		$('.box>div').eq(2).css({'top':'0%'});
		$('.box>div').eq(3).css({'top':'0%'});
		$('.box>div').eq(4).css({'top':'0%'});
		num=index;
	}else if(index==3){
		if(m==0){
			$('.box>div').eq(0).css({'top':'0%'});
			$('.box>div').eq(0).animate({'top':'-100%'});
			m++;
		}
		$('.box>div').eq(0).css({'top':'-100%'});
		$('.box>div').eq(1).css({'top':'-100%'});
		$('.box>div').eq(2).css({'top':'-100%'});
		$(this).animate({'top':'-100%'});
		$('.box>div').eq(3).css({'top':'0%'});
		$('.box>div').eq(4).css({'top':'0%'});
		num=index;
	}else if(index==4){
		if(m==0){
			$('.box>div').eq(0).css({'top':'0%'});
			$('.box>div').eq(0).animate({'top':'-100%'});
			m++;
		}
		$('.box>div').eq(0).css({'top':'-100%'});
		$('.box>div').eq(1).css({'top':'-100%'});
		$('.box>div').eq(2).css({'top':'-100%'});
		$('.box>div').eq(3).css({'top':'-100%'});
		$(this).animate({'top':'-100%'});
		$('.box>div').eq(4).css({'top':'0%'});
		num=index;
	}
	
})
$(document).keydown(function(event){
	console.log(event.keyCode);
	clearTimeout(timer);
	timer=setTimeout(function(){
		
		if(event.keyCode==38){
			num--;
			if(num<0){
				num=0;
			}
			$('.box>div').eq(num).animate({'top':'0%'})
		}
		if(event.keyCode==40){
			num++;
			if(num>4){
				num=4;
			}
			$('.box>div').eq(num-1).animate({'top':'-100%'})
		}
			console.log(num);
		$('ul li').eq(num).addClass('current').siblings().removeClass()
	},400)
});


