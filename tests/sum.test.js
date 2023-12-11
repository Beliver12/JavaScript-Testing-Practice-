const capitalize = require('../code/sum');

test('Capitalizes first character in string', () => {
  expect(capitalize('nikola')).toBe('Nikola');
});

