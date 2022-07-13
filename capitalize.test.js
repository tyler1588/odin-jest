import capitalize from "./capitalize";

test('Capitalizes first letter of \'british\'', () => {
    expect(capitalize('british')).toBe('British');
});

test('Make other letters lowercase of \'BRITISH\'', () => {
    expect(capitalize('BRITISH')).toBe('British');
});