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
import com.smhrd.model.DAO.MainDAO;

public class SearchDong implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		Gson gson = new Gson();
		MainDAO dao = new MainDAO();
		Map<String, Object> temp = new HashMap<>();
		response.setCharacterEncoding("UTF-8");
		
		String gu_name = request.getParameter("gu_name");
		
		System.out.println("셀렉트 : "+gu_name);
		
		List<String> list = dao.SearchDong(gu_name);
		
		temp.put("gu_name", list);
		
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
