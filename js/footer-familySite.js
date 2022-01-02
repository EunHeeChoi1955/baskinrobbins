$(function(){
	//패밀리사이트 버튼 클릭 이벤트
	var t=0;
	$('.familySiteBtn').on({
		click:	function(){
			if(t==0){
				$('.footer-familySite').stop().show();	
				$(this).addClass('addFamily');	
				t=1;
			}else{
				$('.footer-familySite').hide();
				$(this).removeClass('addFamily');					
				t=0;
			}
			
		}
	});

});