package com.smhrd.model.VO;

public class GJ_DEAL_MLT_VO {

	private int mlt_seq;
	private long cortarNo;
	private int deal_year;
	private int deal_month;
	private int deal_dp;
	private int deal_pr;
	private String gu;
	private String dong;
	
	public GJ_DEAL_MLT_VO(int mlt_seq, long cortarNo, int deal_year, int deal_month, int deal_dp, int deal_pr,
			String gu, String dong) {
		this.mlt_seq = mlt_seq;
		this.cortarNo = cortarNo;
		this.deal_year = deal_year;
		this.deal_month = deal_month;
		this.deal_dp = deal_dp;
		this.deal_pr = deal_pr;
		this.gu = gu;
		this.dong = dong;
	}

	public int getMlt_seq() {
		return mlt_seq;
	}

	public void setMlt_seq(int mlt_seq) {
		this.mlt_seq = mlt_seq;
	}

	public long getCortarNo() {
		return cortarNo;
	}

	public void setCortarNo(long cortarNo) {
		this.cortarNo = cortarNo;
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

	public String getGu() {
		return gu;
	}

	public void setGu(String gu) {
		this.gu = gu;
	}

	public String getDong() {
		return dong;
	}

	public void setDong(String dong) {
		this.dong = dong;
	}
	

	
	
	
}


