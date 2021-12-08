/*jslint browser:true */
"use strict";

function addMonths (elem) {
let annualUseKw=0, dailyUseKw=0, i=0, x=0;
let months=document.getElementById(elem).getElementsByTagName('input');
console.log(months);

for (i=0; i<months.length; i++) {
    x = Number(months[i].value);
    annualUseKw += x;
} //end loop
dailyUseKw= annualUseKw/365;
return dailyUseKw;
} //end of function
 









let dailyUseKW = addMonths('mpc')


