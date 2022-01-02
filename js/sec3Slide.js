$(function(){
	var winW = $(window).innerWidth();
	var clickNum = 0;
	var cnt=0;
	var num=0;

	navBtnFn(3);

	function navBtnFn(z){
		$('.sec3NavBtn-wrap').empty();//�ʱ�ȭ

		for(i=0; i<z; i++){
			$('.sec3NavBtn-wrap').append("<span><a href='javascript:' class='sec3NavBtn blind'>�׺���̼� ��ư1</a></span>");		
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
		//swipe ��� ����!
		$('.sec3-slide-container').on({
			swipeleft:	function(){
				cnt++;
				if( cnt < num ){// ���������� �Ѱ����� ��ư ������ ���� �̻� �Ѿ�� �ʰԲ� �����.
					if(winW > 1216){
						$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) 
						});	
					}	
					else{
					$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) });					
					}	
				}//5 6 7 8.....
				else{
					cnt = num-1;	//������ �����̵� ������ �ʱ�ȭ
				}
				//�Ѱ����� ��ưǥ�����ִ� ���
				$('.sec3NavBtn-wrap span').removeClass('addNavRound');
				$('.sec3NavBtn-wrap span').eq(cnt).addClass('addNavRound');

			},
			swiperight:	function(){
				cnt--;
				if( cnt >= 0 ){// �������� �Ѱ����� ��ư ������ ���� �̻� �Ѿ�� �ʰԲ� �����.
					if(winW > 1216){
						$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) 
						});	
					}
					else{
					$('.sec3-slide-wrap').stop().animate({left: -(winW*cnt) });
					}
				}	
				else{
					cnt = 0;	//ù��° �����̵� �ʱ�ȭ
				}				
				//�Ѱ����� ��ưǥ�����ִ� ���
				$('.sec3NavBtn-wrap span').removeClass('addNavRound');
				$('.sec3NavBtn-wrap span').eq(cnt).addClass('addNavRound');
			},
		});	

	//������ �����̵�
	//â�ʺ�
	//li�ʺ�

		resizeFn();

		$(window).resize(function(){
			$('.sec3NavBtn-wrap').empty();//�ʱ�ȭ

			resizeFn();		
			
		});
	
	
		
		function resizeFn(){
			winW = $(window).innerWidth();
		

			if( winW > 1216){ //1216�ʰ�	
				
				navBtnFn(3);
				num=3;
				//�׺��ư 3��
				$('.sec3-slide-wrap>li').css({width: 304 });
				$('.sec3-slide-wrap').css({width: 304*11 });//��ü�̹��� �ʺ� ���� view 
				$('.sec3-slide-container').css({width: 1216 });//�� ȭ��ʺ�			
			}
			else if(winW >= 800 && winW <= 1216){//760���� 1216����
				navBtnFn(4);
				num=4;
				//�׺��ư4��
				$('.sec3-slide-wrap>li').css({width: winW/3 });//3���� ����
				$('.sec3-slide-wrap').css({width: winW*3*11 });//��ü�̹��� �ʺ� ���� view 
				$('.sec3-slide-container').css({width: winW });//�� ȭ��ʺ�			
			}
			else if(winW >= 480 && winW < 800){//480���� 800�̸�����
				navBtnFn(6);
				num=6;
				//�׺��ư6��
				$('.sec3-slide-wrap>li').css({width: winW/2 });//2���� ����
				$('.sec3-slide-wrap').css({width: winW*2*11 });//��ü�̹��� �ʺ� ���� view 
				$('.sec3-slide-container').css({width: winW });//�� ȭ��ʺ�			
			}			
			else{	//0���� 480�̸�����	
				navBtnFn(11);
				num=11;
				//�׺��ư11��
				$('.sec3-slide-wrap>li').css({width: winW/1 });//1���� ����
				$('.sec3-slide-wrap').css({width: winW*1*11 });//��ü�̹��� �ʺ� ���� view 
				$('.sec3-slide-container').css({width: winW  });//�� ȭ��ʺ�
			
			}	

		}	


});//sec3Slide.js