	
	// 카카오맵 api 코드를 작성하는 공간
	// 1) 지도를 담을 영역을 가져오자
	let container = document.getElementById('map')
				
	// 2) 지도에 넣어줄 기본 옵션
	let options = {
		// 위도, 경도
		// 지도를 보여줄 때 중심좌표를 어디로 보여줄 것인지
		center: new kakao.maps.LatLng(35.160106466779226, 126.85162995083103),
		// 지도의 확대 레벨 -> 확대, 축소의 정도
		level : 3
		}
				
	// 3) 지도 생성
	let map = new kakao.maps.Map(container, options)
	
	// 내가 현재 보고있는 좌표를 중심으로 행동			
    let moveLatLon = new kakao.maps.LatLng(map.getCenter().Ma, map.getCenter().La);
    
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);

				
	// 마커를 담을 배열
	let markers = []
	
	let del = null;
	let coords = null;
	let customOverlay = null;
	let clickedOverlay = null;
	let overlays = []
	let selectmarkerImage = null;
	let markerImage = null;
	let num = null;
	let isClick = false;
	let ctOverlay = null;
	// let currCategory = null;
	// let currCategory = document.getElementsByClassName(category_btn);
	
	let cnt = 0;
				
	function mapEX(){
					
		$.ajax({
			url : 'GJ_EXServer.do',
			dataType : 'json',
			success : (res) => {
				console.log(res)
    			
    			// 마커 이미지 지정
    			let imageSrc = 'assets/images/artGallery_default.svg', // 마커이미지의 주소  
    				selectimageSrc = 'assets/images/artGallery_click.svg',  // 활성화 됐을때 보여지는 이미지
    				imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기
    				imageOption = {offset: new kakao.maps.Point(11, 28)}; // 마커이미지의 옵션 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
      
				// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
				markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
				selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)
				
				// 마커 찍는 함수
				mapMaker(res,markerImage)
				
				// 오버레이 불러오는 함수
				markerOverOverlay(res)
				markerclickOverlay(res)
				
//				kakao.maps.event.addListener(map, 'zoom_changed', function() {
//					for(let i = 0; markers.length; i++){
//					level = map.getLevel();
					
//					if(level <= 7){
						
//						imageSize = new kakao.maps.Size(25, 25)
//						markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
//						markers[i].setImage(markerImage);
//					}else{
						
//						imageSize = new kakao.maps.Size(1, 1)
//						markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
//						markers[i].setImage(markerImage);
//					}}
							
					// 여러개 찍어보기
//					for(let i = 0; i < res.length; i++){
//						coords = new kakao.maps.LatLng(res[i].lat, res[i].lng)
//						console.log(res[i].lat, res[i].lng);
//						console.log(coords);
//						let marker = new kakao.maps.Marker({
//							map : map,
//							position : coords,
//							image: markerImage // 마커이미지 설정 
//						});
								
					// 지도의 중심을 결과값으로 받은 위치로 이동
					// map.setCenter();

					// marker 값을 markers 배열에 추가
//					markers.push(marker);
//				}
//				mapMaker(res, markerImage)
				console.log("GJ_EX")
				
				    
//		});
							

													
			},
			error : (e) => {
				console.log(e)
			}
		})
	}
	
	function mapCC(){
					
		$.ajax({
			url : 'GJ_CCServer.do',
			dataType : 'json',
			success : (res) => {
				console.log(res)

    			let imageSrc = 'assets/images/communityCenter_default.svg', // 마커이미지의 주소
    				selectimageSrc = 'assets/images/communityCenter_click.svg', // 활성화 됐을때 이미지
    				imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기
    				imageOption = {offset: new kakao.maps.Point(11, 28)}; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
      
				// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
				markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
				selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)
				
				// 마커 찍는 함수
				mapMaker(res,markerImage)
				
				// 오버레이 불러오는 함수
				markerOverOverlay(res)
				markerclickOverlay(res)


				console.log("GJ_CC")
				
													
			},
			error : (e) => {
				console.log(e)
			}
		})
	}
	
	
	
	
	// 마커 초기화
	function removeMarker() {
		for ( let i = 0; i < markers.length; i++ ) {
		markers[i].setMap(null);
	}
	if(clickedOverlay != null){   
		clickedOverlay.setMap(null);
		}
		markers = [];
		del = true
	}
	
	// 카테고리를 클릭했을 때 호출되는 함수
	let clickMenu= "";
	
	function clickTest(e){
		
		console.log(e.target.innerText.trim())
		if(e.target.innerText.trim() == clickMenu){
				removeMarker()
				clickMenu = "";
		}else{
			removeMarker()
			if(e.target.innerText.trim() == '전시관'){
				mapEX();
			}
			else if(e.target.innerText.trim() == '자치센터'){
				mapCC();
			}
        	
        	clickMenu = e.target.innerText.trim();
		}
	}
	
//	function clickTest1(e){
//		console.log(e.target.textContent)
//		if(e.target.textContent == clickMenu){
//				removeMarker()
//		}else{
//			removeMarker()
//			if(e.target.textContent === '전시관'){
//				mapEX();
//			}
//			else if(e.target.textContent === '자치센터'){
//				mapCC();
//			}
        	
//       	clickMenu = e.target.textContent;
//		}
//	}
	
	function mapMaker(res, markerImage){
		for(let i = 0; i < res.length; i++){
			coords = new kakao.maps.LatLng(res[i].lat, res[i].lng)
			let marker = new kakao.maps.Marker({
				map : map,
				position : coords,
				image: markerImage // 마커이미지 설정 
			});
			
		marker.setMap(map); // 지도 위에 마커를 표출합
		markers.push(marker);  // 배열에 생성된 마커를 추가
		
		// del의 상태에 따라 마커가 표시된다. del을 false로 해두면 버튼을 다시 클릭했을 시 마커가 사라진다.
		del = false
		
		//return marker;
		}
	}
	
	function markerOverOverlay(res){
		for(let i = 0; i < res.length; i++){
					
		// 마우스 올렸을 때 정보 보여주기
		kakao.maps.event.addListener(markers[i], 'mouseover', function () {
			cnt = 1;
			// 커스텀 오버레이에 표시할 내용입니다     
			// HTML 문자열 또는 Dom Element
			let content = '<div class="tooltip_inner"><span class="txt_name">'+res[i].nm+'</span></div>';

			// 커스텀 오버레이가 표시될 위치 
			coords = new kakao.maps.LatLng(res[i].lat, res[i].lng);

			// 커스텀 오버레이를 생성
			customOverlay = new kakao.maps.CustomOverlay({
    			position: coords,
    			content: content,
    			yAnchor: 0
			});
			// 커스텀 오버레이를 지도에 표시
//			if(isClick) {return;}
			markers[i].setImage(selectmarkerImage);
			customOverlay.setMap(map);
			console.log("마우스오버")
				
		})

					
		// 커스텀 오버레이 닫기
      	kakao.maps.event.addListener(markers[i], 'mouseout', function () {
			  if(cnt==1){
//				  	if(isClick) {return;}
			customOverlay.setMap(null);
			
			
			markers[i].setImage(markerImage);
        	console.log("마우스아웃")
			  }
			
		
			
      	});
      				

		}
	}
	
	function markerclickOverlay(res){
		
		for(let i = 0; i < res.length; i++){
							
			// 클릭했을 때 정보 보여주기
			kakao.maps.event.addListener(markers[i], 'click', function () {
				let test = 0;
				if(test == 1){
				clickedOverlay.setMap(null);
			}else{
				
			}
				console.log(markers[i])
			
			// 맵을 클릭 시 이전 마커의 오버레이와 마커 하이라이트가 사라진다			
/*			kakao.maps.event.addListener(map, 'click', function () {
				if(ctOverlay != null){
					ctOverlay.setMap(null);
					markers[i].setImage(markerImage);
					console.log("2")
					cnt=1
				}
			})
*/


			cnt = 2;
//			if(!isClick) {
//       			isClick = true;
//    		}			
			//customOverlay.setMap(null);
			// 커스텀 오버레이에 표시할 내용입니다     
			// HTML 문자열 또는 Dom Element 입니다 
			let content = '<span class="info" value=true>'+res[i].nm+'</span>';

			// 커스텀 오버레이가 표시될 위치입니다 
			coords = new kakao.maps.LatLng(res[i].lat, res[i].lng);

			// 커스텀 오버레이를 생성합니다
			clickedOverlay = new kakao.maps.CustomOverlay({
    			position: coords,
    			content: content,
    			yAnchor: 0
			});
			
//			overlays.push(clickedOverlay);
			console.log("3")
//			clickedOverlay = ctOverlay
			clickedOverlay.setMap(map);
			ctOverlay = clickedOverlay
//			clickedOverlay = customOverlay			
			// 마커 클릭시 커스텀 오버레이를 지도에 표시
//			clickedOverlay.setMap(map);
			// console.log(customOverlay)
			
			markers[i].setImage(selectmarkerImage);
			console.log("i의마커이미지"+i)
			num = i	
			
			test=1;
			// 다른 마커 클릭시 이전 마커 오버레이와 마커 하이라이트가 사라진다		
			/*if(ctOverlay != null && num != null){
				//console.log(ctOverlay)
				clickedOverlay.setMap(null);
				//ctOverlay.cc=""
				//console.log(ctOverlay.cc)
				markers[num].setImage(markerImage);
				console.log("1")
				cnt=1
			}*/
			
			

		})
		}
	}
	
	function closeOverlay(pos) {
     isClick = false;
     overlays[pos].setMap(null);
}
