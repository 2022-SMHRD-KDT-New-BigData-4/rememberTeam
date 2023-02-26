package com.smhrd.model.DAO;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.database.SqlSessionManager;
import com.smhrd.model.VO.GJ_CC_VO;

public class GJ_CC_DAO {
	
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactory();

	public List<GJ_CC_VO> selectGJ_CC() {
		List<GJ_CC_VO> result = null;
		// 1. session 가져오기
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		try {
			// 2. session 사용하기(mapper파일에 있는 기능 사용)
			// <> : 제네릭 기법
			// 클래스 내부에서 사용 가능한 자료형을 외부에서 지정할 수 있는 기법
			result = sqlSession.selectList("selectGJ_CC");
		} finally {
			// 3. session 반납
			sqlSession.close();
		}
		// 4. 결과값 반환
		return result;

	}
}
