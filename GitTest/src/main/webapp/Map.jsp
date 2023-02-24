<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- jQuery 사용 -->
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
<link rel="stylesheet" href="assets/css/Map.css">

</head>
<body>

	<div class="header">
        
    </div>
    <div class="wrap">
        <div class="aside1">
            <h1>리스트1</h1>
            <p>여기는 매물정보 리스트</p>
            <p>여기는 지도 화면과 함께 실행됨</p>
            <p>햄버거 모양의 메뉴를 누르면 닫힘</p>
        </div>
        <div class="aside2">
            <h1>리스트2</h1>
            <p>여기는 상세정보 화면</p>
            <p>여기는 리스트1에서 클릭했을 때만 활성화</p>
            <p>닫기 버튼을 누르면 닫힘</p>
        </div>
        <div id="map">
        	
        </div>
        <div class="nav">
            <div class="category">
            	<ul>
            		<li class="category_btn">
            			<button type="button">
		            		<i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
            				<br>
            				<span>매물</span>
            			</button>
            		</li>
            		
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-store fa-lg"></i>
		            		<br>
		            		<span>편의점</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
              	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-cart-shopping fa-lg"></i>
		            		<br>
		            		<span>대형마트</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
                <ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-hospital fa-lg"></i>
		            		<br>
		            		<span>병원</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
               	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-pills fa-lg"></i>
		            		<br>
		            		<span>약국</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-handcuffs fa-lg"></i>
		            		<br>
		            		<span>경찰서</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-fire-extinguisher fa-lg"></i>
		            		<br>
		            		<span>소방서</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-building fa-lg"></i>
		            		<br>
		            		<span>자치센터</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
             	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-ticket fa-lg"></i>
		            		<br>
		            		<span>영화관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
              	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-building-columns fa-lg"></i>
		            		<br>
		            		<span>박물관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-palette fa-lg"></i>
		            		<br>
		            		<span>전시관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn">
		            	<button type="button">
		            		<i class="fa-solid fa-book fa-lg"></i>
		            		<br>
		            		<span>도서관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
				<ul>
            		<li class="category_btn">
		            	<button type="button">
		  					<i class="fa-solid fa-chevron-down fa-lg"></i>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
				<ul>
            		<li class="category_btn">
		            	<button type="button">
		  					<i class="fa-solid fa-chevron-up fa-lg"></i>
		            	</button>
            		</li>
            	</ul>
            </div>

            

        </div>
    </div>
    
    
    
    
    
    
    
    <!-- Scripts -->
	
	<!-- icon 사용 -->
	<script src="https://kit.fontawesome.com/4a8c96245b.js" crossorigin="anonymous"></script>
	
	<!-- services와 clusterer, drawing 라이브러리 불러오기 -->
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services,clusterer,drawing"></script>
	
	<!-- 지도 가져오기 -->
	<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f4bb9f224f298dcd754083df04429703"></script>
	<script>
		// 1) 지도를 담을 영역을 가져오기
		let container = document.getElementById('map'); 
				
		// 2) 지도에 넣어줄 기본 옵션
		let options = {
		center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
		};
				
		// 3) 지도 생성
		let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
	</script>

</body>
</html>