package com.smhrd.model.VO;

public class GJ_SM_VO {

	private int sm_seq;
	private String sm_nm;
	private String sm_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_SM_VO(int sm_seq, String sm_nm, String sm_addr, long cortarNo, String dong, double lat, double lng) {
		this.sm_seq = sm_seq;
		this.sm_nm = sm_nm;
		this.sm_addr = sm_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getSm_seq() {
		return sm_seq;
	}

	public void setSm_seq(int sm_seq) {
		this.sm_seq = sm_seq;
	}

	public String getSm_nm() {
		return sm_nm;
	}

	public void setSm_nm(String sm_nm) {
		this.sm_nm = sm_nm;
	}

	public String getSm_addr() {
		return sm_addr;
	}

	public void setSm_addr(String sm_addr) {
		this.sm_addr = sm_addr;
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
	
	
	
	
	
	
}
