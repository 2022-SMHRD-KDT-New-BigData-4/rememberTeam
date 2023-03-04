
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
let cortar = ""
let dong_code = 0;
let gu_code = 0;
let dong_num = 0;
let itemStrCheck = false;
let detailItemCheck = false;
let itemsClass = null;

for (const param of searchParams) {
	//console.log(param[1])
	cortarno = Number(param[1]);
	str = param[1].substr(-5, 5);
	//console.log(str);
	cortar = Number(str);
}

if (cortar > 0) {
	dong_code = { dong_code: cortarno }
	dong_num = cortarno
	// 동 검색에 따른 맵 센터 이동
	$.ajax({
		url: 'GWANGJU_DONGServer.do',
		data: dong_code,
		dataType: 'json',
		success: (res) => {
			//console.log(res)
			dong_lng = res[0].lng
			dong_lat = res[0].lat
			map.setCenter(new kakao.maps.LatLng(dong_lat, dong_lng));
			
			dongRS();

		},
		error: (e) => {
			console.log(e)
		}
	})
} else {
	gu_code = { gu_code: cortarno }
	//console.log(gu_code)
	// 동 검색에 따른 맵 센터 이동
	$.ajax({
		url: 'GWANGJU_GUServer.do',
		data: gu_code,
		dataType: 'json',
		success: (res) => {
			// console.log(res)
			gu_lng = res[0].lng
			gu_lat = res[0].lat
			map.setCenter(new kakao.maps.LatLng(gu_lat, gu_lng));

		},
		error: (e) => {
			console.log(e)
		}
	})

}

// 매물 함수 호출
mapRS()

// 구, 동 선택 select
// 구, 동 선택 select
let dong_coordinate = {};

$(".dropdown_gu").click(function() {
	let gu_name = { gu_name: $(this).attr('for') }
	$("#dropdownMenuButton_gu").text($(this).attr('for'));
	$("#dropdownMenuButton_gu").removeClass("btn-outline-success")
	$("#dropdownMenuButton_gu").addClass("btn-success")
	$.ajax({
		url: 'SearchDong.do',
		type: 'get',
		data: gu_name,
		dataType: 'json',
		success: (res) => {
			console.log(res)
			if ($(".dropdown_dong") != null) {
				$(".dropdown_dong").remove()
			}
			for (let i = 0; i < res.gu.length; i++) {
				dong_lat = res.gu[i].lat
				dong_lng = res.gu[i].lng
				dong_code = res.gu[i].cortarNo
				let dong_name = res.gu[i].dong
				let dong_cor = { lat: dong_lat, lng: dong_lng }
				dong_coordinate[dong_name] = dong_cor
				let dong_option = $('<input type="radio" name="area" id=' + dong_code + ' class="dropdown-item btn-check"><label for="' + dong_code + '" class="dropdown_dong drop-btn ms-0 mb-0">' + dong_name + '</label>')
				$('#choice_dong').append(dong_option);
			}
			$(".dropdown_dong").click(function() {
				let dong_nm = $(this).text()
				dong_num = Number($(this)[0].htmlFor)
				$("#dropdownMenuButton_dong").text($(this).text())
				$("#dropdownMenuButton_dong").removeClass("btn-outline-success")
				$("#dropdownMenuButton_dong").addClass("btn-success")
				map.setCenter(new kakao.maps.LatLng(dong_coordinate[dong_nm].lat, dong_coordinate[dong_nm].lng));
				// console.log(dong_num)
				/*if (itemStrCheck == true) {
					$(".items_div").remove();
					itemStrCheck = false;
					console.log("2222")
				}*/
				dongRS()
			})
			// 구 클릭후 동 불러오기 완료시 동버튼 활성화
			$("#dropdownMenuButton_dong").removeAttr("disabled");
		},
		error: () => {
		}

	})
})

// console.log(dong_num)

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
			fillOpacity: 0.3
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
let clusterer = "";
// let currCategory = null;
// let currCategory = document.getElementsByClassName(category_btn);

let cnt = 0;





// 전시관
function mapEX() {

	$.ajax({
		url: 'GJ_EXServer.do',
		dataType: 'json',
		success: (res) => {
			console.log("전시관 마커")

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
			console.log("편의점 마커")

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
			console.log("대형마트 마커")

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
			console.log("병원 마커")

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
			console.log("약국 마커")

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
			console.log("경찰서 마커")

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
			console.log("소방서 마커")

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
			console.log("영화관 마커")

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
			console.log("박물관 마커")

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
			console.log("도서관 마커")

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

	// console.log(e.target.innerText.trim())
	//e.target.innerText = e.target.innerText.replace(" ","")
	// console.log(e)
	// console.log(e.currentTarget.value)

	if (e.currentTarget.value == clickMenu) {
		removeMarker()
		if (e.currentTarget.value == clickMenu && clickMenu == '매물') {
			mapRS();
		}
		clickMenu = "";


		// -> 여기는 마커는 지워주고 색상은 변경함 (비활성화)
		if (e.currentTarget.value == '매물') {
			click_rs(e.currentTarget);
		}
		else if (e.currentTarget.value == '편의점') {
			click_cs(e.currentTarget);
		}
		else if (e.currentTarget.value == '대형마트') {
			click_sm(e.currentTarget);
		}
		else if (e.currentTarget.value == '병원') {
			click_hs(e.currentTarget);
		}
		else if (e.currentTarget.value == '약국') {
			click_ph(e.currentTarget);
		}
		else if (e.currentTarget.value == '경찰서') {
			click_ps(e.currentTarget);
		}
		else if (e.currentTarget.value == '소방서') {
			click_fs(e.currentTarget);
		}
		else if (e.currentTarget.value == '자치센터') {
			click_cc(e.currentTarget);
		}
		else if (e.currentTarget.value == '영화관') {
			click_cn(e.currentTarget);
		}
		else if (e.currentTarget.value == '박물관') {
			click_ms(e.currentTarget);
		}
		else if (e.currentTarget.value == '전시관') {
			click_ex(e.currentTarget);
		}
		else if (e.currentTarget.value == '도서관') {
			click_lb(e.currentTarget);
		}

		// -> 여기는 마커도 생성하고 색상도 변경함 (활성화)
	} else {
		console.log(e.currentTarget.value)
		removeMarker()
		if (ctOverlay) {
			ctOverlay.setMap(null);
		}

		if (e.currentTarget.value == '매물') {
			//mapRS();
			clusterer.clear();
			click_rs(e.currentTarget);
			rs_color_cnt = 0;
		}
		else if (e.currentTarget.value == '편의점') {
			mapCS();
			click_cs(e.currentTarget);
			cs_color_cnt = 1;
			// 다시 초기화
			rs_color_cnt = 0;	// -> 매물
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '대형마트') {
			mapSM();
			click_sm(e.currentTarget);
			sm_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물
			cs_color_cnt = 0; 	// -> 편의점
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '병원') {
			mapHS();
			click_hs(e.currentTarget);
			hs_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '약국') {
			mapPH();
			click_ph(e.currentTarget);
			ph_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '경찰서') {
			mapPS();
			click_ps(e.currentTarget);
			ps_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '소방서') {
			mapFS();
			click_fs(e.currentTarget);
			fs_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '자치센터') {
			mapCC();
			click_cc(e.currentTarget);
			cc_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '영화관') {
			mapCN();
			click_cn(e.currentTarget);
			cn_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물 
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '박물관') {
			mapMS();
			click_ms(e.currentTarget);
			ms_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물 
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ex_color_cnt = 0;	// -> 전시관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '전시관') {
			mapEX();
			click_ex(e.currentTarget);
			ex_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물 
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			lb_color_cnt = 0; 	// -> 도서관
		}
		else if (e.currentTarget.value == '도서관') {
			mapLB();
			click_lb(e.currentTarget);
			lb_color_cnt = 1;
			rs_color_cnt = 0;	// -> 매물 
			cs_color_cnt = 0; 	// -> 편의점
			sm_color_cnt = 0; 	// -> 대형마트
			hs_color_cnt = 0;	// -> 병원
			ph_color_cnt = 0;	// -> 약국
			ps_color_cnt = 0;	// -> 경찰서
			fs_color_cnt = 0;	// -> 소방서
			cc_color_cnt = 0;	// -> 자치센터
			cn_color_cnt = 0;	// -> 영화관
			ms_color_cnt = 0;	// -> 박물관
			ex_color_cnt = 0;	// -> 전시관
		}

		clickMenu = e.currentTarget.value;

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

			// console.log("마우스오버")

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
				// console.log("마우스아웃")
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


// let new_buttonTag = null;
// let aside2 = null;
// let new_divTag = null;
let id_check = 0;
// 배열 생성
let positions = new Array();
let item = new Array();
let mappingData = {};


// 매물
function mapRS() {
	$.ajax({
		url: 'GJ_RSServer.do',
		dataType: 'json',
		success: (res) => {
			console.log("매물")

			// 마커 클러스터러를 생성합니다 
			clusterer = new kakao.maps.MarkerClusterer({
				map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
				averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
				minLevel: 0, // 클러스터 할 최소 지도 레벨
				disableClickZoom: true, // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
				minClusterSize: 1,
				gridSize: 100,
				styles: [{
					minWidth: '30px',
					height: '30px',
					padding: '0px 6px',
					color: 'rgb(122,122,122)',
					fontSize: '15px',
					lineHeight: '26px',
					textAlign: 'center',
					border: '2px solid rgb(122,122,122)',
					borderRadius: '30px',
					backgroundColor: 'rgba(255, 255, 255, 0.8)',
					whiteSpace: 'nowrap',
					position: 'relative',
					zIndex: '2'
				}]

			});

			// 마커들을 저장할 변수 생성(마커 클러스터러 관련)
			var clustererMarkers = [];

			// var points = new Array();
			// console.log(res[0])
			for (var data of res) {
				positions.push({
					addr: data.addr,
					aircon: data.aircon,
					bath: data.bath,
					cortarno: data.cortarno,
					cost_incs: data.cost_incs,
					cr: data.cr,
					ct_area: data.ct_area,
					dr: data.dr,
					estate: data.estate,
					ex_area: data.ex_area,
					fl: data.fl,
					img: data.img,
					keyword: data.keyword,
					latlng: new kakao.maps.LatLng(data.lat, data.lng),
					m_cost: data.m_cost,
					md: data.md,
					ml_yn: data.ml_yn,
					nh: data.nh,
					nm: data.nm,
					num: data.num,
					pr: data.pr,
					option: data.option,
					park_yn: data.park_yn,
					room: data.room,
					search_type: data.search_type,
					security: data.security,
					sp: data.sp,
					tp: data.tp,
					type: data.type
				});

				// points.push(new kakao.maps.LatLng(data.lat, data.lng));

			}

			// console.log(positions[0].latlng)
			for (var i = 0; i < res.length; i++) {
				// 지도에 마커를 생성하고 표시한다.
				// console.log(res[i].lat,res[i].lng)

				var marker = new kakao.maps.Marker({
					position: positions[i].latlng, // positions에 저장된 위경도 가져오기
					//map: map // 마커를 표시할 지도 객체
					title: positions[i].num
				});
				let pos = positions[i]
				// 해당 마커에 대한 정보 뽑아오기위한 매핑
				mappingData[positions[i].num] = { marker, pos };

				// 생성된 마커를 마커 저장하는 변수에 넣음(마커 클러스터러 관련)
				clustererMarkers.push(marker);

			}
			// console.log(positions[0].latlng)
			// console.log(mappingData[3208].marker);
			// console.log()
			console.log(positions)

			// console.log(clustererMarkers.length)
			// 클러스터러에 마커들을 추가합니다(마커 클러스터러 관련)
			clusterer.addMarkers(clustererMarkers);

			let bf_overlay = ""

			/////////여기 함수
			dongRS()



			kakao.maps.event.addListener(clusterer, 'clusterclick', function(cluster) {

				// console.log("클러스터러 클릭!!")

				// 클러스터러 커스텀 오버레이를 가져옵니다.
				const overlay = cluster.getClusterMarker().getContent();

				// 이전 클릭한 클러스터러 초기화
				if (bf_overlay) {
					bf_overlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
					bf_overlay.style.color = "rgb(122, 122, 122)"
				}

				// 클러스터러 스타일 출력
				// console.log(overlay.style);

				// 클릭한 클러스터러 스타일 적용
				overlay.style.backgroundColor = "rgba(122, 122, 122, 0.8)"
				overlay.style.color = "rgb(255, 255, 255)"

				bf_overlay = overlay

				// console.log(positions)
				// 클러스터에 포함된 마커들을 배열로 반환
				//console.log(cluster.getMarkers());
				//console.log(cluster.getMarkers().length);

				// 다른 버튼 클릭하면 이전 매물 정보는 삭제
				if (itemStrCheck == true) {
					$('#itemsClass').empty();
					itemStrCheck = false;
					//console.log("1111")
				}

				for (let i = 0; i < cluster.getMarkers().length; i++) {

					let rsNum = Number(cluster.getMarkers()[i].Gb)
					// console.log(Number(cluster.getMarkers()[i].Gb));
					//console.log(mappingData[rsNum].pos);
					let mappos = mappingData[rsNum].pos
					//console.log(mappos)

					itemsClass = document.getElementById('itemsClass');
					new_div1Tag = document.createElement('div');
					detailClass = document.getElementById('detailClass');
					new_div2Tag = document.createElement('div');

					// 사이드바 메뉴
					itemStr = '<div class="items" id="' + mappos.num + '">'
						+ '<a href="javascript:void(0);" role="button">'
						+ '<h2 class="title">' + mappos.nm + '</h2>'
						+ '<h3 class="price">' + mappos.pr + '</h3>'
						+ '<span class="text">'
						+ '<strong>' + mappos.type + ' ' + '</strong>'
						+ mappos.dr + '</span>'
						+ '<p class="line">'
						+ '<span>' + mappos.ct_area + '㎡/' + '</span>' + '<span>' + mappos.ex_area + '㎡</span>'
						+ '</p>'
						+ '<p class="line">' + mappos.md + '</p>'
						+ '<p class="line">' + mappos.keyword + '</p>'
						+ '</a>'
						+ '</div>'


					new_div1Tag.setAttribute('class', 'items_div');
					new_div1Tag.innerHTML = itemStr;

					itemsClass.appendChild(new_div1Tag);


				}

				itemStrCheck = true;

				// 클러스터러 클릭시 사이드바 활성화
				$("#menu_button").css("display", "none")
				$("#menu_close_button").css("display", "block")
				$(".aside1").css("display", "block")

				// 상세설명창은 닫기
				$(".aside2").css("display", "none")



				$('.items').click(function() {
					id_check = Number($(this).attr("id"));
					//console.log(id_check)
					//console.log(mappingData[id_check].pos)

					if (detailItemCheck == true) {
						$('#detailClass').empty();
						detailItemCheck = false;
					}

					let mappos1 = mappingData[id_check].pos
					// 사이드바 상세 메뉴
					detailItem = '<div class = "hide">'
						+ '<div>'
						+ '<button type="button" class="close_btn">'
						+ '<i class="fa-solid fa-xmark fa-2x"></i>'
						+ '</button>'
						+ '</div>'
						+ '<img src="' + mappos1.img + '">'
						+ '<div>'
						+ '<table id="detail_table">'
						+ '<tr>'
						+ '<td colspan="4">'
						+ '<h2>' + mappos1.nm + '</h2>'
						+ '<p>' + mappos1.pr + '</p>'
						+ '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 소재지</th>'
						+ '<td colspan="3"> ' + mappos1.addr + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 매물 타입</th>'
						+ '<td> ' + mappos1.type + '</td>'
						+ '<th> 계약 형태</th>'
						+ '<td> ' + mappos1.cr + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 월 관리비</th>'
						+ '<td> ' + mappos1.m_cost + '(원)</td>'
						+ '<th> 관리비 포함 항목</th>'
						+ '<td> ' + mappos1.cost_incs + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 입주 가능일</th>'
						+ '<td> ' + mappos1.md + '</td>'
						+ '<th> 방향</th>'
						+ '<td> ' + mappos1.dr + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 공급 면적</th>'
						+ '<td> ' + mappos1.ct_area + '㎡</td>'
						+ '<th> 전용 면적</th>'
						+ '<td> ' + mappos1.ex_area + '㎡</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 해당층/총층</th>'
						+ '<td> ' + mappos1.fl + '</td>'
						+ '<th> 총 세대수</th>'
						+ '<td> ' + mappos1.nh + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 주차 가능 여부</th>'
					if (mappos1.park_yn == 'Y') {
						detailItem += '<td> 가능</td>'
					} else if (mappos1.park_yn == 'N') {
						detailItem += '<td> 불가능</td>'
					}
					detailItem += '<th> 총 주차 대수</th>'
						+ '<td> ' + mappos1.tp + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 방 수</th>'
						+ '<td> ' + mappos1.room + '</td>'
						+ '<th> 욕실 수</th>'
						+ '<td> ' + mappos1.bath + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 보안시설</th>'
						+ '<td> ' + mappos1.security + '</td>'
						+ '<th> 에어컨 여부</th>'
						+ '<td> ' + mappos1.aircon + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 옵션</th>'
						+ '<td colspan="3"> ' + mappos1.option + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 매물 특징</th>'
						+ '<td colspan="3"> ' + mappos1.sp + '</td>'
						+ '</tr>'
						+ '<tr>'
						+ '<th> 공인중개사</th>'
						+ '<td colspan="3"> ' + mappos1.estate + '</td>'
						+ '</tr>'
						+ '</table>'
						+ '</div>'
						+ '</div>'

					new_div2Tag.setAttribute('class', 'items_class');
					new_div2Tag.innerHTML = detailItem;

					detailClass.appendChild(new_div2Tag)

					detailItemCheck = true;

				});



			});




		},
		beforeSend: function() {
			var width = 200;
			var height = 200;
			var left = 0;
			var top = 0;


			// 화면 중앙 좌표 계산
			top = ($(window).height() - height) / 2 + $(window).scrollTop();
			left = ($(window).width() - width) / 2 + $(window).scrollLeft();



			if ($(".spinner-border").length != 0) {
				$(".spinner-border").css({
					"top": top + "px",
					"left": left + "px"
				});
				$(".spinner-border").show();
			}
			else {
				$('body').append('<div class="spinner-border text-success" role="status" style=" position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; margin:auto; padding:0; "><span class="visually-hidden"></span></div>');


			}

		},
		complete: function() {
			$('.spinner-border').hide();

		},
		error: (e) => {
			console.log(e)
		}
	})

}

function search(num) {
	var obj = mappingData[num];
	console.log(obj); // marker, 매물 정보를 가져올 수 있습니다.
}


// 동 이동에 따른 매물 리스트 보여주기
function dongRS() {

	let dong_corN = 0;
	let i_num = [];

	for (let i = 0; i < positions.length; i++) {
		if (dong_num == positions[i].cortarno) {
			dong_corN++;
			i_num.push(i);
		}
	}

	if (itemStrCheck == true) {
		$("#itemsClass").empty();
		itemStrCheck = false;
		console.log("3333")
	}

	for (let i = 0; i < i_num.length; i++) {

		let rsNum = Number(positions[i_num[i]].num)
		let mappos = mappingData[rsNum].pos


		itemsClass = document.getElementById('itemsClass');
		new_div1Tag = document.createElement('div');
		detailClass = document.getElementById('detailClass');
		new_div2Tag = document.createElement('div');

		// 사이드바 메뉴
		itemStr = '<div class="items" id="' + mappos.num + '">'
			+ '<a href="javascript:void(0);" role="button">'
			+ '<h2 class="title">' + mappos.nm + '</h2>'
			+ '<h3 class="price">' + mappos.pr + '</h3>'
			+ '<span class="text">'
			+ '<strong>' + mappos.type + ' ' + '</strong>'
			+ mappos.dr + '</span>'
			+ '<p class="line">'
			+ '<span>' + mappos.ct_area + '㎡/' + '</span>' + '<span>' + mappos.ex_area + '㎡</span>'
			+ '</p>'
			+ '<p class="line">' + mappos.md + '</p>'
			+ '<p class="line">' + mappos.keyword + '</p>'
			+ '</a>'
			+ '</div>'


		new_div1Tag.setAttribute('class', 'items_div');
		new_div1Tag.innerHTML = itemStr;

		itemsClass.appendChild(new_div1Tag);


	}

	itemStrCheck = true;

	// 클러스터러 클릭시 사이드바 활성화
	$("#menu_button").css("display", "none")
	$("#menu_close_button").css("display", "block")
	$(".aside1").css("display", "block")

	// 상세설명창은 닫기
	$(".aside2").css("display", "none")



	$('.items').click(function() {
		id_check = Number($(this).attr("id"));
		//console.log(id_check)
		//console.log(mappingData[id_check].pos)

		if (detailItemCheck == true) {
			$('#detailClass').empty();
			detailItemCheck = false;
		}

		let mappos1 = mappingData[id_check].pos
		// 사이드바 상세 메뉴
		detailItem = '<div class = "hide">'
			+ '<div>'
			+ '<button type="button" class="close_btn">'
			+ '<i class="fa-solid fa-xmark fa-2x"></i>'
			+ '</button>'
			+ '</div>'
			+ '<img src="' + mappos1.img + '">'
			+ '<div>'
			+ '<table id="detail_table">'
			+ '<tr>'
			+ '<td colspan="4">'
			+ '<h2>' + mappos1.nm + '</h2>'
			+ '<p>' + mappos1.pr + '</p>'
			+ '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 소재지</th>'
			+ '<td colspan="3"> ' + mappos1.addr + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 매물 타입</th>'
			+ '<td> ' + mappos1.type + '</td>'
			+ '<th> 계약 형태</th>'
			+ '<td> ' + mappos1.cr + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 월 관리비 (원)</th>'
			+ '<td> ' + mappos1.m_cost + '</td>'
			+ '<th> 관리비 포함 항목</th>'
			+ '<td> ' + mappos1.cost_incs + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 입주 가능일</th>'
			+ '<td> ' + mappos1.md + '</td>'
			+ '<th> 방향</th>'
			+ '<td> ' + mappos1.dr + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 공급 면적 (㎡)</th>'
			+ '<td> ' + mappos1.ct_area + '</td>'
			+ '<th> 전용 면적 (㎡)</th>'
			+ '<td> ' + mappos1.ex_area + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 해당층/총층</th>'
			+ '<td> ' + mappos1.fl + '</td>'
			+ '<th> 총 세대수</th>'
			+ '<td> ' + mappos1.nh + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 주차 가능 여부</th>'
		if (mappos1.park_yn == 'Y') {
			detailItem += '<td> 가능</td>'
		} else if (mappos1.park_yn == 'N') {
			detailItem += '<td> 불가능</td>'
		}
		detailItem += '<th> 총 주차 대수</th>'
			+ '<td> ' + mappos1.tp + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 방 수</th>'
			+ '<td> ' + mappos1.room + '</td>'
			+ '<th> 욕실 수</th>'
			+ '<td> ' + mappos1.bath + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 보안시설</th>'
			+ '<td> ' + mappos1.security + '</td>'
			+ '<th> 에어컨 여부</th>'
			+ '<td> ' + mappos1.aircon + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 옵션</th>'
			+ '<td colspan="3"> ' + mappos1.option + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 매물 특징</th>'
			+ '<td colspan="3"> ' + mappos1.sp + '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<th> 공인중개사</th>'
			+ '<td colspan="3"> ' + mappos1.estate + '</td>'
			+ '</tr>'
			+ '</table>'
			+ '</div>'
			+ '</div>'

		new_div2Tag.setAttribute('class', 'items_class');
		new_div2Tag.innerHTML = detailItem;

		detailClass.appendChild(new_div2Tag)

		detailItemCheck = true;

	});


}
