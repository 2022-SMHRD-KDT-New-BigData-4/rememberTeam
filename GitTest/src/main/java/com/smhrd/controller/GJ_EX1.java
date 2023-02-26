package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.google.gson.Gson;
import com.smhrd.model.DAO.GJ_EX_DAO;
import com.smhrd.model.VO.GJ_EX_VO;

@WebServlet("/GJ_EXServer")
public class GJ_EXServer extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 한글 인코딩
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		
		System.out.println("1");
		
		PrintWriter out = response.getWriter();
		
		Gson gson = new Gson();
		
		// DAO 꺼내오기
		GJ_EX_DAO dao = new GJ_EX_DAO();
		// System.out.println("1");
		
		// DAO가 가지고 있는 위치 호출
		List<GJ_EX_VO> list = dao.selectGJ_EX();

		JSONObject JO = new JSONObject(); //json객체 생성
		
		//JsonArray 생성
		JSONArray JA = new JSONArray();
		
		HashMap<String, Object> hsm = new HashMap<String, Object>();
		
	    for(GJ_EX_VO vo : list) {
	    	hsm = new HashMap<String, Object>();
	    	
	    	hsm.put("lat",vo.getLat());
	    	hsm.put("lng",vo.getLng());
	    	hsm.put("nm", vo.getEx_nm());
	    	
	    	
	    	JO = new JSONObject(hsm);
	    	JA.add(JO);
	    }
		// System.out.println(JA);
		out.print(JA);
	}

}
