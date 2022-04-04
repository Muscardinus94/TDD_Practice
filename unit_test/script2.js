const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const { count, results } = await getRequest.json();
    return {
        count,
        results,
    };
}

module.exports = getPeople;
