const axios = require('axios');

function getJoke() {
    const url = `https://api.chucknorris.io/jokes/random?category=dev`;
    return axios.get(url)
        .then(r => r.data.value)
}

console.log(getJoke());

module.exports = {
    getJoke
};