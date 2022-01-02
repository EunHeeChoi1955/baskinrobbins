$(function(){
	var winW = $(window).innerWidth();
	var clickNum = 0;
	var cnt=0;
	var num=0;

	navBtnFn(3);

	function navBtnFn(z){
		$('.sec3NavBtn-wrap').empty();//초기화

		for(i=0; i<z; i++){
			$('.sec3NavBtn-wrap').append("<span><a href='javascript:' class='sec3NavBtn blind'>네비게이션 버튼1</a></span>");		
		}

		$('.sec3NavBtn-wrap span').eq(0).addClass('addNavRound');

		function navigationFn(x){
			$('.sec3NavBtn-wrap span').removeClass('addNavRound');
			$('.sec3NavBtn-wrap span').eq(x).addClass('addNavRound');
		}

		$('.sec3NavBtn').each(function(idx){
			$(this).on({
				click:	function(){
					$('.sec3-slide-wrap').stop().animate({left: -(winW*idx) });
					navigationFn(idx);
					}
				});
			});


		}
		//swipe 기능 개발!
		$('.sec3-slide-container').on({
			swipeleft:	function(){
				cnt++;
				if( cnt < num ){// 오른쪽으로 넘겼을때 버튼 마지막 이후 이상 넘어가지 않게끔 만들기.
					if(winW > 1216){
						$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) 
						});	
					}	
					else{
					$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) });					
					}	
				}//5 6 7 8.....
				else{
					cnt = num-1;	//마지막 슬라이드 포지션 초기화
				}
				//넘겼을때 버튼표시해주는 기능
				$('.sec3NavBtn-wrap span').removeClass('addNavRound');
				$('.sec3NavBtn-wrap span').eq(cnt).addClass('addNavRound');

			},
			swiperight:	function(){
				cnt--;
				if( cnt >= 0 ){// 왼쪽으로 넘겼을때 버튼 마지막 이후 이상 넘어가지 않게끔 만들기.
					if(winW > 1216){
						$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) 
						});	
					}
					else{
					$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) });
					}
				}	
				else{
					cnt = 0;	//첫번째 슬라이드 초기화
				}				
				//넘겼을때 버튼표시해주는 기능
				$('.sec3NavBtn-wrap span').removeClass('addNavRound');
				$('.sec3NavBtn-wrap span').eq(cnt).addClass('addNavRound');
			},
		});	

	//반응형 슬라이드
	//창너비
	//li너비

		resizeFn();

		$(window).resize(function(){
			$('.sec3NavBtn-wrap').empty();//초기화

			resizeFn();		
			
		});
	
	
		
		function resizeFn(){
			winW = $(window).innerWidth();
		

			if( winW > 1216){ //1216초과	
				
				navBtnFn(3);
				num=3;
				//네비버튼 3개
				$('.sec3-slide-wrap>li').css({width: 304 });
				$('.sec3-slide-wrap').css({width: 304*11 });//전체이미지 너비 조정 view 
				$('.sec3-slide-container').css({width: 1216 });//한 화면너비			
			}
			else if(winW >= 800 && winW <= 1216){//760부터 1216까지
				navBtnFn(4);
				num=4;
				//네비버튼4개
				$('.sec3-slide-wrap>li').css({width: winW/3 });//3개씩 보기
				$('.sec3-slide-wrap').css({width: winW*3*11 });//전체이미지 너비 조정 view 
				$('.sec3-slide-container').css({width: winW });//한 화면너비			
			}
			else if(winW >= 480 && winW < 800){//480부터 800미만까지
				navBtnFn(6);
				num=6;
				//네비버튼6개
				$('.sec3-slide-wrap>li').css({width: winW/2 });//2개씩 보기
				$('.sec3-slide-wrap').css({width: winW*2*11 });//전체이미지 너비 조정 view 
				$('.sec3-slide-container').css({width: winW });//한 화면너비			
			}			
			else{	//0부터 480미만까지	
				navBtnFn(11);
				num=11;
				//네비버튼11개
				$('.sec3-slide-wrap>li').css({width: winW/1 });//1개씩 보기
				$('.sec3-slide-wrap').css({width: winW*1*11 });//전체이미지 너비 조정 view 
				$('.sec3-slide-container').css({width: winW  });//한 화면너비
			
			}	

		}	


});//sec3Slide.js