btnLogin.addEventListener("click", function (e) {

    var x = "0"
    if (inputUsername.value.length < 1 && inputPassword.value.length < 1) {x = 0}
    else if (inputUsername.value.length < 1 && inputPassword.value.length > 1) {x = 1}
    else if (inputUsername.value.length > 1 && inputPassword.value.length < 1) {x = 2}
    else if (inputPassword.value.length < 7) {x = 3}
    else  {x = 4}
    
    switch (x) {
        case 0:
            text = "Please enter your credentials above";
            break;
        case 1:
            text = "Email can't be empty";
            break;
        case 2:
            text = "Password can't be empty";
            break;
        case 3:
            text = "Password is too short";
            break;
        case 4:
            text = "";
            break;
        default:
            text = ""
    }
    document.getElementById("WarningMsg").innerHTML = text;    

});