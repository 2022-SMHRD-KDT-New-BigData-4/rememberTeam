package com.smhrd.controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.command.Command;

@WebServlet("*.do")
public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	HashMap<String, Command> map = null;
	
	
	public void init(ServletConfig config) throws ServletException {
	
		map = new HashMap<>();

		map.put("InfraCnt.do", new InfraCnt());
	
	}
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 들어온 요청이 어떤 요청인지 판단
		// getRequestURI() : 요청된 주소값 자체를 가져오는 메소드
		String uri = request.getRequestURI();
		System.out.println("요청된 주소 : " + uri);

		// 프로젝트 이름만 분리하기 -> getContextPath()
		String path = request.getContextPath();
		System.out.println("프로젝트 이름 : " + path);

		// 요청된 Servlet의 이름
		// 가져오는 path를 잘라도 /가 있기 때문에 +1을 해주기
		String finaluri = uri.substring(path.length() + 1);
		System.out.println("요청된 Servlet : " + finaluri);

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
			RequestDispatcher rd = request.getRequestDispatcher(finalpath + ".jsp");
			rd.forward(request, response);
		}

	}
	
	
}


