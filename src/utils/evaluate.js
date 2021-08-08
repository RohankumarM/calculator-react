export const evaluate = (val1, val2, op) => {
    if (op === '+') {
        return (+val1 + +val2).toString();
    } else if (op === '-') {
        return (val1 - val2).toString();
    } else if (op === 'x') {
        return (val1 * val2).toString();
    } else if (op === '%') {
        return (val1 % 100).toString();
    } else if (op === '÷') {
        if (val2 === 0) {
            alert("Error!, cannot divide by zero.");
            return "0";
        } else {
            return (val1 / val2).toString();
        }
    }
    throw Error(`Unknown operation '${op}'`);
}