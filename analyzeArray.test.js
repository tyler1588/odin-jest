import analyzeArray from './analyzeArray';

test('[1,2,3] returns avg = 2, min = 1, max = 3, length = 3', () => {
    expect(analyzeArray([1,2,3])).toEqual({average: 2, length: 3, max: 3, min: 1});
});

test('[12,24,6,36,18,30] returns avg = 21, min = 6, max = 36, length = 6', () => {
    expect(analyzeArray([12,24,6,36,18,30])).toEqual({average: 21, length: 6, max: 36, min: 6});
});