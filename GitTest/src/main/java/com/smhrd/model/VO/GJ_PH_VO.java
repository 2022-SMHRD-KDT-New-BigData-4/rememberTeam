package com.smhrd.model.VO;

public class GJ_PH_VO {

	private int ph_seq;
	private String ph_nm;
	private String ph_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_PH_VO(int ph_seq, String ph_nm, String ph_addr, long cortarNo, String dong, double lat, double lng) {
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
