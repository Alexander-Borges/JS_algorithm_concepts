var today = "Sunday";
var moodLevel =200;

if(today == "Friday" && moodLevel >= 100)
{
    goDancing();
}

function callUber() {
    console.log("Calling the Uber...")
}

var raining = true;
var distanceMiles = 5;

if(raining == true || distanceMiles > 3)
{
    callUber();
}


var snowing = false;

if(!snowing)
{
    bravelyDonSomeShort();
}