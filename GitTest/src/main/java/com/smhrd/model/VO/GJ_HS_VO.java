package com.smhrd.model.VO;

public class GJ_HS_VO {

	private int hs_seq;
	private String hs_nm;
	private String hs_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_HS_VO(int hs_seq, String hs_nm, String hs_addr, int cortarNo, String dong, int lat, int lng) {
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
