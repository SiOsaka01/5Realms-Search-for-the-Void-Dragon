//Global Variables used in location.
let orient="north";
let mpr="a1";


function showScreenData(){
	let text = "Total width/height: " + screen.width + "*" + screen.height + "<br>" +
	"Available width/height: " + screen.availWidth + "*" + screen.availHeight + "<br>" +
	"Color depth: " + screen.colorDepth + "<br>" +
	"Color resolution: " + screen.pixelDepth;

	alert(text);
			}

function turnCC90(){//Turns the camera 90 degrees counter clockwise.
	alert("Test this function works!");
	}

function movF(){//Moves one step forward.
	alert("Test this function works!");
	}

function turn90(){//Turns the camera 90 degrees clockwise.
	alert("Test this function works!");
	}

function userPoint(orient,mpr){//Shows msgbox for current Orientation and MapPointReference.
	return orient;
	return mpr;
	alert("You are facing " + orient + " at MapPoints " + mpr);	
	}

