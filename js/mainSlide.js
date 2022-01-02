$(function(){
	
	//자동화 슬라이드
	var s = []; //실행상태 초기화
	var a = []; //다음슬라이드 배열
	var b = []; //이전슬라이드 배열
	var n = $('.slide').length-1;  //슬라이드 전체 개수 9-1(0 ~ 8)
	var setId = 0;
	var slideH = 0; //슬라이드 높이
	var btnH = 0;	//버튼 높이
	var btnTop = 0; //버튼 탑

	
		//좌우 화살버튼 함수 (수직 상하 중앙 정렬 알고리즘)
		ButtonTopFn();
		$(window).resize(function(){
			ButtonTopFn();
		});

			function ButtonTopFn(){
				slideH = $('.slide').innerHeight(); //슬라이드 높이
				btnH = $('.NextBtn-wrap').innerHeight();	//버튼 높이 이전 다음 화살 버튼
				
				
				
				btnTop = (slideH - btnH)/2; //예] 탑값200 = (500 -100)/2
				
				
				$('.NextBtn-wrap').css({top: btnTop});
				$('.PrevBtn-wrap').css({top: btnTop});
				
		}
	
	
	    s[0]=1;   //첫번째 실행중
		naviEventFn(0);
		
		autoPlay();
	
		//타이머
		function autoPlay(){
			setId = setInterval( NextSlideIfFn ,3000);
			// setId = setInterval( PrevSlideIfFn ,3000);
		}

		//네비게이션 이벤트 마킹
		function naviEventFn(z){
			$('.navBtn').removeClass('addNavEvent');
			$('.navBtn').eq(z).addClass('addNavEvent');
		}	

		
		
		//네비게이션 버튼 클릭이벤트
		//클릭된 버튼 번호에 맞는 슬라이드 호출 한다.
		//단, 조건은 현재 실행중인 슬라이드 번호 보다 클릭된 번호가 더크면
		//다음 슬라이드 클릭된 번호 호출
		//만약 작으면 이전슬라이드 클릭된 번호 호출		
		$('.navBtn').each(function(index){
			$(this).on({
				click:	function(){
					
					for(i=0; i<=n; i++){
						if( s[i]==1 ){ //현재 실행중인 슬라이드
							if( i < index ){
								//NextSlide
								NextSlide(index);
							}
							else if( i > index ){
								PrevSlide(index);
							}
						}
					}
					
				}
			});
		});
		
		
		
		//터치이벤트 스와이프
		$('.slide-wrap').on({
			swipeleft: function(){
				NextSlideIfFn();
			},
			swiperight: function(){
				PrevSlideIfFn();
			}			
		});
		
	
	
		//다음 슬라이드 버튼 클릭 이벤트
		$('.NextBtn').on({
			click:	function(){
				NextSlideIfFn();			
			}
		});
	
		//이전 슬라이드 버튼 클릭 이벤트
		$('.PrevBtn').on({
			click:	function(){
				PrevSlideIfFn();			
			}
		});
		
		
		//슬라이드 버튼 공통 요소 마우스 오버시 슬라이드 일시정지
		//                 마우스 롤아웃시 재시작
		$('.slideBtn').on({
			mouseenter: function(){
				clearInterval(setId);
			},
			mouseleave:	function(){
				autoPlay();
			}
		});
	
		//다음에 실행할 슬라이드 조건 함수
		function NextSlideIfFn(){
			for(i=0; i<=n; i++){
				if(s[i]==1){
					if(i==n){  //예외처리 마지막 슬라이드이면
						NextSlide(0);  //처음으로
						break;
					}
					else{ 	   //그렇지 않으면 다음
						NextSlide(i+1);  //다음슬라이드
						break;
					}
				}
			}
		}
		
		//이전에 실행할 슬라이드 조건 함수
		function PrevSlideIfFn(){
			//실행중인 슬라이드 검색
			for(i=0; i<=n; i++){
				if(s[i]==1){
					if(i==0){
						PrevSlide(n);	
						break;
					}
					else{
						PrevSlide(i-1);
						break;
					}

				}
			}
		}
		
			
		function NextSlide(z){
			
			for(i=0; i<=n; i++){s[i]=0;}
			s[z]=1;
			naviEventFn(z);
			
			//배열초기화
			for(i=0; i<=n; i++){
				a[i]=i;  //0,1,2,3,4,5
			}
			
			imsi = a.pop();   //5 마지막 배열값 삭제 후 imsi 변수에 기억 - 오려두기
			a.unshift(imsi);  //맨앞 배열에 삽입  결과 a[5,0,1,2,3,4]
			
			for(i=0; i<z; i++){  //슬라이드 번호별 반복 시프팅 푸시 반복 횟수
				imsi=a.shift(); //맨앞 배열값 5를 삭제 후 imsi 변수에 기억 - 오려두기
				a.push(imsi);
			}
			
			j=-2;
			for(i=0; i<=n; i++){
				j++; //-1 0 1 2 3 4 5
				$('.slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*j)+'%'},600,'easeInOutExpo');
			}
		
		}
			
			
			
		function PrevSlide(z){  //좌측에서 우측으로 이동 슬라이드
			
			for(i=0; i<=n; i++){s[i]=0;}
			s[z]=1;
			naviEventFn(z);
						
			//배열초기화
			j=n+1; 	//6
			for(i=0; i<=n; i++){
				j--; //5,4,3,2,1,0
				b[i]=j;  //a[5,4,3,2,1,0]
			}
			
			imsi = b.pop();   //5 마지막 배열값 삭제 후 imsi 변수에 기억 - 오려두기
			b.unshift(imsi);  //맨앞 배열에 삽입  결과 a[5,0,1,2,3,4]
			
			
			for(i=0; i<n-z; i++){  //슬라이드 번호별 반복 시프팅 푸시 반복 횟수
				imsi=b.shift(); //맨앞 배열값 5를 삭제 후 imsi 변수에 기억 - 오려두기
				b.push(imsi);
			}
			
			j=1;
			k=2;
			for(i=0; i<=n; i++){
				j--; //0 -1 -2 -3 -4 -5 -6 -7 -8
				k--; //1  0 -1 -2 -3 -4 -5 -6 -7
				$('.slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},600,'easeInOutExpo');
			}
		
		}
	
	
	
	
}); //mainSlide.js