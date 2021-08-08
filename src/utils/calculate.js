import { evaluate } from './evaluate';

export const calculate = (state, newInput) => {
    if (newInput === 'C') {
        return {
            total: null,
            operation: null,
            input: null,
        };
    }

    if (newInput === '<-') {
        console.log(state.input);
        if (state.input.length > 0) {
            return {
                input: state.input.slice(0, state.input.length - 1),
            }
        } else {
            return {};
        }
    }

    if (newInput === 'CE') {
        return {
            input: null,
        }
    }



    if (!isNaN(newInput)) {
        if (newInput === '0' && state.input === '0') {
            return {};
        }

        if (state.operation) {
            if (state.input) {
                return { input: state.input + newInput };
            }
            return { input: newInput };
        }

        if (state.input) {
            const input = state.input === '0' ? newInput : state.input + newInput;
            return {
                input,
                total: null,
            };
        }
        return {
            input: newInput,
            total: null,
        }
    }

    if (newInput === 'x²') {
        return {
            input: (state.input * state.input).toString(),
        }
    }

    if (newInput === '√') {
        return {
            input: (Math.sqrt(state.input)).toString(),
        }
    }

    if (newInput === 'log x') {
        return {
            input: (Math.log2(state.input)).toString(),
        }
    }

    if (newInput === '%') {
        console.log("%");
        if (state.operation && state.input) {
            const result = evaluate(state.total, state.input, state.operation);
            return {
                total: (result / 100).toString(),
                next: null,
                operation: null,
            };
        }
        if (state.input) {
            return {
                input: (state.input / 100).toString(),
            };
        }
        return {};
    }

    if (newInput === '.') {
        if (state.input) {
            if (state.input.includes('.')) {
                return {};
            }
            return { input: state.input + '.' };
        }
        return { input: "0." };
    }

    if (newInput === '=') {
        if (state.input && state.operation) {
            return {
                total: evaluate(state.total, state.input, state.operation),
                input: null,
                operation: null,
            };
        } else {
            return {};
        }
    }

    if (newInput === '+/-') {
        if (state.input) {
            return { input: (-1 * parseFloat(state.input)).toString() };
        }
        if (state.total) {
            return { total: (-1 * parseFloat(state.total)).toString() };
        }
        return {};
    }

    if (state.operation) {
        return {
            total: evaluate(state.total, state.input, state.operation),
            input: null,
            operation: null,
        };
    }

    if (!state.input) {
        return { operation: newInput };
    }

    return {
        total: state.input,
        input: null,
        operation: newInput,
    };
}