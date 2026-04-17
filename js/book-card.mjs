import { books } from "../data/spotlight.mjs";

const cardContainer = document.querySelector("#spotlight");

const randomIndex = Math.floor(Math.random() * books.length);
const book = books[randomIndex];

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