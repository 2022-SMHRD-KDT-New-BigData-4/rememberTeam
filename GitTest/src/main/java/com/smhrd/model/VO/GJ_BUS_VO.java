package com.smhrd.model.VO;

public class GJ_BUS_VO {

	private int bus_seq;
	private String nm;
	private long cortarNo;
	private String dong;
	private double lat;
	private double lng;
	private String addr;
	
	public GJ_BUS_VO(int bus_seq, String nm, long cortarNo, String dong, double lat, double lng, String addr) {
		this.bus_seq = bus_seq;
		this.nm = nm;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.lat = lat;
		this.lng = lng;
		this.addr = addr;
	}

	public int getBus_seq() {
		return bus_seq;
	}

	public void setBus_seq(int bus_seq) {
		this.bus_seq = bus_seq;
	}

	public String getNm() {
		return nm;
	}

	public void setNm(String nm) {
		this.nm = nm;
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

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}
	
	
	
	}
