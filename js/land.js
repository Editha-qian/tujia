
function yx(em){
	em.focus(function(){
		$(this).parent().children('span').hide();
	})
	em.blur(function(){
		if($(this).val()=='')$(this).parent().children('span').show();
		else $(this).parent().children('span').hide();
	})
}
function yx1(em){
	em.click(function(){
		$(this).hide();
		$(this).parent().children('input').focus();
	})
}

yx($('#us'));
yx($('#pw'));
yx($('#yz'));
yx1($('#yz1'));
yx1($('#us1'));
yx1($('#pw1'));


