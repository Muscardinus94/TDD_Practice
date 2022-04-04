const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const { count, results } = await getRequest.json();
    return {
        count,
        results,
    };
}

const getPeoplePromise = (fetch) => {
    return fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then(({ count, results }) => {
            return {
                count,
                results,
            };
        });
}

module.exports = {
    getPeople,
    getPeoplePromise
};
