export function getDate(d){
	let a = new Date(d);
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	let year = a.getFullYear();
	let month = months[a.getMonth()];
	let date = a.getDate();
	if (date < 10) {
		date = "0" + date;
	}
	let time = month + " " + date + " — "  + year;
	return time;
};