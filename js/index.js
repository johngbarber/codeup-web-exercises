"use strict"


// fetch('http://localhost:3000/books')
//     .then(response => response.json())
//     .then(books => console.log(books))
//     .catch(error => console.error(error));

// fetch('http://localhost:3000/books/1')
//     .then(response => response.json())
//     .then(book => {
//         // do something with the `book` data
//         console.log(book);
//     })
//     .catch(error => console.error(error));

//

// const getBookAndAuthor = async (id) => {
//     try {
//         // Get the book data
//         const bookUrl = `http://localhost:3000/books/${id}`;
//         const bookResponse = await fetch(bookUrl);
//         const book = await bookResponse.json();
//         // Get the author data
//         const authorUrl = `http://localhost:3000/authors/${book.authorId}`;
//         const authorResponse = await fetch(authorUrl);
//         const author = await authorResponse.json();
//         // Add the author to the book object
//         book.author = author;
//         // Return the book object
//         return book;
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// getBookAndAuthor(1)
//     .then(book => console.log(book))
//     .catch(error => console.error(error));

// index.js
// async function to retrieve a specific book's data with author data
// const getBookAndAuthor = async (id) => {
//     try {
//         // Get the book data
//         const bookUrl = `http://localhost:3000/books/${id}`;
//         const bookResponse = await fetch(bookUrl);
//         const book = await bookResponse.json();
//         // Get the author data
//         const authorUrl = `http://localhost:3000/authors/${book.authorId}`;
//         const authorResponse = await fetch(authorUrl);
//         const author = await authorResponse.json();
//         // Add the author to the book object
//         book.author = author;
//         // Return the book object
//         return book;
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// // async IIFE (Immediately Invoked Function Expression)
// (async () => { // <-- this is our main thread
//     const book = await getBookAndAuthor(1);
//     console.log(book);
// })();

// index.js
// import { getBookAndAuthor } from './books-api.js';
//
// // async IIFE (Immediately Invoked Function Expression)
// (async () => { // <-- this is our main thread
//     const book = await getBookAndAuthor(1);
//     console.log(book);
// })();

// index.js
// import { getBookAndAuthor, getAllBooksAndAuthors } from './books-api.js';
//
// // async IIFE (Immediately Invoked Function Expression)
// (async () => { // <-- this is our main thread
//
//     // const book = await getBookAndAuthor(1);
//     // console.log(book);
//
//     const books = await getAllBooksAndAuthors();
//     console.log(books);
//
// })();

// import { getBookAndAuthor, getAllBooksAndAuthors, createBook } from './books-api.js';
//
// // async IIFE (Immediately Invoked Function Expression)
// (async () => { // <-- this is our main thread
//
//     // const book = await getBookAndAuthor(1);
//     // console.log(book);
//
//     // const books = await getAllBooksAndAuthors();
//     // console.log(books);
//
//     const newBook = await createBook({
//         title: 'The Great Gatsby',
//         authorId: 5,
//         publishedYear: 1925,
//         genre: 'Tragedy',
//         summary: 'A tragic love story set in the roaring twenties.',
//         ISBN: '9780743273565'
//     });
//     console.log(newBook);
//
// })();

// import { getBookAndAuthor, getAllBooksAndAuthors, createBook, updateBook } from './books-api.js';
//
// // async IIFE (Immediately Invoked Function Expression)
// (async () => { // <-- this is our main thread
//
//     // const book = await getBookAndAuthor(1);
//     // console.log(book);
//
//     // const books = await getAllBooksAndAuthors();
//     // console.log(books);
//
//     const newBook = await createBook({
//         title: 'The Great Gatsby',
//         authorId: 5,
//         publishedYear: 1925,
//         genre: 'Tragedy',
//         summary: 'A tragic love story set in the roaring twenties.',
//         ISBN: '9780743273565'
//     });
//     console.log(newBook);
//
//     const updatedNewBook = await updateBook(newBook.id, {
//         title: newBook.title,
//         authorId: newBook.authorId,
//         publishedYear: newBook.publishedYear,
//         genre: newBook.genre,
//         summary: 'A tragic love story set in the roaring twenties. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.',
//         ISBN: newBook.ISBN
//     });
//     console.log(updatedNewBook);
//
// })();

import { getBookAndAuthor, getAllBooksAndAuthors, createBook, updateBook, deleteBook } from './books-api.js';

// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread

    // const book = await getBookAndAuthor(1);
    // console.log(book);

    // const books = await getAllBooksAndAuthors();
    // console.log(books);

    const newBook = await createBook({
        title: 'The Great Gatsby',
        authorId: 5,
        publishedYear: 1925,
        genre: 'Tragedy',
        summary: 'A tragic love story set in the roaring twenties.',
        ISBN: '9780743273565'
    });
    console.log(newBook);

    const updatedNewBook = await updateBook(newBook.id, {
        title: newBook.title,
        authorId: newBook.authorId,
        publishedYear: newBook.publishedYear,
        genre: newBook.genre,
        summary: 'A tragic love story set in the roaring twenties. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.',
        ISBN: newBook.ISBN
    });
    console.log(updatedNewBook);

    const deletedNewBook = await deleteBook(updatedNewBook.id);
    console.log(`"${deletedNewBook.title}" has been deleted.`);

})();