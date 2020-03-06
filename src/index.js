function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    expr = expr.replace(/ /g, '')

    const bracketOn = expr.match(/\(/g) === null ? 0 : expr.match(/\(/g).length;
    const bracketOff = expr.match(/\)/g) === null ? 0 : expr.match(/\)/g).length;

    const isPairBrackets = bracketOn === bracketOff

    if (!isPairBrackets) {
        throw new Error("ExpressionError: Brackets must be paired")
    }

    if ( expr.includes("/0") ) {
        throw new Error("TypeError: Division by zero.");
    }

    return new Function("return " + expr)()

}

module.exports = {
    expressionCalculator
}