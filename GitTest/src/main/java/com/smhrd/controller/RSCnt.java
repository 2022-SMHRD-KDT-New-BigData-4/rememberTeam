package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.smhrd.command.Command;
import com.smhrd.model.DAO.MainDAO;
import com.smhrd.model.VO.MainVO;

public class RSCnt implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		Gson gson = new Gson();
		MainDAO dao = new MainDAO();
		Map<String, Object> temp = new HashMap<>();
		
		String jeonse = "전세";
		String monthly = "월세";
		String gu_name = request.getParameter("gu_name");
		
		int jeonseCnt = 0;
		int monthlyCnt = 0;
		if (gu_name != null) {
			
			MainVO vo1 = new MainVO(gu_name, jeonse);
			MainVO vo2 = new MainVO(gu_name, monthly);
			
			jeonseCnt = dao.MouseoverRsCnt(vo1);
			monthlyCnt = dao.MouseoverRsCnt(vo2);
			
		} else {
			
			jeonseCnt = dao.RSCnt(jeonse);
			monthlyCnt = dao.RSCnt(monthly);
			
		}
		
		temp.put("jeonse", jeonseCnt);
		temp.put("monthly", monthlyCnt);
		
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
