<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html lang="en">
<head>

<!-- jQuery CDN -->
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
<!-- chart.js -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>



<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="apple-touch-icon" sizes="76x76"
	href="./assets/img/apple-icon.png">
<link rel="icon" type="image/png" href="./assets/img/favicon.png">

<title>LET ME GO HOME.. PLZ... </title>



<!--     Fonts and icons     -->
<link rel="stylesheet" type="text/css"
	href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

<!-- Nucleo Icons -->
<link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
<link href="./assets/css/nucleo-svg.css" rel="stylesheet" />

<!-- Font Awesome Icons -->
<script src="https://kit.fontawesome.com/42d5adcbca.js"
	crossorigin="anonymous"></script>

<!-- Material Icons -->
<link
	href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
	rel="stylesheet">

<!-- CSS Files -->
<link id="pagestyle" href="./assets/css/material-dashboard.css?v=3.0.4"
	rel="stylesheet" />

<!-- icon 사용 -->
	<script src="https://kit.fontawesome.com/4a8c96245b.js" crossorigin="anonymous"></script>



</head>


<body class="g-sidenav-show  bg-gray-100">


	<main class="main-content border-radius-lg ">
		
		
		<!-- Navbar -->


		<nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
			<div class="container-fluid py-1 px-3">
				<nav aria-label="breadcrumb">
					<ol	class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
						<li class="breadcrumb-item text-sm">
							<a class="opacity-5 text-dark" href="javascript:;">Pages</a>
						</li>
						<li class="breadcrumb-item text-sm text-dark active"
							aria-current="page">index</li>
					</ol>
					<h6 class="font-weight-bolder mb-0">index</h6>

				</nav>
				<div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
					<div class="ms-md-auto pe-md-3 d-flex align-items-center">
						<div class="input-group input-group-outline">
							<label class="form-label">Type here...</label> 
							<input type="text" class="form-control">
						</div>
					</div>
					<ul class="navbar-nav  justify-content-end">
						<li class="nav-item d-flex align-items-center">
							<a class="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href="https://www.creative-tim.com/builder/material?ref=navbar-dashboard">Online Builder</a>
						</li>
						<li class="nav-item d-flex align-items-center">
							<a href="./pages/sign-in.html" class="nav-link text-body font-weight-bold px-0"> 
								<i class="fa fa-user me-sm-1"></i> 
								<span class="d-sm-inline d-none">Sign In</span>
							</a>
						</li>
						<li class="nav-item d-xl-none ps-3 d-flex align-items-center">
							<a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
								<div class="sidenav-toggler-inner">
									<i class="sidenav-toggler-line"></i> 
									<i class="sidenav-toggler-line"></i> 
									<i class="sidenav-toggler-line"></i>
								</div>
							</a>
						</li>
						<li class="nav-item px-3 d-flex align-items-center">
							<a href="javascript:;" class="nav-link text-body p-0">
							<i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
							</a>
						</li>
						<li class="nav-item dropdown pe-2 d-flex align-items-center">
							<a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
							<i class="fa fa-bell cursor-pointer"></i>
							</a>
							<ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
								<li class="mb-2">
									<a class="dropdown-item border-radius-md" href="javascript:;">
										<div class="d-flex py-1">
											<div class="my-auto">
												<img src="./assets/img/team-2.jpg" class="avatar avatar-sm  me-3 ">
											</div>
											<div class="d-flex flex-column justify-content-center">
												<h6 class="text-sm font-weight-normal mb-1">
													<span class="font-weight-bold">New message</span> from Laur
												</h6>
												<p class="text-xs text-secondary mb-0">
													<i class="fa fa-clock me-1"></i> 13 minutes ago
												</p>
											</div>
										</div>
									</a>
								</li>
								<li class="mb-2">
									<a class="dropdown-item border-radius-md" href="javascript:;">
										<div class="d-flex py-1">
											<div class="my-auto">
												<img src="./assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 ">
											</div>
											<div class="d-flex flex-column justify-content-center">
												<h6 class="text-sm font-weight-normal mb-1">
													<span class="font-weight-bold">New album</span> by Travis Scott
												</h6>
												<p class="text-xs text-secondary mb-0">
													<i class="fa fa-clock me-1"></i> 1 day
												</p>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a class="dropdown-item border-radius-md" href="javascript:;">
										<div class="d-flex py-1">
											<div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
												<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
													<title>credit-card</title> 
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
													<g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
													<g transform="translate(1716.000000, 291.000000)">
													<g transform="translate(453.000000, 454.000000)">
													<path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
													<path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path> </g> </g> </g> </g> </svg>
											</div>
											<div class="d-flex flex-column justify-content-center">
												<h6 class="text-sm font-weight-normal mb-1">Payment
													successfully completed</h6>
												<p class="text-xs text-secondary mb-0">
													<i class="fa fa-clock me-1"></i> 2 days
												</p>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<!-- End Navbar -->



		<div class="container-fluid py-4">
		
			<div class="div_flex">
			<div style="padding-left : 17%">
			<input type="radio" class="btn-check" name="options" id="mon" autocomplete="off" checked>
					<label class="btn btn-outline-success btn-sm mb-1 ms-5" for="mon">월세</label>

					<input type="radio" class="btn-check" name="options" id="jeon" autocomplete="off">
					<label class="btn btn-outline-success btn-sm mb-1" for="jeon">전세</label>
			</div>
				<h6 id="infra" class="text-end me-xl-4" style="padding-right : 1.7%">광주광역시</h6>
			</div>
			
			   
			<div class="row gx-0">
			
<!-- 왼쪽 매물 컬럼&그래프 레이아웃 -->

				<div class="col-lg-3 z-index-2">
					<!-- <div class="row mt-3">
					
						<div class="col-lg-5 col-sm-5">
							<div class="card  mb-2">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">전세매물</p>
										<h4 id="jeonse_Cnt" class="mb-0">0</h4>
									</div>
								</div>
								
								<hr class="dark horizontal my-0">
								
							</div>
						</div>
						
						<div class="col-lg-5 col-sm-5 mt-sm-0 mt-4">
							<div class="card  mb-2">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-light shadow-success text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize ">월세매물</p>
										<h4 id="monthly_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="horizontal my-0 dark">

							</div>


						</div>
					</div> -->
											<!-- 차트 부분 -->
					
					<div class="card-body p-2">
					
					<div class="card  mb-2">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
									</div>
									<div class="text-end pt-1">
									<h6>월별 실거래 수량</h6>
									<div class="chart bg-gradient-success">
							<canvas id="chart-line-cnt" class="chart-canvas" height="200px" width="200px" style="display: block; box-sizing: border-box; height: 170px; width: 200px;"></canvas>
						</div>
									</div>
								</div>

								<hr class="horizontal my-0 dark">

							</div>
					
					</div>
					<div class="card-body p-2">
					<div class="card  mb-2">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-light shadow-success text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
									</div>
									<div class="text-end pt-1">
									<h6>월별 실거래 평균가</h6>
									<div class="chart bg-gradient-success">
										<canvas id="chart-line-avg" class="chart-canvas" height="200px" width="200px" style="display: block; box-sizing: border-box; height: 170px; width: 200px;"></canvas>
									</div>
									</div>
								</div>

								<hr class="horizontal my-0 dark">

							</div>
					
					</div>
					<div class="card-body p-2">
					
					<!-- 카드 -->
					<div class="card  mb-2">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-warning shadow-success text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-sharp fa-solid fa-map-location-dot fa-lg"></i>
									</div>
									<div class="text-end pt-1">
									<h6>구별 실거래 수량</h6>
										<div class="chart bg-gradient-success">
											<canvas id="chart-bar" class="chart-canvas" height="200px" width="200px" style="display: block; box-sizing: border-box; height: 170px; width: 200px;"></canvas>
										</div>
									</div>
								</div>

								<hr class="horizontal my-0 dark">

							</div>
					<!--  카드끝 -->
					
					
						
					</div>
					
					<!-- 차트 부분 끝 -->

				</div>

				
<!-- 가운데 지도 레이아웃 -->

				<div id="map_layout">
					<p>최고 검색량 출력 공간</p>
					<div class="div_flex">
					<!-- dropdown 시작 -->
					<div class="dropdown-center">
						 <button class="btn btn-success dropdown-toggle me-3" type="button" id="dropdownMenuButton_gu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    구 검색
						 </button>
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
						 <button disabled class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton_dong" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    동 검색
						 </button>
						  <div id = "choice_dong" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						 		  		
						  </div>
					</div> 
					<!-- dropdown 끝 -->
					
					</div>
					<div id="map" style="width:680px;height:565px;">
					</div>
				</div>
				
				
<!-- 오른쪽 인프라 컬럼 레이아웃 -->				
				
				
				<div class="col-lg-3 z-index-2">
					<div class="row mt-3">
					
				<!-- 오른쪽 인프라 컬럼 레이아웃 왼쪽 컬럼열  -->
				
						<div class="col-lg-5 col-sm-5 ">
							<div id="GJ_CC" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-primary shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-building fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">자치센터</p>
										<h4 id="GJ_CC_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_PS" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-handcuffs fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">경찰서</p>
										<h4 id="GJ_PS_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_HS" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-secondary shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-hospital fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">병원</p>
										<h4 id="GJ_HS_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							<div id="GJ_METRO" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-success shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-train-subway"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">지하철역</p>
										<h4 id="GJ_METRO_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_CN" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-info shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-ticket fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">영화관</p>
										<h4 id="GJ_CN_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_LB" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-info shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-book fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">도서관</p>
										<h4 id="GJ_LB_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_SM" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-warning shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-cart-shopping fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">대형마트</p>
										<h4 id="GJ_SM_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
						</div>
						
					<!-- 오른쪽 인프라 컬럼 레이아웃 오른쪽 컬럼열  -->
					
						<div class="col-lg-5 col-sm-5 mt-sm-0 mt-4">
						
							<div id="GWANGJU_DONG" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-primary shadow-success text-center border-radius-xl mt-n4 position-absolute">
										<i class="material-icons opacity-10">store</i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize ">법정동수</p>
										<h4 id="GWANGJU_DONG_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="horizontal my-0 dark">

							</div>

							<div id="GJ_FS" class="card mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-primary shadow-info text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-fire-extinguisher fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize ">소방서</p>
										<h4 id="GJ_FS_Cnt" class="mb-0 ">0</h4>
									</div>
								</div>

								<hr class="horizontal my-0 dark">
								
							</div>
							
							<div id="GJ_PH" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-secondary shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-pills fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">약국</p>
										<h4 id="GJ_PH_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_BUS" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-success shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-bus"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">버스정류장</p>
										<h4 id="GJ_BUS_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_MS" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-info shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-building-columns fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">박물관</p>
										<h4 id="GJ_MS_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_EX" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-info shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-palette fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">전시관</p>
										<h4 id="GJ_EX_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
							
							<div id="GJ_CS" class="card  mb-2 borderClass">
								<div class="card-header p-3 pt-2 bg-transparent">
									<div class="icon icon-lg icon-shape bg-gradient-warning shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
										<i class="fa-solid fa-store fa-lg"></i>
									</div>
									<div class="text-end pt-1">
										<p class="text-sm mb-0 text-capitalize">편의점</p>
										<h4 id="GJ_CS_Cnt" class="mb-0">0</h4>
									</div>
								</div>

								<hr class="dark horizontal my-0">
								
							</div>
						</div>
						<div>
						<footer class="footer py-4  ">
				<div class="container-fluid">
					<div class="row align-items-center justify-content-lg-between" style="margin-left: 20px; margin-right: 20px;">
						<div class="col-lg-6 mb-lg-0 mb-4">
							<div
								class="copyright text-center text-sm text-muted text-lg-start">
								©
								<script>
            document.write(new Date().getFullYear())
          </script>
								, made with <i class="fa fa-heart"></i> by 
								<span class="font-weight-bold">Remember Team</span> to get a job.
							</div>
						</div>
						<div class="col-lg-6">
							<ul
								class="nav nav-footer justify-content-center justify-content-lg-end">
								<li class="nav-item"><span class="nav-link text-muted" target="_blank">Remember Team</span></li>
								<li class="nav-item"><span class="nav-link text-muted" target="_blank">이경진</span></li>
								<li class="nav-item"><span class="nav-link text-muted" target="_blank">이소정</span></li>
								<li class="nav-item"><span class="nav-link text-muted" target="_blank">박은혁</span></li>
								<li class="nav-item"><span class="nav-link text-muted" target="_blank">조용은</span></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
						</div>
					</div>

				</div>
				
			</div>


<!-- footer -->

		</div>


	</main>




	<!--   Core JS Files   -->
	<script src="./assets/js/core/popper.min.js"></script>
	<script src="./assets/js/core/bootstrap.min.js"></script>
	<script src="./assets/js/plugins/perfect-scrollbar.min.js"></script>
	<script src="./assets/js/plugins/smooth-scrollbar.min.js"></script>
	<!-- 가운데 카카오 지도 불러오기 -->
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=311c2d3dcf5815fdf2481d7ae57fc8cb"></script>
	<script src="./assets/js/Main.js"></script>







<script>
  var win = navigator.platform.indexOf('Win') > -1;
  if (win && document.querySelector('#sidenav-scrollbar')) {
    var options = {
      damping: '0.5'
    }
    Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
  }
</script>


<!-- Github buttons -->
<script async defer src="https://buttons.github.io/buttons.js"></script>


<!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
<script src="./assets/js/material-dashboard.min.js?v=3.0.4"></script>

<!-- 부트스트랩 js CDN -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script>




</script>


</body>

</html>
