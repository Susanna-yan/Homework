// ------------- Class -------------
class Book{
constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }
    getInfo(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
    borrowBook(){
      if(!this.isAvailable){
        return "Unavailable";
    }
      this.isAvailable = false;
       return "Book borrowed";
    }
    returnBook(){
         if(this.isAvailable === false){
            return this.isAvailable = true;
        } else{
           return "Book is available";
        }
    }
    matchesAuthor(authorName){
       return this.author.toLowerCase() === authorName.toLowerCase();
    }
    matchesTitle(word){
        if(this.title.includes(word)){
            return true;
        } else {
            return false;
        }
    }
}

class Library{
    constructor(){
      this.books = [];
    }
    addBook(book){
       if(!book) return "Empty";
       this.books.push(book);
    }
    removeBook(title){
       const index = this.books.findIndex(book => book.title === title);
       if(index === -1) return "Not found";
       this.books.splice(index,1);
    }
    findBookByTitle(title){
      return this.books.find(book => book.title === title) || null;
    }
    findBooksByAuthor(authorName){
      return this.books.filter(b => b.author === authorName);
    }
    getAvailableBooks(){
       /* let res = [];
        for(let i = 0; i < this.books.length; ++i){
            if(this.books[i].isAvailable){
                res.push(this.books[i]);
            }
        }
          return res;*/
        return this.books.filter(book => book.isAvailable);
    }
    borrowBook(title){
        const book = this.books.find(b => b.title === title);
        if(!book) return "Not found";
        return book.borrowBook();
    }
    returnBook(title){
       const book = this.books.find(b => b.title === title);
       if(!book) return "Not found";
       return book.returnBook();
    }
    showAllBooks(){
       return this.books;
    }
    countBooks(){
        return this.books.length;
    }
    countAvailableBooks(){
        /*let count = 0;
        for(let i = 0; i < this.books.length; ++i){
            if(this.books[i].isAvailable){
            count++;
          }
        }
         return count;*/
        return this.books.filter(b => b.isAvailable).length;
    }
    searchBook(word){
       return this.books.filter(b => 
           b.title.toLowerCase().includes(word.toLowerCase())
       );
    }
    getOldestBook(){
      if(this.books.length === 0) return null;

        return this.books.reduce((old, book) =>
        book.year < old.year ? book : old
          );
    }
}



// ------------ Constructor Function ----------
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}

Book.prototype.getInfo = function(){
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
};

Book.prototype.borrowBook = function(){
    if(!this.isAvailable) return "Unavailable";
    this.isAvailable = false;
    return "Book borrowed";
};

Book.prototype.returnBook = function(){
    if(this.isAvailable) return "Book is available";
    this.isAvailable = true;
    return "Book returned";
};

Book.prototype.matchesAuthor = function(authorName) {
    return this.author.toLowerCase() === authorName.toLowerCase();
};

Book.prototype.matchesTitle = function(word) {
    return this.title.toLowerCase().includes(word.toLowerCase());
};


function Library(){
    this.books = [];
}

Library.prototype.addBook = function(book){
    if(!book) return "Empty";
    this.books.push(book);
};

Library.prototype.findBookByTitle = function(title){
    return this.books.find(b => b.title === title) || null;
};

Library.prototype.findBooksByAuthor = function(authorName){
    return this.books.filter(b => b.author === authorName);
};

Library.prototype.getAvailableBooks = function(){
    return this.books.filter(b => b.isAvailable);
};

Library.prototype.borrowBook = function(title){
    const book = this.findBookByTitle(title);
    if(!book) return "Not found";
    return book.borrowBook();
};

Library.prototype.returnBook = function(title){
    const book = this.findBookByTitle(title);
    if(!book) return "Not found";
    return book.returnBook();
};

Library.prototype.showAllBooks = function(){
    return this.books;
};

Library.prototype.countBooks = function(){
    return this.books.length;
};

Library.prototype.countAvailableBooks = function(){
    return this.books.filter(b => b.isAvailable).length;
};

Library.prototype.searchBook = function(word){
    return this.books.filter(b =>
        b.title.toLowerCase().includes(word.toLowerCase())
    );
};

Library.prototype.getOldestBook = function(){
    if(this.books.length === 0) return null;

    return this.books.reduce((old, book) =>
        book.year < old.year ? book : old
    );
};

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const library = new Library();
// console.log(book1.getInfo());
// console.log(book1.borrowBook());
// console.log(book1.returnBook());
// console.log(book1.matchesAuthor("J. K. Rowling"));
// console.log(book1.matchesTitle("Harry"));
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Count books ===");
console.log(library.countBooks());

console.log("=== Count available books ===");
console.log(library.countAvailableBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBook("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
console.log(library.borrowBook("1984"));

console.log("=== Oldest book ===");
console.log(library.getOldestBook());
