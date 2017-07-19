// Listen for form submit
// document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Display current time and date as [xx-xx-xxxx]
var currentDate = new Date();
var currentDateMonth = currentDate.getMonth();
var monthNum = parseInt(currentDateMonth);
var currentDateDay = currentDate.getUTCDate();
var currentDateYear = currentDate.getUTCFullYear();
var currentDateClean = currentDateMonth + '-' + currentDateDay + '-' + currentDateYear; 


// 2017 planets retrograde data 
// var retrograde = {}

// Month number to string
function numToMon(monthNum){
    var month = "";
    if(monthNum == 00){
        var month = 'jan';
    } else if(monthNum == 01){
        var month = 'feb';
    } else if(monthNum == 02){
        var month = 'mar';
    } else if(monthNum == 03){
        var month = 'apr';
    } else if(monthNum == 04){
        var month = 'may';
    } else if(monthNum == 05){
        var month = 'jun';
    } else if(monthNum == 06){
        var month = 'jul';
    } else if(monthNum == 07){
        var month = 'aug';
    } else if(monthNum == 08){
        var month = 'sep';
    } else if(monthNum == 09){
        var month = 'oct';
    } else if(monthNum == 10){
        var month = 'nov';
    } else {
        var month = 'dec';
    }

    return month;
}

// Generate todays date into string for comparison
var today = numToMon(monthNum) + currentDateDay;

// console.log(mercuryData.direction[1]);

// Fetch current retrograde data
function fetchRetrograde(){

}

// Fetch planets currently in retrograde
function currentlyRetrograde(){

}

function nextRetrogrades(){

}

function byDateResults(){

}

// Validate form
// function validateForm(date, planet){
//     if(!date || !planet){
//         alert('Please fill in the form.');
//         return false;

//     // Regex needed?   
//     return true;
// }