package com.smhrd.model.VO;

public class GJ_MS_VO {

	private int ms_seq;
	private String ms_nm;
	private String ms_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_MS_VO(int ms_seq, String ms_nm, String ms_addr, int cortarNo, String dong, int lat, int lng) {
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
