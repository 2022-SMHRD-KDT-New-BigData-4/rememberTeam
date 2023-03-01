package com.smhrd.model.DAO;

import java.sql.Array;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.database.SqlSessionManager;
import com.smhrd.model.VO.GWANGJU_DONG_VO;
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
	
	public List<Object> MainMarker(String table) {
		
		double lat = 0;
		double lng = 0;
		List<Object> list = null;
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		try {
			list = sqlSession.selectList("MainMarker", table);
		} finally {
			sqlSession.close();
		}
		
		return list;
	}
	
	// 월별 실거래 매물 수량 차트 
		public int mainChartCnt(Map<String, Object> ym) {
			
			int cnt = 0;
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			try {
				cnt = sqlSession.selectOne("dealCnt", ym);
			} finally {
				sqlSession.close();
			}

			return cnt;
		}
		
		// 월별 실거래 매물 평균가 차트 
		public double mainChartAvg(Map<String, Object> sqlParam) {
			
			double avg = 0;
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			try {
				avg = sqlSession.selectOne("dealAvg", sqlParam);
				// 소수점 2번째 반올림
				avg = Double.parseDouble(String.format("%.1f", avg));
			} finally {
				sqlSession.close();
			}

			return avg;
		}
		
		// 구별 1년 실거래 매물 수량 차트
		public int mainChartGUCnt(Map<String, Object> sqlParam) {
			
			int cnt = 0;
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			try {
				cnt = sqlSession.selectOne("dealGuCnt", sqlParam);
			} finally {
				sqlSession.close();
			}

			return cnt;
		}
		
		// 구별 1년 실거래 매물 평균가 차트
		public double mainChartGuAvg(Map<String, Object> sqlParam) {
			
			double avg = 0;
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			try {
				avg = sqlSession.selectOne("dealGuAvg", sqlParam);
				// 소수점 2번째 반올림
				avg = Double.parseDouble(String.format("%.1f", avg));
			} finally {
				sqlSession.close();
			}

			return avg;
		}
		
		// 동 검색 select 옵션 추가
		public List<GWANGJU_DONG_VO> SearchDong(String gu_name) {
			
			List<GWANGJU_DONG_VO> list = null;
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			
			try {
				list = sqlSession.selectList("SearchDong", gu_name);
			} finally {
				sqlSession.close();
			}
			
			return list;
			
			
		}
		
		// 메인 맵 지도 클릭 시 구 번호를 가지고 오기
		public long MainMapClick(String name) {
			
			long result = 0;
			SqlSession sqlSession = sqlSessionFactory.openSession(true);
			try {
				result = sqlSession.selectOne("MainMapClick", name); 
			} finally {
				sqlSession.close();
			}
			
			return result;
		}
}