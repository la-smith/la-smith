var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var participantError = document.getElementById('participant-error');
var passwdError = document.getElementById('passwd-error');
var submitError = document.getElementById('submit-error');

function validateName() {
	var name = document.getElementById('contact-name').value;
	
	if(name.length == 0) {
		nameError.innerHTML = 'required';
		return false;
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = 'invalid entry';
		return false;
	}
	nameError.innerHTML = 'success';
	return true;
}
function validateParticipant() {
	var participant = document.getElementById('contact-participant').value;
	
	if(participant.length == 0) {
		participantError.innerHTML = 'required';
		return false;
	}
	if(!participant.match(/^[0-9]{300}$/)) {
		participantError.innerHTML = 'invalid entry';
		return false;
	}
	participantError.innerHTML = 'success';
	return true;
}
function validateEmail() {
	var email = document.getElementById('contact-email').value;
	
	if(email.length == 0) {
		emailError.innerHTML = 'required';
		return false;
	}
	if(!email.match(/^[A-Za-z]\._\-[0-9]*[@]{A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = 'invalid entry';
		return false;
	}
	emailError.innerHTML = 'success';
	return true;
}
function validatePasswd() {
	var passwd = document.getElementById('contact-passwd').value;
	var required = 13;
	var left = required - message.length;
	
	if(passwd.length == 0) {
		passwError.innerHTML = 'required';
		return false;
	}
	if(left > 0) {
		passwdError.innerHTML = left + 'too short';
		return false;
	}
	if(!passwd.match(/^[A-Za-z]\._\-[0-9]*\s{13}[A-Za-z]*$/)) {
		nameError.innerHTML = 'invalid entry';
		return false;
	}
	passwdError.innerHTML = 'success';
	return true;
}
function validateForm() {
	if(!validateName() || !validateEmail() || !validateParticipant() || !validatePasswd())
		submitError.style.display = 'block';
		submitError.innerHTML = 'Please correct the fields to submit';
		setTimeout(function(){submitError.style.display = 'none';}, 3000;
		return false;
	
}