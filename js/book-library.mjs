import { books } from "../data/books.mjs";

const cardContainer = document.querySelector("#bookList");

function makeBookCards(book) {
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

    coverImage.setAttribute("src", book.coverImage);
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

const allBooksButton = document.querySelector("#all-books");
const fantasyButton = document.querySelector("#fantasy-sort");
const dystopianButton = document.querySelector("#dystopian-sort");
const romanceButton = document.querySelector("#romance-sort");

books.forEach(makeBookCards);

allBooksButton.addEventListener("click", (event) => {
    event.preventDefault();
    cardContainer.innerHTML = "";

    books.forEach(makeBookCards);
});
    
fantasyButton.addEventListener("click", (event) => {
    event.preventDefault();
    cardContainer.innerHTML = "";

    const fantasyBooks = books.filter(book => book.genre === "Fantasy");
    fantasyBooks.forEach(makeBookCards);
});

dystopianButton.addEventListener("click", (event) => {
    event.preventDefault();
    cardContainer.innerHTML = "";

    const dystopianBooks = books.filter(book => book.genre === "Dystopian");
    dystopianBooks.forEach(makeBookCards);
});

romanceButton.addEventListener("click", (event) => {
    event.preventDefault();
    cardContainer.innerHTML = "";

    const romanceBooks = books.filter(book => book.genre === "Romance");
    romanceBooks.forEach(makeBookCards);
});