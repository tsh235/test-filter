let objects = [
  { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
  { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
  { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' }
]

const filter = (arr, key, val) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(filter(objects, 'email', 'info@methed.ru'));
console.log(filter(objects, 'company', 'METHED'));

export default filter;