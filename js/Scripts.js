//Lots o' variables
const info = document.getElementById("info");
const nameField = document.getElementById("name");
const mailField = document.getElementById("mail");
let notAnEmail = false;
const job = document.getElementById("title");
const otherOption = document.getElementById("otherOption");
const otherOptionField = document.getElementById("otherOptionField");
const shirtOptions = document.getElementsByClassName("shirt")[0];
const colorsJsPuns = document.getElementById("colors-js-puns");
const shirtColors = document.getElementById("color");
const design = document.getElementById("design");
const punsShirt = document.getElementById("puns");
const heartShirt = document.getElementById("heart");
const selectShirt = document.getElementById("selectShirt");
const activities = document.getElementsByClassName("activities")[0];
const activityRegister = document.getElementsByClassName("activityRegister")[0];
const activityError = document.getElementById("activityError");
const activityBoxes = document.getElementById("activityBoxes");
const mainConf = document.getElementById("main");
const frameworks = document.getElementById("jsFrameworks");
const jsLibs = document.getElementById("jsLibs");
const express = document.getElementById("express");
const node = document.getElementById("node");
const buildTools = document.getElementById("buildTools");
const npm = document.getElementById("npm");
const paymentMethod = document.getElementById("payment");
const creditCardPayment = document.getElementById("credit-card");
let ccNum = document.getElementById("cc-num");
let ccTooShort = false;
let ccTooLong = false;
let ccNaN = false;
let zip = document.getElementById("zip");
let zipTooShort = false;
let zipTooLong = false;
let zipNaN = false;
let cvv = document.getElementById("cvv");
let cvvTooShort = false;
let cvvTooLong = false;
let cvvNaN = false;
const payPalPayment = document.getElementById("pay-pal");
const bitcoinPayment = document.getElementById("bit-coin");
var activityCost = 0;
const registerButton = document.getElementsByClassName("submit")[0];

//Focus on name input field & hiding fields
nameField.focus();
nameField.className = "invalid";
mailField.className = "invalid";
otherOptionField.className = "invalid";
paymentMethod.className = "invalid";
ccNum.className = "invalid";
zip.className = "invalid";
cvv.className = "invalid";
otherOptionField.style.display = "none";
colorsJsPuns.style.display = "none";
bitcoinPayment.style.display = "none";
creditCardPayment.style.display = "none";
payPalPayment.style.display = "none";

//Adds a job field if "other" is selected
job.addEventListener("change", () => {
    if (job.value === "other") {
        otherOptionField.style.display = "";
        otherOptionField.className = "invalid";
    }
    else if (job.value !== "other") {
        otherOptionField.style.display = "none";
    }
});

//Shows colors of the specific designs, if neither are selected the box is hidden
design.addEventListener("change", () => {
    if (design.value === "js puns") {
        colorsJsPuns.style.display = "";
        heartShirt.style.display = "none";
        punsShirt.style.display = "";
        selectShirt.style.display = "";
    }
    else if (design.value === "heart js") {
        colorsJsPuns.style.display = "";
        heartShirt.style.display = "";
        punsShirt.style.display = "none";
        selectShirt.style.display = "";
    }
    else if (design.value === "select") {
        colorsJsPuns.style.display = "none";
    }
});

//Append activity error
function appendActivityError() {
    const activityError = document.createElement("p");
    activityError.id = "activityError";
    activityError.style.color = "red";
    activityError.textContent = "Please pick at least one activity";
    activities.appendChild(activityError);
    activities.addEventListener("change", () => {
        if ($("mainConf:checked") || $("frameworks:checked") || $("jsLibs:checked") || $("express:checked") || $("node:checked") || $("buildTools:checked") || $("npm:checked")) {
            activityError.style.display = "none";
        }
        else {
            activityError.style.display = "";
        }
    });
}
appendActivityError();

//Append total cost
function appendCost() {
    const activityTotal = document.createElement("p");
    activityTotal.id = "total";
    activities.appendChild(activityTotal);
}
appendCost();

//Update the total cost
function updateCost(amount) {
    activityCost += amount;
    document.getElementById("total").innerHTML = "Amount due: $" + activityCost;
}

//Adding money to total cost if an activity is checked
mainConf.addEventListener("click", () => {
    if (mainConf.checked) {
        updateCost(200);
    }
    else {
        updateCost(-200);
    }
});

frameworks.addEventListener("click", () => {
    if (frameworks.checked) {
        updateCost(100);
        express.disabled = true;
    }
    else {
        updateCost(-100);
        express.disabled = false;
    }
});

jsLibs.addEventListener("change", () => {
    if (jsLibs.checked) {
        updateCost(100);
        node.disabled = true;
    }
    else {
        updateCost(-100);
        node.disabled = false;
    }
});

express.addEventListener("change", () => {
    if (express.checked) {
        updateCost(100);
        frameworks.disabled = true;
    }
    else {
        updateCost(-100);
        frameworks.disabled = false;
    }
});

node.addEventListener("change", () => {
    if (node.checked) {
        updateCost(100);
        jsLibs.disabled = true;
    }
    else {
        updateCost(-100);
        jsLibs.disabled = false;
    }
});

buildTools.addEventListener("change", () => {
    if (buildTools.checked) {
        updateCost(100);
    }
    else {
        updateCost(-100);
    }
});

npm.addEventListener("change", () => {
    if (npm.checked) {
        updateCost(100);
    }
    else {
        updateCost(-100);
    }
});

//Display payment info for the selected option, otherwise the information is hidden
paymentMethod.addEventListener("change", () => {
    if (paymentMethod.value === "credit card") {
        creditCardPayment.style.display = "";
        payPalPayment.style.display = "none";
        bitcoinPayment.style.display = "none";
    }
    else if (paymentMethod.value === "paypal") {
        payPalPayment.style.display = "";
        creditCardPayment.style.display = "none";
        bitcoinPayment.style.display = "none";
    }
    else if (paymentMethod.value === "bitcoin") {
        bitcoinPayment.style.display = "";
        creditCardPayment.style.display = "none";
        payPalPayment.style.display = "none";
    }
    else {
        bitcoinPayment.style.display = "none";
        creditCardPayment.style.display = "none";
        payPalPayment.style.display = "none";
    }
});

//FORM VALIDATION

//Basic info
nameField.addEventListener("change", () => {
    if (nameField.value.length >= 1) {
        nameField.className = "";
    }
    else if (nameField.value.length === 0) {
        nameField.className = "invalid";
    }
});

mailField.addEventListener("change", () => {
    if (mailField.value.length >= 1) {
        mailField.className = "";
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(mailField.value)) {
            mailField.className = "";
        }
        else {
            notAnEmail = true;
            mailField.className = "invalid";
        }
    }
});

//"Other" field
otherOptionField.addEventListener("change", () => {
    if (otherOptionField.value.length > 1) {
        otherOptionField.className = "";
    }
    else if (otherOptionInput.length === 0) {
        otherOptionField.className = "invalid";
    }
});

//Activities
activities.addEventListener("change", () => {
    if (mainConf.checked || frameworks.checked || jsLibs.checked || express.checked || node.checked || buildTools.checked || npm.checked) {
        $(activityError).hide();
        activities.className = "activities";
    }
    else {
        $(activityError).show();
        activities.className = "activities invalid";
    }
});

//Payment
paymentMethod.addEventListener("change", () => {
    if (paymentMethod.value === "credit card" || paymentMethod.value === "paypal" || paymentMethod.value === "bitcoin") {
        paymentMethod.className = "";
    }
    else {
        paymentMethod.className = "invalid";
    }
});

creditCardPayment.addEventListener("change", () => {
    if (paymentMethod.value === "credit card") {
        if (ccNum.value.length >= 13 && ccNum.value.length <= 16 && isNaN(ccNum.value) === false) {
            ccNum.className = "";
        }
        else {
            if (ccNum.value.length < 13) {
                ccTooShort = true;
                ccNum.className = "invalid";
            }
            else if (ccNum.value.length > 16) {
                ccTooLong = true;
                ccNum.className = "invalid";
            }
            else if (isNaN(ccNum.value) === true) {
                ccNaN = true;
                ccNum.className = "invalid";
            }
            else {
                ccNum.className = "invalid";
            }
        }
        if (zip.value.length === 5 && isNaN(zip.value) === false) {
            zip.className = "";
        }
        else {
            if (zip.value.length < 5) {
                zipTooShort = true;
                zip.className = "invalid";
            }
            else if (zip.value.length > 5) {
                zipTooLong = true;
                zip.className = "invalid";
            }
            else if (isNaN(zip.value) === true) {
                zipNaN = true;
                zip.className = "invalid";
            }
            else {
                zip.className = "invalid";
            }
        }
        if (cvv.value.length === 3 && isNaN(cvv.value) === false) {
            cvv.className = "";
        }
        else {
            if (cvv.value.length < 5) {
                cvvTooShort = true;
                cvv.className = "invalid";
            }
            else if (cvv.value.length > 5) {
                cvvTooLong = true;
                cvv.className = "invalid";
            }
            else if (isNaN(cvv.value) === true) {
                cvvNaN = true;
                cvv.className = "invalid";
            }
            else {
                cvv.className = "invalid";
            }
        }
    }
});

function checkValidity() {
    let errorAlert = ["ERROR!!!"];
    let isThereError = false;
    if (nameField.className === "invalid") {
        errorAlert.push("Please enter a valid name");
        isThereError = true;
    }
    if (mailField.className === "invalid") {
        isThereError = true;
        if (notAnEmail === true) {
            errorAlert.push("Please enter a valid Email");
        }
        else {
            errorAlert.push("Please enter your Email");
        }
    }
    if (job.value === "other") {
        if (otherOptionField.className === "invalid") {
            errorAlert.push("Please enter your alternate job role");
            isThereError = true;
        }
    }
    if (activities.className === "invalid") {
        errorAlert.push("Please select at least one activity");
        isThereError = true;
    }
    if (ccNum.className === "invalid") {
        isThereError = true;
        if (ccTooLong === true) {
            errorAlert.push("Please enter a valid credit-card number(too long)");
        }
        else if (ccTooShort === true) {
            errorAlert.push("Please enter a valid credit-card number(too short)");
        }
        else if (ccNaN === true) {
            errorAlert.push("Please enter a valid credit-card number(not a number)");
        }
        else {
            errorAlert.push("Please enter a valid credit-card number");
        }
    }
    if (zip.className === "invalid") {
        isThereError = true;
        if (zipTooLong === true) {
            errorAlert.push("Please enter a valid zip code(too long)");
        }
        else if (zipTooShort === true) {
            errorAlert.push("Please enter a valid zip code(too short)");
        }
        else if (zipNaN === true) {
            errorAlert.push("Please enter a valid zip code(not a number)");
        }
        else {
            errorAlert.push("Please enter a valid zip code");
        }
    }
    if (cvv.className === "invalid") {
        isThereError = true;
        if (cvvTooLong === true) {
            errorAlert.push("Please enter a valid cvv(too long)");
        }
        else if (cvvTooShort === true) {
            errorAlert.push("Please enter a valid cvv(too short)");
        }
        else if (cvvNaN === true) {
            errorAlert.push("Please enter a valid cvv(not a number)");
        }
        else {
            errorAlert.push("Please enter a valid cvv");
        }
    }
    if (isThereError === true) {
        alert(errorAlert.join("\n"));
    }
    else {
        alert("Registration success!");
    }
}

//Register button
registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidity();
});