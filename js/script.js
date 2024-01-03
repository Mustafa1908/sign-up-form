const passwordInput = document.querySelector("#user-password");
const confirmPasswordInput = document.querySelector("#confirm-password");
let submitButton = document.querySelector(".create-account-button");
const passWordDoNotMatch = document.querySelector(".password-no-match");

submitButton.addEventListener("click", function(event) {
    if(passwordInput.value != confirmPasswordInput.value){
        passWordDoNotMatch.textContent = "*Passwords do not match";
        passWordDoNotMatch.style.color = "red";
        passWordDoNotMatch.style.fontSize = "14px";
        event.preventDefault();
        return false;
    }
    else{
    return true;
    }
});