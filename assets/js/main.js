// Listen for form submit - FIX
// document.getElementById('dateForm').addEventListener('submit', byDateResults);

// function byDateResults(d){
//     var today = document.getElementById('date').value;
//     console.log(today);
//     if(!validateForm(date)){
//         return false;
//     }
//     fetchRetrograde(today);
// }

// Display current time and date as [xx-xx-xxxx]
var currentDate = new Date();
var currentDateMonth = currentDate.getMonth();
var monthNum = parseInt(currentDateMonth);
var currentDateDay = currentDate.getUTCDate();
var currentDateYear = currentDate.getUTCFullYear();
var currentDateClean = (currentDateMonth+1) + '-' + currentDateDay + '-' + currentDateYear;

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
    todayInfo.innerHTML = '<h4 class="todayInfo">' + currentDateClean + ' UTC </h4>';

    // Build Output
    currentlyRetrograde.innerHTML = '';

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
                    var directionImg = '<img src="/assets/img/inZone.png" alt="In RX Zone">';
                }
                if(directionToday === 'Stationary Retrograde'){
                    var directionImg = '<img src="/assets/img/stationaryRetro.png" alt="Stationary Retrograde">';
                }
                if(directionToday === 'Retrograde'){
                    var directionImg = '<img src="/assets/img/retro.png" alt="Retrograde">';
                }
                if(directionToday === 'Stationary Direct'){
                    var directionImg = '<img src="/assets/img/stationaryDirect.png" alt="Stationary Direct">';
                }
                if(directionToday === 'Direct'){
                    var directionImg = '<img src="/assets/img/direct.png" alt="Direct">';
                }
                if(directionToday === 'Leaves RX Zone'){
                    var directionImg = '<img src="/assets/img/leaving.png" alt="Leaves RX Zone">';
                }

                if(typeof(time[i] == undefined)){
                    var time = ['<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">'];
                } if(typeof(sign == undefined)){
                    var sign = ['<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">'];
                } if(typeof(degrees == undefined)){
                    var degrees = ['<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">'];
                } if(typeof(minutes == undefined)){
                    var minutes = ['<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">', '<img src="/assets/img/noEvent.png" alt="No Event">'];
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

// Fetch planets moving into in stationary retrograde
function nextRetrogrades(){
}
