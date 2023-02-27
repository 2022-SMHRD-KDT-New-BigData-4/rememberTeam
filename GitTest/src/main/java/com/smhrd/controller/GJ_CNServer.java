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
import com.smhrd.model.DAO.GJ_CN_DAO;
import com.smhrd.model.DAO.GJ_EX_DAO;
import com.smhrd.model.VO.GJ_CN_VO;
import com.smhrd.model.VO.GJ_EX_VO;

public class GJ_CNServer implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		// 한글 인코딩
		response.setContentType("text/html;charset=UTF-8");

		PrintWriter out;

		Gson gson = new Gson();

		// DAO 꺼내오기
		GJ_CN_DAO dao = new GJ_CN_DAO();
		// System.out.println("1");

		// DAO가 가지고 있는 위치 호출
		List<GJ_CN_VO> list = dao.selectGJ_CN();

		JSONObject JO = new JSONObject(); // json객체 생성

		// JsonArray 생성
		JSONArray JA = new JSONArray();

		HashMap<String, Object> hsm = new HashMap<String, Object>();

		for (GJ_CN_VO vo : list) {
			hsm = new HashMap<String, Object>();

			hsm.put("lat", vo.getLat());
			hsm.put("lng", vo.getLng());
			hsm.put("nm", vo.getNm());
			hsm.put("addr", vo.getAddr());

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
