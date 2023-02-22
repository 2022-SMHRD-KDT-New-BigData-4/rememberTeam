package com.smhrd.model.VO;

public class GJ_HS_VO {

	private int hs_seq;
	private String hs_nm;
	private String hs_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_HS_VO(int hs_seq, String hs_nm, String hs_addr, long cortarNo, String dong, double lat, double lng) {
		this.hs_seq = hs_seq;
		this.hs_nm = hs_nm;
		this.hs_addr = hs_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getHs_seq() {
		return hs_seq;
	}

	public void setHs_seq(int hs_seq) {
		this.hs_seq = hs_seq;
	}

	public String getHs_nm() {
		return hs_nm;
	}

	public void setHs_nm(String hs_nm) {
		this.hs_nm = hs_nm;
	}

	public String getHs_addr() {
		return hs_addr;
	}

	public void setHs_addr(String hs_addr) {
		this.hs_addr = hs_addr;
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
