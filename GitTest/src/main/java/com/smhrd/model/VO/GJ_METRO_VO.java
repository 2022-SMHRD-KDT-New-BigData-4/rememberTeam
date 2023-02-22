package com.smhrd.model.VO;

public class GJ_METRO_VO {
	
	private int metro_seq;
	private String metro_nm;
	private String metro_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_METRO_VO(int metro_seq, String metro_nm, String metro_addr, int cortarNo, String dong, int lat, int lng) {
		this.metro_seq = metro_seq;
		this.metro_nm = metro_nm;
		this.metro_addr = metro_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getMetro_seq() {
		return metro_seq;
	}

	public void setMetro_seq(int metro_seq) {
		this.metro_seq = metro_seq;
	}

	public String getMetro_nm() {
		return metro_nm;
	}

	public void setMetro_nm(String metro_nm) {
		this.metro_nm = metro_nm;
	}

	public String getMetro_addr() {
		return metro_addr;
	}

	public void setMetro_addr(String metro_addr) {
		this.metro_addr = metro_addr;
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
