package com.smhrd.model.DAO;


import java.sql.Array;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.database.SqlSessionManager;

public class MainDAO {

	
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactory();
	
	public int[] cnt(String[] table) {
		
		
		int[] infraCnt = new int[12];
		for (int i = 0; i<table.length; i++) {
			
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			int result = 0;
			try {
				infraCnt[i] = sqlSession.selectOne("InfraCnt", table[i]);
			} finally {
				sqlSession.close();
			}
		}
		
		return infraCnt;
		
	}
}