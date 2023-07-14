// https://leetcode.com/problems/calculate-amount-paid-in-taxes/

var calculateTax = function(brackets, income) {
    if (income === 0) {
        return 0;
    }
    var taxes = 0;
    for (var i = 0; i < brackets.length; i++) {
        if (income <= 0) {
            return taxes;
        }
        var bracket = brackets[i];
        var bracketAmount = bracket[0];
        if (i > 0) {
            bracketAmount -= brackets[i-1][0];
        }
        if (bracketAmount < income) {
            taxes += bracketAmount * (bracket[1] / 100);
            income -= bracketAmount;
        } else {
            taxes += income * (bracket[1] / 100);
            income = 0;
        }
    }

    return taxes;
};