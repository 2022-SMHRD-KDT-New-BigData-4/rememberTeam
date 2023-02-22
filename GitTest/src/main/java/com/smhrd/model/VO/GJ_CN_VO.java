package com.smhrd.model.VO;

public class GJ_CN_VO {

	private int cn_seq;
	private String cn_nm;
	private String cn_addr;
	private long cortarNo;
	private String dong;
	private	double lat;
	private double lng;
	
	public GJ_CN_VO(int cn_seq, String cn_nm, String cn_addr, long cortarNo, String dong, double lat, double lng) {
		this.cn_seq = cn_seq;
		this.cn_nm = cn_nm;
		this.cn_addr = cn_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getCn_seq() {
		return cn_seq;
	}

	public void setCn_seq(int cn_seq) {
		this.cn_seq = cn_seq;
	}

	public String getCn_nm() {
		return cn_nm;
	}

	public void setCn_nm(String cn_nm) {
		this.cn_nm = cn_nm;
	}

	public String getCn_addr() {
		return cn_addr;
	}

	public void setCn_addr(String cn_addr) {
		this.cn_addr = cn_addr;
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
