package com.smhrd.model.VO;

public class GJ_DEAL_AT_VO {

	private int deal_seq;
	private long cortarNo;
	private String dong;
	private String deal_at_type;
	private int deal_year;
	private int deal_month;
	private int deal_dp;
	private int deal_pr;
	
	public GJ_DEAL_AT_VO(int deal_seq, long cortarNo, String dong, String deal_at_type, int deal_year, int deal_month,
			int deal_dp, int deal_pr) {
		this.deal_seq = deal_seq;
		this.cortarNo = cortarNo;
		this.dong = dong;
		this.deal_at_type = deal_at_type;
		this.deal_year = deal_year;
		this.deal_month = deal_month;
		this.deal_dp = deal_dp;
		this.deal_pr = deal_pr;
	}

	public int getDeal_seq() {
		return deal_seq;
	}

	public void setDeal_seq(int deal_seq) {
		this.deal_seq = deal_seq;
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

	public String getDeal_at_type() {
		return deal_at_type;
	}

	public void setDeal_at_type(String deal_at_type) {
		this.deal_at_type = deal_at_type;
	}

	public int getDeal_year() {
		return deal_year;
	}

	public void setDeal_year(int deal_year) {
		this.deal_year = deal_year;
	}

	public int getDeal_month() {
		return deal_month;
	}

	public void setDeal_month(int deal_month) {
		this.deal_month = deal_month;
	}

	public int getDeal_dp() {
		return deal_dp;
	}

	public void setDeal_dp(int deal_dp) {
		this.deal_dp = deal_dp;
	}

	public int getDeal_pr() {
		return deal_pr;
	}

	public void setDeal_pr(int deal_pr) {
		this.deal_pr = deal_pr;
	}
	
	
	
}


