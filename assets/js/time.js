// Display current time and date as [xx-xx-xxxx]
var currentDate = new Date();
var currentDateMonth = currentDate.getUTCMonth();
var monthNum = currentDateMonth;
var currentDateDay = currentDate.getUTCDate();
var currentDateYear = currentDate.getUTCFullYear();
var currentDateClean = currentDateMonth + '-' + currentDateDay + '-' + currentDateYear;
//console.log(new Date().toLocaleString()); 



// Display current time in UTC [Wed, 19 Jul 2017 06:03:26 GMT]
//var utcTime = currentDate.toTimeString();
//var utcTime = currentDate.toUTCString();
//console.log(utcTime);

// Create proper time format - NOT RIGHT
// var hour = currentDate.getUTCHours();
// var hourString = hour.toString();
// var minutes = currentDate.getUTCMinutes();
// var minutesString = minutes.toString();
// var time = hourString + ':' + minutesString
//console.log(time);

// Get user local time [2:04:32 AM]
// var currentLocalTime = currentDate.toLocaleTimeString();
//console.log(currentLocalTime);

var utc_time = '05:15:00 AM'

// Convert to user localtime
function timeConvert(year, month, date, hour, minutes, seconds){
    var ttime = new Date(year, month, date, hour, minutes, seconds)
    // var utcTime = ttime.toUTCString();
    var convertedTime = ttime.toLocaleTimeString();
    return console.log(convertedTime);
}

// timeConvert(2017, 3, 10, 6, 14, 00);