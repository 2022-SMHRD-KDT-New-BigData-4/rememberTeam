package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.smhrd.command.Command;
import com.smhrd.model.DAO.MainDAO;

public class InfraCnt implements Command{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		Gson gson = new Gson();
		
		MainDAO dao = new MainDAO();
		String[] table = {"GJ_BUS", "GJ_CC", "GJ_CN", "GJ_CS", "GWANGJU_DONG", "GJ_FS", "GJ_HS", "GJ_METRO", "GJ_MS", "GJ_PH", "GJ_PS", "GJ_SM"};
		int[] infraCnt = dao.cnt(table);
		
		Map<String, Object> temp = new HashMap<>();
		for(int i=0;i<table.length;i++) {
			temp.put(table[i], infraCnt[i]);
		}

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
