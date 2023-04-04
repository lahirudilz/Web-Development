function validate(){
	let rate = document.forms.data.rate.value;
	let message = document.forms.data.message.value;
	let name = document.forms.data.name.value;
    let phone = document.forms.data.mobile.value;

	let regName = /^[a-zA-Z ]+$/;
	let regPhone = /[0-9]{10}/;

    if (rate == "") {
		window.alert("Please select a rate.");
		rate.focus;
		return false;
	}

    if (message == "" || message.length < 4) {
		window.alert("Please enter a message properly.");
		message.focus;
		return false;
	}

	if (name == "" || !regName.test(name)) {
		window.alert("Please enter your name properly.");
		name.focus;
		return false;
	}
	
	if (phone == "" || !regPhone.test(phone)) {
		alert("Please enter valid phone number.");
		phone.focus;
		return false;
	}

	return true;
}

function showReceive(){

	let message = document.getElementById("received");

	if(message.style.display === "none"){
		message.style.display = "block";
	}
	else{
		message.style.display = "block";
	}
}

function hideSuccess(){
    let message =  document.getElementById("received");

    message.style.display = "none";
}