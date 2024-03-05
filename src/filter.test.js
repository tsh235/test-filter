import filter from './filter';

describe('фильтр массива объектов', () => {
  const array = [
    { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
    { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
    { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' }
  ]
  
  it('несколько совпадений', () => {
    const expected = [array[0], array[1]];
    const filtered = filter(array, 'company', 'METHED');
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('одно совпадение по email', () => {
    const expected = [array[1]];
    const filtered = filter(array, 'email', 'info@methed.ru');
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('нет совпадений', () => {
    const expected = [];
    const filtered = filter(array, 'email', 'mail@mali.ru');
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });
});