const addToInventory = require('../src/addToInventory');

describe('a função addToInventory', () => {
  const actual = addToInventory(['pão', 'queijo', 'presunto']);
  const expected = ['pão', 'queijo', 'presunto', 'tomate'];
  it('adiciona item ao inventário', () => {
    expect(actual).toEqual(expected);
  });
 // it.todo('lança exceção se não for passado um array');
});