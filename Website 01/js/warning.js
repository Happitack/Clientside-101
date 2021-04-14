btnLogin.addEventListener("click", function (e) {

    var x = "0"
    if (inputUsername.value.length < 1 && inputPassword.value.length < 1) {x = 0}
    else if (inputUsername.value.length < 1 && inputPassword.value.length > 1) {x = 1}
    else if (inputUsername.value.length > 1 && inputPassword.value.length < 1) {x = 2}
    
    switch (x) {
        case 0:
            text = "Fields can't be empty";
            break;
        case 1:
            text = "Email can't be empty";
            break;
        case 2:
            text = "Password can't be empty";
            break;
        default:
            text = ""
    }
    document.getElementById("WarningMsg").innerHTML = text;    

});