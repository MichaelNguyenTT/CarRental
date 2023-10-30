'use strict'

//TODO we know basic car rental = $29.99
//TODO 30% surcharge for drivers under 25. basic car rental / (30%/100);

//TODO create a function to calculate estimated cost and return the value to callback
//TODO create function to display the amount in categories: car rental, options, under 25, total due
window.onload = function() {
    const calculateBtn = document.getElementById('calculateEstimateBtn');
    calculateBtn.onclick = calculateEstimateCost;
}

// calculate total estimate cost
function calculateEstimateCost() {
    // declare variable for input number of days:
    const numberOfDays = document.getElementById("numbOfDays").value;
    //checkbox variables
    const tollTag = document.getElementById('tollTag');
    const GPS = document.getElementById('gps');
    const roadAssist = document.getElementById('roadSideAssist');
    //radio variables
    const hasCheckedYes = document.getElementById('ageYes');
    const hasCheckedNo = document.getElementById('ageNo');

    let carRentalPrice = 29.99;

    //if statement conditions
    // optionsFees
    let tollTagPrice = 0;
    if (tollTag.checked == true) {
        tollTagPrice = 3.95;
    };

    let gpsPrice = 0;
    if (GPS.checked == true) {
        gpsPrice = 2.95;
    };

    let roadAssistPrice = 0;
    if(roadAssist.checked == true) {
        roadAssistPrice = 2.95;
    };
    //calculate total amount for selected options
    let selectedOptionFees = tollTagPrice + gpsPrice + roadAssistPrice;

    // surcharge Fee
    let surchargeFee = 0;
    if (hasCheckedYes.checked) {
        surchargeFee = carRentalPrice * 0.3;
    } else if (hasCheckedNo.checked) {
        surchargeFee;
    };

    // Calculates the total cost 
    let totalCostPerDay = carRentalPrice + surchargeFee + selectedOptionFees;
    let totalCostWithDays = totalCostPerDay * numberOfDays;
   
    // display all the fees including total to HTML
    document.getElementById('carRentalFee').innerHTML = `$${carRentalPrice}`
    document.getElementById('optionsFee').innerHTML = `$${selectedOptionFees.toFixed(2)}`
    document.getElementById('under25Fee').innerHTML = `$${surchargeFee.toFixed(2)}`
    document.getElementById('totalFeeCost').innerHTML = `$${totalCostPerDay.toFixed(2)}`
    document.getElementById('totalWithDays').innerHTML = `$${totalCostWithDays.toFixed(2)}`
};


