const btnOk = document.getElementById("btnOk");
const btnCancel = document.getElementById("btnCancel");
var pArr = [];
let arr = {};



function add() {
    arr.navn = document.getElementById("inputNavn").value;
    arr.telf = document.getElementById("inputTelf").value;
    arr.email = document.getElementById("inputEmail").value;
    
    pArr.push(arr)
}

function clear() {
    document.getElementById("inputNavn").value = "";
    document.getElementById("inputTelf").value = "";
    document.getElementById("inputEmail").value = "";
}

function okClick() {
    add();
    clear();
    console.log(arr)
}

btnOk.addEventListener("click", okClick);
btnCancel.addEventListener("click", clear)


