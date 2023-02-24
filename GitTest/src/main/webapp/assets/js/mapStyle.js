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

// 버튼 클릭시 색상 유지 -> 0 : 일단 이것도 다시 다시
// 다른 버튼 클릭시 다른 버튼에 색상을 유지
// 한번더 누르면 없어지도록
$('.category_btn button').on('mousedown', (id_name)=>{
	if(id_name.target.id === 'rs_btn'){
		console.log('매물버튼')
		$('.category_btn btn').css({'background-color':'white'})
		
		$('#rs_btn').css({'background-image':'linear-gradient(195deg, #66BB6A 0%, #43A047 100%)'})
	}else if(id_name.target.id === 'cs_btn'){
		$('#cs_btn').css({'background-image':'linear-gradient(195deg, #66BB6A 0%, #43A047 100%)'})
		
	}
})