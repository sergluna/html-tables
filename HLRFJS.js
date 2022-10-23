function validateFirstName() { /* test input for 2-15 allowed characters */
    var fName = document.getElementById("firstName").value;
    var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
    
    if (re1.test(fName)) {
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>Valid</strong>";
        return true;
    }
    else {
        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter valid format</strong>";
        return false;
    }

}

function validateLastName() { /* test input for 2-25 allowed characters */
    var lName = document.getElementById("lastName").value;
    var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;

    if (re2.test(lName)) {
        document.getElementById("lastNamePrompt").style.color = "Green";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>Valid</strong>";
        return true;
    }
    else {
        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter valid format</strong>";
        return false
    }
}

function validatePhone() {
    var phoneNumber = document.getElementById("phone").value;
    var re3 = /^\d{3}-\d{3}-\d{4}$/;

    if (re3.test(phoneNumber)) { /* if input is valid */
        document.getElementById("phonePrompt").style.color = "Green";
        document.getElementById("phonePrompt").innerHTML = "<strong>Valid</strong>";
        return (true);
    }
    else { /* if indut is invalid */
        document.getElementById("phonePrompt").style.color = "Red";
        document.getElementById("phonePrompt").innerHTML = "<strong>Use xxx-xxx-xxxx format</strong>";
        return (false);
    }
}

function validateAddress() {
    var addy = document.getElementById("address").value;
    var re4 = /^[a-zA-Z0-9\s,'-]{5,60}$/;

    if (re4.test(addy)) {/* if input is valid */
        document.getElementById("addressPrompt").style.color = "Green";
        document.getElementById("addressPrompt").innerHTML = "<strong>Valid</strong>";
        return(true);
    }
    else {
        document.getElementById("addressPrompt").style.color = "Red";
        document.getElementById("addressPrompt").innerHTML = "<strong>Please Verify Address</strong>";
        return(false);
    }
}

function validateState() {
    var state = document.getElementById("state").value;
    var re4 = /^[a-zA-Z0-9\s,'-]{2,15}$/;

    if (re4.test(state)) {/* if input is valid */
        document.getElementById("statePrompt").style.color = "Green";
        document.getElementById("statePrompt").innerHTML = "<strong>Valid</strong>";
        return(true);
    }
    else {
        document.getElementById("statePrompt").style.color = "Red";
        document.getElementById("statePrompt").innerHTML = "<strong>Please Verify State</strong>";
        return(false);
    }
}

function validateZip() {
    var zip = document.getElementById("zip").value;
    var re4 = /^[0-9,'-]{5,11}$/;

    if (re4.test(zip)) {/* if input is valid */
        document.getElementById("zipPrompt").style.color = "Green";
        document.getElementById("zipPrompt").innerHTML = "<strong>Valid</strong>";
        return(true);
    }
    else {
        document.getElementById("zipPrompt").style.color = "Red";
        document.getElementById("zipPrompt").innerHTML = "<strong>Please Verify Zip</strong>";
        return(false);
    }
}

function validateHunting() {
    var hunt = document.getElementById("license").value;
    var re4 = /^[0-9,'-]{12}$/;

    if (re4.test(hunt)) {/* if input is valid */
        document.getElementById("hunterPrompt").style.color = "Green";
        document.getElementById("hunterPrompt").innerHTML = "<strong>Valid</strong>";
        return(true);
    }
    else {
        document.getElementById("hunterPrompt").style.color = "Red";
        document.getElementById("hunterPrompt").innerHTML = "<strong>Please Verify License</strong>";
        return(false);
    }
}

function validateLicense() {
    var drive = document.getElementById("driver").value;
    var re4 = /^[0-9,'-]{8}$/;

    if (re4.test(drive)) {/* if input is valid */
        document.getElementById("driverPrompt").style.color = "Green";
        document.getElementById("driverPrompt").innerHTML = "<strong>Valid</strong>";
        return(true);
    }
    else {
        document.getElementById("driverPrompt").style.color = "Red";
        document.getElementById("driverPrompt").innerHTML = "<strong>Please Verify License</strong>";
        return(false);
    }
}


function calcOrder() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var hunt = document.getElementById("license").value;
    var drive = document.getElementById("driver").value;

    document.getElementById("orderConfirm").innerHTML = '<h3>Order Summary:</h3>';
    document.getElementById("orderConfirm").innerHTML += '<p>' + userName.toUpperCase() + '</p>';
    document.getElementById("orderConfirm").innerHTML += '<p>Phone Number:' + " " + phone + '</p>';
    document.getElementById("orderConfirm").innerHTML += '<p>Address:' + " " + address + ', ' + state + ', ' + zip +'</p>';
    document.getElementById("orderConfirm").innerHTML += '<p>Hunting & Fishing License:' + " " + hunt +'</p>';
    document.getElementById("orderConfirm").innerHTML += "<p>Driver's License:" + " " + drive +'</p>'; 
}