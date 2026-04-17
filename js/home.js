// Populate the book and author recommendations 
async function getData() {
    const response = await fetch("data/readers.json");
    const data = await response.json();
    return data.readers;
}

const bookRecs = document.getElementById("booksRec");
const authorRecs = document.getElementById("authorsRec");

getData().then(readers => {
    let bookList = document.createElement("ul");
    let authorList = document.createElement("ul");
    
    readers.forEach(reader => {
        let bookItem = document.createElement("li");
        bookItem.textContent = reader.title;
        bookList.appendChild(bookItem);

        let authorItem = document.createElement("li");
        authorItem.textContent = reader.author;
        authorList.appendChild(authorItem);
    })

    bookRecs.appendChild(bookList);
    authorRecs.appendChild(authorList);
})