// get values from user


// api access
const apiKey = "AIzaSyC6XWHN57KiojJpbFx9bLtwXbgUPs0qKkA";
const bookURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${userBook}&key=${apiKey}`;
const authorURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${userAuthor}&key=${apiKey}`;