/* ----------------------- Criar Conta ----------------------- */

/* --------------- Username --------------- */

let usernameInput = document.getElementById("username-input");
let usernameError = document.getElementById("username-error");
let emptyUsernameError = document.getElementById("empty-username");
let nameRegex = /^[a-zA-Zà-úÀ-Ú0-9\-\ \_\.]{4,24}$/;

function checkerUser() {
    let icon1 = document.getElementById("icon1");
    icon1.style.display="inline-block";
    if(usernameInput.value.match(nameRegex)){
        icon1.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon1.style.color = '#2ecc71';
        usernameError.style.display = 'none';
        emptyUsernameError.style.display = 'none';
    }
    else if(usernameInput.value.length == 0){
        icon1.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon1.style.color = '#ff2851';
        usernameError.style.display = 'none';
        emptyUsernameError.style.display = 'block';
    }
    else{
        icon1.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon1.style.color = '#ff2851';
        usernameError.style.display = 'block';
        emptyUsernameError.style.display = 'none';
    }
}

/* --------------- CPF --------------- */
let cpfInput = document.getElementById("cpf-input");
let cpfError = document.getElementById("cpf-error");
let emptyCpfError = document.getElementById("empty-cpf");

function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let firstCheck = (sum * 10) % 11;
    if (firstCheck === 10 || firstCheck === 11) firstCheck = 0;

    if (firstCheck !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    let secondCheck = (sum * 10) % 11;
    if (secondCheck === 10 || secondCheck === 11) secondCheck = 0;

    return secondCheck === parseInt(cpf.charAt(10));
}

function checkerCPF() {
    let iconCpf = document.getElementById("icon-cpf");
    iconCpf.style.display = "inline-block";
    if (cpfInput.value.length === 0) {
        iconCpf.innerHTML = '<i class="ri-error-warning-line"></i>';
        iconCpf.style.color = '#ff2851';
        cpfError.style.display = 'none';
        emptyCpfError.style.display = 'block';
        return false;
    } else if (isValidCPF(cpfInput.value)) {
        iconCpf.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        iconCpf.style.color = '#2ecc71';
        cpfError.style.display = 'none';
        emptyCpfError.style.display = 'none';
        return true;
    } else {
        iconCpf.innerHTML = '<i class="ri-error-warning-line"></i>';
        iconCpf.style.color = '#ff2851';
        cpfError.style.display = 'block';
        emptyCpfError.style.display = 'none';
        return false;
    }
}

// Função de formatação de CPF
function formatCPF(value) {
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length <= 3) {
        return value;
    } else if (value.length <= 6) {
        return value.replace(/(\d{3})(\d+)/, "$1.$2");
    } else if (value.length <= 9) {
        return value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    } else {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");
    }
}

// Evento para aplicar formatação ao CPF enquanto digita
cpfInput.addEventListener("input", function () {
    this.value = formatCPF(this.value);
});

/* --------------- Email --------------- */

let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checkerEmail() {
    let icon2 = document.getElementById("icon2");
    icon2.style.display="inline-block";
    if(emailInput.value.match(mailRegex)){
        icon2.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon2.style.color = '#2ecc71';
        emailError.style.display = 'none';
        emptyEmailError.style.display = 'none';
    }
    else if(emailInput.value.length == 0){
        icon2.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon2.style.color = '#ff2851';
        emailError.style.display = 'none';
        emptyEmailError.style.display = 'block';
    }
    else{
        icon2.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon2.style.color = '#ff2851';
        emailError.style.display = 'block';
        emptyEmailError.style.display = 'none';
    }
}

/* --------------- Senha --------------- */

let passwordInput = document.getElementById("password-input");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");
let passRegex = /^(?=.*[A-Z])(?=.*['"~^!?@#$%&£¢§=*()+\|/_,;:<>\-\.])(?=.*[0-9])(?=.*[a-z]).{8,30}$/;


function checkerPass() {
    let icon3 = document.getElementById("icon3");
    icon3.style.display="inline-block";
    if(passwordInput.value.match(passRegex)){
        icon3.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon3.style.color = '#2ecc71';
        passwordError.style.display = 'none';
        emptyPasswordError.style.display = 'none';
    }
    else if(passwordInput.value.length == 0){
        icon3.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon3.style.color = '#ff2851';
        passwordError.style.display = 'none';
        emptyPasswordError.style.display = 'block';
    }
    else{
        icon3.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon3.style.color = '#ff2851';
        passwordError.style.display = 'block';
        emptyPasswordError.style.display = 'none';
    }
}

/* --------------- Confirme a Senha --------------- */

let verifyInput = document.getElementById("verify-password");
let verifyError = document.getElementById("verify-password-error");
let emptyVerifyError = document.getElementById("empty-verify-password");

function checkerVerify() {
    let icon4 = document.getElementById("icon4");
    icon4.style.display="inline-block";
    if(verifyInput.value.match(passwordInput.value) && (verifyInput.value.length !== 0)){
        icon4.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon4.style.color = '#2ecc71';
        verifyError.style.display = 'none';
        emptyVerifyError.style.display = 'none';
    }
    else if(verifyInput.value.length == 0){
        icon4.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon4.style.color = '#ff2851';
        verifyError.style.display = 'none';
        emptyVerifyError.style.display = 'block';
    }
    else{
        icon4.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon4.style.color = '#ff2851';
        verifyError.style.display = 'block';
        emptyVerifyError.style.display = 'none';
    }

}

/* --------------- Capslock Ligado --------------- */

const warningCapslock = document.querySelector("#warning-capslock");

usernameInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

cpfInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

emailInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

passwordInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

verifyInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

/* --------------- Botão --------------- */

const warningSubmit = document.querySelector("#warning-submit");

function checkerForm() {
    if (!checkerUser() || !checkerEmail() || !checkerPass() || !checkerVerify()) {
        warningSubmit.style.display = 'block';
        setTimeout(function () { warningSubmit.style.display = 'none'; }, 3000);
    }
    else{
        warningSubmit.style.display = "none";
    }
    
}

/* ----------------------- Login ----------------------- */

/* --------------- Username --------------- */

let loginInput = document.getElementById("login-input");
let loginError = document.getElementById("login-error");
let emptyLoginError = document.getElementById("empty-login");
let loginRegex = /^[a-zA-Zà-úÀ-Ú0-9\-\ \_\.]{4,24}$/;

function checkerLogin() {
    let icon5 = document.getElementById("icon5");
    icon5.style.display="inline-block";
    if(loginInput.value.match(loginRegex)){
        icon5.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon5.style.color = '#2ecc71';
        loginError.style.display = 'none';
        emptyLoginError.style.display = 'none';
    }
    else if(loginInput.value.length == 0){
        icon5.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon5.style.color = '#ff2851';
        loginError.style.display = 'none';
        emptyLoginError.style.display = 'block';
    }
    else{
        icon5.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon5.style.color = '#ff2851';
        loginError.style.display = 'block';
        emptyLoginError.style.display = 'none';
    }
}

/* --------------- Senha --------------- */

let passLoginInput = document.getElementById("pass-login-input");
let passLoginError = document.getElementById("pass-login-error");
let emptyPassError = document.getElementById("empty-pass-login");
let passLoginRegex = /^(?=.*[A-Z])(?=.*['"~^!?@#$%&£¢§=*()+\|/_,;:<>\-\.])(?=.*[0-9])(?=.*[a-z]).{8,30}$/;


function checkerPassLogin() {
    let icon6 = document.getElementById("icon6");
    icon6.style.display="inline-block";
    if(passLoginInput.value.match(passLoginRegex)){
        icon6.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon6.style.color = '#2ecc71';
        passLoginError.style.display = 'none';
        emptyPassError.style.display = 'none';
    }
    else if(passLoginInput.value.length == 0){
        icon6.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon6.style.color = '#ff2851';
        passLoginError.style.display = 'none';
        emptyPassError.style.display = 'block';
    }
    else{
        icon6.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon6.style.color = '#ff2851';
        passLoginError.style.display = 'block';
        emptyPassError.style.display = 'none';
    }
}

/* --------------- Botão --------------- */

const warningSubmitLogin = document.querySelector("#warning-submit-login");

function checkerFormLogin() {
    if (!checkerLogin() || !checkerPassLogin()) {
        warningSubmitLogin.style.display = 'block';
        setTimeout(function () { warningSubmitLogin.style.display = 'none'; }, 3000);
    }
    else{
        warningSubmitLogin.style.display = "none";
    }
    
}