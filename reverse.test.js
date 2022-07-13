import reverse from "./reverse";

test('string \'Canada\' returns reversed', () => {
    expect(reverse('Canada')).toBe('adanaC');
});