package com.smhrd.model.VO;

public class GJ_CS_VO {

	private int cs_seq;
	private String cs_nm;
	private String cs_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_CS_VO(int cs_seq, String cs_nm, String cs_addr, long cortarNo, String dong, double lat, double lng) {
		this.cs_seq = cs_seq;
		this.cs_nm = cs_nm;
		this.cs_addr = cs_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getCs_seq() {
		return cs_seq;
	}

	public void setCs_seq(int cs_seq) {
		this.cs_seq = cs_seq;
	}

	public String getCs_nm() {
		return cs_nm;
	}

	public void setCs_nm(String cs_nm) {
		this.cs_nm = cs_nm;
	}

	public String getCs_addr() {
		return cs_addr;
	}

	public void setCs_addr(String cs_addr) {
		this.cs_addr = cs_addr;
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
