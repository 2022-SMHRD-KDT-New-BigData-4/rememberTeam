package com.smhrd.model.VO;

public class GJ_METRO_VO {
	
	private int metro_seq;
	private String metro_nm;
	private String metro_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_METRO_VO(int metro_seq, String metro_nm, String metro_addr, long cortarNo, String dong, double lat,
			double lng) {
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
