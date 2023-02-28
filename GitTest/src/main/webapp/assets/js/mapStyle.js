// category 메뉴 열고 닫기
$('#down_btn').click(()=>{
	console.log('클릭')
	$('.category_btn button').css('display', 'block')
	$('#down_btn').css('display', 'none')
	
})

$('#up_btn').click(()=>{
	console.log('클릭')
	$('.category_btn button').css('display', 'none')
	$('#rs_btn').css('display', 'block')
	$('#down_btn').css('display', 'block')
})

// 카테고리 버튼 클릭시 다른 버튼에 영향을 받지 않고 색상 유지
// map화면 시작은 매물 리스트 활성화
// 메뉴 버튼을 누르면 매물 리스트는 닫히고
// 다시 누르면 매물 리스트 활성화
// 일단은 같은 모양의 버튼을 2개 생성한 후 id를 다르게 부여하여 서로 다른 버튼으로 생성
// 페이지에서 봤을때는 메뉴 모양이 변하지 않음 
$('#menu_button').click(()=>{
	$('#menu_button').css('display', 'none')
	$('#menu_close_button').css('display','block')
	$('.aside1').css('display','block')
})

$('#menu_close_button').click(()=>{
	$('#menu_close_button').css('display','none')
	$('#menu_button').css('display', 'block')
	$('.aside1').css('display','none')
	$('.aside2').css('display','none')
})

// 매물 리스트에서 클릭시 상세화면 활성화
$('.items_btn').click(()=>{
	$('.aside2').css('display', 'block')
})

// 상세화면에서 닫기 버튼을 누르면 상세화면 닫힘
$('.close_btn').click(()=>{
	$('.aside2').css('display', 'none')	
})

// 구, 동 선택 select
function change_gu(){
	let choice_gu  = document.getElementById("choice_gu");
	let gu = (choice_gu.options[choice_gu.selectedIndex].value);	
	let gu_name = {gu_name : gu}
    $.ajax({
    		url : 'SearchDong.do',
    		type : 'get',
    		data : gu_name,
    		dataType : 'json',
    		success : (res)=>{
  				for (let i = 0; i<res.gu_name.length; i++){
					let value = res.gu_name[i]
					let dong_option = $("<option value=Map.jsp?dong_name=" + value + ">"+value+"</a></option>");
            		$('#choice_dong').append(dong_option);
				}
				
			},
    		error : ()=>{
    		}
    		
    })
}

// 카테고리 버튼 클릭시 색상 유지
// 매물버튼은 독립적으로
// 카테고리 버튼을 제외하고 영향을 받지 않도록

// 편의점
/*
$("#cs_btn").click(function(){
	
	console.log("편의점 클릭")
	
	
	let color = $("#cs_btn").css("color")
	console.log($("#cs_btn").css("color"))
	if(color==="rgb(0, 0, 0)"){
		$("#cs_btn").css("background-color", "white")
		$("#cs_btn").css("color", "black")			
	}else{
		$("#cs_btn").css("background-color", "#6a4c93")
		$("#cs_btn").css("color", "#fff")			
	}	
	
})
*/
// 대형마트
/*
$("#sm_btn").click(function(){
	console.log("대형마트 클릭")
	
	$("#sm_btn").css("background-color", "#6a4c93")
	$("#sm_btn").css("color", "#fff")
	$(".category button").not("#sm_btn, #rs_btn").css("background-image", "white")
	$(".category button").not("#sm_btn, #rs_btn").css("color", "black")	
	
	
	
})
*/
//let cntColor = 0;
/* 카테고리 버튼에 활성화 느낌(색상)을 주기 위한 로직 작성을 위한 변수 */
let rs_color_cnt = 0;	// -> 매물 (이건 맨 마지막에 작성하자!)
let cs_color_cnt = 0; 	// -> 편의점
let sm_color_cnt = 0; 	// -> 대형마트
let hs_color_cnt = 0;	// -> 병원
let ph_color_cnt = 0;	// -> 약국
let ps_color_cnt = 0;	// -> 경찰서
let fs_color_cnt = 0;	// -> 소방서
let cc_color_cnt = 0;	// -> 자치센터
let cn_color_cnt = 0;	// -> 영화관
let ms_color_cnt = 0;	// -> 박물관
let ex_color_cnt = 0;	// -> 전시관
let lb_color_cnt = 0; 	// -> 도서관

// 도서관
function click_lb(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(lb_color_cnt==0){
		target.style.backgroundColor="#1982c4";
		target.style.color="white";
		lb_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		lb_color_cnt--;
	}
}

// 전시관
function click_ex(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(ex_color_cnt==0){
		target.style.backgroundColor="#1982c4";
		target.style.color="white";
		ex_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		ex_color_cnt--;
	}
}

// 박물관
function click_ms(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(ms_color_cnt==0){
		target.style.backgroundColor="#1982c4";
		target.style.color="white";
		ms_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		ms_color_cnt--;
	}
}

// 영화관
function click_cn(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(cn_color_cnt==0){
		target.style.backgroundColor="#1982c4";
		target.style.color="white";
		cn_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		cn_color_cnt--;
	}
}

// 자치센터
function click_cc(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(cc_color_cnt==0){
		target.style.backgroundColor="#ff595e";
		target.style.color="white";
		cc_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		cc_color_cnt--;
	}
}

// 소방서
function click_fs(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(fs_color_cnt==0){
		target.style.backgroundColor="#ff595e";
		target.style.color="white";
		fs_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		fs_color_cnt--;
	}
}

// 경찰서
function click_ps(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(ps_color_cnt==0){
		target.style.backgroundColor="#ff595e";
		target.style.color="white";
		ps_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		ps_color_cnt--;
	}
}

// 약국
function click_ph(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(ph_color_cnt==0){
		target.style.backgroundColor="#ffca3a";
		target.style.color="white";
		ph_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		ph_color_cnt--;
	}
}

// 병원
function click_hs(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(hs_color_cnt==0){
		target.style.backgroundColor="#ffca3a";
		target.style.color="white";
		hs_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		hs_color_cnt--;
	}
}

// 대형마트
function click_sm(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(sm_color_cnt==0){
		target.style.backgroundColor="#6a4c93";
		target.style.color="white";
		sm_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		sm_color_cnt--;
	}
}

// 편의점
function click_cs(target){	
	$('.ctg').not("#rs_btn").css('backgroundColor','white');
	$('.ctg').not("#rs_btn").css('color','black');
	if(cs_color_cnt==0){
		target.style.backgroundColor="#6a4c93";
		target.style.color="white";
		cs_color_cnt++;
	}else{
		target.style.backgroundColor="white";
		target.style.color="black";
		cs_color_cnt--;
	}
}





