$('.fabu').hover(function(){
	$('.dsjx,.release').show()
	$('.free').mouseleave(function(){
	$('.dsjx,.release').hide()
})
})

$('.kf').click(function(){
	$('.box').show();
})
$('.login-head span').click(function(){
	$('.box').hide();
})
$('.land a').click(function(){
	$(this).siblings().removeClass('a')
	$(this).addClass('a');
})

var timer;
var num=0;
    // clearInterval(timer)
    timer=setInterval(function(){
        num++;
        if(num>1){
            num=0;
        }
        // 让ul左移;
    $('.banner').css('left', -num*1800+'px');
   console.log(num)
},5000)
$('.l_arrow').click(function(event) {
    num--;
    if(num<0){
        num=1;
    }
    $('.banner').css('left', -num*1800+'px');
});
$('.r_arrow').click(function(event) {
    num++;
    if(num>1){
        num=0;
    }
    $('.banner').css('left', -num*1800+'px');
});

$('.shut').hover(function(){
	$(this).toggleClass('close-in')
	$(this).toggleClass('close-out')
},function(){
	$(this).toggleClass('close-out')
	$(this).toggleClass('close-in')
})
$('.cont').click(function(){
	setTimeout(function(){
		$('.footer-wrap').css('transform','translateX(0)');
	},500)
	$(this).css('transform','translateX(-125px)');
});
$('.shut').click(function(){
	setTimeout(function(){
		$('.cont').css('transform','translateX(0)');
	},1000)
	$('.footer-wrap').css('transform','translateX(-100%)');
});

$('.location').click(function(){
	var a = $('.location').offset().top
	$('html,body').animate({'scrollTop':a})
})
 // $('.lo-h li').click(function(){
 // 	var index=$(this).index();
 // 	console.log(index)
 // 	// $('.lo div').eq(index).siblings().css('diplay','none');
 // 	$('.lo>div').eq(index).show().siblings().hide();
 // })
$('.location').click(function(){
	$('.lo-hot,.lo-overseas').hide()
})
$('.lo-hot a,.lo-overseas a,.land a').click(function(e){
	e.preventDefault()
})
$('.lo-hot li,.lo-overseas li').click(function(){
	$(this).siblings().children().removeClass('move')
	$(this).children().addClass('move');
})
$('.lo-h li').click(function(){
    var index=$(this).index();
    console.log(index)
   if(index==0){
      $('.lo-m').show()
      $('.lo-hot,.lo-overseas').hide()
    }
   if(index==1){
      $('.lo-hot').show()
      $('.lo-m,.lo-overseas').hide() 
    }
    if(index==2){
    	$('.lo-m,.lo-hot').hide()
    	$('.lo-overseas').show()
    }
})
$('.lo-h a').click(function(e){
	e.preventDefault()
})
$('.lo-h li').click(function(){
	$(this).siblings().children().removeClass('current')
	$(this).children().addClass('current')
})
$('#destination').click(function(){
	$('.lo').toggle();
})
// $('#destination').click(function(){
// 	$('.lo').hide();	
// })
$(document).click(function(){
	$('#ltq-calendar').hide()
})
$(document).click(function(){
	$('#marquee').hide()
})
$('#calendar').click(function(a){
	$('#ltq-calendar').toggle();
	a.stopPropagation()
})
$('.amount').click(function(b){
	$('#marquee').toggle();
	b.stopPropagation()
})
$('#marquee li').hover(function(){
	$(this).toggleClass('orange');
})
$('#marquee li').click(function(){
	var b=$(this).html();
	console.log(b)
	$('.unlimit').html(b)
})

var n=0;
$('.down').click(function(){
	$(this).toggleClass('up')
	$('.one').toggleClass('dd-height')
})
var n=0;
$('.t_down').click(function(){
	$(this).toggleClass('up')
	$('.two').toggleClass('dd-height')
})
var n=0;
$('.th_down').click(function(){
	$(this).toggleClass('up')
	$('.three').toggleClass('dd-height')
})

$('.DC-2').hover(function(){
	$('.erweima').show()
	$('.DC-2').mouseleave(function(){
	$('.erweima').hide()
})
})
$('.rcode').hover(function(){
	$('.b_erweima').show()
	$('.rcode').mouseleave(function(){
	$('.b_erweima').hide()
})
})

$('.right').click(function(){
	$(this).css({'background-position':'-38px 0'})
	$('.left').css({'background-position':'-19px 0'})
	$('.m1').css({'transform':'translate(-256px)'})
})
$('.left').click(function(){
	$(this).css({'background-position':'0 0'})
	$('.right').css({'background-position':'-57px 0'})
	$('.m1').css({'transform':'translate(0)'})
})