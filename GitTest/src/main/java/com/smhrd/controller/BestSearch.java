package com.smhrd.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import com.smhrd.model.DAO.MainDAO;

public class BestSearch {
	
	public void searchDongCnt(HttpServletRequest request, long cortarno) {
		
		SimpleDateFormat format1 = new SimpleDateFormat ( "MMdd");
				
		Date time = new Date();
				
		String time1 = format1.format(time);
		
		// application스코프 객체 생성
		ServletContext application = request.getServletContext();
		
		// application 스코프의 sysdate 받아옴
		String appSysdate = (String)application.getAttribute("sysdate");
		
		// 현재 날짜와 application 스코프의 날짜가 다르면 초기화
		if(!time1.equals(appSysdate)) {
			// 초기화
			Map<Long, Integer> newMap = new HashMap<>();
			// 새로운 맵, sysdate 담음
			application.setAttribute("searchDong", newMap);
			application.setAttribute("sysdate", time1);
		}
		
		// application스코프에서 맵 가져와서 담기
		HashMap<Long, Integer> searchDong =  (HashMap<Long, Integer>) application.getAttribute("searchDong");
		
		// 검색된 적 없는 동은 새로 맵에 담아줌
		if(searchDong.get(cortarno)==null) {
			searchDong.put(+cortarno, 1);
			
		// 검색된 적 있는 동은 가져와서 1 더해주고 다시 담음
		}else {
			int cnt = searchDong.get(cortarno)+1;
			searchDong.put(cortarno, cnt);
		}
		
		// 맵에서 가장 높은 밸류의 키값(지역번호)을 가져옴
		long bestDong = searchDong.entrySet().stream()
				.max((m1, m2) -> m1.getValue() > m2.getValue() ? 1 : -1).get().getKey();
		
		// 키값을 가지고 DB조회 해서 동이름 가져옴
		MainDAO dao = new MainDAO();
		String bestDongNm = dao.DongSelectOne(bestDong).getDong();
		
		
		// application스코프에 다시 담기
		application.setAttribute("bestDongNm", bestDongNm); 
		application.setAttribute("searchDong", searchDong);
	}
}
