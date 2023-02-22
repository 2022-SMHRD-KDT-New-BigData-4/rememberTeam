package com.smhrd.model.VO;

public class GJ_PS_VO {

	private int ps_seq;
	private String ps_nm;
	private String ps_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_PS_VO(int ps_seq, String ps_nm, String ps_addr, long cortarNo, String dong, double lat, double lng) {
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
