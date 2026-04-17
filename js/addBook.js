const addBookForm = document.getElementById("addBook");

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    const newBook = {
        author: formData.get("authorName"),
        title: formData.get("bookTitle"),
        genre: formData.get("bookGenre"),
        image: formData.get("bookImage"),
        description: formData.get("bookDescription")
    };

    console.log(newBook);

    displaySpotlight(newBook);

    addBookForm.reset();
})

const button = document.getElementById("submit-button");

function displaySpotlight(book) {

    const cardContainer = document.querySelector("#spotlight");
    cardContainer.innerHTML = "";

    let card = document.createElement("div");
    let title = document.createElement("h3");
    let coverImage = document.createElement("img");
    let genre = document.createElement("p");
    genre.classList.add("genre");
    let author = document.createElement("p");
    author.classList.add("author");
    let description = document.createElement("p");
    description.classList.add("description");

    title.textContent = `Title: ${book.title}`;
    genre.textContent = `Genre: ${book.genre}`;

    coverImage.setAttribute("src", book.image);
    coverImage.setAttribute("alt", `Cover for ${title}`);
    coverImage.setAttribute("loading", "lazy");
    coverImage.setAttribute("width", "auto");
    coverImage.setAttribute("height", "auto");

    author.textContent = `Author: ${book.author}`;
    description.textContent = `Description: ${book.description}`;

    card.appendChild(coverImage);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(genre);
    card.appendChild(description);
    card.classList.add("book-card");
    cardContainer.appendChild(card);
}