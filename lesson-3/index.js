const library = [
  {
    author: "Vasia",
    year: 1920,
    title: "Hello world",
  },
  {
    author: "Sasha",
    year: 1922,
    title: "Hello",
  },
  {
    author: "Tolya",
    year: 1923,
    title: "world",
  },
  {
    author: "Masha",
    year: 1925,
    title: "Funny 2",
  },
  {
    author: "Ignat",
    year: 1999,
    title: "Funny",
  },
];

function getBookByTitle(title) {
  library.find();
}

function getBookByTitle(title) {
  return library.find((book) => book.title === title);
}

const book = getBookByTitle("Hello");
console.log(book);
getBookByTitle();

// const getBooksByTitle = (title) => {
//   return library.filter((book) => book.title.includes(title));
// };

// console.log(getBooksByTitle("Funny"));

// const removeBookByTitle = (title) => {
//   const index = library.findIndex((book) => book.title === title);
//   if (index !== -1) {
//     library.splice(index, 1);
//   }
//   return library;
// };

// console.log(removeBookByTitle("Funny bread1"));

// const editBookByTitle = (title, newOptions) => {
//   const book = library.find((book) => book.title === title);
//   if (book) {
//     Object.assign(book, newOptions);
//   }
//   return book;
// };

// console.log(editBookByTitle("Hello", { author: "Alex", year: 1930 }));
// console.log(library);
