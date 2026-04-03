class Book {
    #title;
    #author;
    #year;
    #isAvailable;

    constructor(title, author, year){
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
            console.log("Title is empty");
            return;
        }
        this.#title = val;
    }

    get author(){
        return this.#author;
    }
    set author(val){
        if(val === ""){
            console.log("Author is empty");
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
            return "Unavailable";
        }
        this.#isAvailable = false;
    }

    returnBook(){
        if(this.#isAvailable){
            return "Book is available";
        }
        this.#isAvailable = true;
    }

    matchesTitle(word){
        return this.#title.includes(word);
    }

    matchesAuthor(authorName){
        return this.#author.toLowerCase() === authorName.toLowerCase();
    }

    getInfo(){
        return `Title: ${this.#title}, Author: ${this.#author}, Year: ${this.#year}`;
    }
}


class Reader {
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
            console.log("Name is empty");
            return;
        }
        this.#name = val;
    }

    get borrowedBooks(){
        return this.#borrowedBooks;
    }

    get borrowedBooksCount(){
        return this.#borrowedBooks.length;
    }

    takeBook(book){
        if(!book.isAvailable){
            return `${book.title} is not available`;
        }
        this.#borrowedBooks.push(book);
        book.borrowBook();
        return `${this.#name} successfully borrowed "${book.title}"`;
    }

    giveBackBook(book){
        const index = this.#borrowedBooks.indexOf(book);
        if(index === -1){
            return `${this.#name} didn't borrow "${book.title}"`;
        }
        this.#borrowedBooks.splice(index, 1);
        book.returnBook();
        return `${this.#name} successfully returned "${book.title}"`;
    }

    hasBook(book){
        return this.#borrowedBooks.some(b => b.title === book.title);
    }

    showBorrowedBooks(){
        return this.#borrowedBooks.map(b => b.title);
    }

    getInfo(){
        return `${this.#name} has ${this.#borrowedBooks.length} borrowed books`;
    }
}


class Library {
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
            console.log("Library name is empty");
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
        return this.#books.find(b => b.title === title) || null;
    }

    findBooksByAuthor(authorName){
        return this.#books.filter(b => b.matchesAuthor(authorName));
    }

    giveBookToReader(title, reader){
        if(!this.#readers.includes(reader)){
            return "Reader isn't registered";
        }
        const book = this.findBookByTitle(title);
        if(!book) return "Book not in library";
        return reader.takeBook(book);
    }

    acceptBookFromReader(title, reader){
        if(!this.#readers.includes(reader)){
            return "Reader isn't registered";
        }
        const book = reader.borrowedBooks.find(b => b.title === title);
        if(!book) return `${reader.name} didn't borrow "${title}"`;
        return reader.giveBackBook(book);
    }

    showAvailableBooks(){
        return this.#books.filter(b => b.isAvailable);
    }

    showAllBooks(){
        return this.#books;
    }

    getLibraryInfo(){
        return `${this.#name}: ${this.#books.length} books, ${this.#readers.length} readers`;
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
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
console.log(library.giveBookToReader("The Hobbit", reader1));
console.log(reader1.showBorrowedBooks());

console.log("=== Return book ===");
console.log(library.acceptBookFromReader("The Hobbit", reader1));
console.log(reader1.showBorrowedBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
