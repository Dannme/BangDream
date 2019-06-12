$(document).ready(function(){
	let pos=0;
	$(document).on("mousewheel",function(e){
		let E = e.originalEvent.wheelDelta /120;
		let len = $("#app>#item1>li").length;
		
		if(!$("#app>#item1").is(":animated")){
			if( E<0 && pos < len-1){
				pos++;
				$("#app>#item1").animate({
					top: -100*pos+"%"
				},500)
			}
			else if( E>0 && pos > 0){
				pos--;
				$("#app>#item1").animate({
					top: -100*pos+"%"
				},500);
			}
		} 
		$("#item2>.focus").removeClass("focus");
		$("#item2>li").eq(pos).addClass("focus");
	});
	$(document).on("click","#item2>li",function(){
		let idx = $(this).index();
		pos = idx;
		if(!$("#app>#item1").is(":animated")){
		$("#app>#item1").animate({
			top: -100*pos+"%"
		},500);
		$("#item2>.focus").removeClass("focus");
		$("#item2>li").eq(pos).addClass("focus");
		}
		
	});
	$("#an_wrap>#open").delay(500).animate({
        top:100
    },1100,"easeOutBounce")
    $("#an_wrap").delay(1900).animate({"top":"100%"},700)
    $(document).keydown(function(event) {
        if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
        }
    });

    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    });
});
