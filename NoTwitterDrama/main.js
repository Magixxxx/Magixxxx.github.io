// https://twitter.com/Totalbiscuit/status/580915908345987072
// 25.03.2015 at 7:15 pm PDT = 26.03.2015 at 2:15 am UTC = 1427336100000ms since since 1970

var START_TIME = 1427336100000;

printTimeSince();
var timerId = setInterval(printTimeSince, 1000);

function printTimeSince()
{
    var currentTime = Date.now();
    
    var secondsLeft = Math.abs(currentTime - START_TIME) / 1000;

    var days = Math.floor(secondsLeft / 86400);
    secondsLeft -= days * 86400;

    var hours = Math.floor(secondsLeft / 3600) % 24;
    secondsLeft -= hours * 3600;

    var minutes = Math.floor(secondsLeft / 60) % 60;
    secondsLeft -= minutes * 60;

    var seconds = Math.round(secondsLeft);
    
    document.getElementById('day').getElementsByClassName('timedigit')[0].innerHTML = days;
    document.getElementById('hrs').getElementsByClassName('timedigit')[0].innerHTML = hours;
    document.getElementById('min').getElementsByClassName('timedigit')[0].innerHTML = minutes;
    document.getElementById('sec').getElementsByClassName('timedigit')[0].innerHTML = seconds;
}