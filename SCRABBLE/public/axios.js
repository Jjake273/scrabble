const axios = require('axios').default;
const id = axios.get('https://api.themoviedb.org/3/movie/550?api_key=bff44acfbf911c9f30b6a5aa71f34810')
    .then(function(data) {
        console.log(data.json())
    })
    .catch(function(error) {
        
    })
const poster = axios.get('https://api.themoviedb.org/3/movie/550?api_key=bff44acfbf911c9f30b6a5aa71f34810')
    .then(function(title) {
        console.log(name);
    })
    .catch(function(error) {

    })
