package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.google.gson.Gson;
import com.smhrd.command.Command;
import com.smhrd.model.DAO.GWANGJU_GU_DAO;
import com.smhrd.model.VO.GWANGJU_GU_VO;

public class GWANGJU_GUServer implements Command{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		// 한글 인코딩
		response.setContentType("text/html;charset=UTF-8");
		
		// System.out.println("1");
		String cortar = request.getParameter("gu_code");
		// System.out.println(cortar);
		long cortarno = Long.parseLong(request.getParameter("gu_code"));
		// System.out.println("cortarno"+cortarno);

		PrintWriter out;

		Gson gson = new Gson();

		// DAO 꺼내오기
		GWANGJU_GU_DAO dao = new GWANGJU_GU_DAO();

		// DAO가 가지고 있는 위치 호출
		List<GWANGJU_GU_VO> list = dao.selectGWANGJU_GU(cortarno);
		//System.out.println("list"+list);
		
		JSONObject JO = new JSONObject(); // json객체 생성

		// JsonArray 생성
		JSONArray JA = new JSONArray();

		HashMap<String, Object> hsm = new HashMap<String, Object>();

		for (GWANGJU_GU_VO vo : list) {
			hsm = new HashMap<String, Object>();

			hsm.put("lat", vo.getCenterlat());
			hsm.put("lng", vo.getCenterlng());

			JO = new JSONObject(hsm);
			JA.add(JO);
		}
		// System.out.println(JA);
		try {
			out = response.getWriter();
			out.print(JA);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
}
