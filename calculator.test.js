import Calculator from "./calculator";

test('sum (1) and (2) returns (3)', () => {
    const calculator = new Calculator(1,2);
    expect(calculator.sum()).toBe(3);
});

test('sum (2) and (3) returns (5)', () => {
    const calculator = new Calculator(2,3);
    expect(calculator.sum()).toBe(5);
});

test('subtract (3) and (1) returns (2)', () => {
    const calculator = new Calculator(3,1);
    expect(calculator.subtract()).toBe(2);
});

test('subtract (1) and (3) returns (-2)', () => {
    const calculator = new Calculator(1,3);
    expect(calculator.subtract()).toBe(-2);
});

test('divide (8) and (4) returns (2)', () => {
    const calculator = new Calculator(8,4);
    expect(calculator.divide()).toBe(2);
});

test('divide (12) and (3) returns (4)', () => {
    const calculator = new Calculator(12,3);
    expect(calculator.divide()).toBe(4);
});

test('mulitply (10) and (12) returns (120)', () => {
    const calculator = new Calculator(10,12);
    expect(calculator.multiply()).toBe(120);
});

test('mulitply (2) and (3) returns (6)', () => {
    const calculator = new Calculator(2,3);
    expect(calculator.multiply()).toBe(6);
});