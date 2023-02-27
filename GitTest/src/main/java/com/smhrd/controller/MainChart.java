package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.smhrd.command.Command;
import com.smhrd.model.DAO.MainDAO;

public class MainChart implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {

		// gson, dao 호출
		Gson gson = new Gson();
		MainDAO dao = new MainDAO();

		// sql문 매개변수 담을 맵
		Map<String, Object> sqlParam = new HashMap<>();

		// json 변환에 사용할 맵
		Map<String, Object> inmapCnt = new HashMap<>();
		Map<String, Object> inmapAvg = new HashMap<>();
		Map<String, Object> outmap = new HashMap<>();

		// ajax에서 보내준 데이터 받음
		String mon_jeon = request.getParameter("mon_jeon");

		// 반복문에 사용할 테이블이름 배열
		String[] tb_nm = { "GJ_DEAL_OFCT", "GJ_DEAL_MLT", "GJ_DEAL_SGLFAM" };
		// 반복문에 사용할 구이름 배열
		String[] gu_nm = { "광산구", "동구", "서구", "남구", "북구" };

		// ajax 에서 받음 데이터 판단
		if (mon_jeon.equals("true")) { // true = 월세
			// sql 월세 전세 판단 매개변수 맵에 담음
			sqlParam.put("mon_jeon", "!=");
			// 월세 - 월세열 평균
			sqlParam.put("mon_jeon_avg", "deal_pr");
		} else { // false = 전세
			// ~~ 전세
			sqlParam.put("mon_jeon", "=");
			// 전세 - 보증금열 평균
			sqlParam.put("mon_jeon_avg", "deal_dp");
		}

///////////////////////////////////////////////////	cnt 차트 데이터 jdbc
		// jdbc후 cnt데이터 담을 리스트
		List<Integer> ofctCnt = new ArrayList<>();
		List<Integer> mltCnt = new ArrayList<>();
		List<Integer> sglfamCnt = new ArrayList<>();

		// 년에 따른 반복
		for (int year = 2022; year <= 2023; year++) {
			sqlParam.put("year", year);
			// 테이블 이름에 따른 반복
			for (int i = 0; i < tb_nm.length; i++) {
				sqlParam.put("tb_nm", tb_nm[i]);
				// 월에 따른 반복
				for (int month = 1; month <= 12; month++) {
					sqlParam.put("month", month);
					// jdbc후 결과를 테이블 이름에 따라 리스트 추가
					if (i == 0) {
						ofctCnt.add(dao.mainChartCnt(sqlParam));
					}
					if (i == 1) {
						mltCnt.add(dao.mainChartCnt(sqlParam));
					}
					if (i == 2) {
						sglfamCnt.add(dao.mainChartCnt(sqlParam));
					}
					// 현재 데이터가 2023/01 까지 있어서 break 역할
					if (year == 2023 && month == 1) {
						month = 13;
					}
				}
			}
		}

///////////////////////////////////////////////// avg 차트 데이터 jdbc
		// jdbc후 avg 담을 리스트
		List<Double> ofctAvg = new ArrayList<>();
		List<Double> mltAvg = new ArrayList<>();
		List<Double> sglfamAvg = new ArrayList<>();

		// 년에 따른 반복
		for (int year = 2022; year <= 2023; year++) {
			sqlParam.put("year", year);
			// 테이블 이름에 따른 반복
			for (int i = 0; i < tb_nm.length; i++) {
				sqlParam.put("tb_nm", tb_nm[i]);
				// 월에 따른 반복
				for (int month = 1; month <= 12; month++) {
					sqlParam.put("month", month);
					// jdbc후 결과 테이블 이름에 따라 리스트 추가
					if (i == 0) {
						ofctAvg.add(dao.mainChartAvg(sqlParam));
					}
					if (i == 1) {
						mltAvg.add(dao.mainChartAvg(sqlParam));
					}
					if (i == 2) {
						sglfamAvg.add(dao.mainChartAvg(sqlParam));
					}
					// 현재 데이터가 2023/01 까지 있어서 break 역할
					if (year == 2023 && month == 1) {
						month = 13;
					}
				}
			}
		}

////////////////////////////////////////// 구별 1년 수량, 평균가 로직

		// jdbc후 avg 담을 리스트
		List<Integer> guCnt = new ArrayList<>();
		List<Double> guAvg = new ArrayList<>();

		// 년에 따른 반복 2022년만
		for (int year = 2022; year < 2023; year++) {
			sqlParam.put("year", year);
				// 구에 따른 반복
				for (int gu = 0; gu < gu_nm.length; gu++) {
					sqlParam.put("gu", gu_nm[gu]);
					int cnt = 0;
					double avg = 0;
					// 테이블 이름에 따른 반복
					for (int i = 0; i < tb_nm.length; i++) {
						sqlParam.put("tb_nm", tb_nm[i]);
						cnt += dao.mainChartGUCnt(sqlParam);
						avg += dao.mainChartGuAvg(sqlParam);
				}
					avg = Double.parseDouble(String.format("%.1f", avg));
					guCnt.add(cnt);
					guAvg.add(avg);
				
			}
		}

		guCnt.forEach(i -> System.out.println(i));
		System.out.println("==========");
		guAvg.forEach(i -> System.out.println(i));

////////////////////////////////////////// json변환 로직		

		// json 변환을 위한 cnt맵에 담음
		inmapCnt.put("ofctCnt", ofctCnt);
		inmapCnt.put("mltCnt", mltCnt);
		inmapCnt.put("sglfamCnt", sglfamCnt);
		// json 변환을 위한 avg맵에 담음
		inmapAvg.put("ofctAvg", ofctAvg);
		inmapAvg.put("mltAvg", mltAvg);
		inmapAvg.put("sglfamAvg", sglfamAvg);
		// json 변환을 위한 바깥맵에 담음
		outmap.put("deal_cnt", inmapCnt);
		outmap.put("deal_avg", inmapAvg);
		outmap.put("deal_gu_cnt", guCnt);
		outmap.put("deal_gu_avg", guAvg);
		

		String json = gson.toJson(outmap);

		try {
			PrintWriter out = response.getWriter();
			out.print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

}
