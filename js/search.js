// get values from user
let userBook = "";
let userAuthor = "";

const searchBook = document.getElementById("searchBook")
searchBook.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let value = event.target.value;
        userBook = encodeURIComponent(value);
        apiFetchBook();
    }
})

const searchAuthor = document.getElementById("searchAuthor")
searchAuthor.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let value = event.target.value;
        userAuthor = encodeURIComponent(value);
        apiFetchAuthor();
    }
})

// api access
const apiKey = "AIzaSyC6XWHN57KiojJpbFx9bLtwXbgUPs0qKkA";

// api fetch
async function apiFetchBook() {
    const bookURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${userBook}&key=${apiKey}`;
    try {
        const response = await fetch(bookURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults.innerHTML = "";
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchAuthor() {
    const authorURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${userAuthor}&key=${apiKey}`;
    try {
        const response = await fetch(authorURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayResults = document.getElementById("displayResults");

function displayData(data) {
    let array = data.items;
    console.log(array);
    array.forEach(item => {
        console.log(item);
        let itemContainer = document.createElement("ul");
        let image = document.createElement("img");
        let description = document.createElement("li");
        let title = document.createElement("li");
        let author = document.createElement("li");
        let genre = document.createElement("li");

        image.setAttribute("src", item.volumeInfo.imageLinks.smallThumbnail);
        image.setAttribute("alt", `Cover for ${item.volumeInfo.title}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "auto");
        image.setAttribute("height", "auto");
        description.textContent = item.volumeInfo.description;
        title.textContent = `Title: ${item.volumeInfo.title}`;
        author.textContent = `Author: ${item.volumeInfo.authors[0]}`;
        genre.textContent = `Genre: ${item.volumeInfo.categories[0]}`;

        itemContainer.appendChild(image);
        itemContainer.appendChild(title);
        itemContainer.appendChild(author);
        itemContainer.appendChild(genre);
        itemContainer.appendChild(description);
        displayResults.appendChild(itemContainer);
    })
    
}