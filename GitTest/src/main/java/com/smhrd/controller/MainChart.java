package com.smhrd.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.smhrd.command.Command;
import com.smhrd.model.DAO.MainDAO;

public class MainChart implements Command{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		
		Gson gson = new Gson();
		MainDAO dao = new MainDAO();
		Map<String, Object> ym = new HashMap<>();
		
		for(int year = 2022;year<=2023;year++) {
			ym.put("year", year);
			for(int month = 1;month<=12;month++) {
				ym.put("month", month);
			}
			dao.mainChart(ym);
		}
		
		
		
		
		return null;
	}

}
