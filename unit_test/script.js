const googleSearch = (searchInput, db) => {
    const matches = db.filter((website) => website.includes(searchInput));
    return matches.slice(0, 3);
}

module.exports = googleSearch;
