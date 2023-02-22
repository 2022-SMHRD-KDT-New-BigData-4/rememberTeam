package com.smhrd.database;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SqlSessionManager {
	
	// DAO 안에 있어도 되는 내용이지만
	// 객체화 하여 필요 시에만 사용할 수 있도록
	// Connection에 대한 내용을 따로 분리 -> SqlSessionManager
	
	public static SqlSessionFactory sqlSessionFactory;
	// 객체 생성 시 실행되는 부분
	// : 어떤 객체를 생성하든지 간에, 동일 내용을 공유하게 만들기
	static {
		// 설정 파일 경로 잡기
		String resource = "com/smhrd/database/mybatis-config.xml";
		InputStream inputStream;
		try {
			inputStream = Resources.getResourceAsStream(resource);
			sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	// DAO에서 sqlsessionfactory를 가져갈 수 있게 만드는 메소드 생성
	public static SqlSessionFactory getFactory() {
		return sqlSessionFactory;
	}
	
	
	
}
