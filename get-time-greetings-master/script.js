

var today = new Date();
var hourNow = today.getHours();
var greetings;

if (hourNow > 18) {
	greetings = 'Good evening!';
} else if (hourNow > 12) {
	greetings = 'Good afternoon!';
} else if (hourNow > 0) {
	greetings = 'Good morning!'
} else {
	greetings = 'Welcome!';
}

document.write('<h3>' + greetings + '</h3>');

   
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[today.getDay()];
    document.write('<h3>' + 'Today is ' + n + '</h3>');
