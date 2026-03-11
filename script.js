let input = document.getElementById("password");

input.addEventListener("input", checkStrength);

function checkStrength(){

let password = input.value;
let strength = 0;

let lengthRule = document.getElementById("length");
let upperRule = document.getElementById("upper");
let numberRule = document.getElementById("number");
let specialRule = document.getElementById("special");

if(password.length >= 8){
strength++;
lengthRule.style.color = "green";
}else{
lengthRule.style.color = "gray";
}

if(/[A-Z]/.test(password)){
strength++;
upperRule.style.color = "green";
}else{
upperRule.style.color = "gray";
}

if(/[0-9]/.test(password)){
strength++;
numberRule.style.color = "green";
}else{
numberRule.style.color = "gray";
}

if(/[!@#$%^&*]/.test(password)){
strength++;
specialRule.style.color = "green";
}else{
specialRule.style.color = "gray";
}

let result = document.getElementById("result");
let bar = document.getElementById("strength-bar");

if(strength <= 1){
result.innerHTML = "Weak Password";
bar.style.width = "33%";
bar.style.background = "red";
}

else if(strength <= 3){
result.innerHTML = "Medium Password";
bar.style.width = "66%";
bar.style.background = "orange";
}

else{
result.innerHTML = "Strong Password";
bar.style.width = "100%";
bar.style.background = "green";
}

}

function togglePassword(){

let pass = document.getElementById("password");

if(pass.type === "password"){
pass.type = "text";
}else{
pass.type = "password";
}

}