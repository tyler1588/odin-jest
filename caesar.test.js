import caesar from "./caesar";

test('\'ABC\' returns \'bcd\'', () => {
    expect(caesar('ABC', 1)).toBe('BCD');
});

test('\'BCD\' returns \'cde\'', () => {
    expect(caesar('BCD', 1)).toBe('CDE');
});

test('\'XYZ\' returns \'YZA\'', () => {
    expect(caesar('XYZ', 1)).toBe('YZA');
});

test('\'abc\' returns \'YZA\'', () => {
    expect(caesar('abc', 1)).toBe('bcd');
});