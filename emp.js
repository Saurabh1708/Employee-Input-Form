
function hideSpouseName(element) {

    if (element.id === "single")
        document.getElementById("spouse-name-wrap").style.display = "none";
    else
        document.getElementById("spouse-name-wrap").style.display = "grid";

}


function checkingEmptyValues() {

    // Checking validation for all textfields
    if (document.getElementById("first-name").value.length === 0) {
        alert("Enter First Name");
        setTimeout(function () {
            document.getElementById("first-name").focus();
        }, 1);
        return false;
    }
    else if (document.getElementById("last-name").value.length === 0) {
        alert("Enter Last Name");
        setTimeout(() => {
            document.getElementById("last-name").focus();
        }, 1);
        return false;

    }

    else if (document.getElementsByName("gender")[0].checked === false && document.getElementsByName("gender")[1].checked === false) {
        alert("Select Gender");
        setTimeout(() => {
            document.getElementsByName("gender")[0].focus();
        }, 1);
        return false;

    }
    else if (document.getElementsByName("marital-status")[0].checked === false && document.getElementsByName("marital-status")[1].checked === false) {
        alert("Select Marital Status");
        setTimeout(() => {
            document.getElementsByName("marital-status")[0].focus();
        }, 1);
        return false;

    }

    else if (document.getElementById("spouse-name-wrap").style.display !== "none" && document.getElementById("spouse-name").value.length === 0) {
        alert("Select Spouse Name");
        setTimeout(() => {
            document.getElementById("spouse-name").focus();
        }, 1);
        return false;

    }

    else if (document.getElementById("tnc").checked === false) {
        alert("Accept Terms and Conditions");
        setTimeout(() => {
            document.getElementById("tnc").focus();
        }, 1);
        return false;

    }
    else
        return true;
}

function hasWhiteSpace(s) {

    if (/\s/.test(s) && s !== "") {
        //has whitespace
        return true;
    }
    console.log(false);
    return false;

}

function checkForWhitespaces() {
    //checking if name and spouse name do not contain whitespaces
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const spouseName = document.getElementById("spouse-name");


    if (hasWhiteSpace(firstName.value)) {
        // show alert & focus
        alert("Please Enter First Name with no whitespaces");
        setTimeout(() => {
            firstName.focus();
        }, 1);
        return false;
    }
    else if (lastName.value === null || hasWhiteSpace(lastName.value)) {
        // show alert & focus
        alert("Please Enter Last Name with no whitespaces");
        setTimeout(() => {
            lastName.focus();
        }, 1);
        return false;
    }

    else if (spouseName.value !== "" && hasWhiteSpace(spouseName.value)) {
        alert("Please Enter Spouse Name with no whitespaces");
        setTimeout(() => {
            spouseName.focus();
        }, 1);
        return false;
    }
    else
        return true;

}

function checkValidation() {
    if (checkingEmptyValues() === false)
        return;

    if (checkForWhitespaces() === false) {
        //  whitespaces found
        return;
    }

    document.getElementsByTagName("body")[0].innerHTML= "<h1>Thank you !</h1>"


}