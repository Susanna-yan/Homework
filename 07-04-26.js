/*-------------------1-----------------
class Shape{
    constructor(){
        if(new.target === Shape){
            throw new Error("Shape class can't be instantiated")
        }
    }
    getArea(){
        throw new Error("Method not implemented")
    }
}

class Reclangle extends Shape{
    constructor(width,hegiht){
        super();
        this.width = width;
        this.hegiht = hegiht;
    }
    getArea(){
        return this.width * this.hegiht;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
}

// const shape = new Shape();
const rec = new Reclangle(10,5);
console.log(rec.getArea());
const cir = new Circle(3);
console.log(cir.getArea());*/

/*----------------2-------------------
class StorageProvider{
    upload(file){
        throw new Error("Upload must be implemented");
    }
    download(filename){
        throw new Error("download must be implemented");
    }
}

class LocalStorageProvider extends StorageProvider{
    upload(file){
        return `Uploading ${file} to local storage`;
    }
    download(filename){
        return `Downloading ${filename} from local storage`;
    }
}

class CloudStorageProvider extends StorageProvider{
    upload(file){
        return `Uploading ${file} to cloud`;
    }
    download(filename){
        return `Downloading ${filename} from cloud`
    }
}

function useStorage(provider){
    if((typeof provider.upload !== "function") ||
       (typeof provider.download !== "function")){
            throw new Error("Storage provider is invalid");
        }
        console.log(provider.upload("myFile.txt"));
        console.log(provider.download("myFile.txt"));
}

useStorage(new LocalStorageProvider());
useStorage(new CloudStorageProvider());
// useStorage();*/

/*-------------------3-----------------
class Animal{
    speak(){
        console.log("Animal makes a sound");
        
    }
}

class Dog extends Animal{
    speak(){
        super.speak();
        console.log("Dog barks");  
    }
}

const d = new Dog();
d.speak();*/
