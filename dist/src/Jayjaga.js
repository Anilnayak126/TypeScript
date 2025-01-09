"use strict";
function incomeTax(income, taxYear = 2024) {
    if ((taxYear || 2024) < 2022) {
        return income * 1.9;
    }
    else {
        return income * 2;
    }
}
console.log(incomeTax(20000));
//# sourceMappingURL=Jayjaga.js.map