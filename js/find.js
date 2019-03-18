var n=0;
var timer;

function ti(){
	if(n>4)n=0;
	if(n<0)n=4;
	m1.style.left=n*-1190+'px';
}

function jum(){
		
	timer=setInterval(function(){
		n++;
		// $('m1').css('transfrom',`translateX(${n*-1190}px)`)
		ti();
	},2000)
}
jum();
$('main').hover(function(){
	clearInterval(timer);
},function(){
	jum();
})

$('#zuo').click(function(){
	n--;
	ti();
})
$('#you').click(function(){
	n++;
	ti();
})


