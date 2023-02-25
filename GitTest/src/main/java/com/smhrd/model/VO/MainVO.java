package com.smhrd.model.VO;

public class MainVO {

	
	private String gu_name;
	private String table;
	
	public MainVO(String gu_name, String table) {
		this.gu_name = gu_name;
		this.table = table;
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
	
}
