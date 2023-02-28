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
import com.smhrd.model.DAO.GJ_RS_DAO;
import com.smhrd.model.VO.GJ_RS_VO;

public class GJ_RSServer implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		// 한글 인코딩
		response.setContentType("text/html;charset=UTF-8");

		PrintWriter out;

		Gson gson = new Gson();
		// System.out.println("1");

		// DAO 꺼내오기
		GJ_RS_DAO dao = new GJ_RS_DAO();

		// DAO가 가지고 있는 위치 호출
		List<GJ_RS_VO> list = dao.selectGJ_RS();

		JSONObject JO = new JSONObject(); // json객체 생성

		// JsonArray 생성
		JSONArray JA = new JSONArray();

		HashMap<String, Object> hsm = new HashMap<String, Object>();

		for (GJ_RS_VO vo : list) {
			hsm = new HashMap<String, Object>();

			hsm.put("lat", vo.getLat());
			hsm.put("lng", vo.getLng());
			hsm.put("num", vo.getRs_num());			
			hsm.put("type", vo.getRs_type());
			hsm.put("nm", vo.getRs_nm());
			hsm.put("addr", vo.getRs_addr());
			hsm.put("cr", vo.getRs_cr());
			hsm.put("dr", vo.getRs_dr());
			hsm.put("ct_area", vo.getCt_area());
			hsm.put("ex_area", vo.getEx_area());
			hsm.put("ml_yn", vo.getMl_yn());
			hsm.put("m_cost", vo.getM_cost());
			hsm.put("cost_incs", vo.getCost_incs());
			hsm.put("md", vo.getRs_md());
			hsm.put("park_yn", vo.getRs_park_yn());
			hsm.put("tp", vo.getRs_tp());
			hsm.put("room", vo.getRs_room());
			hsm.put("bath", vo.getRs_bath());
			hsm.put("fl", vo.getRs_fl());
			hsm.put("nh", vo.getRs_nh());
			hsm.put("sp", vo.getRs_sp());
			hsm.put("cortarno", vo.getCortarNo());
			hsm.put("search_type", vo.getRs_search_type());
			hsm.put("aircon", vo.getRs_aircon());
			hsm.put("option", vo.getRs_option());
			hsm.put("security", vo.getRs_security());
			hsm.put("estate", vo.getRs_estate());
			hsm.put("img", vo.getRs_img());
			hsm.put("keyword", vo.getRs_keyword());			

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
