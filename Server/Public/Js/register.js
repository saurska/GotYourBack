
var Pass = document.getElementById("Password");
console.log(Pass);

var ConfirmPass = document.getElementById("Re_Password");

var message = document.getElementById("message");
message.style.color = "red";

PassLength =Pass.value.length;
// console.log("value of pass.value = ",typeof(Pass.value.length));
function Validate() {
    if (ConfirmPass.value != Pass.value) {
        message.innerHTML = "Password does not match";
        console.log(ConfirmPass.value, Pass.value);

        return false;
    }
    if(Pass.value==""){
        message.innerHTML = "**Fill the password**";
        return false;
    }

    if((Pass.value.length < 5) || (Pass.value.length > 15)){
        message.innerHTML = "Password must be greater than 5 and less than 15 characters";
        
        return false;
    }
    else{
        return true;
    }

    
}


