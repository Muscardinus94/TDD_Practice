const getPeople = require('./script2');
const fetch = require('node-fetch');

it('calls to get people', () => {
    // 비동기에 대해서는 assertion 필요
    expect.assertions(2);
   return getPeople(fetch).then((data) => {
       expect(data.count).toEqual(82);
       expect(data.count).toBeGreaterThan(5);
   });
});
