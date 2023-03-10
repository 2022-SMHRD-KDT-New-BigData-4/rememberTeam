package com.smhrd.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.command.Command;
import com.smhrd.model.DAO.GWANGJU_GU_DAO;

@WebServlet("*.do")
public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	// command패턴을 위한 맵
	HashMap<String, Command> map = null;
	
	// 동 검색량 담을 맵
	Map<Long, Integer> searchDong = new HashMap<>();
	
	// 날짜포맷 설정후 현재 날짜를 받음
	SimpleDateFormat format1 = new SimpleDateFormat ( "MMdd");
	Date time = new Date();
	String time1 = format1.format(time);
	
	public void init(ServletConfig config) throws ServletException {
	
		map = new HashMap<>();

		map.put("InfraCnt.do", new InfraCnt());
		map.put("MainMarker.do", new MainMarker());
		map.put("SearchDong.do", new SearchDong());
		map.put("MainMapClick.do", new MainMapClick());
		map.put("GJ_CCServer.do", new GJ_CCServer());
		map.put("GJ_CNServer.do", new GJ_CNServer());
		map.put("GJ_CSServer.do", new GJ_CSServer());
		map.put("GJ_EXServer.do", new GJ_EXServer());
		map.put("GJ_FSServer.do", new GJ_FSServer());
		map.put("GJ_HSServer.do", new GJ_HSServer());
		map.put("GJ_MSServer.do", new GJ_MSServer());
		map.put("GJ_PHServer.do", new GJ_PHServer());
		map.put("GJ_PSServer.do", new GJ_PSServer());
		map.put("GJ_RSServer.do", new GJ_RSServer());
		map.put("GJ_SMServer.do", new GJ_SMServer());
		map.put("MainChart.do", new MainChart());
		map.put("GJ_LBServer.do", new GJ_LBServer());
		map.put("GWANGJU_DONGServer.do", new GWANGJU_DONGServer());
		map.put("GWANGJU_GUServer.do", new GWANGJU_GUServer());
		map.put("MapSearchDong.do", new MapSearchDong());	}
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 서버 초기에 application 스코프에 담기
		ServletContext application = request.getServletContext();
		if(application.getAttribute("searchDong")==null) {
			application.setAttribute("searchDong", searchDong);
			// 하루마다 초기화를 위해 sysdate도 application 스코프에 담음
			application.setAttribute("sysdate", time1);
		}
		
		// 1. 들어온 요청이 어떤 요청인지 판단
		// getRequestURI() : 요청된 주소값 자체를 가져오는 메소드
		String uri = request.getRequestURI();

		// 프로젝트 이름만 분리하기 -> getContextPath()
		String path = request.getContextPath();

		// 요청된 Servlet의 이름
		// 가져오는 path를 잘라도 /가 있기 때문에 +1을 해주기
		String finaluri = uri.substring(path.length() + 1);

		String finalpath = null;
		// 1. GoMain.do로 들어오면
		if (finaluri.contains("Go")) {
			// 2. WEB_INF/main.jsp로 이동
			// GoMain.do -> main.jsp
			// GoUpdate.do -> update.jsp
			finalpath = finaluri.substring(2).replaceAll(".do", "");

		} else {
			// 3. 그렇지 않은 경우에는
			Command con = map.get(finaluri);
			finalpath = con.execute(request, response);
		}
		// finalpath ---> redirect:/GoMain.do
		// 페이지 결과 응답하기
		// execute의 실행 결과를 담기
		if (finalpath == null) {
			// ajax 통신인 경우에는 그냥 화면 이동을 안함
		} else if (finalpath.contains("redirect:/")) {
			response.sendRedirect(finalpath.substring(10));
		} else {
			RequestDispatcher rd = request.getRequestDispatcher("WEB-INF/" + finalpath + ".jsp");
			rd.forward(request, response);
		}

	}
	
	
}


