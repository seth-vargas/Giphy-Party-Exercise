console.log("Let's get this party started!");

const ul = document.getElementById("gifs");
document.getElementById("simple-form").addEventListener("submit", (evt) => {
  evt.preventDefault();
  const searchTerm = document.getElementById("search-term");
  if(searchTerm.value.length > 0){
    getInformationBasedOnSearchTerm(searchTerm.value);
    searchTerm.value = ""  
  }
});

document.getElementById("removeAllImages").addEventListener("click", () => {
  ul.innerHTML = ""
});

async function getInformationBasedOnSearchTerm(q) {
  const api_key = "xXm6A6y4jOqzLQkHaXPHCsZGG9h4bYBo";
  const result = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q, api_key },
  });
  createNewGif(result);
}

function createNewGif(result) {
  // grab first gif from array of 50 gifs provided
  console.log(result.data.data[0]);
  gif = result.data.data[0];
  // append to the page
  const newGif = document.createElement("img")
  newGif.classList.add("gif")
  newGif.src = gif.images.original.url;
  ul.appendChild(newGif);
}