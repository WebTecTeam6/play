
// ----------------   Form Validation -------------------

function validateTrip() {
	var meg = new Array();
	var count = 0;
	var valid = new Boolean(true);
	
    if (!validateLatitude(document.forms.tripForm.lat, 'lat')){
    	valid=false;
 	}
 	else {
 		meg[count++] = "Correct latitude.";
 	}
    i
    if (!validateLongitude(document.forms.tripForm.lng, 'lng')){
    	valid=false;
 	}
 	else {
 		meg[count++] = "Correct longitude.";
 	}
    
    var messages = "";
    for (var i = 0; i < meg.length; i++) {
        messages = messages + meg[i];
        messages = messages + "\n";
    }

    if(valid==true){
    	return true;
    }else{
    	return false;
    }
}

function validateOnSubmit() {
    var meg = new Array();
    var count = 0;
    var valid = new Boolean(true);
    

    
    if (!validateWindStrength(document.forms.weatherForm.windStrength,'windStrength')){
       valid=false;
    }
    else {
        meg[count++] = "Correct windStrength.";
    }

    if (!validateAirPressure(document.forms.weatherForm.airPressure, 'airPressure')) {
    	valid=false;
    	//return false;
    }
    else {
        meg[count++] = "Correct airPressure.";
    }

    if (!validateClouds(document.forms.weatherForm.clouds, 'clouds')) {
    	valid=false;
    }
    else {
        meg[count++] = "Correct clouds.";
    }

    if (!validateWaveHight(document.forms.weatherForm.waveHight, 'waveHight')) {
    	valid=false;
    }
    else {
        meg[count++] = "Correct waveHight.";
    }

    if (!validateTemperature(document.forms.weatherForm.temperature, 'temperature')) {
    	valid=false;
    }
    else {
        meg[count++] = "Correct temperature.";
    }

    if (!validateRain(document.forms.weatherForm.rain, 'rain')) {
        valid=false;
    }
    else {
        meg[count++] = "Correct rain.";
    }

    if (!validateWaveDirection(document.forms.weatherForm.waveDirection, 'waveDirection')) {
        valid=false;
    }
    else {
        meg[count++] = "Correct waveDirection.";
    }

	var messages = "";
        for (var i = 0; i < meg.length; i++) {
            messages = messages + meg[i];
            messages = messages + "\n";
        }
   

    if(valid==true){
        return true;
    }else{
    	return false;
    }
}


// latitude validation 
function validateLatitude(valfield, infofield){
	 var regExp = /^[0-9]+\.([0-9])$/;

	    if (valfield.value == "") {
	        msg(infofield, "error", "ERROR: empty field.");
	        return false;
	    }
	    else if (regExp.test(valfield.value) == false) {
	        msg(infofield, "error", "ERROR: non-number character(s) found.");
	        return false;
	    }
	    else {
	    	clear_error_msg(infofield);
	        return true;
	    }
}

function validateLongitude(valfield, infofield){
	 var regExp = /^[0-9]+\.([0-9])$/;

	    if (valfield.value == "") {
	        msg(infofield, "error", "ERROR: empty field.");
	        return false;
	    }
	    else if (regExp.test(valfield.value) == false) {
	        msg(infofield, "error", "ERROR: non-number character(s) found.");
	        return false;
	    }
	    else {
	    	clear_error_msg(infofield);
	        return true;
	    }
}


//Wind Strength Validation
function validateWindStrength(valfield, infofield) {

    var regExp = /^[0-9]+\.([0-9])$/;

    if (valfield.value == "") {
        msg(infofield, "error", "ERROR: empty field.");
        return false;
    }
    else if (regExp.test(valfield.value) == false) {
        msg(infofield, "error", "ERROR: non-number character(s) found.");
        return false;
    }
    else {
    	clear_error_msg(infofield);
        return true;
    }
}

//Air Pressure Validation
function validateAirPressure(valfield, infofield) {
    var regExp = /^[0-9]+\.([0-9])$/;

    if (valfield.value == "") {
        msg(infofield, "error", "ERROR: empty field.");
        return false;
    }
    else if (regExp.test(valfield.value) == false) {
        msg(infofield, "error", "ERROR: non-number character(s) found.");
        return false;
    }
    else {
    	clear_error_msg(infofield);
        return true;
    }
}

//Cloud Validation
function validateClouds(valfield, infofield) {
    var regExp = /^([A-Za-z])$/;

    if (valfield.value == "") {
        msg(infofield, "error", "ERROR: empty field.");
        return false;
    }
    else if (regExp.test(valfield.value) == false) {

        msg(infofield, "error", "ERROR: non alphabetical character(s) found.");
        return false;
    }
    else {
    	clear_error_msg(infofield);
        return true;
    }
}



//Wave Hight Validation
function validateWaveHight(valfield, infofield) {
    var regExp = /^[0-9]+\.([0-9])$/;

    if (valfield.value == "") {
        msg(infofield, "error", "ERROR: empty field.");
        return false;
    } else if (regExp.test(valfield.value) == false) {
        msg(infofield, "error", "ERROR: non-number character(s) found.");
        return false;
    } else {
    	clear_error_msg(infofield);
        return true;
    }
}

//Temperature Validation
function validateTemperature(valfield, infofield) {
    var regExp = /^[0-9]+\.([0-9])$/;

    if (valfield.value == "") {
        msg(infofield, "error", "ERROR: empty field.");
        return false;
    } else if (regExp.test(valfield.value) == false) {
        msg(infofield, "error", "ERROR: non-number character(s) found.");
        return false;
    } else {
    	clear_error_msg(infofield);
        return true;
    }
}

//Rain Validation
function validateRain(valfield, infofield) {
    var regExp = / ---------- $/;

    if (valfield.value == "") {
        msg(infofield, "error", "ERROR: empty field.");
        return false;
    } else if (regExp.test(valfield.value) == false) {
        msg(infofield, "error", "Error Message.");
        return false;
    } else {
    	clear_error_msg(infofield);
        return true;
    }
}

//Wave Direction Validation
function validateWaveDirection(valfield, infofield) {
    var regExp = /^[a-zA-Z]$/;

    if (valfield.value == "") {
        msg(infofield, "error", "ERROR: empty field.");
        return false;
    } else if (regExp.test(valfield.value) == false) {
        msg(infofield, "error",
                "ERROR: non-letter character(s) found.");
        return false;
    } else {
    	clear_error_msg(infofield);
        return true;
    }
}



function msg(fld, msgtype, message) {
    var elem = document.getElementById(fld);

    if($(elem).next().hasClass('alert-error')) {
    	$(elem).next().remove();
    }
    elem.className = msgtype;
    $(elem).after('<div class="alert-error">' + message + '</div>') ;
}


function clear_error_msg(fId){
	var elem = document.getElementById(fId);

	if($(elem).next().hasClass('alert-error')) {
		$(elem).next().remove();
	}
}

