// const myLibrary = [book1, book2, book3];

function Book(title, author, pages, read){
  id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, Number(pages), read);
  myLibrary.push(book);
}

// const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true);
// const book2 = new Book("The Poppy War", "R.F. Kuang", 544, false);
// const book3 = new Book("Animal Farm", "George Orwell", 144, true);

const modal = document.querySelector("#addBookModal");

// event listeners
const newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", () =>{
  modal.showModal();
});