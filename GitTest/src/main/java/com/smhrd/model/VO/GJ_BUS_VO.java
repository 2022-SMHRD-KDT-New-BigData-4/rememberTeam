package com.smhrd.model.VO;

public class GJ_BUS_VO {

	private int bus_seq;
	private String bus_nm;
	private int cortarNo;
	private String dong;
	private int lat;
	private int lng;
	
	public GJ_BUS_VO(int bus_seq, String bus_nm, int cortarNo, String dong, int lat, int lng) {
		this.bus_seq = bus_seq;
		this.bus_nm = bus_nm;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
	}
	public int getBus_seq() {
		return bus_seq;
	}
	public void setBus_seq(int bus_seq) {
		this.bus_seq = bus_seq;
	}
	public String getBus_nm() {
		return bus_nm;
	}
	public void setBus_nm(String bus_nm) {
		this.bus_nm = bus_nm;
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
