package com.smhrd.model.VO;

public class GJ_MS_VO {

	private int ms_seq;
	private String ms_nm;
	private String ms_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_MS_VO(int ms_seq, String ms_nm, String ms_addr, long cortarNo, String dong, double lat, double lng) {
		this.ms_seq = ms_seq;
		this.ms_nm = ms_nm;
		this.ms_addr = ms_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getMs_seq() {
		return ms_seq;
	}

	public void setMs_seq(int ms_seq) {
		this.ms_seq = ms_seq;
	}

	public String getMs_nm() {
		return ms_nm;
	}

	public void setMs_nm(String ms_nm) {
		this.ms_nm = ms_nm;
	}

	public String getMs_addr() {
		return ms_addr;
	}

	public void setMs_addr(String ms_addr) {
		this.ms_addr = ms_addr;
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
