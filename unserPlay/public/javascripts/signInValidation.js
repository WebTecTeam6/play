
// ----------------   SignIn Validation -------------------

function validateSignIn() {
	var meg = new Array();
	var count = 0;
	var valid = new Boolean(true);
	
    if (!validateFirstname(document.forms.signIn.firstname, 'firstname')){
    	valid=false;
 	}
 	else {
 		meg[count++] = "Correct firstname.";
 	}
    
    if (!validateLastname(document.forms.signIn.lastname, 'lastname')){
    	valid=false;
 	}
 	else {
 		meg[count++] = "Correct longitude.";
 	}
    
    if (!validateAge(document.forms.signIn.age, 'age')){
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

// firstname validation 
function validateFirstname(valfield, infofield){
	 var regExp = /[A-Z]{1}[a-z]{0,14}$/;

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

// lastname validation
function validateLastname(valfield, infofield){
	 var regExp = /[A-Z]{1}[a-z]{0,14}$/;

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

// age validation
function validateAge(valfield, infofield){
	 var regExp = /[0-9]{1,2}$/;

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

