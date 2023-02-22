package com.smhrd.model.VO;

public class GWANGJU_GU_VO {

	String gu;
	int cortarNo;
	String centerlat;
	String centerlng;
	
	public GWANGJU_GU_VO(String gu, int cortarNo, String centerlat, String centerlng) {
		this.gu = gu;
		this.cortarNo = cortarNo;
		this.centerlat = centerlat;
		this.centerlng = centerlng;
	}

	public String getGu() {
		return gu;
	}

	public void setGu(String gu) {
		this.gu = gu;
	}

	public int getCortarNo() {
		return cortarNo;
	}

	public void setCortarNo(int cortarNo) {
		this.cortarNo = cortarNo;
	}

	public String getCenterlat() {
		return centerlat;
	}

	public void setCenterlat(String centerlat) {
		this.centerlat = centerlat;
	}

	public String getCenterlng() {
		return centerlng;
	}

	public void setCenterlng(String centerlng) {
		this.centerlng = centerlng;
	}
	
	
}
