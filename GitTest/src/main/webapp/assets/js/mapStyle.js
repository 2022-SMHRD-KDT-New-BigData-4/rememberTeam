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
// 페이지에서 봤을때는 메뉴 모양이 변하지 않음 -> 색상 변경으로 활성화 비활성화 구분
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
$('.aside').click(()=>{
	$('.aside2').css('display', 'block')
	console.log("리스트 클릭")
})

// 상세화면에서 닫기 버튼을 누르면 상세화면 닫힘
//$('.close_btn').click(()=>{
//	$('.aside2').css(, 'hidden')	
//})

// 카테고리 버튼 클릭시 색상 유지(활성화)를 위한 작업
// 매물버튼은 독립적으로 설계
// 매물을 제외한 카테고리 버튼은 상호적으로 설계 하지만 다른 곳 클릭시 영향을 받지 않도록 함

/* 카테고리 버튼에 활성화 느낌(색상)을 주기 위한 로직 작성을 위한 변수 */
let rs_color_cnt = 1;	// -> 매물
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

// 매물
function click_rs(target){	
	if(rs_color_cnt==0){
		console.log('매물 활성화')
		target.style.backgroundColor="#8ac926";
		target.style.color="white";
		rs_color_cnt++;
	}else{
		
		console.log('매물 비활성화')
		target.style.backgroundColor="white";
		target.style.color="black";
		rs_color_cnt--;
	}
}

// 도서관부터 편의점까지로 실제 카테고리 순서와는 거꾸로 작성함
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

// 구, 동 선택 select
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
			$(".dropdown_dong").click(function(){
				console.log("동버튼클릭")
				$("#dropdownMenuButton_dong").text($(this).text())
				$("#dropdownMenuButton_dong").removeClass("btn-outline-success")
				$("#dropdownMenuButton_dong").addClass("btn-success")

			})
			// 구 클릭후 동 불러오기 완료시 동버튼 활성화
			$("#dropdownMenuButton_dong").removeAttr("disabled");
		},
		error: () => {
		}

	})
})
/*
// 자동완성 기능
$('.search_txt').click(function() {
   $.ajax({
      url : "MapSearchDong.do",
      dataType : 'json',
      success : (res)=>{
         console.log(res)
         console.log(res.dong[0])
         for (let i = 0; i < res.dong.length; i++) {
            let dong_name = res.dong[i].dong
            let gu_name = res.dong[i].addr
            let cortarNo = res.dong[i].cortarNo
            console.log(cortarNo)
            let dong_option = $('<option value='+cortarNo+'>'+dong_name+'('+gu_name+')'+'</option>');
              $("#search_matching").append(dong_option);
            
         }
      },
      error : ()=>{
         
      },

   })
});
*/



