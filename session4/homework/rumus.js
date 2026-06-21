function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "*":
            return angka1 * angka2;
        case "/":
            if (angka2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return angka1 / angka2;
        default:
            return "Error: Operator is not valid";
    }
}
module.exports = { kalkulator };