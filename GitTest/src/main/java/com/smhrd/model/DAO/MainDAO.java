package com.smhrd.model.DAO;

import java.sql.Array;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.database.SqlSessionManager;
import com.smhrd.model.VO.MainVO;


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
	
	public int mainChart(Map<String, Object> ym) {
		
		int cnt = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		try {
			cnt = sqlSession.selectOne("ofctCnt", ym);
		} finally {
			sqlSession.close();
		}

		return cnt;
	}

	public int[] MouseoverCnt(MainVO[] vo) {
		
		int cnt[] = new int[14];
		for (int i = 0; i < cnt.length; i++) {
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			try {
				cnt[i] = sqlSession.selectOne("MouseoverCnt", vo[i]);
			} finally {
				sqlSession.close();
			}
		}
		
		return cnt;
	}
	
	public int MouseoverRsCnt(MainVO vo) {
		
		int cnt = 0;
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		try {
			cnt = sqlSession.selectOne("MouseoverRsCnt", vo);
		} finally {
			sqlSession.close();
		}
		
		return cnt;
	}
}