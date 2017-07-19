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
function fetchRetrograde(){
    // Get Output ID
    var currentlyRetrograde = document.getElementById('currentlyRetrograde');
    // var todaysDate = today;
    // console.log(dateInfo.jan01)
    // Build Output
    currentlyRetrograde.innerHTML = '';

    // Iterate through all dates
    for(var key in dateInfo){
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
            // if(typeof(time[i] == undefined)){
            //     var time = ['', 'No Transition Occuring', 'No Transition Occuring', 'No Transition Occuring', 'No Transition Occuring', 'No Transition Occuring', 'No Transition Occuring', 'No Transition Occuring', 'No Transition Occuring', ];
            // } if(typeof(sign == undefined)){
            //     var sign = [''];
            // } if(typeof(degress == undefined)){
            //     var degress = '';
            // } if(typeof(minutes == undefined)){
            //     var minutes = '';
            // }
            currentlyRetrograde.innerHTML +=    '<div class="well">' +
                                                '<h3>' +planets[i]+ '<h3>' + '<br>' + '<br>' +
                                                '<p>' +direction[i]+ '</p>' + '<br>' +
                                                '<p>' +time[i]+ '</p>' + '<br>' +
                                                '<p>' +sign[i]+ '</p>' + '<br>' +
                                                '<p>' +degrees[i]+ '</p>' + '<br>' +
                                                '<p>' +minutes[i]+ '</p>' + '<br>' + 
                                                '</div>'
                                                
            
        }
    }
        // var planet = dateInfo[i].planet;
    //     var direction = dateInfo[i].direction;
    //     var time = dateInfo[i].time;
    //     var sign = dateInfo[i].sign;
    //     var degrees = dateInfo[i].degrees;
    //     var minutes = dateInfo[i].minutes;

    //     bookmarksResults.innerHTML +=   '<div class="well">' +
    //                                     '<h3>' +planet+ '<h3>' + '<br>' + '<br>' +
    //                                     '<p>' +direction+ '</p>' + '<br>' +
    //                                     '<p>' +time+ '</p>' + '<br>' +
    //                                     '<p>' +sign+ '</p>' + '<br>' +
    //                                     '<p>' +degrees+ '</p>' + '<br>' +
    //                                     '<p>' +minutes+ '</p>' + '<br>'
    //     // Match today with interation results
            
    //         // 
    // }
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