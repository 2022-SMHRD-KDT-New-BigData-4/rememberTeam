

	// 카카오 맵 생성
var mapContainer = document.getElementById('map');
var mapOptions = {
	center: new kakao.maps.LatLng(35.15507159179403, 126.8351730541552),
	level: 8.5,
	draggable : false, // 드래그 옵션 
	scrollwheel : false, // 마우스 휠 옵션
	disableDoubleClick : true, // 더블클릭 끄기 옵션
	disableDoubleClickZoom : true // 더블클릭 줌 끄기 옵션
};

var map = new kakao.maps.Map(mapContainer, mapOptions),
	customOverlay = new kakao.maps.CustomOverlay({}),
    infowindow = new kakao.maps.InfoWindow({removable: true});


function gu_marker(imageSrc, lat, lng){
	var imageSrc = imageSrc, // 마커이미지의 주소입니다    
    	imageSize = new kakao.maps.Size(60, 69), // 마커이미지의 크기입니다
    	imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    	markerPosition = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
    	position: markerPosition, 
    	image: markerImage // 마커이미지 설정 
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
}

gu_marker('./assets/img/gs_marker.png', 35.13964747415601, 126.79364410635142);
gu_marker('./assets/img/dong_marker.png', 35.14567627086157, 126.92325339133296);
gu_marker('./assets/img/seo_marker.png', 35.15202881090633, 126.8901121635609);
gu_marker('./assets/img/nam_marker.png', 35.13290738235676, 126.90244876848048);
gu_marker('./assets/img/buk_marker.png', 35.1736650058521, 126.91159126881855);
gu_marker('./assets/img/gj_marker.png', 35.15907159179403, 126.8531730541552);


//광주 바깥쪽 폴리곤 생성
$.getJSON("./assets/json/gj_line.geojson", function(geojson) {
	 
   var data_out = geojson.features;
   var coordinates_out = []; 
   var name_out = ''; 

   $.each(data_out, function(index, val) {

       coordinates_out = val.geometry.coordinates;
       name_out = val.properties.CTP_KOR_NM;
       displayArea_out(coordinates_out, name_out); 
   })
})


var polygons_out=[];


function displayArea_out(coordinates_out, name_out) {
	var path_out = [
		new kakao.maps.LatLng(34.90,126.5),
		new kakao.maps.LatLng(34.90,127.2),
		new kakao.maps.LatLng(35.39,127.2),
		new kakao.maps.LatLng(35.39,126.5)
	]; 
   var hole = [];
   var points = [];
   
   $.each(coordinates_out[0][0], function(index, coordinates_out) {        //console.log(coordinates)를 확인해보면 보면 [0]번째에 배열이 주로 저장이 됨.  그래서 [0]번째 배열에서 꺼내줌.
       var point = new Object(); 
       point.x = coordinates_out[1];
       point.y = coordinates_out[0];
       points.push(point);
       hole.push(new kakao.maps.LatLng(coordinates_out[1], coordinates_out[0]));	//new kakao.maps.LatLng가 없으면 인식을 못해서 path 배열에 추가
   })

   var polygon_out = new kakao.maps.Polygon({
       map : map, 
       path : [path_out, hole],
       strokeWeight : 2,
       strokeColor : '#004c80',
       strokeOpacity : 0.8,
       fillColor : '#f8f9fa',
       fillOpacity : 1
   });
};


//광주 행정구역 구분 폴리곤 생성
$.getJSON("./assets/json/gj_gu_line.geojson", function(geojson) {
 
    var data = geojson.features;
    var coordinates = [];    //좌표 저장할 배열
    var name = '';            //행정 구 이름
 
    $.each(data, function(index, val) {
 
        coordinates = val.geometry.coordinates;
        name = val.properties.SIG_KOR_NM;
        displayArea(coordinates, name);
 
    })
})

var polygons=[];

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
        map : map, // 다각형을 표시할 지도 객체
        path : path,
        strokeWeight : 2,
        strokeColor : '#43A047',
        strokeOpacity : 0.2,
        fillColor : '#fff',
        fillOpacity : 1
    });
    
    
    // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다 
    // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
    kakao.maps.event.addListener(polygon, 'mouseover', function(mouseEvent) {
    	if (name === '광산구') {
    		polygon.setOptions({
                fillColor : '#ff595e',
               	fillOpacity : 0.5
            });
    	} else if (name === '북구') {
	        polygon.setOptions({
    	        fillColor : '#ffca3a',
        	   	fillOpacity : 0.5
        	});
    	} else if (name === '남구') {
	        polygon.setOptions({
    	        fillColor : '#8ac926',
        	   	fillOpacity : 0.5
        	});
    	} else if (name === '서구') {
	        polygon.setOptions({
    	        fillColor : '#1982c4',
        	   	fillOpacity : 0.5
        	});
    	} else if (name === '동구') {
	        polygon.setOptions({
    	        fillColor : '#6a4c93',
        	   	fillOpacity : 0.5
        	});
    	}
 
        //customOverlay.setContent('<div class="area">'+name+'</div>');

        customOverlay.setPosition(mouseEvent.latLng);
        customOverlay.setMap(map);
        
        gu_name = {gu_name:name}
        $.ajax({
    		url : 'InfraCnt.do',
    		type : 'get',
    		data : gu_name,
    		dataType : 'json',
    		success : (res)=>{
    			$.each(res,(key, value)=>{
    				$('#infra').text(name)
    				let tag_id = '#'+key+'_Cnt'
    				const $counter = document.querySelector(tag_id);
    				const max = value
    				counter($counter, max);
    			})
    		},
    		error : ()=>{
    		}
    		
    	})
    	$.ajax({
			url : 'RSCnt.do',
			type : 'get',
			data : gu_name,
			dataType : 'json',
			success : (res)=>{
				$.each(res,(key, value)=>{
					let tag_id = "#"+key+"_Cnt"
					const $counter = document.querySelector(tag_id);
					const max = value
					counter($counter, max);
			})
			},
			error : ()=>{
			}
		})
        
        
        
    });
 
    // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다 
    kakao.maps.event.addListener(polygon, 'mousemove', function (mouseEvent) {
        customOverlay.setPosition(mouseEvent.latLng);
	});
 
    // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
    // 커스텀 오버레이를 지도에서 제거합니다 
    kakao.maps.event.addListener(polygon, 'mouseout', function() {
        polygon.setOptions({
            fillColor : '#fff',
            fillOpacity : 1
        });
        customOverlay.setMap(null);
   
    });
    
    kakao.maps.event.addListener(polygon, 'click', function(mouseEvent) {
        var content = '<div class="info">' + 
                    '   <div class="title">' + name + '</div>' +
                    '   <div class="size">총 면적 : 약 ' + Math.floor(polygon.getArea()) + ' m<sup>2</sup></div>' +
                    '</div>';

        infowindow.setContent(content); 
        infowindow.setPosition(mouseEvent.latLng); 
        infowindow.setMap(map);
    });
 
}
 
 
 
 
 
 
 
 
 
 
  // 컬럼 숫자 애니메이션 카운트
  function counter($counter, max) {
			let now = max;

		  const handle = setInterval(() => {
		    $counter.innerHTML = Math.ceil(max - now);
		  
		    // 목표에 도달하면 정지
		    if (now < 1) {
		      clearInterval(handle);
		    }
		  
		    // 적용될 수치, 점점 줄어듬
		    const step = now / 4;

		    now -= step;
		  }, 50);
	}


$(document).ready(()=>{
	// 인프라 컬럼 테이블 튜플 카운트 ajax
	let gu_name = {gu_name : name}
	$.ajax({
		url : 'InfraCnt.do',
		type : 'get',
		data : 'gu_name',
		dataType : 'json',
		success : (res)=>{
			$.each(res,(key, value)=>{
				let tag_id = "#"+key+"_Cnt"
				const $counter = document.querySelector(tag_id);
				const max = value
				counter($counter, max);
			})
		},
		error : ()=>{
		}
	})
	
	// 매물 컬럼 테이블 튜플 카운트 ajax
	$.ajax({
		url : 'RSCnt.do',
		type : 'get',
		dataType : 'json',
		success : (res)=>{
			$.each(res,(key, value)=>{
				let tag_id = "#"+key+"_Cnt"
				const $counter = document.querySelector(tag_id);
				const max = value
				counter($counter, max);
			})
		},
		error : ()=>{
		}
	})
	
	
	
})









let isMarker = false;
let markers = [];

function Marker_ajax(data_marker) {
	if (isMarker == false) {
		$.ajax({
			url : 'MainMarker.do',
			type : 'get',
			data : data_marker,
			dataType : 'json',
			success : (res)=>{
				for (var i = 0; i<res.column.length; i++) {
					var lat = res.column[i].lat;
					var lng = res.column[i].lng;
					var markerPosition  = new kakao.maps.LatLng(lat, lng);
					var marker = new kakao.maps.Marker({
		    			position: markerPosition
					});
					markers.push(marker);
					marker.setMap(map);
				}
				isMarker = true;
			},
			error : ()=>{
			}
	})	
	} else {
		for (var i = 0; i<markers.length; i++){
			markers[i].setMap(null)
		}
		isMarker = false;
	}
}

$('#GJ_CC').click(function(){
	let data_marker = {table:"GJ_CC"};
	Marker_ajax(data_marker);		
});

$('#GJ_BUS').click(function(){
	let data_marker = {table:"GJ_BUS"};
	Marker_ajax(data_marker);		
});

$('#GJ_CN').click(function(){
	let data_marker = {table:"GJ_CN"};
	Marker_ajax(data_marker);		
});

$('#GJ_CS').click(function(){
	let data_marker = {table:"GJ_CS"};
	Marker_ajax(data_marker);		
});

$('#GJ_EX').click(function(){
	let data_marker = {table:"GJ_EX"};
	Marker_ajax(data_marker);		
});

$('#GJ_FS').click(function(){
	let data_marker = {table:"GJ_FS"};
	Marker_ajax(data_marker);		
});

$('#GJ_HS').click(function(){
	let data_marker = {table:"GJ_HS"};
	Marker_ajax(data_marker);		
});

$('#GJ_METRO').click(function(){
	let data_marker = {table:"GJ_METRO"};
	Marker_ajax(data_marker);		
});

$('#GJ_MS').click(function(){
	let data_marker = {table:"GJ_MS"};
	Marker_ajax(data_marker);		
});
	
$('#GJ_PH').click(function(){
	let data_marker = {table:"GJ_PH"};
	Marker_ajax(data_marker);		
});	

$('#GJ_MS').click(function(){
	let data_marker = {table:"GJ_CS"};
	Marker_ajax(data_marker);		
});

$('#GJ_PS').click(function(){
	let data_marker = {table:"GJ_PS"};
	Marker_ajax(data_marker);		
});

$('#GJ_SM').click(function(){
	let data_marker = {table:"GJ_SM"};
	Marker_ajax(data_marker);		
});

$('#GJ_LB').click(function(){
	let data_marker = {table:"GJ_LB"};
	Marker_ajax(data_marker);		
});

$('#GWANGJU_DONG').click(function(){
	let data_marker = {table:"GWANGJU_DONG"};
	Marker_ajax(data_marker);		
});
