const BASE_URL = 'https://....';
const WORD_URL = "https://random-word-api.herokuapp.com/word";

const form = document.getElementById('form');
//const guess = document.getElementByID('guess');
const container = document.getElementById('container');

const renderJsonResponse = (res) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {};
    for(let key in res){
      rawJson[key] = res[key];
    }
    // Converts JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
    // Manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
  }
  
const renderResponse = (res) => {
    // Handles if res is falsey
    if(!res){
      console.log(res.title);
    }
    // In case res comes back as a blank array
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
}

getWord(WORD_URL);

function getWord(url) {
    fetch(WORD_URL, {cache: 'no-cache'}).then(response => {
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


function showWord(data) {
    container.innerHTML = '';

    data.forEach(CharacterData)
}
form.addEventListener('click', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm=data.results) {
        return "You guessed right!"

    }else {
        return "Try Again"
    }
})