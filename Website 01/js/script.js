const inputUsername = document.getElementById("InputUsername");
const inputPassword = document.getElementById("InputPassword");
const warningMsg = document.getElementById("WarningMsg");
const btnLogin = document.getElementById("btnLogin");

if (inputPassword.selected = true) {
    
    btnLogin.addEventListener("click", function (e) {
        let usr = inputPassword.value.length;
      
        if (usr > 0) {
            inputPassword.style.border = ""; } 
        else {
          inputPassword.style.border = "2px dotted red";
          inputPassword.focus();}
      });
      
      inputPassword.addEventListener("keyup", function (e) {
        if (this.value.length > 1) {
          this.style.border = "";}
        else input.style.border = "2px dotted red";}
        );
}

if (inputUsername.selected = true) {

    btnLogin.addEventListener("click", function (e) {
        let usr = InputUsername.value.length;
      
        if (usr > 0) {
          inputUsername.style.border = ""; } 
        else {
          inputUsername.style.border = "2px dotted red";
          inputUsername.focus();}
      });
      
      inputUsername.addEventListener("keyup", function (e) {
        if (this.value.length > 1) {
          this.style.border = "";}
        else input.style.border = "2px dotted red";}
        );
    
}

function validateEmail() {
    var retVal = false;
    let rx = /^[a-z]{2,}$/i;
    let m = mail.value.match(rx);

    if (m = true)
    {
        retVal = true;
    }
    return retVal;
}


function validatePassword(){
var retVal = false;
let rx = /^\w{8,22}$/;
let m = pwd.value.match(rx)

if (m = true){
    retVal = true;
}
return retVal;
}