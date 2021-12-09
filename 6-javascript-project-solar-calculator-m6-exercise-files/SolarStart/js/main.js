/*jslint browser:true */
"use strict";

function addMonths (elem) {
    let annualUseKw=0, dailyUseKw=0, i=0, x=0;
    let months=document.getElementById(elem).getElementsByTagName('input');

    for (i=0; i<months.length; i++) {
    x = Number(months[i].value);
    annualUseKw += x;
} //end loop
    dailyUseKw= annualUseKw/365;
    return dailyUseKw;
} //end of function

function sunHours() {
    let hrs;
    let theZone = document.forms.solarForm.zone.selectedIndex;
    theZone +=1
    switch(theZone){
        case 1:
            hrs=6;
            break;
        case 2:
            hrs=5.5;
            break;
        case 3:
            hrs=5;
            break;
        case 4:
            hrs=4.5
            break;
        case 5:
            hrs=4.2;
            break;
        case 6:
            hrs= 4.2;
            break;
        default:
            hrs=0;
    } //end switch
        return hrs
} //end function

function calculatePanel () {
    let userChoice = document.forms.solarForm.panel.selectedIndex;
    let panelOptions = document.forms.solarForm.panel.options;
    let power = panelOptions[userChoice].value;
    let name = panelOptions[userChoice].text;
    let x =[power,name];
    return x;
}

//end function

function calculateSolar() {
    let dailyUseKw = addMonths('mpc')
    console.log(dailyUseKw);

    let sunHoursPerDay = sunHours();
    

    let minKwNeed = dailyUseKw/sunHoursPerDay;
    

    let realKwNeeds = minKwNeed * 1.25
    

    let realWattNeeds = realKwNeeds * 1000;
    

    let panelInfo = calculatePanel();
    let panelOutput = panelInfo[0];
    let panelName = panelInfo[1];

    let panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
  

    let feedback = "";
    feedback += "<p>Based on your average daily use of "+ Math.round(dailyUseKw) +" kWh, you will need to purchase "+ panelsNeeded +" "+ panelName +" panels to offset 100% of your electricity bill.</p>";

    feedback += "<h2>Additional Details</h2>";

    feedback += "<p>Your average daily electicity consumption: "+ Math.round(dailyUseKw) +" kWh per day.</p>";

    feedback += "<p>Average sunshine hours per day: "+ sunHoursPerDay +" </p>"

    feedback += "<p>Realistic watts needed per hour: "+ Math.round(realWattNeeds) +" </p>";

    feedback += "<p>The "+ panelName +" panel you selected generates about "+ panelOutput +" watts per hour.</p>"

    document.getElementById('feedback').innerHTML = feedback;
}
 //end of function
