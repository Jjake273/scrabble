// Information to reach API
const url = 'https://api.themoviedb.org/3/search/movie?api_key=bff44acfbf911c9f30b6a5aa71f34810&query=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${wordQuery}`;
  console.log(endpoint)
// const axios = require('axios').default;
// const id = axios.get('https://api.themoviedb.org/3/movie/550?api_key=bff44acfbf911c9f30b6a5aa71f34810')
//     .then(function(data) {
//         console.log(data.json())
//     })
//     .catch(function(error) {
        
//     })
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    // renderRawResponse(jsonResponse);
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
function displaySuggestions(event) {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);