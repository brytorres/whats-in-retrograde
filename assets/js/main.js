// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// 2017 planets retrograde data 
var planetData = {
    mercury: {
        
    },
    venus: {

    },
    mars: {

    },
    jupiter: {

    },
    saturn: {

    },
    uranus: {

    },
    neptune: {

    },
    pluto: {

    }
}

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
function validateForm(date, planet){
    if(!date || !planet){
        alert('Please fill in the form.');
        return false;

    // Regex needed?
    
    return true;
}