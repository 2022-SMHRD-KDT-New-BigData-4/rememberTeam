package com.smhrd.model.VO;

public class GJ_CN_VO {

	private int cn_seq;
	private String cn_nm;
	private String cn_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_CN_VO(int cn_seq, String cn_nm, String cn_addr, int cortarNo, String dong, int lat, int lng) {
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
