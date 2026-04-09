/*---------------1----------------
function myInstanceOf(obj,Constructor){
    if(obj === null || (typeof obj !== "object" && typeof obj !== "function")){
        return false;
    }
    if(typeof Constructor !== "function"){
        return false;
    }
    let proto = Object.getPrototypeOf(obj);
    while(proto !== null){
        if(proto === Constructor.prototype){
            return true;
        }
         proto = Object.getPrototypeOf(proto);
    }
       return false;
}

function Animal(){};
function Dog(){};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();
console.log(myInstanceOf(dog, Dog));
console.log(myInstanceOf(dog, Animal)); 
console.log(myInstanceOf(dog, Array));
console.log(myInstanceOf(null, Object)); 
console.log(myInstanceOf(123, Number)); 
console.log(myInstanceOf("hello", String));*/


/*--------------2----------------
function myNew(Constructor, ...args){
    const obj = {};
    Object.setPrototypeOf(obj,Constructor.prototype);
    const res = Constructor.apply(obj,args);
    if(res !== null && (typeof res === "object" || typeof res === "function")){
        return res;
    }
      return obj;
}

function User(name) {
 this.name = name;
}

function Car(model) {
 this.model = model;
 return { custom: "returned object" };
}

function Empty() {}

function Test() {
 return 123;
}

const user = myNew(User, "Alex");
console.log(user.name); 
console.log(Object.getPrototypeOf(user) === User.prototype); 
console.log(user.constructor === User); 

const car = myNew(Car, "BMW");
console.log(car.custom); 


const obj = myNew(Empty);
console.log(Object.getPrototypeOf(obj) === Empty.prototype);


const test = myNew(Test);
console.log(Object.getPrototypeOf(test) === Test.prototype);*/

/*-------------3---------------
function checkProperty(obj,key){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
        return "own";
    }
    let proto = Object.getPrototypeOf(obj);
    while(proto !== null){
        if(Object.prototype.hasOwnProperty.call(proto,key)){
            return "inherited";
        }
          proto = Object.getPrototypeOf(proto)
    }
      return "Not found";
}

const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); 
console.log(checkProperty(dog, "eats")); 
console.log(checkProperty(dog, "age"));  

const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value"));    
console.log(checkProperty(obj, "toString"));  
console.log(checkProperty({}, "toString"));*/

/*----------------4--------------
function getPrototypeMethods(obj){
    const proto = Object.getPrototypeOf(obj);
    if(!proto) return [];
    return Object.getOwnPropertyNames(proto)
           .filter(key => typeof proto[key] === "function");
}

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
  return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); 
console.log(getPrototypeMethods({ a: 1 }));
console.log(getPrototypeMethods([]).includes("push"));*/

/*--------------5-----------------
Array.prototype.mySum = function(){
    if(this.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < this.length; ++i){
        const val = this[i];
        if(typeof val !== "number" || Number.isNaN(val)){
            throw new Error("Elements must be valid numbers")
        }
         sum += val;
    }
       return sum;
};


console.log([1, 2, 3].mySum());      
console.log([10, -5, 4].mySum());   
console.log([].mySum());             
// console.log([1, "2", 3].mySum());     // Error
// console.log([1, NaN].mySum());        // Error
// console.log([true, 2].mySum());       // Error*/
