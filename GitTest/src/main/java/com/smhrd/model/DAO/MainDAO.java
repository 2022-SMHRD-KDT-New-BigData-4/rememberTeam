package com.smhrd.model.DAO;

import java.sql.Array;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.database.SqlSessionManager;

public class MainDAO {

	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactory();

	// 인프라 컬럼 테이블 튜플 카운트
	public int[] InfraCnt(String[] table) {

		int[] cnt = new int[14];

		for (int i = 0; i < table.length; i++) {
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			try {
				cnt[i] = sqlSession.selectOne("InfraCnt", table[i]);
			} finally {
				sqlSession.close();
			}
		}

		return cnt;

	}

	// 매물 컬럼 테이블 전월세 카운트
	public int RSCnt(String rs) {

		int cnt = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		try {
			cnt = sqlSession.selectOne("RSCnt", rs);
		} finally {
			sqlSession.close();
		}

		return cnt;
	}
}