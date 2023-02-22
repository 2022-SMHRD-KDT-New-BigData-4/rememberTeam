package com.smhrd.model.VO;

public class GJ_PH_VO {

	private int ph_seq;
	private String ph_nm;
	private String ph_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_PH_VO(int ph_seq, String ph_nm, String ph_addr, int cortarNo, String dong, int lat, int lng) {
		this.ph_seq = ph_seq;
		this.ph_nm = ph_nm;
		this.ph_addr = ph_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getPh_seq() {
		return ph_seq;
	}

	public void setPh_seq(int ph_seq) {
		this.ph_seq = ph_seq;
	}

	public String getPh_nm() {
		return ph_nm;
	}

	public void setPh_nm(String ph_nm) {
		this.ph_nm = ph_nm;
	}

	public String getPh_addr() {
		return ph_addr;
	}

	public void setPh_addr(String ph_addr) {
		this.ph_addr = ph_addr;
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
