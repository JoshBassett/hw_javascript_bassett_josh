var barackObama = {
	firstName: "Barack",
	lastName: "Obama",
	termLength: 6.5 + " years",
	party: "Democrat",
	yearsOfPresidency: "2009-16"
}

var georgeWBush = {
	firstName: "George",
	lastName: "Bush",
	termLength: 8 + " years",
	party: "Republican",
	yearsOfPresidency: "2001-09"
}

var billClinton = {
	firstName: "Bill",
	lastName: "Clinton",
	termLength: 8  + " years",
	party: "Democrat",
	yearsOfPresidency: "1993-01"
}

var georgeHWBush = {
	firstName: "George",
	lastName: "Bush",
	termLength: 4 + " years",
	party: "Republican",
	yearsOfPresidency: "1989-93"
}

var ronaldReagan = {
	firstName: "Ronald",
	lastName: "Reagan",
	termLength: 8 + " years",
	party: "Republican",
	yearsOfPresidency: "1981-1989"
}

var presidents = [ronaldReagan, georgeHWBush, georgeWBush, billClinton, barackObama]

console.log(presidents[3].firstName + " " + presidents[3].lastName)