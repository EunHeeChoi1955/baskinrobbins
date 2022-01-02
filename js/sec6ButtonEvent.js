$(function(){
	//패밀리사이트 버튼 클릭 이벤트
	var t=0;
	
	$('.sec6-imgCapBtn').on({
		mouseenter:	function(){
			$(this).prev().stop().show();
		},
		mouseleave:	function(){
			$(this).prev().stop().hide();
		}
	});
	
});