/*
Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

Test info: 100 random tests (dates range from January 1st 1940 until now)
*/

const range = (start, end) => [...new Array(end - start + 1).keys()].map((_, i) => (i + start).toString().padStart(4, '0'));

const SIGNS = [
	{dates: range(21, 119), sign: 'Aquarius'}, 
	{dates: range(120, 220), sign: 'Pisces'},
	{dates: range(221, 320), sign: 'Aries'},
	{dates: range(321, 421), sign: 'Taurus'},
	{dates: range(422, 521), sign: 'Gemini'},
	{dates: range(522, 622), sign : 'Cancer'},
	{dates: range(623, 723), sign: 'Leo'},
	{dates: range(724, 823), sign: 'Virgo'},
	{dates: range(824, 923), sign : 'Libra'},
	{dates: range(924, 1022), sign: 'Scorpio'},
	{dates: range(1023, 1121), sign: 'Sagittarius'},
	{dates: [...range(1122, 1131), ...range(1, 20)], sign: 'Capricorn'}
];

function starSign(date) {
	const birth = [date.getMonth(), date.getDate()].map(e => e.toString().padStart(2, '0')).join``;
  	return SIGNS.find(e => e.dates.includes(birth)).sign;
}