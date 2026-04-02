class Book{
    #title;
    #author;
    #year;
    #isAvailable;
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.#isAvailable = true; 
    }
    get title(){
        return this.#title;
    }
    set title(val){
        if(val === ""){
            console.log("Is empty");
            return;
        }
         this.#title = val;
    }
    get author(){
        return this.#author;
    }
    set author(val){
        if(val === ""){
            console.log("Is empty");
            return;
        }
         this.#author = val;
    }
    get year(){
        return this.#year;
    }
    set year(n){
        if(typeof n !== "number" || n <= 0){
            console.log("Invalid year");
            return;
        }
         this.#year = n;
    }
    get isAvailable(){
        return this.#isAvailable;
    }
    borrowBook(){
        if(!this.#isAvailable){
            console.log("Unavailable");
            return;
        }
         this.#isAvailable = false;
    }
    returnBook(){
        if(this.#isAvailable){
            console.log("Is available");
            return;
        }
         this.#isAvailable = true;
    }
    matchesTitle(word){
       if(this.#title.includes(word)){
           return true;
       } else {
           return false;
       }
    }
    getInfo(){
        return `Title: ${this.#title}, Author: ${this.#author}, Year: ${this.#year}`;
    }
}

class Reader{
    #name;
    #borrowedBooks;
    constructor(name){
        this.name = name;
        this.#borrowedBooks = [];
    }
    get name(){
        return this.#name;
    }
    set name(val){
        if(val === ""){
            console.log("Is empty");
            return;
        }
         this.#name = val;
    }
    get borrowBook(){
        return this.#borrowedBooks;
    }
    get borrowBookCount(){
        return this.#borrowedBooks.length;
    }
    takeBook(book) {
        if (!book.isAvailable) {
          return `${book.title} is not available`; 
        }
        this.#borrowedBooks.push(book);
        book.borrowBook(); 
       return `${this.#name} successfully borrowed "${book.title}"`;
    }
    giveBackBook(book){
        const ind = this.#borrowedBooks.indexOf(book);
        if(ind === -1){
            return `${this.#name} didn't borrow "${book.title}"`;   
        }
        this.#borrowedBooks.splice(ind,1);
        book.returnBook();
        return `${this.#name} successfully returned "${book.title}"`;
    }
    hasBook(book){
        return this.#borrowedBooks.some(b => b.title === book.title);
    }
    showBorrowedBooks(){
        if(this.#borrowedBooks.length === 0){
            return "NO books borrowed";
        }
        return this.#borrowedBooks.map(b => b.getInfo());
    }
    getInfo(){
        return `${this.#name} has ${this.#borrowedBooks.length} borrowed books`;
    }
}

class Library{
    #name;
    #books;
    #readers;
    constructor(name){
        this.name = name;
        this.#books = [];
        this.#readers = [];
    }
    get name(){
        return this.#name;
    }
    set name(val){
        if(val === ""){
            console.log("Is empty");
            return;
        }
         this.#name = val;
    }
    get books(){
        return this.#books;
    }
    get readers(){
        return this.#readers;
    }
    addBook(book){
       this.#books.push(book);
    }
    registerReader(reader){
       this.#readers.push(reader);
    }
    findBookByTitle(title){
        const book = this.#books.find(t => t.title === title);
        return book || null;
    }
    findBookByAuthor(authorName){
        return this.#books.filter(a => a.author === authorName);
    }
    giveBookToReader(book,reader){
        if(!this.#readers.includes(reader)){
            return "Reader isn't registered";
        }
        if(!this.#books.includes(book)){
            return "Book not in library";
        }
        return reader.takeBook(book);
    }
    acceptBookFromReader(title,reader){
        if(!this.#readers.includes(reader)){
            return "Reader isn't registered";
        }
        const book = reader.borrowBook.find(book => book.title === title);
        if(!book) return `${reader.name} didn't borrow "${title}"`;
        return reader.giveBackBook(book);
    }
    showAvailableBooks(){
        return this.#books.filter(book => book.isAvailable);
    }
    showAllBooks(){
        return this.#books.map(book => book.getInfo());
    }
    getLibraryInfo(){
        return `Central Library: ${this.#books.length} books, ${this.#readers.length} readers`;
    }
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBookByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
