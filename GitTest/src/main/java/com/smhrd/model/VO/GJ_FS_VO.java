package com.smhrd.model.VO;

public class GJ_FS_VO {

	private int fs_seq;
	private String fs_nm;
	private String fs_addr;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	
	public GJ_FS_VO(int fs_seq, String fs_nm, String fs_addr, long cortarNo, String dong, double lat, double lng) {
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
