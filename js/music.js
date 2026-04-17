// playlist search api
let musicSearch = "";

const searchMusic = document.getElementById("musicSearch")
searchMusic.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let value = event.target.value;
        musicSearch = value.toLowerCase().replace(/ /g, "+");
        apiFetchMusic();
    }
})

// api fetch
async function apiFetchMusic() {
    const musicURL = `https://api.mixcloud.com/search/?q=${musicSearch}&type=cloudcast`;
    try {
        const response = await fetch(musicURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            musicResults.innerHTML = "";
            displayMusic(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const musicResults = document.getElementById("musicResults");

function displayMusic(data) {
    let array = data.data;
    console.log(array);
    array.forEach(item => {
        console.log(item);
        
        let itemContainer = document.createElement("ul");
        let name = document.createElement("li");
        let url = document.createElement("li");
        let link = document.createElement("a");

        link.setAttribute("href", item.url);
        link.textContent = "Check out Playlist!";
        name.textContent = `Playlist Name: ${item.name}`;
        

        itemContainer.appendChild(name);
        url.appendChild(link);
        itemContainer.appendChild(url);
        musicResults.appendChild(itemContainer);
    })
}