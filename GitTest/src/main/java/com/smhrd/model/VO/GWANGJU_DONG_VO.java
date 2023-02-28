package com.smhrd.model.VO;

public class GWANGJU_DONG_VO {

	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	private String gu;
	
	public GWANGJU_DONG_VO(long cortarNo, String dong, double lat, double lng, String gu) {
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
		this.gu = gu;
	}
	public GWANGJU_DONG_VO(long cortarNo, String dong) {
		this.cortarNo = cortarNo;
		this.dong = dong;
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

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLng() {
		return lng;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public String getGu() {
		return gu;
	}

	public void setGu(String gu) {
		this.gu = gu;
	}

	
	
	
}
