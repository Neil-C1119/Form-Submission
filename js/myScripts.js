//Lots o' variables
const info = document.getElementById("info");
const nameField = document.getElementById("name");
const mailField = document.getElementById("mail");
const nameInput = nameField.value;
const mailInput = mailField.value;
const job = document.getElementById("title");
const otherOption = document.getElementById("otherOption");
const otherOptionField = document.getElementById("otherOptionField");
const otherOptionInput = otherOptionField.value;
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
let zip = document.getElementById("zip");
let cvv = document.getElementById("cvv");
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
    if (nameInput.length >= 1) {
        nameField.className = "";
    }
    else if (nameInput.length === 0) {
        nameField.className = "invalid";
    }
    console.log(nameInput.value);
});

mailField.addEventListener("change", () => {
    if (mailInput.length >= 1) {
        mailField.className = "invalid";
    }
    else {
        mailField.className = "";
    }
});

//"Other" field
otherOptionField.addEventListener("change", () => {
    if (otherOptionInput.length > 1) {
        otherOptionField.className = "invalid";
    }
    else if (otherOptionInput.length === 0) {
        otherOptionField.className = "";
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

paymentMethod.addEventListener("change", () => {
    if (paymentMethod.value === "credit card") {
        if (ccNum.value.length >= 13 && ccNum.value.length <= 16) {
            ccNum.className = "invalid";
        }
        else {
            ccNum.className = "";
        }
        if (zip.value.length !== 5) {
            zip.className = "invalid";
        }
        else {
            zip.className = "";
        }
        if (cvv.value.length !== 3) {
            cvv.className = "invalid";
        }
        else {
            cvv.className = "";
        }
    }
});

if (nameField.className === "invalid" || mailField.className === "invalid" || activities.className === "activities invalid") {
    registerButton.disabled = true;
}
else if (paymentMethod.value === "credit card") {
    if (ccNum.className === "invalid" || zip.className === "invalid" || cvv.className === "invalid") {
        registerButton.disabled = true;
    }
}

function checkValidity() {
    
}

//Register button
registerButton.addEventListener("click", (e) => {
    e.preventDefault();
});
