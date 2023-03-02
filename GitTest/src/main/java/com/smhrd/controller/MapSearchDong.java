package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.smhrd.command.Command;
import com.smhrd.model.DAO.GWANGJU_DONG_DAO;
import com.smhrd.model.DAO.MainDAO;
import com.smhrd.model.VO.GWANGJU_DONG_VO;

public class MapSearchDong implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		
		Gson gson = new Gson();
		GWANGJU_DONG_DAO dao = new GWANGJU_DONG_DAO();
		Map<String, Object> temp = new HashMap<>();
		response.setCharacterEncoding("UTF-8");
		
		List<GWANGJU_DONG_VO> list = dao.MapSearchDong();
		
		temp.put("dong",list);
		
		String json = gson.toJson(temp);
		
		try {
			PrintWriter out = response.getWriter();
			out.print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;

		
	}

}
