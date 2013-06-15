
// ----------------   Form Validation -------------------
function validateOnSubmit() {
    var meg = new Array();
    var count = 0;

    clearMessage('windStrength');
    clearMessage('airPressure');
    clearMessage('clouds');
    clearMessage('waveHight');
    clearMessage('temperature');
    clearMessage('rain');
    clearMessage('waveDirection');

    if (!validateWindStrength(document.forms.weatherForm.windStrength,'windStrength')){
        return false;
    }
    else {
        meg[count++] = "Correct windStrength.";
    }

    if (!validateAirPressure(document.forms.weatherForm.airPressure, 'airPressure')) {
        return false;
    }
    else {
        meg[count++] = "Correct airPressure.";
    }

    if (!validateClouds(document.forms.weatherForm.clouds, 'clouds')) {
        return false;
    }
    else {
        meg[count++] = "Correct clouds.";
    }

    if (!validateWaveHight(document.forms.weatherForm.waveHight, 'waveHight')) {
        return false;
    }
    else {
        meg[count++] = "Correct waveHight.";
    }

    if (!validateTemperature(document.forms.weatherForm.temperature, 'temperature')) {
        return false;
    }
    else {
        meg[count++] = "Correct temperature.";
    }

    if (!validateRain(document.forms.weatherForm.rain, 'rain')) {
        return false;
    }
    else {
        meg[count++] = "Correct rain.";
    }

    if (!validateWaveDirection(document.forms.weatherForm.waveDirection, 'waveDirection')) {
        return false;
    }
    else {
        meg[count++] = "Correct waveDirection.";
    }

            var messages = "";
            for (var i = 0; i < meg.length; i++) {
                messages = messages + meg[i];
                messages = messages + "\n";
            }

            return true;
}

// ----------------   ClearMessage -------------------
            function clearMessage(infofield) {
                //msg(infofield, "", "");
              //  console.log(infofield);
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
                    //remove error-node  removeErro(valdies)
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




