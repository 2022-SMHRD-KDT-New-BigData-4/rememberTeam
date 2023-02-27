package com.smhrd.model.VO;

public class GWANGJU_GU_VO {

	private String gu;
	private long cortarNo;
	private double centerlat;
	private double centerlng;
	
	public GWANGJU_GU_VO(String gu, long cortarNo, double centerlat, double centerlng) {
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

	public long getCortarNo() {
		return cortarNo;
	}

	public void setCortarNo(long cortarNo) {
		this.cortarNo = cortarNo;
	}

	public double getCenterlat() {
		return centerlat;
	}

	public void setCenterlat(double centerlat) {
		this.centerlat = centerlat;
	}

	public double getCenterlng() {
		return centerlng;
	}

	public void setCenterlng(double centerlng) {
		this.centerlng = centerlng;
	}
	
	
	
	
}
