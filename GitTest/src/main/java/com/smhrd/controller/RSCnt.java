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

public class RSCnt implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		Gson gson = new Gson();
		MainDAO dao = new MainDAO();
		
		String jeonse = "전세";
		String monthly = "월세";
		
		int jeonseCnt = dao.RSCnt(jeonse);
		int monthlyCnt = dao.RSCnt(monthly);
		
		Map<String, Object> temp = new HashMap<>();
		temp.put("jeonse", jeonseCnt);
		temp.put("monthly", monthlyCnt);
		
		String json = gson.toJson(temp);
		System.out.println(json);
		try {
			PrintWriter out = response.getWriter();
			out.print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}

}
