let homeScoreValue = 0;
let guestScoreValue = 0;
let homeElement = document.getElementById("home_scoreValue");
let guestElement = document.getElementById("guest_scoreValue");
homeElement.textContent = homeScoreValue;
guestElement.textContent = guestScoreValue;


function homePlus(count){
    homeScoreValue += count;
    homeElement.textContent = homeScoreValue+"";
    
}

function guestPlus(count){
    guestScoreValue += count;
    guestElement.textContent = guestScoreValue;
}