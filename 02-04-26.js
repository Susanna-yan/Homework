/*-------1----------
function sum(a,b,c){
    return a + b + c;
}
const arr = [10,20,30];
const res = sum.apply(null,arr);
console.log(res);*/

/*---------------2------------------
const student1 = { name: "Anna", score: 80 };
const student2 = { name: "Mark", score: 95 };

function printResult() {
  console.log(this.name + " scored " + this.score);
}

printResult.call(student1);
printResult.apply(student2);*/

/*----------3--------
const user = {
    name: "Alex",
    greet(){
        return "Hello " + this.name;
    }
};

const admin = {
    name: "Admin"
};

// console.log(user.greet.call(admin));
console.log(user.greet.apply(admin));*/

/*-----------4----------------
const numbers = [5, 12, 8, 20, 3];
const max = Math.max.apply(null,numbers);
console.log(max);*/

/*---------5-----------
const obj1 = {
    value: 10,
    getValue(){
        return this.value;
    }
};

const obj2 = {
    value: 10
}
const res = obj1.getValue.call(obj2);
console.log(res);*/

/*---------6----------
function total(a,b,c){
    return a + b + c;
}
const args = [7,8,9];
const res = total.call(null,...args);
console.log(res);*/

/*--------7----------
function show(){
    return this.name;
}
const obj = {name: "Test"};
const bound = show.bind(obj);
console.log(bound.call({name: "Wrong"}));*/ // Bind have high priority

/*--------------8---------------
const p1 = {name: "Anna", score: 10};
const p2 = {name: "Mark", score: 25};

function show(){
    return this.name + " has " + this.score + " points";
}
console.log(show.call(p1));
console.log(show.call(p2));*/

/*------------9---------
function sum(a,b,c){
    return a + b + c;
}

function execute(fn,arr){
    return fn.apply(null,arr);
}
console.log(execute(sum,[2,4,6]));*/

/*--------10-------
function show(){
    return this.name;
}
const a = {name: "A"};
const b = {name: "B"};
const fn = show.bind(a);
console.log(fn.call(b));*/

/*----------11----------
const obj = {
    value: 100,
    get(){
        const inner = () => {
            return this.value;
        }
        return inner();
    }
}
console.log(obj.get());*/

/*---------11-----------
const obj = {
    value: 100,
    get(){
        function inner(){
          return this.value
        }
         return inner.call(this);
    }
}
console.log(obj.get());*/

/*----------12---------
const obj = {
    value: 1,
    add(x){
        this.value += x;
        return this;
    }
};
obj.add(5).add(10);
console.log(obj.value);*/

// ==========Getter Setter=============
/*--------1------------
class Employee{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const emp = new Employee("Anna", "Asatryan");
console.log(emp.get());*/

/*-------------2---------------
class Account {
  constructor(password) {
    this._password = password; 
  }
  set password(newPassword) {
    if (typeof newPassword !== "string" || newPassword.length < 6) {
      console.log("Password too short");
      return;
    }
    this._password = newPassword;
  }
  get password() {
    return this._password;
  }
}
const acc = new Account("1234567");
acc.password = "123";        
console.log(acc.password);  

acc.password = "ABCDEFLDL"; 
console.log(acc.password);*/

/*--------------3-----------
class Tempreture{
    constructor(celsius){
       this._celsius = celsius;
    }
    set cel(val){
         this._celsius = val;
    }
    get fahrenheit(){
        return this._celsius * 9/5 + 32;
    }
}
const temp = new Tempreture(20);
console.log(temp.fahrenheit);*/

/*--------------4------------
class Counter{
    constructor(count = 0){
        this._count = count;
    }
    increment(){
        this._count += 1;
    }
    get currCount(){
        return this._count;
    }
}
const count = new Counter();
count.increment();
count.increment();
count.increment();
console.log(count.currCount);*/

/*-----------5-----------
class Product{
    constructor(price){
        this._price = price;
    }
    set price(p){
       this._price = p;
    }
    get discount(){
        const p = this._price * 0.1;
        const res = this._price - p;
        return res;
    }
}
const result = new Product(200);
console.log(result.discount);*/

/*----------6---------------
class BankAccount{
    constructor(balance = 0){
        this._balance = balance;
    }
    set addMoney(mon){
        if(mon <= 0){
            console.log("Can't deposit negative or zero amount");
            return;
        }
        this._balance += mon;
    }
    get currBalance(){
        return this._balance;
    }
}
const balance = new BankAccount();
console.log(balance.currBalance);
balance.addMoney = 2000;
console.log(balance.currBalance);
balance.addMoney = 4000;
console.log(balance.currBalance);*/

/*-------------7--------------
class Rectangle{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }
    set width(w){
        this._width = w;
    }
    set height(h){
        this._height = w;
    }
    get area(){
        return this._width * this._height;
    }
}
const rect = new Rectangle(6,10);
console.log(rect.area);*/

/*--------------8-------------
class Email{
    constructor(email){
        this._email = email;
    }
    set check(c){
        if(!c.include("@")){
            console.log("Invalid email");
            return;
        }
         this._email = c;
    }
        get email(){
        return this._email;
    }
}
const Myemail = new Email("susannaasatryan52@gmail.com");
console.log(Myemail.email);
Myemail.email = "something.gmail.com"
console.log(Myemail.email);*/

/*-------------9-------------
class Cart{
    constructor(total = 0){
        this._total = total;
    }
    set addPrice(val){
        if(val <= 0){
            console.log("Invalid price");
            return;
        }
        this._total += val;
    }
    get currTotal(){
        return this._total;
    }
}
const price = new Cart();
console.log(price.currTotal);
price.addPrice = 4000;
console.log(price.currTotal);*/

/*-------------10--------------
class Car{
    constructor(speed){
        if(speed > 200){
            console.log("Too fast");
            this._speed = 200;
        } else {
            this._speed = speed;
        }
    }
    set carSpeed(sp){
        if(sp > 200){
            console.log("Too fast");
            return;
        }
         this._speed = sp;
    }
    get speed(){
        return this._speed;
    }
}
const car = new Car(300);
console.log(car.speed);*/

// =============Map, Zip, Filter===========
/*-------1---------
let arr = [1,2,3];
let double = arr.map(num => num * 2);
console.log(double);*/

/*----------2------------
let arr = ["anna","john"];
let upperCase = arr.map(upp => upp.toUpperCase());
console.log(upperCase);*/

/*----------3-----------
let arr1 = [{name: "A", age: 10},{name: "B", age: 15}];
let num = arr1.map(p => p.age);
console.log(num);*/

/*-------------4------------
let arr = [1,2,3,4,56,7,79];
let even = arr.filter(e => e % 2 !== 0);
console.log(even);*/

/*-----------5------------
let arr = [
    {name: "user1", age: 19},
    {name: "user2", age: 20},
    {name: "user3", age: 14}
];
let adult = arr.filter(a => a.age >= 18);
console.log(adult);*/

/*---------------6-----------
let arr = ["Tigran","Arsen","Elen", "Eva"];
let len = arr.filter(l => l.length > 5);
console.log(len);*/

/*----------------7-----------
let arr = [
    {name: "user1", age: 19},
    {name: "user2", age: 20},
    {name: "user3", age: 14}
];

let nam = arr.filter(u => u.age >= 18).map(p => p.name);
console.log(nam);*/

/*-------------8-----------
let arr = [12,11,23,1,4,5,7];
let square = arr.filter(e => e % 2 !== 0).map(u => u * u);
console.log(square);*/

/*-------------9---------------
let product = [
    {name: "book", price: 2000},
    {name: "pen", price: 500},
    {name: "bag", price: 4000}
];
let prod = product.filter(p => p.price > 1000);
console.log(prod);*/

/*------------10-------------
let arr = [
    {name: "Anna", age: 17},
    {name: "John", age: 20}
];
let adult = arr
    .filter(user => user.age >= 18)
    .map(user => `${user.name} is ${user.age} years old`);       
console.log(adult.join());*/
