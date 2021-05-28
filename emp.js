
function hideSpouseName(element) {

    if (element.id === "single")
        document.getElementById("status").style.display = "none";
    else
        document.getElementById("status").style.display = "block";

}


function checkingEmptyValues() {

    // Checking validation for all textfields
    if (document.getElementById("first-name").value.length === 0) {
        alert("Enter First Name");
        setTimeout(function(){
            document.getElementById("first-name").focus();
        }, 1);
        return false;
    }
    else if (document.getElementById("last-name").value.length === 0) {
        alert("Enter Last Name");
        setTimeout(()=>{
            document.getElementById("last-name").focus();
        }, 1);
        return false;

    }

    else if (document.getElementsByName("gender")[0].checked === false && document.getElementsByName("gender")[1].checked === false) {
        alert("Select Gender");
        setTimeout(()=>{
            document.getElementsByName("gender")[0].focus();
        }, 1);
        return false;

    }
    else if (document.getElementsByName("marital-status")[0].checked === false && document.getElementsByName("marital-status")[1].checked === false) {
        alert("Select Marital Status");
        setTimeout(()=>{
            document.getElementsByName("marital-status")[0].focus();
        }, 1);
        return false;

    }

    else if(document.getElementById("status").style.display !== "none" && document.getElementById("spouse-name").value.length === 0){
        alert("Select Spouse Name");
        setTimeout(()=>{
            document.getElementById("spouse-name").focus();
        },1);
        return false;

    }

    else if (document.getElementById("tnc").checked === false) {
        alert("Accept Terms and Conditions");
        setTimeout(()=>{
            document.getElementById("tnc").focus();
        },1);
        return false;

    }
    else
        return true;


}


function checkValidation() {
    if(checkingEmptyValues() === false)
    return ;


}