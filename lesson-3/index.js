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
    title: "Funny bread",
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

// const bookByTitle = library.find((book) => {
//   return book.title === "Funny";
// });
// console.log(bookByTitle);

// const booksByTitle = library.filter((book) => {
//   return book.title.includes("Funny");
// });
// console.log(booksByTitle);

// function getBookByTitle(title) {
//   library.find();
// }

// function getBookByTitle(title) {
//   return library.find((book) => book.title === title);
// }

// const book = getBookByTitle("Hello");
// console.log(book);
// getBookByTitle();

// const getBooksByTitle = (title) => {
//   return library.filter((book) => book.title.includes(title));
// };

// console.log(getBooksByTitle("Funny"));
// _____________________________________________________________________________________;
// const removeBookByTitle = (title) => {
//   const index = library.findIndex((book) => book.title === title);
//   if (index !== -1) {
//     library.splice(index, 1);
//   }
//   return library;
// };

// console.log(removeBookByTitle("Funny bread"));
// ______________________________________________________________________________________;

// console.log(library);

// function removeBookByTitle(title) {
//   const index = library.findIndex((book) => {
//     return book.title === title;
//   });
//   if (index !== -1) {
//     library.splice(index, 1);
//   }
//   return library;
// }

// console.log(removeBookByTitle("Funny"));

// _______________________________________________________________________________________
// const editBookByTitle = (title, newOptions) => {
//   const book = library.find((book) => book.title === title);
//   if (book) {
//     Object.assign(book, newOptions);
//   }
//   return book;
// };

// console.log(editBookByTitle("Hello", { author: "Alex", year: 1930 }));
// console.log(library);

// _______________________________________________________________________________________
// function toCamelCase(string) {
//   return string
//     .split("-")
//     .map((word, index) => {
//       return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
//     })
//     .join("");
// }

// console.log(toCamelCase("string-name-surname"));
// _______________________________________________________________________________________

// const arr = [5, 6, 7, 1, 2, 3, 10, 12];

// function filterRange(arr, a, b) {
//   return arr.filter((item) => {
//     return item >= a && item <= b;
//   });
// }

// filterRange(arr, 4, 6);
// console.log(arr);
// _______________________________________________________________________________________

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterRange(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     if (value < a || value > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }

// filterRange(arr, 4, 8);
// console.log(arr);

// _______________________________________________________________________________________
// let arr = [5, 2, 1, -10, 8];

// function sortFromMinToMax(arr) {
//   return arr.sort((a, b) => {
//     return a - b;
//   });
// }

// sortFromMinToMax(arr);
// console.log(arr);
// _______________________________________________________________________________________
let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  alert("Привет!");
};

user.sayHi(); // Привет!

console.log(user);
