
// 카카오맵 api 코드를 작성하는 공간
// 1) 지도를 담을 영역을 가져오자
let container = document.getElementById('map')

// main에서 받아온 쿼리 스트링 꺼내오기
const searchParams = new URLSearchParams(location.search);

let cortarno = null;
let dong_lng = null;
let dong_lat = null;
let center = "";
let level = null;

for (const param of searchParams) {
	cortarno = Number(param[1]);
	console.log(cortarno)
}


let dong_code = { dong_code: cortarno }

// 동 검색에 따른 맵 센터 이동
$.ajax({
	url: 'GWANGJU_DONGServer.do',
	data: dong_code,
	dataType: 'json',
	success: (res) => {
		console.log(res)
		dong_lng = res[0].lng
		dong_lat = res[0].lat
		map.setCenter(new kakao.maps.LatLng(dong_lat, dong_lng));
		mapRS()
	},
	error: (e) => {
		console.log(e)
	}
})

// 2) 지도에 넣어줄 기본 옵션
let options = {
	// 위도, 경도
	// 지도를 보여줄 때 중심좌표를 어디로 보여줄 것인지
	center: new kakao.maps.LatLng(35.160106466779226, 126.85162995083103),
	// 지도의 확대 레벨 -> 확대, 축소의 정도
	level: 5
}


// 3) 지도 생성
let map = new kakao.maps.Map(container, options)


//광주 행정구역 구분 폴리곤 생성
$.getJSON("./assets/geojson/dong_line.geojson", function(geojson) {

	var data = geojson.features;
	var coordinates = [];    //좌표 저장할 배열
	var name = '';            //행정 구 이름

	$.each(data, function(index, val) {

		coordinates = val.geometry.coordinates;
		name = val.properties.EMD_KOR_NM;
		displayArea(coordinates, name);

	})
})

var polygons = [];

function displayArea(coordinates, name) {

	var path = [];            //폴리곤 그려줄 path
	var points = [];        //중심좌표 구하기 위한 지역구 좌표들

	$.each(coordinates[0][0], function(index, coordinate) {        //console.log(coordinates)를 확인해보면 보면 [0]번째에 배열이 주로 저장이 됨.  그래서 [0]번째 배열에서 꺼내줌.
		var point = new Object();
		point.x = coordinate[1];
		point.y = coordinate[0];
		points.push(point);
		path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));            //new kakao.maps.LatLng가 없으면 인식을 못해서 path 배열에 추가
	})

	// 다각형을 생성합니다
	var polygon = new kakao.maps.Polygon({
		map: map, // 다각형을 표시할 지도 객체
		path: path,
		strokeWeight: 2,
		strokeColor: '#7bb422',
		strokeOpacity: 1,
		fillColor: '#fff',
		fillOpacity: 0.2
	});

	// 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다 
	// 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
	kakao.maps.event.addListener(polygon, 'mouseover', function(mouseEvent) {
		polygon.setOptions({
			fillColor: '#8ac926',
			fillOpacity: 0.4
		})
	});

	// 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다 
	kakao.maps.event.addListener(polygon, 'mousemove', function(mouseEvent) {
		//customOverlay.setPosition(mouseEvent.latLng);
	});

	// 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
	// 커스텀 오버레이를 지도에서 제거합니다 
	kakao.maps.event.addListener(polygon, 'mouseout', function() {
		polygon.setOptions({
			fillColor: '#fff',
			fillOpacity: 0.5
		});

	});

	kakao.maps.event.addListener(polygon, 'click', function(mouseEvent) {
		let click_latlng = mouseEvent.latLng;
		map.setCenter(new kakao.maps.LatLng(click_latlng.getLat(), click_latlng.getLng()));
		level = map.getLevel();
		console.log(level)
		map.setLevel(4);
	});
}



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
let colorN = "";
let content = "";
// let currCategory = null;
// let currCategory = document.getElementsByClassName(category_btn);

let cnt = 0;

function mapRS() {

	$.ajax({
		url: 'GJ_RSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)
		},
		error: (e) => {
			console.log(e)
		}
	})
}







// 전시관
function mapEX() {

	$.ajax({
		url: 'GJ_EXServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 4

			// 마커 이미지 지정
			let imageSrc = 'assets/images/artGallery_default.svg', // 마커이미지의 주소  
				selectimageSrc = 'assets/images/artGallery_click.svg',  // 활성화 됐을때 보여지는 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)
			//markerclickOverlay(res)

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
		error: (e) => {
			console.log(e)
		}
	})
}

// 자치센터
function mapCC() {

	$.ajax({
		url: 'GJ_CCServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 3

			let imageSrc = 'assets/images/communityCenter_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/communityCenter_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)


		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 편의점
function mapCS() {

	$.ajax({
		url: 'GJ_CSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			// 오버레이 바꾸기위한 조건
			colorN = 1;

			let imageSrc = 'assets/images/store_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/store_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 대형마트
function mapSM() {

	$.ajax({
		url: 'GJ_SMServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 1;

			let imageSrc = 'assets/images/mart_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/mart_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 병원
function mapHS() {

	$.ajax({
		url: 'GJ_HSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 2;

			let imageSrc = 'assets/images/hospital_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/hospital_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 약국
function mapPH() {

	$.ajax({
		url: 'GJ_PHServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 2;

			let imageSrc = 'assets/images/pills_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/pills_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 경찰서
function mapPS() {

	$.ajax({
		url: 'GJ_PSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 3

			let imageSrc = 'assets/images/police_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/police_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 소방서
function mapFS() {

	$.ajax({
		url: 'GJ_FSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 3

			let imageSrc = 'assets/images/fire_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/fire_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 영화관
function mapCN() {

	$.ajax({
		url: 'GJ_CNServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 4


			let imageSrc = 'assets/images/cinema_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/cinema_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 박물관
function mapMS() {

	$.ajax({
		url: 'GJ_MSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 4

			let imageSrc = 'assets/images/musium_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/musium_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}

// 도서관
function mapLB() {

	$.ajax({
		url: 'GJ_LBServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			colorN = 4

			let imageSrc = 'assets/images/library_default.svg', // 마커이미지의 주소
				selectimageSrc = 'assets/images/library_click.svg', // 활성화 됐을때 이미지
				imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
				imageOption = { offset: new kakao.maps.Point(11, 28) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
			selectmarkerImage = new kakao.maps.MarkerImage(selectimageSrc, imageSize, imageOption)

			// 마커 찍는 함수
			mapMaker(res, markerImage)

			// 오버레이 불러오는 함수
			markerOverlay(res)

		},
		error: (e) => {
			console.log(e)
		}
	})
}




// 마커 초기화
function removeMarker() {
	for (let i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
	if (clickedOverlay != null) {
		clickedOverlay.setMap(null);
	}
	markers = [];
	del = true
}

// 카테고리를 클릭했을 때 호출되는 함수
let clickMenu = "";

function clickTest(e) {

	console.log(e.target.innerText.trim())
	if (e.target.innerText.trim() == clickMenu) {
		removeMarker()
		clickMenu = "";
	} else {
		removeMarker()
		if (ctOverlay) {
			ctOverlay.setMap(null);
		}

		if (e.target.innerText.trim() == '매물') {
			mapRS();
		}
		else if (e.target.innerText.trim() == '편의점') {
			mapCS();
		}
		else if (e.target.innerText.trim() == '대형마트') {
			mapSM();
		}
		else if (e.target.innerText.trim() == '병원') {
			mapHS();
		}
		else if (e.target.innerText.trim() == '약국') {
			mapPH();
		}
		else if (e.target.innerText.trim() == '경찰서') {
			mapPS();
		}
		else if (e.target.innerText.trim() == '소방서') {
			mapFS();
		}
		else if (e.target.innerText.trim() == '자치센터') {
			mapCC();
		}
		else if (e.target.innerText.trim() == '영화관') {
			mapCN();
		}
		else if (e.target.innerText.trim() == '박물관') {
			mapMS();
		}
		else if (e.target.innerText.trim() == '전시관') {
			mapEX();
		}
		else if (e.target.innerText.trim() == '도서관') {
			mapLB();
		}

		clickMenu = e.target.innerText.trim();
	}
}


function mapMaker(res, markerImage) {
	for (let i = 0; i < res.length; i++) {
		coords = new kakao.maps.LatLng(res[i].lat, res[i].lng)
		let marker = new kakao.maps.Marker({
			map: map,
			position: coords,
			image: markerImage // 마커이미지 설정 
		});

		marker.setMap(map); // 지도 위에 마커를 표출합
		markers.push(marker);  // 배열에 생성된 마커를 추가

		// del의 상태에 따라 마커가 표시된다. del을 false로 해두면 버튼을 다시 클릭했을 시 마커가 사라진다.
		del = false

		//return marker;
	}
}

function markerOverlay(res) {
	for (let i = 0; i < res.length; i++) {

		// 마우스 올렸을 때 정보 보여주기
		kakao.maps.event.addListener(markers[i], 'mouseover', function() {
			cnt = 1;
			// 커스텀 오버레이에 표시할 내용입니다     
			// HTML 문자열 또는 Dom Element
			if (colorN == 1) {
				content = '<div class="colorNo1"><span class="txt_name">' + res[i].nm + '</span></div>';
			}
			else if (colorN == 2) {
				content = '<div class="colorNo2"><span class="txt_name">' + res[i].nm + '</span></div>';
			}
			else if (colorN == 3) {
				content = '<div class="colorNo3"><span class="txt_name">' + res[i].nm + '</span></div>';
			}
			else if (colorN == 4) {
				content = '<div class="colorNo4"><span class="txt_name">' + res[i].nm + '</span></div>';
			}

			// 커스텀 오버레이가 표시될 위치 
			coords = new kakao.maps.LatLng(res[i].lat, res[i].lng);

			// 커스텀 오버레이를 생성
			customOverlay = new kakao.maps.CustomOverlay({
				position: coords,
				content: content,
				yAnchor: 2.0,
				xAnchor: 0.08
			});
			// 커스텀 오버레이를 지도에 표시
			//			if(isClick) {return;}
			markers[i].setImage(selectmarkerImage);
			customOverlay.setMap(map);

			//				if(ctOverlay != null){
			//					ctOverlay.setMap(null);
			//					markers[i].setImage(markerImage);
			//				}

			console.log("마우스오버")

		})


		// 커스텀 오버레이 닫기
		kakao.maps.event.addListener(markers[i], 'mouseout', function() {
			if (cnt == 1) {
				//				  	if(isClick) {return;}
				customOverlay.setMap(null);

				if (ctOverlay != null) {
					ctOverlay.setMap(null);
					markers[i].setImage(markerImage);
				}


				markers[i].setImage(markerImage);
				console.log("마우스아웃")
			}



		});

		kakao.maps.event.addListener(markers[i], 'click', function() {

			console.log(markers[i])
			console.log("3")


			if (markers[i].check == 1) {
				ctOverlay.setMap(null);
				test = 0;
				console.log("Test1")
				markers[num].setImage(markerImage);
				markers[i].check = 0
			}

			else {

				if (ctOverlay != null) {
					ctOverlay.setMap(null);
					markers[num].setImage(markerImage);
				}

				markers[i].check = 1
				console.log("Test2")
				customOverlay.setMap(map);
				ctOverlay = customOverlay

				markers[i].setImage(selectmarkerImage);
				console.log("i의마커이미지" + i)
				num = i
				cnt = 2;

			}


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

		});


	}
}


// 매물
function mapRS() {
	$.ajax({
		url: 'GJ_RSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log(res)

			// 마커 클러스터러를 생성합니다 
			var clusterer = new kakao.maps.MarkerClusterer({
				map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
				averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
				minLevel: 0, // 클러스터 할 최소 지도 레벨
				disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
				minClusterSize : 1,
				
			});

			// 마커들을 저장할 변수 생성(마커 클러스터러 관련)
			var clustererMarkers = [];

			for (var i = 0; i < res.length; i++) {
				// 지도에 마커를 생성하고 표시한다.
				// console.log(res[i].lat,res[i].lng)
				var marker = new kakao.maps.Marker({
					position: new kakao.maps.LatLng(res[i].lat, res[i].lng) // 마커의 좌표
					//map: map // 마커를 표시할 지도 객체
				});

				// 생성된 마커를 마커 저장하는 변수에 넣음(마커 클러스터러 관련)
				clustererMarkers.push(marker);

			}



			console.log(clustererMarkers.length)
			// 클러스터러에 마커들을 추가합니다(마커 클러스터러 관련)
			clusterer.addMarkers(clustererMarkers);



		},
		error: (e) => {
			console.log(e)
		}
	})


}

