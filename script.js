let myLibrary = [];

// const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true);
// const book2 = new Book("The Poppy War", "R.F. Kuang", 544, false);
// const book3 = new Book("Animal Farm", "George Orwell", 144, true);

function Book(title, author, pages, readStatus){
  id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus){
  const book = new Book(title, author, Number(pages), readStatus);
  myLibrary.push(book);
}

function createBookCard(book){
  const card = document.createElement("div");
  const title = document.createElement("h4");
  title.textContent = book.title;
  const author = document.createElement("h5");
  author.textContent = book.author;
  const pages = document.createElement("h5");
  pages.textContent = book.pages;
  const readStatus = document.createElement("h5");
  readStatus.textContent = book.readStatus;

  card.append(title, author, pages, readStatus);

  const cardContainer = document.getElementById("book-display");
  cardContainer.append(card);
}

function updateCards(){
  for(book of myLibrary){
    createBookCard(book);
  }
}

const modal = document.querySelector("#add-book-modal");

// event listeners
const newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", () =>{
  modal.showModal();
});

const exitButton = document.querySelector(".close-icon");
exitButton.addEventListener("click", () => {
  modal.close();
})

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readStatusInput = document.getElementById("read-status");

let titleValue = "";
let authorValue = "";
let pagesValue = 0;
let readStatusValue = "Unread";

const submitButton = document.getElementById("add-button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  titleValue = titleInput.value;
  authorValue = authorInput.value;
  pagesValue = pagesInput.value;
  readStatusValue = readStatusInput.value;

  addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
  updateCards();
});