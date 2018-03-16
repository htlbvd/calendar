function a(year,month) {
	var day=1;
	if (month<=2) {
		year--;
		month+=12;
	}
	var week = (1+2*month+3*(month+1)/5+year+year/4-year/100+year/400+1)%7;
	return parseInt(week);//0为周日
}