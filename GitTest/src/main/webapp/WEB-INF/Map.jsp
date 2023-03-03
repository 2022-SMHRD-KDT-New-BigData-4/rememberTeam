<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- css 파일 불러오기 -->
<link rel="stylesheet" href="assets/css/Map.css">
<link id="pagestyle" href="./assets/css/material-dashboard.css?v=3.0.4"
	rel="stylesheet" />

</head>
<body>

	<!-- 상단바 -->
	<div class="header">
        <div class="menu_btn">
        	<button type="button" id="menu_button" style="display: none">
        		<i class="fa-solid fa-bars fa-4x"></i>
        	</button>
        	<button type="button" id="menu_close_button">
        		<i class="fa-solid fa-bars fa-4x"></i>
        	</button>
        </div>
        <div class="logo" onClick="location.href='GoMain.do'">
        	<div>일</div>
        	<div>인</div>
        	<div>일</div>
        	<div>집</div>
        </div>
        <div class="search">
			<!-- dropdown 시작 -->
					<div class="dropdown-center">
						 <button class="btn btn-outline-success btn:hover dropdown-toggle me-3" type="button" id="dropdownMenuButton_gu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">구 검색</button>
						 <div id = "choice_gu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						 	<input type="radio" name="area" id="광산구" class="dropdown-item btn-check">
						 	<label for="광산구" class="dropdown_gu drop-btn ms-0 mb-0">광산구</label>	
						 	<input type="radio" name="area" id="동구" class="dropdown-item btn-check">
						 	<label for="동구" class="dropdown_gu drop-btn ms-0 mb-0">동구</label>	
						 	<input type="radio" name="area" id="서구" class="dropdown-item btn-check">
						 	<label for="서구" class="dropdown_gu drop-btn ms-0 mb-0">서구</label>	
						 	<input type="radio" name="area" id="남구" class="dropdown-item btn-check">
						 	<label for="남구" class="dropdown_gu drop-btn ms-0 mb-0">남구</label>	
						 	<input type="radio" name="area" id="북구" class="dropdown-item btn-check">
						 	<label for="북구" class="dropdown_gu drop-btn ms-0 mb-0">북구</label>
						 </div>
						</div>
						
					<div class="dropdown-center">
						 <button disabled class="btn btn-outline-success btn:hover dropdown-toggle" type="button" id="dropdownMenuButton_dong" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    동 검색
						 </button>
						  <div id = "choice_dong" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						 		  		
						  </div>
					</div> 
					<!-- dropdown 끝 -->
        </div>
    </div>
    
    
    <div class="wrap">
    	
    	<div class="aside-wrap">
    		<!-- 매물 리스트 -->
        	<div id = "itemsClass" class="aside1">
       		</div>
        
        	<!-- 매물 상세화면 -->
        	<div id = "detailClass" class="aside2" >
        	</div>
    	</div>
    
    	
        
        
        <!-- 지도 화면 -->
        <div id="map">
        	
        </div>
        
        
        <!-- 카테고리 -->
        <div class="category_line">
            <div class="category">
            	<ul>
            		<li class="category_btn" data-order="0">
            			<button type="button" id="rs_btn" value="매물" class="ctg">
		            		<i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
            				<br>
            				<span class="menu">매물</span>
            			</button>
            		</li>
            		
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn" data-order="1">
		            	<button type="button" id="cs_btn" style="display: none" value="편의점" class="ctg">
		            		<i class="fa-solid fa-store fa-lg"></i>
		            		<br>
		            		<span class="menu">편의점</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
              	<ul>
            		<li class="category_btn" data-order="2">
		            	<button type="button" id="sm_btn" style="display: none" value="대형마트" class="ctg">
		            		<i class="fa-solid fa-cart-shopping fa-lg"></i>
		            		<br>
		            		<span class="menu">대형마트</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
                <ul>
            		<li class="category_btn" data-order="3">
		            	<button type="button" id="hs_btn" style="display: none" value="병원" class="ctg">
		            		<i class="fa-solid fa-hospital fa-lg"></i>
		            		<br>
		            		<span class="menu">병원</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
               	<ul>
            		<li class="category_btn" data-order="4">
		            	<button type="button" id="ph_btn" style="display: none" value="약국" class="ctg">
		            		<i class="fa-solid fa-pills fa-lg"></i>
		            		<br>
		            		<span class="menu">약국</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn" data-order="5">
		            	<button type="button" id="ps_btn" style="display: none" value="경찰서" class="ctg">
		            		<i class="fa-solid fa-handcuffs fa-lg"></i>
		            		<br>
		            		<span class="menu">경찰서</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn" data-order="6">
		            	<button type="button" id="fs_btn" style="display: none" value="소방서" class="ctg">
		            		<i class="fa-solid fa-fire-extinguisher fa-lg"></i>
		            		<br>
		            		<span class="menu">소방서</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn" data-order="7">
		            	<button type="button" id="cc_btn" style="display: none" value="자치센터" class="ctg">
		            		<i class="fa-solid fa-building fa-lg"></i>
		            		<br>
		            		<span class="menu">자치센터</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
             	<ul>
            		<li class="category_btn" data-order="8">
		            	<button type="button" id="cn_btn" style="display: none" value="영화관" class="ctg">
		            		<i class="fa-solid fa-ticket fa-lg"></i>
		            		<br>
		            		<span class="menu">영화관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
              	<ul>
            		<li class="category_btn" data-order="9">
		            	<button type="button" id="ms_btn" style="display: none" value="박물관" class="ctg">
		            		<i class="fa-solid fa-building-columns fa-lg"></i>
		            		<br>
		            		<span class="menu">박물관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn" data-order="10">
		            	<button type="button" id="ex_btn" style="display: none" value="전시관" class="ctg">
		            		<i class="fa-solid fa-palette fa-lg"></i>
		            		<br>
		            		<span class="menu">전시관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
            	<ul>
            		<li class="category_btn" data-order="11">
		            	<button type="button" id="lb_btn" style="display: none" value="도서관" class="ctg">
		            		<i class="fa-solid fa-book fa-lg"></i>
		            		<br>
		            		<span class="menu">도서관</span>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
				<ul>
            		<li class="category_btn">
		            	<button type="button" id="down_btn">
		  					<i class="fa-solid fa-chevron-down fa-lg"></i>
		            	</button>
            		</li>
            	</ul>
            </div>
            <div class="category">
				<ul>
            		<li class="category_btn">
		            	<button type="button" id="up_btn" style="display: none">
		  					<i class="fa-solid fa-chevron-up fa-lg"></i>
		            	</button>
            		</li>
            	</ul>
            </div>

            

        </div>
    </div>
    
    
    
    
    
    
    
    <!-- ***** Scripts ***** -->
    
	<!-- jQuery 사용 -->
	<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>

	<!-- js 파일 불러오기 -->
	<script src="assets/js/mapStyle.js"></script>
	
	
	<!-- icon 사용 -->
	<script src="https://kit.fontawesome.com/4a8c96245b.js" crossorigin="anonymous"></script>
	
	<!-- services와 clusterer, drawing 라이브러리 불러오기 -->
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=311c2d3dcf5815fdf2481d7ae57fc8cb&libraries=services,clusterer,drawing"></script>
	
	<!-- 파일을 따로 분리했기때문에 임폴트 작업 필요 -->
	<script src="assets/js/kakaoMap.js"></script>
	
	
	<script src="./assets/js/core/popper.min.js"></script>
	<script src="./assets/js/core/bootstrap.min.js"></script>
	
		
	<script>
	
	
	$('#rs_btn').on('click', clickTest);
	$('#cs_btn').on('click', clickTest);
	$('#sm_btn').on('click', clickTest);
	$('#hs_btn').on('click', clickTest);
	$('#ph_btn').on('click', clickTest);
	$('#ps_btn').on('click', clickTest);
	$('#fs_btn').on('click', clickTest);
	$('#cc_btn').on('click', clickTest);
	$('#cn_btn').on('click', clickTest);
	$('#ms_btn').on('click', clickTest);
	$('#ex_btn').on('click', clickTest);
	$('#lb_btn').on('click', clickTest);
	
	
	// $('#lb_btn').on('click', clickTest); -> 호버에 대한 기능을 따로 추가


	</script>
	
	
	

</body>
</html>