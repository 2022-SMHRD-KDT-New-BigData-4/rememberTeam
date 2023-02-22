package com.smhrd.model.VO;

public class GWANGJU_DONG_VO {

	private long cortarNo;
	private String dong;
	private double centerlat;
	private double centerlng;
	private String gu;

	public GWANGJU_DONG_VO(long cortarNo, String dong, double centerlat, double centerlng, String gu) {
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.centerlat = centerlat;
		this.centerlng = centerlng;
		this.gu = gu;
	}

	public long getCortarNo() {
		return cortarNo;
	}

	public void setCortarNo(long cortarNo) {
		this.cortarNo = cortarNo;
	}

	public String getDong() {
		return dong;
	}

	public void setDong(String dong) {
		this.dong = dong;
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

	public String getGu() {
		return gu;
	}

	public void setGu(String gu) {
		this.gu = gu;
	}
	
	
	
}
