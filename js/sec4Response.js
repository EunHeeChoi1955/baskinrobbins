$(function(){
	//창 너비가 989px을 만나면 반응형시작
	//모든값 즉 left, top, width, height가 그리드방식(비율계산)으로 반응하여야한다.
	//window.resize
	//1. 989픽셀이하에서부터 창너비 기준으로 섹션4 배경이미지 박스 높이를 계산
	//2. 각  각링크박스의 모든값 그리드방식 수식 만들어준다.
	//최초의 로딩시(홈페이지가 나타날때) 1회 출력	
	

	var winW = $(window).innerWidth();//창너비	
	
	
	//탐색창에서 이미지 파일의 실제 너비[689]와 높이[1647]를 판독	
	var imgH = winW *(1647/689) //2.3904209[높이비율] = 이미지높이 / 이미지너비 
	
	
	$('.sec4BgImage-wrap').css({height: imgH });//이미지박스 높이 설정
		linkBoxPositionFn();
	
	//창크기가 변경되면 동작
	$(window).resize(function(){
		winW = $(window).innerWidth(); //창너비
		imgH = winW * 2.3904209;  //이미지박스 전체 높이
		$('.sec4BgImage-wrap').css({height: imgH }); //이미지박스 높이 설정
		linkBoxPositionFn();
	});
		
		
function linkBoxPositionFn(){
		if( $(window).innerWidth()> 989 ){//989초과
			$('.sec4-s1').css({left:204.5, top: 88, width:405, height:300});
			$('.sec4-s2').css({left:644.5, top: 88, width:275, height:470});
			$('.sec4-s3').css({left:  9.5, top:428, width:230, height:365});
			$('.sec4-s4').css({left:274.5, top:428, width:330, height:290});
			$('.sec4-s5').css({left:644.5, top:598, width:275, height:180});
			$('.sec4-s6').css({left:274.5, top:758, width:330, height:180});	
		}
		else{
			$('.sec4-s1').css({left:(winW*0.351870576), top:(imgH*0),           width:(winW*0.616784631), height:((winW*0.616784631)*1.057377049)});
			$('.sec4-s2').css({left:(winW*0.015166835), top:(imgH*0.289747637), width:(winW*0.460060667), height:((winW*0.460060667)*1.153846154)});
			$('.sec4-s3').css({left:(winW*0.505561173), top:(imgH*0.289747637), width:(winW*0.460060667), height:((winW*0.460060667)*1.153846154)});
			$('.sec4-s4').css({left:(winW*0.015166835), top:(imgH*0.527890585), width:(winW*0.954499494), height:((winW*0.954499494)*0.441737288)});
			$('.sec4-s5').css({left:(winW*0.015166835), top:(imgH*0.722042651), width:(winW*0.460060667), height:((winW*0.460060667)*1.153846154)});
			$('.sec4-s6').css({left:(winW*0.505561173), top:(imgH*0.722042651), width:(winW*0.460060667), height:((winW*0.460060667)*1.153846154)});
		}
		
	}				
		
	
	
});