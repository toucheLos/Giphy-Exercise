const idSearch = document.querySelector("#search");
const idRemove = document.querySelector("#remove");
const APIKEY = 'WT3pYE7lPLopjy6SSSOr7NdH1m4G781n';

//Retrieve API information from the Giphy database // using API key
document.addEventListener('DOMContentLoaded', getGiphy);
async function getGiphy() {
    randomGif = Math.floor(Math.random() * 50);
    const str = document.querySelector('#giphy').value.trim();
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${str}&limit=50&offset=${randomGif}`);
    console.log(response.data.data[0]);
    console.log(randomGif);
    return response.data.data[0].images.original.url;
}

// Not sure the exact response Giphy will give, but take the URL to the Giphy and append it to a new div

async function appendGiphy(link) {
    //convert JSON to JS?? Get link to the gif
    
    const giphyDiv = document.querySelector('#loadedgifs');
    //in case i need to use css. add a class to all gifs
    gifURL = document.createElement('img');
    gifURL.classList.add('gif');
    gifURL.setAttribute('width', '200');
    gifURL.src = link;

    giphyDiv.appendChild(gifURL)

}

// Different function for the event listener
idSearch.addEventListener('click', async ev => {
    ev.preventDefault();
    let response = await getGiphy();
    appendGiphy(response);
});

idRemove.addEventListener('click', ev => {
    ev.preventDefault();
    document.querySelector('#loadedgifs').innerHTML = '';
});
