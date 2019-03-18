
var n=0;
var timer;
timer=setInterval(function(){
	n++;
	if(n==3)n=0;
	$('main ul li').eq(n).addClass('xian');
	$('main ul li').eq(n).siblings().removeClass('xian');
	$('main ol li').eq(n).addClass('dian');
	$('main ol li').eq(n).siblings().removeClass('dian');
},3000)

$('main ol li').click(function(){
	n=$(this).index();
	$('main ul li').eq(n).addClass('xian');
	$('main ul li').eq(n).siblings().removeClass('xian');
	$('main ol li').eq(n).addClass('dian');
	$('main ol li').eq(n).siblings().removeClass('dian');
})
$('main').hover(function(){
	clearInterval(timer)
},function(){
	timer=setInterval(function(){
		n++;
		if(n==3)n=0;
		$('main ul li').eq(n).addClass('xian');
		$('main ul li').eq(n).siblings().removeClass('xian');
		$('main ol li').eq(n).addClass('dian');
		$('main ol li').eq(n).siblings().removeClass('dian');
	},3000)
})