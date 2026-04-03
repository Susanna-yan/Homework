class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    sleep(){
        return `${this.name} is sleeping`;
    }
    makeSound(){
        return `${this.name} make a sound`;
    }
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed = breed;
    }
    makeSound(){
        return "Woof!";
    }
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`;
    }
}

class Cat extends Animal{
    constructor(name,age,color){
        super(name,age);
        this.color = color;
    }
    makeSound(){
        return "Meow!"
    }
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`;
    }
}

const animal1 = new Animal("Generic Animal", 5);
const dog1 = new Dog("Rex", 3, "Labrador");
const cat1 = new Cat("Milo", 2, "White");

console.log("=== Animal ===");
console.log(animal1.eat());
console.log(animal1.sleep()); 
console.log(animal1.makeSound());
console.log(animal1.getInfo()); 
console.log("=== Dog ===");
console.log(dog1.eat()); 
console.log(dog1.sleep()); 
console.log(dog1.makeSound()); 
console.log(dog1.getInfo()); 
console.log("=== Cat ===");
console.log(cat1.eat()); 
console.log(cat1.sleep());
console.log(cat1.makeSound()); 
console.log(cat1.getInfo()); 
