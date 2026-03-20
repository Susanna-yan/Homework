/*-----1------
const person1 = {
    name: "Bob",
    age: "19"
};

const person2 = {
    name: "Mary",
    age: "18"
};

const mergedPerson = Object.assign({},person1,person2);
console.log(mergedPerson);*/

/*-----2-------
const student = {
    name: "Jhon",
    id: "243642"
};

Object.freeze(student);
student.name = "Eva";
student.surname = "Smith";
console.log(student);*/

/*------3------
let res = true;
let person = {
    name: "Anna",
    surname: "Asatryan"
};

if(res){
    person.age = "21";
}

console.log(person);*/

/*-----------4--------------
let key = ["name","age","country"];
let value = ["Jhon","24","USA"];
let user = {};

for(let i = 0; i < key.length; ++i){
    user[key[i]] = value[i];
}
console.log(user);*/

/*-----5-----
let user = {
    phone: "93829483",
    id: "432156",
};

for(let i of Object.keys(user)){
    console.log(user[i]);
}*/

/*-----6-----
let exam = {
    math: "90",
    history: "96",
    english: "80",
    russian: "75"
}
let ent = Object.entries(exam);
let filter = ent.filter(([i,val]) => val >= 85);
let res = Object.fromEntries(filter);
console.log(res);*/

/*------7------
let user1 = {
    name: "William",
    age: "25"
};

let user2 = {
    name: "William",
    age: "26"
};

function isEqual(a,b){
    if(typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
    let keyA = Object.keys(a);
    let keyB = Object.keys(b);

    if(keyA.length !== keyB.length) return false;
    for(let i of keyA){
        if(a[i] !== b[i]) return false;
    }
      return true;

}
console.log(isEqual(user1,user2));*/                