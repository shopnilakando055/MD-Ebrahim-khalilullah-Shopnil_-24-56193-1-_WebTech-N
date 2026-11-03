
function toggleSubmitButton(checkbox) {
    let submitBtn = document.getElementById("submitBtn");
    if (checkbox.checked) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "true");
    }
}

function validateForm() {
    let errorDivs = document.querySelectorAll(".error-msg");
    for (let i = 0; i < errorDivs.length; i++) {
        errorDivs[i].innerHTML = "";
    }

    let finalMsgBox = document.getElementById("finalMessage");
    finalMsgBox.style.display = "none";
    finalMsgBox.innerHTML = "";

    let isValid = true;

    
    let fullName = document.getElementById("fullName").value;
    if (fullName === "") {
        document.getElementById("fullNameError").innerHTML = "Your full name is missing.";
        isValid = false;
    } else if (fullName.length < 3) {
        document.getElementById("fullNameError").innerHTML = "Full name is too short (minimum 3 letters).";
        isValid = false;
    } else {
        let hasSymbolOrDigit = false;
        for (let i = 0; i < fullName.length; i++) {
            let ch = fullName.charAt(i);
            if ((ch >= "0" && ch <= "9") || (!((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || ch === " "))) {
                hasSymbolOrDigit = true;
                break;
            }
        }
        if (hasSymbolOrDigit) {
            document.getElementById("fullNameError").innerHTML = "Digits and symbols are not allowed in the full name.";
            isValid = false;
        }
    }

    
    let ageVal = document.getElementById("age").value;
    let ageNum = Number(ageVal);
    if (ageVal === "" || isNaN(ageNum) || ageNum < 16 || ageNum > 65) {
        document.getElementById("ageError").innerHTML = "Age must be a number from 16 to 65.";
        isValid = false;
    }

    
    let mobile = document.getElementById("mobile").value;
    let isMobileValid = true;
    if (mobile.length !== 11) {
        isMobileValid = false;
    } else if (mobile.indexOf("01") !== 0) {
        isMobileValid = false;
    } else {
        let thirdChar = mobile.charAt(2);
        if (thirdChar < "3" || thirdChar > "9") {
            isMobileValid = false;
        }
        for (let i = 0; i < mobile.length; i++) {
            let ch = mobile.charAt(i);
            if (ch < "0" || ch > "9") {
                isMobileValid = false;
                break;
            }
        }
    }
    if (!isMobileValid) {
        document.getElementById("mobileError").innerHTML = "Enter a valid mobile number (11 digits, starting with 013 to 019).";
        isValid = false;
    }

    
    let email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email cannot be left empty.";
        isValid = false;
    } else {
        let atIndex = email.indexOf("@");
        let dotIndex = email.indexOf(".", atIndex);
        if (email.indexOf(" ") !== -1 || atIndex === -1 || atIndex === 0 || dotIndex === -1) {
            document.getElementById("emailError").innerHTML = "This email does not look right.";
            isValid = false;
        }
    }

    
    let password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Use a password of 8 or more characters.";
        isValid = false;
    } else {
        let hasCapital = false;
        let hasDigit = false;
        for (let i = 0; i < password.length; i++) {
            let ch = password.charAt(i);
            if (ch >= "A" && ch <= "Z") {
                hasCapital = true;
            }
            if (ch >= "0" && ch <= "9") {
                hasDigit = true;
            }
        }
        if (!hasCapital || !hasDigit) {
            document.getElementById("passwordError").innerHTML = "Password needs at least one capital letter and one digit.";
            isValid = false;
        }
    }

    
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "The two passwords are not the same.";
        isValid = false;
    }

    
    let plan = document.getElementById("plan").value;
    if (plan === "Select Plan") {
        document.getElementById("planError").innerHTML = "Please choose a plan.";
        isValid = false;
    }

    
    let startDate = document.getElementById("startDate").value;
    if (startDate === "") {
        document.getElementById("startDateError").innerHTML = "Please pick a start date.";
        isValid = false;
    }

    
    let workoutTimes = document.getElementsByName("workoutTime");
    let selectedWorkoutTime = "";
    for (let i = 0; i < workoutTimes.length; i++) {
        if (workoutTimes[i].checked) {
            selectedWorkoutTime = workoutTimes[i].value;
            break;
        }
    }
    if (selectedWorkoutTime === "") {
        document.getElementById("workoutTimeError").innerHTML = "Please choose a workout time.";
        isValid = false;
    }

    
    let mainTrainer = document.getElementById("mainTrainer").value;
    let backupTrainer = document.getElementById("backupTrainer").value;
    
    if (mainTrainer === "Select Trainer") {
        document.getElementById("mainTrainerError").innerHTML = "Please choose a main trainer.";
        isValid = false;
    }
    if (backupTrainer === "Select Trainer") {
        document.getElementById("backupTrainerError").innerHTML = "Please choose a backup trainer.";
        isValid = false;
    }
    if (mainTrainer !== "Select Trainer" && backupTrainer !== "Select Trainer" && mainTrainer === backupTrainer) {
        document.getElementById("backupTrainerError").innerHTML = "Backup trainer must be different from the main trainer.";
        isValid = false;
    }

    
    let addOnsVal = document.getElementById("familyAddons").value;
    let addOnsNum = Number(addOnsVal);
    if (addOnsVal === "" || isNaN(addOnsNum) || addOnsVal.indexOf(".") !== -1 || addOnsNum < 0 || addOnsNum > 3) {
        document.getElementById("familyAddonsError").innerHTML = "Add-ons must be a whole number from 0 to 3.";
        isValid = false;
    }

    
    if (isValid) {
        let planFee = 0;
        if (plan === "Monthly") planFee = 1500;
        else if (plan === "Quarterly") planFee = 4000;
        else if (plan === "Yearly") planFee = 14000;

        let totalPayable = planFee + (addOnsNum * 500);

        finalMsgBox.style.display = "block";
        finalMsgBox.innerHTML = "Welcome, " + fullName + "! Your " + plan + " membership starts on " + startDate + ". Total payable: " + totalPayable + " Taka.";

        document.getElementById("gymForm").reset();
        document.getElementById("submitBtn").setAttribute("disabled", "true");
    }

    return false; 
}
