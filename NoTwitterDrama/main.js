// https://twitter.com/Totalbiscuit/status/580915908345987072
// 25.03.2015 at 7:15 pm PDT = 26.03.2015 at 2:15 am UTC = 1427336100000ms since since 1970

var START_TIME = 1427336100000;

printTimeSince();
var timerId = setInterval(printTimeSince, 1000);

function printTimeSince()
{
    //Split the time into 4 parts
    var currentTime = Date.now();
    var secondsLeft = Math.abs(currentTime - START_TIME) / 1000;
    var days = Math.floor(secondsLeft / 86400);
    secondsLeft -= days * 86400;
    var hours = Math.floor(secondsLeft / 3600) % 24;
    secondsLeft -= hours * 3600;
    var minutes = Math.floor(secondsLeft / 60) % 60;
    secondsLeft -= minutes * 60;
    var seconds = Math.round(secondsLeft);
    
    //Add leading zeroes if necessary
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    if (days < 10) days = "00" + days;
    else if (days < 100) days = "0" + days;
    else if (days > 999) days = "999";
    
    updateView(document.getElementById('day').getElementsByClassName('timedigit')[0], days.toString());
    updateView(document.getElementById('hrs').getElementsByClassName('timedigit')[0], hours.toString());
    updateView(document.getElementById('min').getElementsByClassName('timedigit')[0], minutes.toString());
    updateView(document.getElementById('sec').getElementsByClassName('timedigit')[0], seconds.toString());
}

function updateView(el, text) {
    el.innerHTML = "";
    for (var i = 0; i < text.length; i++) {
        el.innerHTML += '<span class="letter">'+ text[i] +'</span>';
    }
}