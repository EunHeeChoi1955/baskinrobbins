window.onload = function(){
	var clickNum = 0;
	var t=0;
	
	$('.sec4LinkBtn').each(function(index){
		$(this).on({
			click:	function(){
				
				
				
				if( $(window).innerWidth() > 989 ){	
					
						
					if( index == 0 ){
						location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=A';
					}
					else if( index == 1 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=E';
					}
					else if( index == 2 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=C';
					}
					else if( index == 3 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=B';
					}
					else if( index == 4 ){
						$('#modal').show();
						$('html').addClass('addScroll');
					}	
						
					else if( index == 5 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=D';
					
					}
				}
				else{	//989이하
								
					if( index == 0 ){
						location.href='http://www.baskinrobbins.co.kr/menu/list.php?top=A';
					}
					else if( index == 1 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=B';
					}
					else if( index == 2 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=C';
					}
					else if( index == 3 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=E';
					}
					else if( index == 4 ){
						location.href='http://m.baskinrobbins.co.kr/menu/list.php?top=D';						
					}
					else if( index == 5 ){
						$('#modal').show();
						$('html').addClass('addScroll');
					}
				}
			}
		});
	});
	
			
	//모달창 닫기 이벤트
	$('.mCloseBtn').on({
		click: function(){
			$('#modal').hide();
			$('html').removeClass('addScroll');
		}
	});
	
	
	

}	
	