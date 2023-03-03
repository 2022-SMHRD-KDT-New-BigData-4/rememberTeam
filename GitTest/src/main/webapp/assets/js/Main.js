// 카카오 맵 생성
var mapContainer = document.getElementById('MainMap');
var mapOptions = {
	center: new kakao.maps.LatLng(35.15507159179403, 126.8351730541552),
	level: 9,
	draggable: false, // 드래그 옵션 
	scrollwheel: false, // 마우스 휠 옵션
	disableDoubleClick: true, // 더블클릭 끄기 옵션
	disableDoubleClickZoom: true, // 더블클릭 줌 끄기 옵션
	$scale: false
};

var map = new kakao.maps.Map(mapContainer, mapOptions),
	customOverlay = new kakao.maps.CustomOverlay({}),
	infowindow = new kakao.maps.InfoWindow({ removable: true });


function gu_marker(imageSrc, lat, lng) {
	var imageSrc = imageSrc, // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(40, 50), // 마커이미지의 크기입니다
		imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

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


//광주 행정구역 구분 폴리곤 생성
$.getJSON("./assets/geojson/gj_gu_line.geojson", function(geojson) {

	var data = geojson.features;
	var coordinates = [];    //좌표 저장할 배열
	var name = '';            //행정 구 이름

	$.each(data, function(index, val) {

		coordinates = val.geometry.coordinates;
		name = val.properties.SIG_KOR_NM;
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
		strokeColor: '#43A047',
		strokeOpacity: 1,
		fillColor: '#fff',
		fillOpacity: 0.75
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
 		$("#dropdownMenuButton_infra").text(name);
        
        
        gu_name = {gu_name:name}
        $.ajax({
    		url : 'InfraCnt.do',
    		type : 'get',
    		data : gu_name,
    		dataType : 'json',
    		success : (res)=>{
    			$.each(res,(key, value)=>{
    				let tag_id = '#'+key+'_Cnt'
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
	kakao.maps.event.addListener(polygon, 'mousemove', function(mouseEvent) {
		customOverlay.setPosition(mouseEvent.latLng);
	});

	// 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
	// 커스텀 오버레이를 지도에서 제거합니다 
	kakao.maps.event.addListener(polygon, 'mouseout', function() {
		polygon.setOptions({
			fillColor: '#fff',
			fillOpacity: 0.5
		});
		customOverlay.setMap(null);

	});

	kakao.maps.event.addListener(polygon, 'click', function(mouseEvent) {
		let MainMapClick = { name: name }
		$.ajax({
			url: 'MainMapClick.do',
			type: 'get',
			data: MainMapClick,
			dataType: 'json',
			success: (res) => {
				location.href = "GoMap.do?cortarNo=" + res

			},
			error: () => {

			}
		})
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
		const step = now / 8;

		now -= step;
	}, 50);
}

// chart ajax 부분
function chartAjax(mon_jeon,year){
	let a = Chart.getChart('chart-line-cnt');
	let b = Chart.getChart('chart-line-avg');
	let c = Chart.getChart('chart-bar');
	if(a != null){
		a.destroy();
		b.destroy();
		c.destroy();
	}
	$('.spinner-border').show();
	$.ajax({
		url : 'MainChart.do',
		type : 'get',
		dataType : 'json',
		data : {"mon_jeon":mon_jeon,"year":year}, // false가 들어오면 전세
		success : (res)=>{
			// cnt 차트 함수 실행 부분
	   		var ctx1 = document.getElementById("chart-line-cnt").getContext("2d");
			var list1 = res.deal_cnt.mltCnt
	    	var list2 = res.deal_cnt.ofctCnt
	    	var list3 = res.deal_cnt.sglfamCnt
	 		chart_line(ctx1,list1,list2,list3)
			
			// avg 차트 함수 실행 부분
			var ctx2 = document.getElementById("chart-line-avg").getContext("2d");
			var list4 = res.deal_avg.mltAvg
	    	var list5 = res.deal_avg.ofctAvg
	    	var list6 = res.deal_avg.sglfamAvg
	 		chart_line(ctx2,list4,list5,list6)
			
			// ??? 차트 함수 실행 부분
			var ctx3 = document.getElementById("chart-bar").getContext("2d");
			var list7 = res.deal_gu_cnt
			var list8 = res.deal_gu_avg
			chart_bar(ctx3,list7,list8)
		},
		// chart 로딩 이미지
		beforeSend: function () {
              var width = 200;
              var height = 200;
              var left = 0;
              var top = 0;

				
				// 화면 중앙 좌표 계산
              top = ( $(window).height() - height ) / 2 + $(window).scrollTop(); 
              left = ( $(window).width() - width ) / 2 + $(window).scrollLeft();

 

              if($(".spinner-border").length != 0) {
                     $(".spinner-border").css({
                            "top": top+"px",
                            "left": left+"px"
                     });
                     $(".spinner-border").show();
              }
              else {
                     $('body').append('<div class="spinner-border text-success" role="status" style=" position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; margin:auto; padding:0; "><span class="visually-hidden">Loading...</span></div>');
                     
                     
              }

       },
        // 로딩 완료시 이미지 감춤
		complete: function(){
        $('.spinner-border').hide();
        
     	},
		error : ()=>{
			alert("Chart ajax 실패")
		}
	}) 
}

// 라인 차트 함수 
 	function chart_line(ctx,list1,list2,list3) {
		 
	// 차트 기본 폰트
	Chart.defaults.font.family = 'NEXONFootballGothic';
	// 차트 기본 글자 크기
	Chart.defaults.font.size = 11;
	// 차트 기본 글자 굵기
	Chart.defaults.font.weight = "bold";
	
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1월", "2월", "3월", "4월	", "5월", "6월", "7월", "8월", "9월","10월","11월","12월","1월"],
        datasets: [{
          label: "연립다세대", // 차트 이름
          lineTension : 0.5, // 0이면 꺾은선 그래프, 숫자가 높을수록 둥글해짐
          pointRadius: 5, // 점 반지름 0이면 없음
          backgroundColor: "rgb(255, 89, 94)", // 점 배경 색깔
          borderColor: "rgb(255, 89, 94)", // 선의 색깔
          fill: false, // 라인 그래프 밑의 배경을 채우는 옵션
          data: list1 // 데이터 리스트

        }, {
            label: '오피스텔',
            fill : false,      
            lineTension : 0.5,  
            pointRadius : 5,    
            backgroundColor: 'rgb(255, 202, 58)',
            borderColor: 'rgb(255, 202, 58)',
            data: list2
        }, {
            label: '단독다가구',
            type : 'line',       
            fill : false,         
            lineTension : 0.5,  
            pointRadius : 5,   
            backgroundColor: "rgb(25,130,196)",
            borderColor: "rgb(25,130,196)",
            data: list3
        }],
      },
      options: {
        responsive: true, // 반응형 차트
        maintainAspectRatio: false, // 반응형으로 크기가 재조정 될때 비율 유지
        plugins: {
          legend: {
            display: true,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: 'rgba(255, 255, 255, .3)'
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                lineHeight: 2
              },
            }
          },
        },
      },
    });
 }
 	
 	// 바 차트 함수
 	function chart_bar(ctx, list1, list2) {
		 
 	// 차트 기본 폰트
 	Chart.defaults.font.family = 'NEXONFootballGothic';
 	// 차트 기본 글자 크기
 	Chart.defaults.font.size = 11;
 	// 차트 기본 글자 굵기
	Chart.defaults.font.weight = "bold";
	
    new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["광산구", "동구", "서구", "남구", "북구"],
          datasets: [{
            label: "구별 1년 거래량",
            tension: 0.4,
            barThickness : 'flex',
            borderWidth: 1,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "rgb(106, 76, 147)",
            data: list1
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .3)'
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 500,
                beginAtZero: true,
                padding: 10,
                font: {
                  lineHeight: 2
                },
                color: "#fff"
              },
            },
            x: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .3)'
              },
              ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                  lineHeight: 2
                },
              }
            },
          },
        },
      });
 	}


 let mon_jeon = true;
 let year = 2023;
 
// 차트 전월세 토글 스위치
 	$(document).on("click","#mon",()=>{
 		mon_jeon = true;
 		chartAjax(mon_jeon,year)
 	})
 	
 	$(document).on("click","#jeon",()=>{
 		mon_jeon = false;
 		chartAjax(mon_jeon,year)
 	})

 
// 차트 연도 선택 select
$(".dropdown-year").click(function() {
	year = $(this).attr('for')
	$("#dropdownMenuButton_year").text(year);
	$("#dropdownMenuButton_year").removeClass("btn-outline-success")
	$("#dropdownMenuButton_year").addClass("btn-success")
	chartAjax(mon_jeon,year)
})
 	
// 문서 준비완료시 ajax들
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
	
	// 차트 ajax
	chartAjax(mon_jeon,year);
	
})


// 메인 지도  마커

let markers = [];
let isMarker = false;
let ex_id = "";
var clusterer = "";


	clusterer = new kakao.maps.MarkerClusterer({
      				map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        			averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        			minLevel: 9, // 클러스터 할 최소 지도 레벨
        			disableClickZoom : true  
        			});
     			
$(".borderClass").click(function() {
	let id = $(this).attr("id")
	if (ex_id != id) {
		markers = [];
		clear_marker();
		clusterer.clear();
	}
	let data_marker = { table: id };

	if (isMarker == false) {
		$.ajax({
			url: 'MainMarker.do',
			type: 'get',
			data: data_marker,
			dataType: 'json',
			success: (res) => {
			
				for (var i = 0; i < res.column.length; i++) {
					var lat = res.column[i].lat;
					var lng = res.column[i].lng;
					var markerPosition = new kakao.maps.LatLng(lat, lng);
					var marker = new kakao.maps.Marker({
						position: markerPosition
					});
					markers.push(marker);
				}
				clusterer.addMarkers(markers);
				console.log("222")
				ex_id = id;
				isMarker = true;
			},
			error: () => {
			}
		})
	} else {
		markers = [];
		clear_marker();
		clusterer.clear();
	}
})



function clear_marker() {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(null)
	}
	isMarker = false;
}



// 컬럼 바깥쪽 아무 영역이나 클릭하면 클러스터러를 지우기

$("body").not('.borderClass').click(() => {
	clusterer.clear();
})



// 컬럼 마우스호버 테두리 추가

$(".borderClass").hover(function() {
	let id = $(this).attr('id')
	let id_selector = "#" + id
	$(id_selector).addClass("border")
	$(id_selector).addClass("border-success")
}, function() {
	let id = $(this).attr('id')
	let id_selector = "#" + id
	$(id_selector).removeClass("border")
	$(id_selector).removeClass("border-success")
}
)

// 구, 동 선택 select
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
			if ($(".dropdown_dong") != null) {
				$(".dropdown_dong").remove()
			}
			for (let i = 0; i < res.gu.length; i++) {
				let dong_code = res.gu[i].cortarNo
				let dong_name = res.gu[i].dong
				let dong_option = $('<input type="radio" name="area" id=' + dong_code + ' class="dropdown-item btn-check"><label for="' + dong_code + '" class="dropdown_dong drop-btn ms-0 mb-0">' + dong_name + '</label>')
				$('#choice_dong').append(dong_option);
			}
			// 구 클릭후 동 불러오기 완료시 동버튼 활성화
			$("#dropdownMenuButton_dong").removeAttr("disabled");
		},
		error: () => {
		}

	})
})


$(document).on("click", ".dropdown_dong", function() {

	let cortarNo = $(this).attr("for")
	console.log(cortarNo)
	location.href = 'GoMap.do?cortarNo=' + cortarNo

})

// 오른쪽 인프라 컬럼 위 버튼
$(".dropdown_infra").click(function(){
	let nm = $(this).attr('for')
	gu_name = {gu_name : nm};
	$("#dropdownMenuButton_infra").text(nm);
	$("#dropdownMenuButton_infra").removeClass("btn-outline-success")
	$("#dropdownMenuButton_infra").addClass("btn-success")
	$.ajax({
		url: 'InfraCnt.do',
		type: 'get',
		data: gu_name,
		dataType: 'json',
		success: (res) => {
			$.each(res, (key, value) => {
				let tag_id = '#' + key + '_Cnt'
				const $counter = document.querySelector(tag_id);
				const max = value
				counter($counter, max);
			})
		},
		error: () => {
		}

	})
})







