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


