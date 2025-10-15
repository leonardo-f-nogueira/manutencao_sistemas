const { multiplica } = require('./calculadora');

test('multiplica dois números corretamente', () => {
  expect(multiplica(2, 3)).toBe(6);
});
