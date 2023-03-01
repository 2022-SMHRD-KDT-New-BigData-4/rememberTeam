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

public class MainMapClick implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		Gson gson = new Gson();
		MainDAO dao = new MainDAO();
		
		String name = request.getParameter("name");
		long cortarNo = dao.MainMapClick(name);
		
		
		try {
			PrintWriter out = response.getWriter();
			out.print(cortarNo);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		
		return null;
	}

}
