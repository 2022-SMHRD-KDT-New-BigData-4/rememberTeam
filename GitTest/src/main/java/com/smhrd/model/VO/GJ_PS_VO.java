package com.smhrd.model.VO;

public class GJ_PS_VO {

	private int ps_seq;
	private String nm;
	private String addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_PS_VO(int ps_seq, String nm, String addr, long cortarNo, String dong, double lat, double lng) {
		this.ps_seq = ps_seq;
		this.nm = nm;
		this.addr = addr;
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

	public String getNm() {
		return nm;
	}

	public void setNm(String nm) {
		this.nm = nm;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
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
