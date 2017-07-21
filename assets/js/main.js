// Fetch retrograde dateInfo for whole file.
// $.getScript('/assets/js/retrogradeData.js', function(){

// Listen for form submit
// document.getElementById('retrogradeResults').addEventListener('submit', saveBookmark);

// Display current time and date as [xx-xx-xxxx]
var currentDate = new Date();
var currentDateMonth = currentDate.getMonth();
var monthNum = parseInt(currentDateMonth);
var currentDateDay = currentDate.getUTCDate();
var currentDateYear = currentDate.getUTCFullYear();
var currentDateClean = currentDateMonth + '-' + currentDateDay + '-' + currentDateYear;

// Month number to string
function numToMon(monthNum){
    var month = "";
    if(monthNum == 00){var month = 'jan';}
    else if(monthNum == 01){var month = 'feb';} 
    else if(monthNum == 02){var month = 'mar';} 
    else if(monthNum == 03){var month = 'apr';} 
    else if(monthNum == 04){var month = 'may';} 
    else if(monthNum == 05){var month = 'jun';} 
    else if(monthNum == 06){var month = 'jul';} 
    else if(monthNum == 07){var month = 'aug';} 
    else if(monthNum == 08){var month = 'sep';} 
    else if(monthNum == 09){var month = 'oct';} 
    else if(monthNum == 10){var month = 'nov';} 
    else {var month = 'dec';}
    return month;
}

// Generate todays date into string for comparison
var today = numToMon(monthNum) + currentDateDay;


// Fetch current retrograde data
function fetchRetrograde(date){
    // Get Output ID
    var currentlyRetrograde = document.getElementById('currentlyRetrograde');
    var todayInfo = document.getElementById('todayInfo');

    // Display the dates info
    todayInfo.innerHTML = '<h4>' + currentDateClean + '</h4>';

    // Build Output
    currentlyRetrograde.innerHTML = '';
    console.log(today);

    // Iterate through all dates
    for(var key in dateInfo){
        if (key == today){
            if (!dateInfo.hasOwnProperty(key)) {
                continue;
            }
            var planets = dateInfo[key].planets;
            var direction = dateInfo[key].direction;
            var time = dateInfo[key].time;
            var sign = dateInfo[key].sign;
            var degrees = dateInfo[key].degrees;
            var minutes = dateInfo[key].minutes;

            for(var i = 0; i < planets.length;i++){
                
                // Generates planet direction image tag based on direction string
                var directionToday = direction[i];
                if(directionToday === 'Entering RX Zone'){
                    var directionImg = '<img src="/assets/img/enters.png" alt="Entering RX Zone">';
                }
                if(directionToday === 'In RX Zone'){
                    var directionImg = '<img src="/assets/img/inZone.png" alt="Entering RX Zone">';
                }
                if(directionToday === 'Stationary Retrograde'){
                    var directionImg = '<img src="/assets/img/stationaryRetro.png" alt="Entering RX Zone">';
                }
                if(directionToday === 'Retrograde'){
                    var directionImg = '<img src="/assets/img/retro.png" alt="Entering RX Zone">';
                }
                if(directionToday === 'Stationary Direct'){
                    var directionImg = '<img src="/assets/img/stationaryDirect.png" alt="Entering RX Zone">';
                }
                if(directionToday === 'Direct'){
                    var directionImg = '<img src="/assets/img/direct.png" alt="Entering RX Zone">';
                }
                if(directionToday === 'Leaves RX Zone'){
                    var directionImg = '<img src="/assets/img/leaving.png" alt="Entering RX Zone">';
                }
                console.log(directionImg);

                if(typeof(time[i] == undefined)){
                    var time = ['No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today'];
                } if(typeof(sign == undefined)){
                    var sign = ['No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today'];
                } if(typeof(degrees == undefined)){
                    var degrees = ['No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today'];
                } if(typeof(minutes == undefined)){
                    var minutes = ['No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today', 'No Event Today'];
                }

            currentlyRetrograde.innerHTML +=    '<div class="well">' +
                                                '<h3 class="planet">' +planets[i]+ '</h3>' + 
                                                '<table style="width: 100%; font-size: 14px;color: white;">' +
                                                    '<tr>' +
                                                        '<th>' +'DIRECTION'+ '</th>' +
                                                        '<th>' +'TIME'+ '</th>' +
                                                        '<th>' +'DEGREES'+ '</th>' +
                                                        '<th>' +'SIGN'+ '</th>' +
                                                        '<th>' +'MINUTES'+ '</th>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                        '<td>' +direction[i]+ '<br>' +directionImg+ '</td>' +
                                                        '<td>' +time[i]+ '</td>'  +
                                                        '<td>' +degrees[i]+ '</td>' +
                                                        '<td>' +sign[i]+ '</td>' +
                                                        '<td>' +minutes[i]+ '</td>' +
                                                    '</tr>' +
                                                '</table>'
                                                // '<p>' +direction[i]+ '</p>' + '<br>' +
                                                // '<p>' +time[i]+ '</p>' + '<br>' +
                                                // '<p>' +sign[i]+ '</p>' + '<br>' +
                                                // '<p>' +degrees[i]+ '</p>' + '<br>' +
                                                // '<p>' +minutes[i]+ '</p>' + '<br>' + 
                                                '</div>'

        
            }
        }
    }
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
// });