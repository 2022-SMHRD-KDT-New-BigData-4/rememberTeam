package com.smhrd.model.VO;

public class GJ_EX_VO {

	private int ex_seq;
	private String ex_nm;
	private String ex_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_EX_VO(int ex_seq, String ex_nm, String ex_addr, long cortarNo, String dong, double lat, double lng) {
		this.ex_seq = ex_seq;
		this.ex_nm = ex_nm;
		this.ex_addr = ex_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getEx_seq() {
		return ex_seq;
	}

	public void setEx_seq(int ex_seq) {
		this.ex_seq = ex_seq;
	}

	public String getEx_nm() {
		return ex_nm;
	}

	public void setEx_nm(String ex_nm) {
		this.ex_nm = ex_nm;
	}

	public String getEx_addr() {
		return ex_addr;
	}

	public void setEx_addr(String ex_addr) {
		this.ex_addr = ex_addr;
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
