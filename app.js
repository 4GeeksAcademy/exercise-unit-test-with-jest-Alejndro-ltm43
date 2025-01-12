const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen  = (valueInDollar) => {
    let valueInYen = valueInDollar * 146.26;
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.00556;
    return valueInPound;
    }
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }    