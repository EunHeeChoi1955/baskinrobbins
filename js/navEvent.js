$(function(){
		
	//메인메뉴 버튼에 마우스 오버시 
	//서브메뉴, 서브메뉴배경이 부드럽게 위에서 아래로 펼쳐진다.
	$('.mainBtn').on({
		mouseenter:	function(){
			$('.nav-sub').stop().slideDown(300);			
			$('.navBg').stop().slideDown(300);
		}
	});
	
	
	$('.nav-right-navbg-wrap').on({ //메인메뉴의 전체영역을 떠나면
		mouseleave:	function(){
			$('.nav-sub').stop().slideUp(300);			
			$('.navBg').stop().slideUp(300);
		}
	});
	
});


