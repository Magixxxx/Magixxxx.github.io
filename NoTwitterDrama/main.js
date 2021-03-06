// Timer stuff
// https://twitter.com/Totalbiscuit/status/586494130085330945
// 10.04.2015 at 4:41 am PDT = 10.04.2015 at 11:41 am UTC = 1428666060000ms since since 1970

var START_TIME = 1428666060000;

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

    updateView($('#day > .timedigit')[0], days.toString());
    updateView($('#hrs > .timedigit')[0], hours.toString());
    updateView($('#min > .timedigit')[0], minutes.toString());
    updateView($('#sec > .timedigit')[0], seconds.toString());
}

function updateView(el, text)
{
    el.innerHTML = "";
    for (var i = 0; i < text.length; i++)
    {
        el.innerHTML += '<span class="letter">' + text[i] + '</span>';
    }
}

//About stuff
$('#aboutbutton').on('click', function ()
{
    $('#aboutcontent').fadeIn(100);
});

$('#aboutcontent').on('click', function ()
{
    $('#aboutcontent').fadeOut(100);
});