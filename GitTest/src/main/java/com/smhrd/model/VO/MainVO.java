package com.smhrd.model.VO;

public class MainVO {

	
	private String gu_name;
	private String table;
	private double lat;
	private double lng;
	
	public MainVO(String gu_name, String table) {
		this.gu_name = gu_name;
		this.table = table;
	}

	
	public MainVO(double lat, double lng) {
		this.lat = lat;
		this.lng = lng;
	}

	public String getName() {
		return gu_name;
	}
	public void setName(String name) {
		this.gu_name = gu_name;
	}
	public String getTable() {
		return table;
	}
	public void setTable(String table) {
		this.table = table;
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
