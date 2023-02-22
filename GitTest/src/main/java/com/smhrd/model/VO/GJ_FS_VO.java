package com.smhrd.model.VO;

public class GJ_FS_VO {

	private int fs_seq;
	private String fs_nm;
	private String fs_addr;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_FS_VO(int fs_seq, String fs_nm, String fs_addr, int cortarNo, String dong, int lat, int lng) {
		this.fs_seq = fs_seq;
		this.fs_nm = fs_nm;
		this.fs_addr = fs_addr;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}

	public int getFs_seq() {
		return fs_seq;
	}

	public void setFs_seq(int fs_seq) {
		this.fs_seq = fs_seq;
	}

	public String getFs_nm() {
		return fs_nm;
	}

	public void setFs_nm(String fs_nm) {
		this.fs_nm = fs_nm;
	}

	public String getFs_addr() {
		return fs_addr;
	}

	public void setFs_addr(String fs_addr) {
		this.fs_addr = fs_addr;
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
