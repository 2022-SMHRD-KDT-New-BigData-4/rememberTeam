package com.smhrd.model.VO;

public class GJ_CC_VO {

	private int cc_seq;
	private String cc_nm;
	private String cc_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_CC_VO(int cc_seq, String cc_nm, String cc_addr, long cortarNo, String dong, double lat, double lng) {
		this.cc_seq = cc_seq;
		this.cc_nm = cc_nm;
		this.cc_addr = cc_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getCc_seq() {
		return cc_seq;
	}

	public void setCc_seq(int cc_seq) {
		this.cc_seq = cc_seq;
	}

	public String getCc_nm() {
		return cc_nm;
	}

	public void setCc_nm(String cc_nm) {
		this.cc_nm = cc_nm;
	}

	public String getCc_addr() {
		return cc_addr;
	}

	public void setCc_addr(String cc_addr) {
		this.cc_addr = cc_addr;
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
