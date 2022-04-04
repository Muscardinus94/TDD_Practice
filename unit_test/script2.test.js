const swapi = require('./script2');
const fetch = require('node-fetch');

it('calls to get people', () => {
    // 비동기에 대해서는 assertion 필요
    expect.assertions(2);
   return swapi.getPeople(fetch).then((data) => {
       expect(data.count).toEqual(82);
       expect(data.count).toBeGreaterThan(5);
   });
});

it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 82,
                results: [0, 1, 2, 3, 4, 5],
            }),
        }));
    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then((data) => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
        expect(data.count).toEqual(82);
        expect(data.count).toBeGreaterThan(5);
    });
});
