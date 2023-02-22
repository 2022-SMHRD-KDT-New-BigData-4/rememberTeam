package com.smhrd.model.VO;

public class GJ_PS_VO {

	private int ps_seq;
	private String ps_nm;
	private String ps_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_PS_VO(int ps_seq, String ps_nm, String ps_addr, int cortarNo, String dong, int lat, int lng) {
		this.ps_seq = ps_seq;
		this.ps_nm = ps_nm;
		this.ps_addr = ps_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getPs_seq() {
		return ps_seq;
	}

	public void setPs_seq(int ps_seq) {
		this.ps_seq = ps_seq;
	}

	public String getPs_nm() {
		return ps_nm;
	}

	public void setPs_nm(String ps_nm) {
		this.ps_nm = ps_nm;
	}

	public String getPs_addr() {
		return ps_addr;
	}

	public void setPs_addr(String ps_addr) {
		this.ps_addr = ps_addr;
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
