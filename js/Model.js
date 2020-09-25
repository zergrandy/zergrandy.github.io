function floatToPercentageString(floatNumber) {

    return Math.floor(parseFloat(floatNumber) * 10000) / 100 + "%";

}

function RoundToInt(intNumber) {

    return parseInt(intNumber);

}

function RoundToDecimal(floatNumber) {

    return parseFloat(floatNumber);

}

function RoundToDecimal2(floatNumber) {

    return Math.floor(parseFloat(floatNumber) * 100) / 100;

}

function RoundToDecimal3(floatNumber) {

    return Math.floor(parseFloat(floatNumber) * 1000) / 1000;

}

function RoundToDecimal4(floatNumber) {

    return Math.floor(parseFloat(floatNumber) * 10000) / 10000;

}

function RoundToDecimal5(floatNumber) {

    return Math.floor(parseFloat(floatNumber) * 100000) / 100000;

}

function toCurrency(num) {
    var parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}