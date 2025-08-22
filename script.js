let myLibrary = [];

// const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true);
// const book2 = new Book("The Poppy War", "R.F. Kuang", 544, false);
// const book3 = new Book("Animal Farm", "George Orwell", 144, true);

function Book(title, author, pages, readStatus){
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus){
  const book = new Book(title, author, Number(pages), readStatus);
  myLibrary.push(book);
}

function removeBookFromLibrary(id){
  const index = myLibrary.findIndex(obj => obj.id === id); // finds index position of the book that has the passed id
  myLibrary.splice(index, 1); 
}

function createBookCard(book){
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("h3");
  title.textContent = book.title;
  const author = document.createElement("h4");
  author.textContent = book.author;
  const pages = document.createElement("h4");
  pages.textContent = book.pages;
  const readStatus = document.createElement("h4");
  readStatus.textContent = book.readStatus;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete from Library";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    removeBookFromLibrary(book.id);
    updateCards();
})
  card.append(title, author, pages, readStatus, deleteButton);

  const cardContainer = document.getElementById("book-display");
  cardContainer.append(card);
}

function updateCards(){
  const cardContainer = document.getElementById("book-display");
  cardContainer.innerHTML = "";
  for(const book of myLibrary){
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

function clearFormAndCloseModal(){
  modal.close();
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readStatusInput.value = "Read";
}

const submitButton = document.getElementById("add-button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  titleValue = titleInput.value;
  authorValue = authorInput.value;
  pagesValue = pagesInput.value;
  readStatusValue = readStatusInput.value;

  addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
  updateCards();
  clearFormAndCloseModal();
});