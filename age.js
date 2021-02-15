var floatAge, floatDays, intWeeks, floatMonths, intFortnights
floatAge = parseFloat(prompt("Enter you age:"));
floatDays = floatAge * 365.25;
floatMonths = parseFloat(floatAge * 12);
intWeeks = parseInt(floatDays / 7);
intFortnights = parseInt(floatDays / 14);
alert(`Days: ${floatDays} ; Months: ${floatMonths} ; Weeks: ${intWeeks} ; Fortnights: ${intFortnights}`)