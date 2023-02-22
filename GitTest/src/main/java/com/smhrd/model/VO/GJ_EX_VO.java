package com.smhrd.model.VO;

public class GJ_EX_VO {

	private int ex_seq;
	private String ex_nm;
	private String ex_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_EX_VO(int ex_seq, String ex_nm, String ex_addr, int cortarNo, String dong, int lat, int lng) {
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

	public int getCortarNo() {
		return cortarNo;
	}

	public void setCortarNo(int cortarNo) {
		this.cortarNo = cortarNo;
	}

	public String getDong() {
		return dong;
	}

	public void setDong(String dong) {
		this.dong = dong;
	}

	public int getLat() {
		return lat;
	}

	public void setLat(int lat) {
		this.lat = lat;
	}

	public int getLng() {
		return lng;
	}

	public void setLng(int lng) {
		this.lng = lng;
	}
	
	
	
	
}
